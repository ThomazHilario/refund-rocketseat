import { useMutation } from "@tanstack/react-query";
import { createRefund } from "../endpoints";

export const useCreateRefund = () => useMutation({
    mutationKey: ["createRefund"],
    mutationFn: createRefund,
})