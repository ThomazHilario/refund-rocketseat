import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { deleteFile } from "../endpoints";
import type { ReceiptDeleteParamsType } from "../types";
import { UseToast } from "@/utils";

export const useDeleteReceiptFile = (
  options?: UseMutationOptions<any, Error, ReceiptDeleteParamsType>
) => {
  const { success, error: showError } = UseToast()

  return useMutation<any, Error, ReceiptDeleteParamsType>({
    mutationKey: ["delete-receipt-file"],
    mutationFn: deleteFile,
    onSuccess: () => {
      success("File deleted successfully")
    },
    onError: () => {
      showError('Not possible to delete the file, try again later')
    },
    ...options
})
}