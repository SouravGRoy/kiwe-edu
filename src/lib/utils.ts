import { Material, Notice } from "@/types";
import { init } from "@paralleldrive/cuid2";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function slugify(text: string, separator: string = "-") {
    return text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, separator);
}

export function generateId(
    {
        length = 8,
        casing = "normal",
    }: {
        length?: number;
        casing?: "upper" | "lower" | "normal";
    } = { length: 8, casing: "normal" }
) {
    const id = init({
        length,
    })();

    switch (casing) {
        case "upper":
            return id.toUpperCase();
        case "lower":
            return id.toLowerCase();
        default:
            return id;
    }
}

export function convertValueToLabel(value: string) {
    return value
        .split(/[_-\s]/)
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join(" ");
}

/**
 * @returns - returns a generated file name with the following format:
 * - originalFileName_category_subCategory_id_createdAt.extension
 * - e.g. "file-name_category_sub-category_1234567890_1634567890.pdf"
 */
export function generateFileName(
    originalFileName: string,
    category: string,
    subCategory: string
) {
    const createdAt = Date.now();

    return (
        originalFileName
            .split(".")[0]
            .replace(/[_\s.]/g, "-")
            .toLowerCase() +
        "_" +
        category +
        "_" +
        subCategory +
        "_" +
        generateId() +
        "_" +
        createdAt +
        "." +
        originalFileName.split(".")[1]
    );
}

export function generateNoticeFileName(originalFileName: string) {
    const createdAt = Date.now();

    return (
        "imp_" +
        originalFileName
            .split(".")[0]
            .replace(/[_\s.]/g, "-")
            .toLowerCase() +
        "_" +
        generateId() +
        "_" +
        createdAt +
        "." +
        originalFileName.split(".")[1]
    );
}

export function generateFileMetadataFromFile<
    T extends Material | Notice,
>(file: {
    name: string;
    customId: string | null;
    key: string;
    status: "Deletion Pending" | "Failed" | "Uploaded" | "Uploading";
    id: string;
}): T {
    const splittedFileName = file.name.split(".")[0].split("_");

    if (splittedFileName[0] === "imp") {
        const id = file.key;
        const name = file.name;
        const createdAt = new Date(+splittedFileName[3]);
        const url = `https://utfs.io/f/${file.key}`;

        return {
            id,
            name,
            url,
            createdAt,
        } as T;
    } else {
        const id = file.key;
        const name = file.name;
        const category = splittedFileName[1];
        const subCategory = splittedFileName[2];
        const createdAt = new Date(+splittedFileName[4]);
        const url = `https://utfs.io/f/${file.key}`;

        return {
            id,
            name,
            category,
            subCategory,
            url,
            createdAt,
        } as T;
    }
}
