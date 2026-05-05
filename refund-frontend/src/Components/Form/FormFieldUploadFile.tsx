import { useController, useFormContext, type FieldPath, type FieldValues } from "react-hook-form"
import { cn } from "../../utils";
import { FormFieldMessageError } from "./FormFieldMessageError";
import type { ChangeEvent } from "react";

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

    const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if(!file) return

        field.onChange(file)
    }

    return (
        <label className={cn(className)} htmlFor={id}>
            <span className="mb-2 block text-xs font-medium text-gray-700">
                {label}
            </span>

            <div>
                <input
                    placeholder={placeholder}
                    className={cn('w-full rounded-md border-2 border-gray-300 p-4')}
                    type="file"
                    onChange={handleUploadFile}
                />
                
                <button></button>
            </div>

            <FormFieldMessageError nameField={name} />
        </label>
    )
}