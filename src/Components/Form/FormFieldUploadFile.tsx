import { Fragment, useRef, type ChangeEvent } from "react";
import { useController, useFormContext, type FieldPath, type FieldValues } from "react-hook-form"

import { FormFieldMessageError } from "./FormFieldMessageError";
import { UploadIcon } from "../Icons";

import { cn } from "../../utils";

type FormFieldUploadFileProps<TFieldValues extends FieldValues> = {
    id: string;
    className?: string;
    label: string;
    name: FieldPath<TFieldValues>;
    placeholder?: string;
}

export const FormFieldUploadFile = <TFieldValues extends FieldValues>({ 
    id,
    className,
    label, 
    name,
    placeholder = "Comprovante aqui...",
}: FormFieldUploadFileProps<TFieldValues>) => {
    const { control } = useFormContext<TFieldValues>()

    const { field } = useController({
        control,
        name,
    })

    const inputRef = useRef<HTMLInputElement>(null)

    const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if(!file) return

        field.onChange(file)
    }

    const handleOpenFile = () => {
        const file = inputRef.current

        if(!file) return

        file.click()
    }

    return (
        <Fragment>
            <input
                ref={inputRef}
                type="file"
                id={id}
                onChange={handleUploadFile}
                hidden
            />

            <div className="flex flex-col gap-4">
                <span className="block text-xs font-medium text-gray-700">
                    {label}
                </span>

                <label htmlFor={id} className={cn('flex justify-between gap-4', className)}>
                    <span className={cn('w-full rounded-md border-2 border-gray-300 p-2.5 pointer-events-none')}>{field.value?.name ?? placeholder}</span>

                    <div className="flex justify-between items-center gap-4">
                        <button type="button" onClick={handleOpenFile} className="bg-green-100 w-16 h-12 rounded-md flex items-center justify-center cursor-pointer">
                            <UploadIcon className="text-white pointer-events-none"/>
                        </button>
                    </div>
                </label>

                <FormFieldMessageError nameField={name} />
            </div>
        </Fragment>
    )
}