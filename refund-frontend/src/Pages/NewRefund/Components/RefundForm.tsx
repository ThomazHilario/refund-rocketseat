import { useForm } from "react-hook-form"
import { Form, FormField, FormFieldSelect, FormFieldUploadFile } from "../../../Components"
import { zodResolver } from "@hookform/resolvers/zod"
import { Fragment } from "react/jsx-runtime"
import { refundSchema, type RefundFormTypes } from "../schema"


const defaultValues = {
    title: "",
    category: "",
    value: "",
}

const options = [
    {
        label: 'Alimentação',
        value: 'food'
    }, 
    {
        label: 'Hospedagem',
        value: 'hosting'
    },
    {
        label: 'Transporte',
        value: 'transport'
    },
    {
        label: 'Serviços',
        value: 'services'
    },
    {
        label: 'Outros',
        value:'other'
    }
]

type RefundFormProps = {
    handleSubmit: (data: RefundFormTypes) => void
}

export const RefundForm = ({ handleSubmit }: RefundFormProps) => {
    const form = useForm<RefundFormTypes>({ resolver: zodResolver(refundSchema), defaultValues })

    return (
        <Fragment>
            <h2 className="text-xl font-semibold">
                Nova solicitação de reembolso
            </h2>

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

                <button type="submit" className="bg-button text-white px-4 py-2 rounded-md mt-4">
                    Criar solicitacao
                </button>
            </Form>
        </Fragment>
    )
}