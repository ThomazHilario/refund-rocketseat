import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { uploadFile } from "../endpoints";
import type { ReceiptUploadResponseType, UploadFileType } from "../types";

export const useUploadReceiptFile = (
  options?: UseMutationOptions<ReceiptUploadResponseType, Error, UploadFileType>
) => useMutation<ReceiptUploadResponseType, Error, UploadFileType>({
    mutationKey: ["upload-receipt-file"],
    mutationFn: uploadFile,
    ...options
})