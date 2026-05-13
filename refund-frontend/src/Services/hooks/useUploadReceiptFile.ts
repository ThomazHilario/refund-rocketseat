import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { uploadFile } from "../endpoints";
import type { ReceiptUploadResponseType, UploadFilePayloadType } from "../types";

export const useUploadReceiptFile = (
  options?: UseMutationOptions<ReceiptUploadResponseType, Error, UploadFilePayloadType>
) => useMutation<ReceiptUploadResponseType, Error, UploadFilePayloadType>({
    mutationKey: ["upload-receipt-file"],
    mutationFn: uploadFile,
    ...options
})