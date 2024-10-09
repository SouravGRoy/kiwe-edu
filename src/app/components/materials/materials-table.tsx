import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { categories } from "@/config/category";
import { UploadEvent, useDropzone } from "@/hooks/dropzone";
import { cn, convertValueToLabel } from "@/lib/utils";
import { Material } from "@/types";
import { useMutation } from "@tanstack/react-query";
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { MaterialAction } from "./material-action";
import { DataTablePagination } from "./pagination";

export type TableMaterial = Material;

interface PageProps {
    materials: Material[];
    isAuth: boolean;
}

const columns: ColumnDef<TableMaterial>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => {
            const value = row.original.name;
            const link = row.original.url;
            return (
                <Link
                    href={link}
                    target="_blank"
                    className="flex items-center gap-2 underline-offset-2 hover:text-blue-500 hover:underline"
                >
                    <span>{value}</span>
                    <div>
                        <Icons.externalLink className="size-4 text-blue-500" />
                    </div>
                </Link>
            );
        },
        enableHiding: false,
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => {
            const value = convertValueToLabel(row.original.category);
            return <span className="whitespace-nowrap">{value}</span>;
        },
    },
    {
        accessorKey: "subCategory",
        header: "Sub Category",
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ row }) => {
            const value = new Date(row.original.createdAt);
            return (
                <span className="whitespace-nowrap">
                    {format(value, "PPP")}
                </span>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const value = row.original;
            return <MaterialAction material={value} />;
        },
    },
];

