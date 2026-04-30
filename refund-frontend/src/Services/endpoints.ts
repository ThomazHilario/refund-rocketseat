import { Axios } from "./config"
import type { RefundType, RefundResponseType, UploadFileType } from "./types"

export const getRefund = async ():Promise<RefundResponseType> => {
    const response = await Axios.get("/refunds")
    
    return response.data
}

export const createRefund = async (payload: RefundType) => {
    const response = await Axios.post("/refunds", payload)
    return response.data
}

export const uploadFile = async (file: UploadFileType) => {
    const formData = new FormData()
    formData.append('receiptFile', file)

    const response = await Axios.post("/receipts", formData)

    return response.data
}