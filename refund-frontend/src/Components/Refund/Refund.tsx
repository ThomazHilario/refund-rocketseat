import type { ReactNode } from "react"
import { LoadingIcon } from "../Icons"
import { RefundItem } from "./RefundItem"
import { cn } from "../../utils"

type RefundProps = {
    children: ReactNode,
    className?: string,
    isLoading: boolean,
    totalItems?: number,
    placeholder?: string
}

export const Refund = ({ 
    children, 
    className, 
    isLoading, 
    totalItems, 
    placeholder = "Nenhuma solicitacao encontrada!" 
}: RefundProps) => {

    if(isLoading) {
        return <LoadingIcon className="text-button!" />  
    }

    if (!isLoading && totalItems === 0) {
        return <p className="text-gray-500">{placeholder}</p>
    }

    return (
        <ul className={cn("flex flex-col items-center justify-center w-full", className)}>
            {children}
        </ul>
    )
}