"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { categories } from "@/config/category";
import { UploadEvent, useDropzone } from "@/hooks/dropzone";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "sonner";

export function MaterialCreatePage() {
    const router = useRouter();

    const { processFiles, uploadConfig } = useDropzone();
    const [isDragging, setIsDragging] = useState(false);

    const fileInputRef = useRef<ElementRef<"input">>(null!);

    const [material, setMaterial] = useState<ExtendedFile>();
    const [category, setCategory] = useState<string>();
    const [subCategory, setSubCategory] = useState<string>();

    const handleUpload = (e: UploadEvent) => {
        const { message, type, data, isError } = processFiles(e);

        console.log(message);

        if (isError) return toast.error(message);
        if (!type) return toast.error("No file selected");

        setIsDragging(false);

        if (type !== "doc") return;

        if (data) {
            if (data.acceptedFiles.length > uploadConfig.maxDocCount)
                return toast.error(
                    "You can only upload up to " +
                        uploadConfig.maxDocCount +
                        " docs"
                );

            setMaterial(data.acceptedFiles[0]);
        }
    };

    const {
        mutate: createMaterial,
        isSuccess,
        isPending: isMaterialCreating,
    } = useMutation({
        onMutate: () => {
            const toastId = toast.loading("Creating material...");
            return { toastId };
        },
        mutationFn: async () => {
            if (!material || !category || !subCategory)
                throw new Error("Invalid data");

            const formData = new FormData();
            formData.append("file", material.file);
            formData.append("category", category);
            formData.append("subCategory", subCategory);

            const res = await fetch("/api/uploads/materials", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (!data.success) throw new Error(data.longMessage);
        },
        onSuccess: (_, __, { toastId }) => {
            toast.success("Material created successfully", { id: toastId });
            router.refresh();
            router.push("/materials");
        },
        onError: (err, _, ctx) => {
            return toast.error(err.message, { id: ctx?.toastId });
        },
    });

    useEffect(() => {
        if (isSuccess) setMaterial(undefined);
    }, [isSuccess]);

    return (
        <div className="space-y-10">
            <div
                className="h-full w-full"
                style={{ backgroundImage: "url('/images/background1.jpg')" }}
            >
                <div className="flex flex-col items-center justify-center py-14 md:py-28">
                    <h1 className="my-6 rounded-full p-4 px-6 text-5xl font-extrabold text-secondary shadow-md">
                        Create Material
                    </h1>
                    <nav className="flex" aria-label="Breadcrumb">
                        <div className="inline-flex items-center space-x-1 md:space-x-3">
                            <div className="inline-flex items-center">
                                <a
                                    href="/"
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                    Home
                                </a>
                                <IoIosArrowForward />
                                <a
                                    href="/"
                                    className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600"
                                >
                                    Materials
                                </a>
                                <IoIosArrowForward />
                                <a
                                    href="/"
                                    className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600"
                                >
                                    Create
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="container space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Materials</CardTitle>
                            <CardDescription>
                                Add materials to your course
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-8">
                            <div
                                className={cn(
                                    "flex min-h-80 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-5 md:gap-4",
                                    isDragging && "bg-muted"
                                )}
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    setIsDragging(true);
                                }}
                                onDragLeave={(e) => {
                                    e.preventDefault();
                                    setIsDragging(false);
                                }}
                                onDrop={handleUpload}
                                onPaste={handleUpload}
                                onClick={() => fileInputRef.current.click()}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleUpload}
                                    className="hidden"
                                    accept={uploadConfig.acceptedDocTypes.join(
                                        ","
                                    )}
                                    max={uploadConfig.maxDocFileSize}
                                    multiple={
                                        uploadConfig.maxDocCount > 1
                                            ? true
                                            : false
                                    }
                                />

                                {material ? (
                                    <div className="size-full overflow-hidden rounded-sm">
                                        <object
                                            data={material.url}
                                            type="application/pdf"
                                            width="100%"
                                            height="600"
                                        >
                                            <p>
                                                <Link href={material.url}>
                                                    Download your material
                                                </Link>
                                            </p>
                                        </object>
                                    </div>
                                ) : null}

                                <p className="text-muted-foreground text-sm">
                                    {isDragging
                                        ? "Drop the file here"
                                        : "Drag and drop or click to upload your material"}
                                </p>

                                {!material && (
                                    <div className="flex flex-col items-center gap-2">
                                        <Button
                                            className="font-semibold"
                                            size="sm"
                                            onClick={() =>
                                                fileInputRef.current.click()
                                            }
                                        >
                                            {isDragging
                                                ? "Drop the files here"
                                                : "Choose material"}
                                        </Button>

                                        <p className="text-xs text-black/60">
                                            (Max{" "}
                                            {Intl.NumberFormat("en", {
                                                notation: "compact",
                                                maximumFractionDigits: 1,
                                            }).format(
                                                uploadConfig.maxDocFileSize /
                                                    1024 /
                                                    1024
                                            )}
                                            MB, PDF only)
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row">
                                <Select
                                    value={category}
                                    onValueChange={setCategory}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        {categories.map((category) => (
                                            <SelectItem
                                                key={category.value}
                                                value={category.value}
                                            >
                                                {category.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select
                                    value={subCategory}
                                    onValueChange={setSubCategory}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a class" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        {Array.from({ length: 6 }).map(
                                            (_, i) => (
                                                <SelectItem
                                                    key={i}
                                                    value={(i + 7).toString()}
                                                >
                                                    {i + 7}
                                                </SelectItem>
                                            )
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>

                        <CardFooter
                            className={cn(
                                "justify-end gap-2",
                                (!material || !category) && "p-0 opacity-0"
                            )}
                        >
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => setMaterial(undefined)}
                                disabled={isMaterialCreating}
                                className={cn(
                                    "font-semibold",
                                    (!material || !category) &&
                                        "pointer-events-none h-0"
                                )}
                            >
                                Cancel
                            </Button>

                            <Button
                                size="sm"
                                onClick={() => createMaterial()}
                                disabled={!material || isMaterialCreating}
                                className={cn(
                                    "font-semibold",
                                    (!material || !category) &&
                                        "pointer-events-none h-0"
                                )}
                            >
                                {isMaterialCreating ? "Creating..." : "Create"}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