export function MaterialsTable({ materials, isAuth }: PageProps) {
    const router = useRouter();

    const { processFiles, uploadConfig } = useDropzone();
    const [isDragging, setIsDragging] = useState(false);

    const fileInputRef = useRef<ElementRef<"input">>(null!);

    const [notice, setNotice] = useState<ExtendedFile>();

    const [uploadKey, setUploadKey] = useState("");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isUploadNoticeModalOpen, setIsUploadNoticeModalOpen] =
        useState(false);

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {}
    );
    const [rowSelection, setRowSelection] = useState({});

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

            setNotice(data.acceptedFiles[0]);
        }
    };

    const table = useReactTable({
        data: materials,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const { mutate: validate, isPending: isValidating } = useMutation({
        onMutate: () => {
            const toastId = toast.loading("Validating...");
            return { toastId };
        },
        mutationFn: async () => {
            if (!uploadKey.length)
                throw new Error("An uploader key is required!");

            const res = await fetch("/api/auth", {
                method: "POST",
                body: JSON.stringify({ uploadKey }),
            });

            const data = await res.json();
            if (!data.success) throw new Error(data.longMessage);
        },
        onSuccess: (_, __, { toastId }) => {
            toast.success("Validation successful!", {
                id: toastId,
            });
            setIsAddModalOpen(false);
            router.push("/materials/create");
        },
        onError: (error, _, ctx) => {
            return toast.error(error.message, { id: ctx?.toastId });
        },
    });

    const {
        mutate: createNotice,
        isSuccess,
        isPending: isNoticeCreating,
    } = useMutation({
        onMutate: () => {
            const toastId = toast.loading("Creating notice...");
            return { toastId };
        },
        mutationFn: async () => {
            if (!notice) throw new Error("Invalid data");

            const formData = new FormData();
            formData.append("file", notice.file);

            const res = await fetch("/api/uploads/notices", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (!data.success) throw new Error(data.longMessage);
        },
        onSuccess: (_, __, { toastId }) => {
            toast.success("Notice created successfully", { id: toastId });
            router.refresh();
        },
        onError: (err, _, ctx) => {
            return toast.error(err.message, { id: ctx?.toastId });
        },
    });

    useEffect(() => {
        if (isSuccess) setNotice(undefined);
    }, [isSuccess]);

    return (
        <>
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="flex w-full items-center justify-between gap-5">
                        <div className="flex flex-col gap-2">
                            <Input
                                placeholder="Search by name..."
                                value={
                                    (table
                                        .getColumn("name")
                                        ?.getFilterValue() as string) ?? ""
                                }
                                onChange={(event) =>
                                    table
                                        .getColumn("name")
                                        ?.setFilterValue(event.target.value)
                                }
                                className="w-full max-w-md"
                            />

                            <div className="flex items-center gap-2">
                                <Select
                                    value={
                                        (table
                                            .getColumn("category")
                                            ?.getFilterValue() as string) ?? ""
                                    }
                                    onValueChange={(value) =>
                                        table
                                            .getColumn("category")
                                            ?.setFilterValue(value)
                                    }
                                >
                                    <SelectTrigger className="h-9 w-full max-w-[24rem] text-xs capitalize">
                                        <SelectValue placeholder="Search by category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((x) => (
                                            <SelectItem
                                                key={x.value}
                                                value={x.value}
                                                className="text-xs"
                                            >
                                                {x.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select
                                    value={
                                        (table
                                            .getColumn("subCategory")
                                            ?.getFilterValue() as string) ?? ""
                                    }
                                    onValueChange={(value) =>
                                        table
                                            .getColumn("subCategory")
                                            ?.setFilterValue(value)
                                    }
                                >
                                    <SelectTrigger className="h-9 w-full max-w-[24rem] text-xs capitalize">
                                        <SelectValue placeholder="Search by sub-category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 6 }).map(
                                            (_, i) => (
                                                <SelectItem
                                                    key={i}
                                                    value={(i + 7).toString()}
                                                    className="text-xs"
                                                >
                                                    {i + 7}
                                                </SelectItem>
                                            )
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-1"
                                onClick={
                                    isAuth
                                        ? () => setIsUploadNoticeModalOpen(true)
                                        : () => setIsAddModalOpen(true)
                                }
                            >
                                <Icons.plus className="size-4" />
                                <span>Add Notice</span>
                            </Button>

                            <Button
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-1"
                                onClick={
                                    isAuth
                                        ? () => router.push("/materials/create")
                                        : () => setIsAddModalOpen(true)
                                }
                            >
                                <Icons.plus className="size-4" />
                                <span>Add Material</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column
                                                              .columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={
                                            row.getIsSelected() && "selected"
                                        }
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                <DataTablePagination table={table} />
            </div>

            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Verification</DialogTitle>
                        <DialogDescription>
                            Enter your Uploader Key to add a new material
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-2">
                        <label
                            className="text-sm font-semibold"
                            htmlFor="uploader-key"
                        >
                            Uploader Key
                        </label>
                        <Input
                            id="uploader-key"
                            placeholder="Enter your Uploader Key"
                            disabled={isValidating}
                            value={uploadKey}
                            onValueChange={setUploadKey}
                        />
                    </div>

                    <DialogFooter>
                        <Button
                            className="w-full font-semibold"
                            size="sm"
                            onClick={() => validate()}
                        >
                            {isValidating ? "Validating..." : "Validate"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog
                open={isUploadNoticeModalOpen}
                onOpenChange={setIsUploadNoticeModalOpen}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Notices</DialogTitle>
                        <DialogDescription>Add a new notice</DialogDescription>
                    </DialogHeader>

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
                            accept={uploadConfig.acceptedDocTypes.join(",")}
                            max={uploadConfig.maxDocFileSize}
                            multiple={
                                uploadConfig.maxDocCount > 1 ? true : false
                            }
                        />

                        {notice ? (
                            <div className="size-full overflow-hidden rounded-sm">
                                <object
                                    data={notice.url}
                                    type="application/pdf"
                                    width="100%"
                                    height="600"
                                >
                                    <p>
                                        <Link href={notice.url}>
                                            Download your notice
                                        </Link>
                                    </p>
                                </object>
                            </div>
                        ) : null}

                        <p className="text-muted-foreground text-sm">
                            {isDragging
                                ? "Drop the file here"
                                : "Drag and drop or click to upload your notice"}
                        </p>

                        {!notice && (
                            <div className="flex flex-col items-center gap-2">
                                <Button
                                    className="font-semibold"
                                    size="sm"
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    {isDragging
                                        ? "Drop the files here"
                                        : "Choose notice"}
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

                    <DialogFooter
                        className={cn(
                            "justify-end gap-2",
                            !notice && "p-0 opacity-0"
                        )}
                    >
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setNotice(undefined)}
                            disabled={isNoticeCreating}
                            className={cn(
                                "font-semibold",
                                !notice && "pointer-events-none h-0"
                            )}
                        >
                            Cancel
                        </Button>

                        <Button
                            size="sm"
                            onClick={() => createNotice()}
                            disabled={!notice || isNoticeCreating}
                            className={cn(
                                "font-semibold",
                                !notice && "pointer-events-none h-0"
                            )}
                        >
                            {isNoticeCreating ? "Creating..." : "Create"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
