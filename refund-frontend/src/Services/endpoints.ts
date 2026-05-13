import axios from "axios"
import { Axios } from "./config"
import type { 
    RefundPayloadType, 
    GetRefundsParamsType, 
    RefundsResponseType, 
    GetRefundParamType, 
    RefundResponseType, 
    RefundDeleteParamsType,
    UploadFilePayloadType, 
    ReceiptUploadResponseType, 
    ReceiptDeleteParamsType
} from "./types"

export const createRefund = async (payload: RefundPayloadType) => {
    const response = await Axios.post("/refunds", payload)
    return response.data
}

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


export const deleteRefund = async ({ id }: RefundDeleteParamsType) => {
    const response = await Axios.delete(`/refunds/${id}`)
    
    return response.data
}

export const uploadFile = async (file: UploadFilePayloadType): Promise<ReceiptUploadResponseType> => {
    const formData = new FormData()
    formData.append('receiptFile', file)

    const response = await Axios.post<ReceiptUploadResponseType>("/receipts", formData)

    return response.data
}

export const deleteFile = async ({ id }: ReceiptDeleteParamsType) => {
    const response = await axios.delete(`/receipts/${id}`)

    return response.data
}