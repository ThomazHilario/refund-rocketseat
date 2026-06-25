import { Button } from "../Button"
import { LeftArrow, RightArrow } from "../Icons"

type PaginationProps = {
    totalPages: number | undefined
    currentPage: number | undefined
    onPageChange: (page: number) => void
}

export const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {

    if(!totalPages || !currentPage) return null

    return (
        <div className="flex justify-center items-center gap-4">
            <Button 
                className="size-7 flex items-center justify-center px-2! shrink-5 disabled:cursor-not-allowed disabled:opacity-50" 
                variant="primary" 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                <LeftArrow className="size-3" />
            </Button>

            <span className="font-bold w-12">{currentPage} / {totalPages}</span>

            <Button 
                className="size-7 flex items-center justify-center px-2! shrink-5 disabled:cursor-not-allowed disabled:opacity-50" 
                variant="primary" 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
            >
                <RightArrow className="size-3" />
            </Button>
        </div>
    )
}