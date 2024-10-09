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
        materials.push(generateFileMetadataFromFile(file));
    }

    // let categoryFolders: any[] = [];

    // try {
    //     categoryFolders = await fs.readdir(UPLOADS_FOLDER_ROUTE);
    // } catch (error) {
    //     categoryFolders = [];
    // }

    // const materials = [];

    // for (const category of categoryFolders) {
    //     const files = await fs.readdir(`${UPLOADS_FOLDER_ROUTE}/${category}`);

    //     for (const file of files) {
    //         const fileName = file;
    //         const fileCreatedAt = file.split("_").pop();
    //         const fileId = file.split("_").slice(-2, -1)[0];
    //         const url = `/uploads/${category}/${file}`;

    //         materials.push({
    //             id: fileId,
    //             name: fileName,
    //             createdAt: new Date(+fileCreatedAt?.split(".")[0]!),
    //             category,
    //             url,
    //         });
    //     }
    // }

    return <MaterialPage materials={materials} isAuth={isAuth} />;
}
