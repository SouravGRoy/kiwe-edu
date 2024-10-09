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
import { convertValueToLabel } from "@/lib/utils";
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
import React, { useState } from "react";
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
    const [uploadKey, setUploadKey] = useState("");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const router = useRouter();

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {}
    );
    const [rowSelection, setRowSelection] = useState({});

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

                        <div>
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
        </>
    );
}
