import { useMutation } from "@tanstack/react-query";
import { deleteRefund } from "../endpoints";

export const useDeleteRefund = () => useMutation({
    mutationKey: ["delete-refund"],
    mutationFn: deleteRefund,
})