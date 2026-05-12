import { useParams } from "react-router-dom"
import { useGetRefund } from "../../Services"
import { RefundFormView } from "./Components/RefundForm"

export const Refund = () => {
    const { id } = useParams()

    const { data, isPending } = useGetRefund({ id: id as string })

    return (
        <div className="bg-gray-500 min-h-auto w-lg rounded-md p-10">
            {isPending ? <p>Carregando...</p> : <RefundFormView refund={data?.refund} />}
        </div>
    )
}