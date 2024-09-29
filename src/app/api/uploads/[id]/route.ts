import { DEFAULT_ERROR_MESSAGE, UPLOADER_COOKIE_NAME } from "@/config/const";
import { utapi } from "@/lib/uploadthing";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: {
        id: string;
    };
}

export async function DELETE(req: NextRequest, { params }: Props) {
    try {
        const id = params.id;

        const cookieStore = cookies();

        const uploadKey = cookieStore.get(UPLOADER_COOKIE_NAME)?.value;

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

        if (!id || typeof id !== "string" || !id.length)
            return NextResponse.json(
                {
                    success: false,
                    message: "BAD_REQUEST",
                    longMessage: "An id is required!",
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );

        const res = await utapi.deleteFiles([id]);
        if (!res.success)
            return NextResponse.json(
                {
                    success: false,
                    message: "NOT_FOUND",
                    longMessage: "Material not found!",
                },
                {
                    status: 404,
                    statusText: "Bad Request",
                }
            );

        return NextResponse.json(
            {
                success: true,
                message: "OK",
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
