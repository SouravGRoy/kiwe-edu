import { utapi } from "@/lib/uploadthing";
import { generateFileMetadataFromFile } from "@/lib/utils";
import { Notice } from "@/types";
import { NoticesBar } from "./notices-bar";

export async function NoticesFetch() {
    const files = await utapi.listFiles();

    const notices: Notice[] = [];

    let noticeCount = 0;

    for (const file of files.files) {
        const isNotice = file.name.split("_")[0] === "imp";
        if (!isNotice) continue;
        notices.push(generateFileMetadataFromFile(file));

        noticeCount++;
        if (noticeCount === 3) break;
    }

    return <NoticesBar notices={notices} />;
}
