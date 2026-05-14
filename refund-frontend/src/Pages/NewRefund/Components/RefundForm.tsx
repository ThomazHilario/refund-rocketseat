import { useForm } from "react-hook-form"
import { Button, Form, FormField, FormFieldSelect, FormFieldUploadFile, LoadingIcon } from "../../../Components"
import { zodResolver } from "@hookform/resolvers/zod"
import { Fragment } from "react/jsx-runtime"
import { refundSchema, type RefundFormTypes } from "../../schema"
import { options } from "../../Config"


const defaultValues = {
    title: "",
    value: "",
}

type RefundFormProps = {
    handleSubmit: (data: RefundFormTypes) => void;
    isPending?: boolean;
}

export const RefundForm = ({ handleSubmit, isPending }: RefundFormProps) => {
    const form = useForm<RefundFormTypes>({ resolver: zodResolver(refundSchema), defaultValues })

    return (
        <Fragment>
            <article className="px-5 space-y-1">
                <h2 className="text-xl font-semibold">
                    Nova solicitação de reembolso
                </h2>

                <p className="text-xs text-gray-600">Dados da despesa para solicitar reembolso.</p>
            </article>

             <Form form={form} onSubmit={handleSubmit}>
                <FormField 
                    id="titleField" 
                    label="NOME DA SOLICITAÇÃO" 
                    name="title" 
                />

                <div className="flex gap-3">
                    <FormFieldSelect 
                        className="flex-2"
                        id="selectField" 
                        label="CATEGORIA" 
                        name="category" 
                        options={options}
                    />

                    <FormField 
                        className="flex-1" 
                        id="valueField" 
                        label="VALOR" 
                        name="value" 
                        type="number"
                    />
                </div>

                <FormFieldUploadFile 
                    id="receiptField" 
                    label="COMPROVANTE"
                    name="receipt"
                />

                <Button type="submit" className="flex justify-center items-center gap-4 mt-4" disabled={isPending}>
                    {isPending ? <LoadingIcon /> : 'Criar solicitacao'}
                </Button>
            </Form>
        </Fragment>
    )
}