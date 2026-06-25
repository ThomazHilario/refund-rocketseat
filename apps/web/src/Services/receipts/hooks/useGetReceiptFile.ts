import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type { ReceiptDownloadFilePayload, ReceiptDownloadFileResponse } from "../types";
import { receiptDownloadFile } from "../endpoints";

export const useGetReceiptFile = (
    options?: UseMutationOptions<ReceiptDownloadFileResponse, Error, ReceiptDownloadFilePayload>
) => useMutation<ReceiptDownloadFileResponse, Error, ReceiptDownloadFilePayload>({
    mutationKey: ['receipt-file'],
    mutationFn: receiptDownloadFile,
    ...options
})