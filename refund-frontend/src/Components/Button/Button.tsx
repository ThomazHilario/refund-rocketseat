import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { cn } from "../../utils"

const variants = {
    primary: "bg-green-100",
} as const


type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
    variant?: keyof typeof variants;
    children: ReactNode;
}

export const Button = ({ children, className, variant = "primary", ...props }: ButtonProps) => {
    return (
        <button className={cn('px-4 py-2 rounded-md w-full cursor-pointer text-white', variants[variant], className)} {...props}>
            {children}
        </button>
    )
}