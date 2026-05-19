import { Axios } from '../config'
import { type ReceiptUploadResponseType, type UploadFilePayloadType } from './types'

export const receiptUploadFile = async (file: UploadFilePayloadType): Promise<ReceiptUploadResponseType> => {
    const formData = new FormData()
    formData.append('receiptFile', file)

    const response = await Axios.post<ReceiptUploadResponseType>("/receipts", formData)

    return response.data
}