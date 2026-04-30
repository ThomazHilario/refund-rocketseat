export type RefundType = {
    title: string;
    category: 'food' | 'hosting' | 'transport' | 'services' | 'other';
    value: number;
    receipt: string;
}

export type UploadFileType = File;

export type RefundResponseType = {
    refunds: RefundType[]
};