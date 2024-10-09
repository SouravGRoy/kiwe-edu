import { slugify } from "@/lib/utils";

export const categories = [
    "Mathemcatics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "History",
    "Geography",
    "Economics",
].map((category) => ({
    label: category,
    value: slugify(category),
}));
