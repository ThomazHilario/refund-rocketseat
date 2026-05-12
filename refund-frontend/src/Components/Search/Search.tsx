import type { ChangeEvent } from "react"

import { cn } from "../../utils"

import { SearchIcon } from "../Icons";

type SearchProps = {
    placeholder: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
}

export const Search = ({ 
    placeholder = "Pesquisar pelo nome...", 
    onClick,
    ...props 
}: SearchProps) => (
    <div className="flex items-center gap-2 w-full">
        <input placeholder={placeholder} className={cn('w-full p-2.5 rounded-lg border-2 border-gray-300')} {...props} />

        <button onClick={onClick} className="bg-button text-white p-2.5 rounded-lg">
            <SearchIcon />
        </button>
    </div>
)