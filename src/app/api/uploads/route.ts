import { categories } from "@/config/category";
import {
    ACCEPTED_DOC_TYPES,
    DEFAULT_ERROR_MESSAGE,
    MAX_DOC_FILE_SIZE,
    UPLOADER_COOKIE_NAME,
} from "@/config/const";
import { utapi } from "@/lib/uploadthing";
import { generateFileName, generateId } from "@/lib/utils";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.formData();

        const cookieStore = cookies();

        const uploadKey = cookieStore.get(UPLOADER_COOKIE_NAME)?.value;

        const file = body.get("file");
        const category = body.get("category");
        const subCategory = body.get("subCategory");

        if (!uploadKey || typeof uploadKey !== "string" || !uploadKey.length)
            return NextResponse.json(
                {
                    success: false,
                    message: "BAD_REQUEST",
                    longMessage: "An upload key is required!",
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );

        const UPLOAD_KEY_ENV = process.env.UPLOAD_KEY;
        if (!UPLOAD_KEY_ENV || UPLOAD_KEY_ENV !== uploadKey)
            return NextResponse.json(
                {
                    success: false,
                    message: "UNAUTHORIZED",
                    longMessage: "Invalid upload key!",
                },
                {
                    status: 401,
                    statusText: "Unauthorized",
                }
            );

        if (!file || !(file instanceof File))
            return NextResponse.json(
                {
                    success: false,
                    message: "BAD_REQUEST",
                    longMessage: "A file is required!",
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );

        if (!category || typeof category !== "string" || !category.length)
            return NextResponse.json(
                {
                    success: false,
                    message: "BAD_REQUEST",
                    longMessage: "A category is required!",
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );

        if (!categories.find((c) => c.value === category))
            return NextResponse.json(
                {
                    success: false,
                    message: "BAD_REQUEST",
                    longMessage: "Invalid category!",
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );

        if (
            !subCategory ||
            typeof subCategory !== "string" ||
            !subCategory.length
        )
            return NextResponse.json(
                {
                    success: false,
                    message: "BAD_REQUEST",
                    longMessage: "A class is required!",
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );

        if (
            !Array.from({ length: 6 })
                .map((_, i) => i + 7)
                .includes(+subCategory)
        )
            return NextResponse.json(
                {
                    success: false,
                    message: "BAD_REQUEST",
                    longMessage: "Invalid class!",
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );

        if (!ACCEPTED_DOC_TYPES.includes(file.type))
            return NextResponse.json(
                {
                    success: false,
                    message: "BAD_REQUEST",
                    longMessage: "Invalid file type!",
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );

        if (file.size > MAX_DOC_FILE_SIZE * 1024)
            return NextResponse.json(
                {
                    success: false,
                    message: "BAD_REQUEST",
                    longMessage: "File size is too large!",
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );

        const fileName = generateFileName(file.name, category, subCategory);

        const res = await utapi.uploadFiles(file);
        if (res.error)
            return NextResponse.json(
                {
                    success: false,
                    message: res.error.code,
                    longMessage: res.error.message,
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );

        await utapi.renameFiles({
            fileKey: res.data.key,
            newName: fileName,
        });

        // const filePath = `public/uploads/${category}/${filename}`;

        // try {
        //     await fs.stat(`public/uploads/${category}`);
        // } catch (err) {
        //     await fs.mkdir(`public/uploads/${category}`, { recursive: true });
        // }

        // const fileBuffer = Buffer.from(await file.arrayBuffer());
        // await fs.writeFile(filePath, new Uint8Array(fileBuffer));

        return NextResponse.json(
            {
                success: true,
                message: "OK",
                data: res.data,
            },
            {
                status: 200,
                statusText: "Ok",
            }
        );
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                message: "INTERNAL_SERVER_ERROR",
                longMessage:
                    (err instanceof Error && err.message) ||
                    DEFAULT_ERROR_MESSAGE,
            },
            {
                status: 500,
                statusText: "Internal Server Error",
            }
        );
    }
}
