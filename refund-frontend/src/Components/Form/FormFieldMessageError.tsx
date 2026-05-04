import { useFormContext } from "react-hook-form"

type FormFieldMessageErrorProps = {
    nameField: string
}

export const FormFieldMessageError = ({ nameField }: FormFieldMessageErrorProps) => {
    const { formState: { errors },  } = useFormContext()

    const errorMessage: string = errors[nameField]?.message as string

    return errorMessage && (
        <p className="text-red-500 text-xs mt-1 font-semibold">{errorMessage}</p>
    )
}