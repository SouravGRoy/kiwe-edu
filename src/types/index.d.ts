import { HTMLAttributes, ReactNode } from "react";

export type GenericProps = HTMLAttributes<HTMLElement>;
export interface LayoutProps {
    children: ReactNode;
}

export type Material = {
    id: string;
    name: string;
    category: string;
    subCategory: string;
    url: string;
    createdAt: Date;
};
