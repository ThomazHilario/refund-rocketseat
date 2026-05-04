import { useForm } from "react-hook-form"
import { Form, FormField } from "../../Components"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
    title: z.string().min(1, "O título é obrigatório"),
    category: z.string().min(1, "A categoria é obrigatória"),
    value: z.number().min(0.01, "O valor deve ser maior que zero"),
    receipt: z.string().min(1, "O comprovante é obrigatório")
})

const defaultValues = {
    title: "",
    category: "",
    value: 0,
    receipt: ""
}

type RefundFormTypes = z.infer<typeof schema>

export const NewRefund = () => {
    const form = useForm<RefundFormTypes>({ resolver: zodResolver(schema), defaultValues })

    const handleSubmit = (data: RefundFormTypes) => {
        console.log(data)
    }
    
    return(
        <div className="bg-[#F9FBFA] h-122.5 w-lg rounded-md p-10">
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
                    <FormField 
                        id="testField1" 
                        label="CATEGORIA" 
                        name="category" 
                    />

                    <FormField 
                        className="flex-1" 
                        id="testField2" 
                        label="VALOR" 
                        name="value" 
                    />
                </div>

                <FormField 
                    id="testField3" 
                    label="COMPROVANTE"
                    name="receipt" 
                />

                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">
                    Criar solicitacao
                </button>
            </Form>

        </div>
    )
}