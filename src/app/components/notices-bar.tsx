"use client";

import { Notice } from "@/types";
import Link from "next/link";
import Marquee from "react-fast-marquee";

interface PageProps {
    notices: Notice[];
}

export function NoticesBar({ notices }: PageProps) {
    return (
        <Marquee className="py-1" autoFill pauseOnHover>
            {notices.map((notice) => (
                <div
                    key={notice.id}
                    className="mr-2 flex items-center gap-2 text-black/60"
                >
                    <Link
                        key={notice.id}
                        href={notice.url}
                        className="text-sm text-black/60 hover:text-blue-500 hover:underline"
                    >
                        <span>{notice.name.split(".")[0]}</span>
                    </Link>

                    <span>•</span>
                </div>
            ))}
        </Marquee>
    );
}
