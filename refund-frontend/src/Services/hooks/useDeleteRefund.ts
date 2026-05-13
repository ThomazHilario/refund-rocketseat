import { useQuery } from "@tanstack/react-query";
import { deleteRefund } from "../endpoints";
import type { RefundDeleteParamsType } from "../types";

export const useDeleteRefund = (params: RefundDeleteParamsType) => useQuery({
    queryKey: ["delete-refund", params.id],
    queryFn: () => deleteRefund({ ...params }),
})