import { Axios } from "./config"
import type { RefundPayloadType, RefundResponseType, UploadFileType, ReceiptUploadResponseType, GetParamsType } from "./types"

export const getRefund = async ({ page, q = "" }: GetParamsType):Promise<RefundResponseType> => {
    const response = await Axios.get("/refunds", { params: {
        page,
        q
    } })
    
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