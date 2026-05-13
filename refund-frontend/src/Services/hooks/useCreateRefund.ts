import { useMutation } from "@tanstack/react-query";
import { createRefund } from "../endpoints";
import { UseToast } from "@/utils";

export const useCreateRefund = () => {
    const { success, error } = UseToast()


    return useMutation({
        mutationKey: ["createRefund"],
        mutationFn: createRefund,
        onSuccess: () => {
            success("Refund created successfully")
        },
        onError: () => {
            error("Not possible to create the refund, try again later")
        }
    })
}