import { UPLOADER_COOKIE_NAME } from "@/config/const";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MaterialCreatePage } from "./material-create-page";

export async function MaterialPageFetch() {
    const cookieStore = cookies();

    const uploaderCookie = cookieStore.get(UPLOADER_COOKIE_NAME)?.value;
    const UPLOAD_KEY_ENV = process.env.UPLOAD_KEY;

    const isAuth = uploaderCookie === UPLOAD_KEY_ENV;
    if (!isAuth) redirect("/materials");

    return <MaterialCreatePage />;
}
