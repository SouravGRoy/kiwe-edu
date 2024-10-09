"use client";

import { Icons } from "@/components/icons";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { TableMaterial } from "./materials-table";

interface PageProps {
    material: TableMaterial;
}

export function MaterialAction({ material }: PageProps) {
    const router = useRouter();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const { mutate: del, isPending: isDeleting } = useMutation({
        onMutate: () => {
            const toastId = toast.loading("Deleting material...");
            return { toastId };
        },
        mutationFn: async () => {
            const res = await fetch(`/api/uploads/materials/${material.id}`, {
                method: "DELETE",
            });

            const data = await res.json();
            if (!data.success) throw new Error(data.longMessage);
        },
        onSuccess: (_, __, { toastId }) => {
            toast.success("Material deleted successfully", { id: toastId });
            router.refresh();
        },
        onError: (err, _, ctx) => {
            return toast.error(err.message, { id: ctx?.toastId });
        },
        onSettled: () => {
            setIsDeleteModalOpen(false);
        },
    });

    return (
        <>
            <Button
                variant="ghost"
                className="size-8 p-0"
                onClick={() => setIsDeleteModalOpen(true)}
            >
                <span className="sr-only">Delete</span>
                <Icons.trash className="size-4 text-red-500" />
            </Button>

            <AlertDialog
                open={isDeleteModalOpen}
                onOpenChange={setIsDeleteModalOpen}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete</AlertDialogTitle>

                        <AlertDialogDescription>
                            Are you sure you want to delete this material?
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <Button
                            size="sm"
                            variant="outline"
                            disabled={isDeleting}
                            onClick={() => setIsDeleteModalOpen(false)}
                        >
                            Cancel
                        </Button>

                        <Button
                            size="sm"
                            variant="destructive"
                            disabled={isDeleting}
                            onClick={() => del()}
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
