import { useForm } from "react-hook-form"
import { Fragment } from "react/jsx-runtime"
import { Button, Form, FormField } from "@/Components"
import type { RefundType } from "@/Services/types"
import { refundSchema, type RefundFormTypes } from "../../schema"
import { useDeleteRefund } from "@/Services"

type RefundFormViewProps = {
    refund: RefundType | undefined
}

export const RefundFormView = ({ refund }: RefundFormViewProps) => {
    const form = useForm<RefundFormTypes>({ defaultValues: {
        title: refund?.title,
        category: refund?.category,
        value: String(refund?.value),
        receipt: undefined,
    }})

    const { mutate: deleteRefund } = useDeleteRefund()

    const handleSubmit = (data: RefundFormTypes) => {
        deleteRefund({id: refund?.id as string})
    }

    return (
        <Fragment>
             <article className="px-5 space-y-1">
                <h2 className="text-xl font-semibold">
                    Nova solicitação de reembolso
                </h2>

                <p className="text-xs text-gray-500">Dados da despesa para solicitar reembolso.</p>
            </article>

                <Form form={form} onSubmit={handleSubmit}>
                    <FormField 
                        id="titleField" 
                        label="NOME DA SOLICITAÇÃO" 
                        name="title" 
                        
                    />

                    <div className="flex gap-3">
                        <FormField 
                            className="flex-2"
                            id="selectField" 
                            label="CATEGORIA" 
                            name="category"
                            
                        />

                        <FormField 
                            className="flex-1" 
                            id="valueField" 
                            label="VALOR" 
                            name="value" 
                            type="number"
                            
                        />
                    </div>

                <Button type="submit" className="flex justify-center items-center gap-4 mt-4">
                    Excluir
                </Button>
            </Form>
        </Fragment>
    )
}