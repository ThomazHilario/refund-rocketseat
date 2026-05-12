import type { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form"
import { FormProvider } from "./FormProvider"
import type { PropsWithChildren } from "react";
import { cn } from "../../utils";

type FormProps<T extends FieldValues> = PropsWithChildren<{
  className?: string;
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T> ;
}>

export const Form = <T extends FieldValues>({ form, children, onSubmit, className }: FormProps<T>) => {
  return (
    <FormProvider form={form}>
        <form className={cn('flex flex-col gap-4 p-5', className)} onSubmit={form.handleSubmit(onSubmit)}>
            {children}
        </form>
    </FormProvider>
  )
}