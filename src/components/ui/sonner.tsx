"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
    return (
        <Sonner
            className="toaster group"
            toastOptions={{
                classNames: {
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                    error: "group-[.toaster]:text-white group-[.toaster]:bg-red-600",
                    success: "group-[.toaster]:bg-muted",
                    warning: "group-[.toaster]:bg-yellow-700",
                },
            }}
            {...props}
        />
    );
};

export { Toaster };
