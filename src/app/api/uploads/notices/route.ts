import {
    ACCEPTED_DOC_TYPES,
    DEFAULT_ERROR_MESSAGE,
    MAX_DOC_FILE_SIZE,
    UPLOADER_COOKIE_NAME,
} from "@/config/const";
import { utapi } from "@/lib/uploadthing";
import { generateNoticeFileName } from "@/lib/utils";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.formData();

        const cookieStore = cookies();

        const uploadKey = cookieStore.get(UPLOADER_COOKIE_NAME)?.value;

        const file = body.get("file");

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

        const fileName = generateNoticeFileName(file.name);

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
