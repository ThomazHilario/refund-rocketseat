import { Axios } from "./config"
import type { 
    RefundPayloadType, 
    RefundsResponseType, 
    UploadFileType, 
    ReceiptUploadResponseType, 
    GetRefundsParamsType, 
    GetRefundParamType, 
    RefundResponseType 
} from "./types"

export const getRefunds = async ({ page, q = "" }: GetRefundsParamsType):Promise<RefundsResponseType> => {
    const response = await Axios.get("/refunds", { params: {
        page,
        q
    } })
    
    return response.data
}

export const getRefund = async ({ id }: GetRefundParamType):Promise<RefundResponseType> => {
    const response = await Axios.get(`/refunds/${id}`)
    
    return response.data
}

export const createRefund = async (payload: RefundPayloadType) => {
    const response = await Axios.post("/refunds", payload)
    return response.data
}

export const uploadFile = async (file: UploadFileType): Promise<ReceiptUploadResponseType> => {
    const formData = new FormData()
    formData.append('receiptFile', file)

    const response = await Axios.post<ReceiptUploadResponseType>("/receipts", formData)

    return response.data
}