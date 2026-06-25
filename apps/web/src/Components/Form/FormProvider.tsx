import type { PropsWithChildren } from "react"
import { FormProvider as HookFormProvider, type FieldValues, type UseFormReturn } from "react-hook-form"

type FormProviderProps<T extends FieldValues> = PropsWithChildren<{
  form: UseFormReturn<T>
}>


export const FormProvider = <T extends FieldValues>({ form, children }: FormProviderProps<T>) => {
    return (
        <HookFormProvider {...form}>
            {children}
        </HookFormProvider>
    )
}