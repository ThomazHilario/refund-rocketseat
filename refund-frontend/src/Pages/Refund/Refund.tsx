import { useParams } from "react-router-dom"
import { useGetRefund } from "@/Services"
import { RefundFormView } from "./Components/RefundForm"
import { LoadingIcon } from "@/Components"

export const Refund = () => {
    const { id } = useParams()

    const { data, isPending } = useGetRefund({ id: id as string })
    console.log(isPending)
    return (
        <div className="bg-gray-500 min-h-auto w-lg rounded-md p-10">
            {isPending ? (
                <section className="h-50 flex justify-center items-center">
                    <LoadingIcon className="text-green-100! size-12"/>
                </section>
            ) : <RefundFormView refund={data?.refund} />}
        </div>
    )
}