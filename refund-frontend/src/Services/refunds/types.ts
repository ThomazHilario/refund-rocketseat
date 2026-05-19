import type { ReceiptType } from "../receipts";

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

export type GetRefundsParamsType = {
    page?: number;
    q?: string;
}

export type GetRefundParamType = {
    id: string;
}

export type RefundsResponseType = {
    refunds: {
        data: RefundType[];
        meta: {
            currentPage: number;
            lastPage: number;
        };
    }
};

export type RefundResponseType = {
    refund: RefundType;
};

export type RefundDeleteParamsType = {
    id: string;
}
