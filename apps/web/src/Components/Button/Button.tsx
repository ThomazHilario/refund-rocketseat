import type { ComponentProps, PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const ButtonVariants = tv({
    base: 'px-4 py-2 rounded-md w-full cursor-pointer text-white',
    variants: {
        variant: {
            default: 'bg-transparent text-green-100',
            primary: "bg-green-100",
        },
    },
    defaultVariants: {
        variant: 'default'
    }
})


type ButtonProps = PropsWithChildren<ComponentProps<'button'>> & VariantProps<typeof ButtonVariants> & {}

export const Button = ({ children, className, variant = 'default', ...props }: ButtonProps) => {
    return (
        <button className={ButtonVariants({ className: className, variant })} {...props}>
            {children}
        </button>
    )
}