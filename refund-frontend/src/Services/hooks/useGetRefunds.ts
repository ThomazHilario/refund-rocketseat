import { useQuery } from "@tanstack/react-query";
import { getRefund } from "../endpoints";
import type { GetParamsType } from "../types";

export const useGetRefunds = (params: GetParamsType) => useQuery({
    queryKey: ["refunds", params],
    queryFn: () => getRefund({ ...params }),
})