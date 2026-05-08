import { Axios } from "./config"
import type { RefundPayloadType, RefundResponseType, UploadFileType, ReceiptUploadResponseType } from "./types"

export const getRefund = async ():Promise<RefundResponseType> => {
    const response = await Axios.get("/refunds")
    
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