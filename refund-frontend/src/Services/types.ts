export type RefundCategoryType = 'food' | 'hosting' | 'transport' | 'services' | 'other';

export type RefundPayloadType = {
    title: string;
    category: RefundCategoryType;
    value: number;
    receipt: string;
}

export type RefundType = RefundPayloadType & {
    id: string;
    receipt: ReceiptType;
}

export type UploadFileType = File;

export type RefundResponseType = {
    refunds: {
        data: RefundType[];
        meta: any;
    }
};

export type ReceiptType = {
    originalFilename: string,
    path: string,
    extname: string,
    filename: string,
    id: string,
    createdAt: string,
    updatedAt: string
}

export type ReceiptUploadResponseType = {
    receipt: ReceiptType
}