import { RefundForm } from "./Components"
import { type RefundFormTypes } from "./schema"


export const NewRefund = () => {
    const handleSubmit = (data: RefundFormTypes) => {
        console.log(data)
    }
    
    return(
        <div className="bg-[#F9FBFA] min-h-122.5 w-lg rounded-md p-10">
            <RefundForm handleSubmit={handleSubmit} />
        </div>
    )
}