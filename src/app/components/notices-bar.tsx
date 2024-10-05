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
                <Link
                    key={notice.id}
                    href={notice.url}
                    className="mr-4 text-sm text-black/60 hover:text-blue-500 hover:underline"
                >
                    {notice.name.split(".")[0]}
                </Link>
            ))}
        </Marquee>
    );
}
