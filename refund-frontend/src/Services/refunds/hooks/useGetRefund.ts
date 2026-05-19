import { useQuery } from "@tanstack/react-query";
import { getRefund } from "../endpoints";
import type { GetRefundParamType } from "../types";

export const useGetRefund = (params: GetRefundParamType) => useQuery({
    queryKey: ["refunds", params.id],
    queryFn: () => getRefund({ ...params }),
})