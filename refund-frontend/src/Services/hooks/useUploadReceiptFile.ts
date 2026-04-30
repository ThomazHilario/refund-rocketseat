import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../endpoints";

export const useUploadReceiptFile = () => useMutation({
    mutationKey: ["upload-receipt-file"],
    mutationFn: uploadFile
})