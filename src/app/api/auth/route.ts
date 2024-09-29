import { DEFAULT_ERROR_MESSAGE, UPLOADER_COOKIE_NAME } from "@/config/const";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { uploadKey } = body;
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

        const cookieStore = cookies();
        cookieStore.set(UPLOADER_COOKIE_NAME, UPLOAD_KEY_ENV, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24, // 1 day
        });

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
