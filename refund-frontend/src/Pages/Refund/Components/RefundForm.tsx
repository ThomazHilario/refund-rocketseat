import { useForm } from "react-hook-form"
import { Fragment } from "react/jsx-runtime"
import { DialogAlertAction, DialogAlertCancel, DialogAlertContent, DialogAlertDescription, DialogAlertRoot, DialogAlertTitle, DialogAlertTrigger, Form, FormField, LoadingIcon } from "@/Components"
import type { RefundType } from "@/Services/types"
import { type RefundFormTypes } from "../../schema"
import { useDeleteRefund } from "@/Services"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

type RefundFormViewProps = {
    refund: RefundType | undefined
}

export const RefundFormView = ({ refund }: RefundFormViewProps) => {
    const navigate = useNavigate()

    const form = useForm<RefundFormTypes>({ defaultValues: {
        title: refund?.title,
        category: refund?.category,
        value: String(refund?.value),
        receipt: undefined,
    }})

    const { mutate: deleteRefund, isSuccess, isPending } = useDeleteRefund()

    useEffect(() => {
        if(isSuccess){
            navigate("/");
        }
    }, [isSuccess])

    const handleSubmit = () => {
        deleteRefund({id: refund?.id as string})
    }

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
                    disabled
                />

                <div className="flex gap-3">
                    <FormField 
                        className="flex-2"
                        id="selectField" 
                        label="CATEGORIA" 
                        name="category"
                        disabled
                    />

                    <FormField 
                        className="flex-1" 
                        id="valueField" 
                        label="VALOR" 
                        name="value" 
                        type="number"
                        disabled
                    />
                </div>

                <DialogAlertRoot>
                    <DialogAlertTrigger 
                        className="flex justify-center items-center gap-4 mt-4 bg-green-100 p-2 rounded-sm text-white"
                        disabled={isPending}
                    >
                        {isPending ? <LoadingIcon /> : 'Excluir'}
                    </DialogAlertTrigger>

                    <DialogAlertContent>
                        <DialogAlertTitle>Excluir solicitação</DialogAlertTitle>

                        <DialogAlertDescription>Tem certeza que deseja excluir essa solicitação? Essa ação é irreversível.</DialogAlertDescription>

                        <div className="flex justify-end gap-4 items-center">
                            <DialogAlertCancel>Cancelar</DialogAlertCancel>
                            <DialogAlertAction type="submit" onClick={handleSubmit}>
                                Excluir
                            </DialogAlertAction>
                        </div>
                    </DialogAlertContent>
                </DialogAlertRoot>
            </Form>
        </Fragment>
    )
}