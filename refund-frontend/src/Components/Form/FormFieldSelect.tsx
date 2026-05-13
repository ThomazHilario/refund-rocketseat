import Select, { type GroupBase, type StylesConfig } from "react-select"
import { cn } from "../../utils"
import { FormFieldMessageError } from "./FormFieldMessageError";
import { Controller, useFormContext, type FieldPath, type FieldValues } from "react-hook-form";

type optionsProps = {
  value: string;
  label: string;
}

type FormFieldSelectProps<TFieldValues extends FieldValues> = {
    className?: string;
    options: optionsProps[];
    placeholder?: string;
    label: string;
    id: string;
    name: FieldPath<TFieldValues>;
    disabled?: boolean;
}

const FormFieldSelectStyles: StylesConfig<optionsProps, false, GroupBase<optionsProps>> | undefined = {
    control: (styles) => ({ 
        ...styles, 
        height: '100%', 
        borderWidth: '2px', 
        borderRadius: '0.375rem', 
        borderColor: '#D1D5DB', 
        padding: '10px' 
    }),
}

export const FormFieldSelect = <TFieldValues extends FieldValues>({ 
    className,
    options, 
    id, 
    label, 
    name, 
    placeholder = 'Selecione', 
    disabled = false,
}: FormFieldSelectProps<TFieldValues>) => {
    const { control } = useFormContext<TFieldValues>()

    return ( 
        <label className={cn(className)} htmlFor={id}>

            <span className="mb-2 block text-xs font-medium text-gray-700">
                {label}
            </span>

            <Controller
                render={({ field: { onChange, onBlur } }) => (
                   <Select 
                        styles={FormFieldSelectStyles}
                        options={options} 
                        inputId={id}
                        name={name} 
                        placeholder={placeholder} 
                        onBlur={onBlur}
                        onChange={(option) => onChange(option?.value)}
                        isDisabled={disabled}
                    />
                )}
                name={name}
                control={control}
            />

            <FormFieldMessageError nameField={name} />
        </label>
    )
}