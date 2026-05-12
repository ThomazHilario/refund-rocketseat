import type { ReactNode } from "react"
import { cn } from "../../utils"

type RefundProps = {
    children: ReactNode,
    className?: string,
}

export const Refund = ({ 
    children, 
    className,  
}: RefundProps) => {

    return (
        <ul className={cn("flex flex-col items-center justify-center w-full", className)}>
            {children}
        </ul>  
    )
}