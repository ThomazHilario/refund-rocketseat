import { Controller, useFormContext, type FieldPath, type FieldValues } from "react-hook-form"
import { cn } from "../../utils"
import { FormFieldMessageError } from "./FormFieldMessageError";

type FormFieldProps<TFieldValues extends FieldValues> = {
    id: string;
    className?: string;
    label: string;
    name: FieldPath<TFieldValues>;
    placeholder?: string;
    type?: string;
}

export const FormField = <TFieldValues extends FieldValues>({ 
    name, 
    className, 
    id, 
    label,
    placeholder, 
    type = "text" 
}: FormFieldProps<TFieldValues>) => {
    const { control } = useFormContext<TFieldValues>()

    return (
        <label className={cn(className)} htmlFor={id}>
            <span className="mb-2 block text-xs font-medium text-gray-700">
                {label}
            </span>

            <Controller
                render={({ field: { onChange, onBlur, value } }) => (
                    <input 
                        placeholder={placeholder ?? ""}
                        id={id}
                        className={cn('w-full rounded-md border-2 border-gray-300 p-4')}  
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        type={type}
                    />
                )}
                name={name}
                control={control}
            />

            <FormFieldMessageError nameField={name} />
        </label>
    )
}