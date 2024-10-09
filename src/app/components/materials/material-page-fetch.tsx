import { UPLOADER_COOKIE_NAME } from "@/config/const";
import { utapi } from "@/lib/uploadthing";
import { generateFileMetadataFromFile } from "@/lib/utils";
import { Material } from "@/types";
import { cookies } from "next/headers";
import { MaterialPage } from "./material-page";

export async function MaterialPageFetch() {
    const cookieStore = cookies();

    const uploaderCookie = cookieStore.get(UPLOADER_COOKIE_NAME)?.value;
    const isAuth = !!uploaderCookie;

    const files = await utapi.listFiles();

    const materials: Material[] = [];

    for (const file of files.files) {
        const isNotice = file.name.split("_")[0] === "imp";
        if (isNotice) continue;
        materials.push(generateFileMetadataFromFile(file));
    }

    return <MaterialPage materials={materials} isAuth={isAuth} />;
}
