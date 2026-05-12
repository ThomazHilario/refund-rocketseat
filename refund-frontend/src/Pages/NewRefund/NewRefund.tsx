import { useEffect, useState } from "react"
import { useCreateRefund, useUploadReceiptFile } from "../../Services"
import { RefundForm, RefundRequest } from "./Components"
import { type RefundFormTypes } from "./schema"


export const NewRefund = () => {

    const { mutate: createRefund, isPending, isSuccess } = useCreateRefund()
    const { mutateAsync: uploadReceipt } = useUploadReceiptFile()

    const [isnewRefund, setIsNewRefund] = useState(true)

    useEffect(() => {
        if (isSuccess) {
            setIsNewRefund(false)
        }
    }, [isSuccess])

    const handleNewRefund = () => setIsNewRefund(true)
    
    const handleSubmit = async (data: RefundFormTypes) => {
        const receiptData = await uploadReceipt(data.receipt)

        createRefund({
            title: data.title,
            category: data.category,
            value: parseFloat(data.value),
            receipt: receiptData?.receipt?.id,
        }, {
            onError: () => {
                alert("Erro ao criar reembolso")
            }
        })
    }
    
    return(
        <div className="bg-[#F9FBFA] min-h-auto w-lg rounded-md p-10">
            {!isnewRefund ? (
                <RefundRequest handleNewRefund={handleNewRefund} />
            ) : (
                <RefundForm handleSubmit={handleSubmit} isPending={isPending} />
            )}
        </div>
    )
}