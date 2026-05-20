export type ReceiptType = {
    originalFilename: string,
    path: string,
    extname: string,
    filename: string,
    id: string,
    createdAt: string,
    updatedAt: string
}

export type UploadFilePayloadType = File;

export type ReceiptUploadResponseType = {
    receipt: ReceiptType
}

export type ReceiptDownloadFilePayload = {
    id: string
}

export type ReceiptDownloadFileResponse = {
    url: string
}