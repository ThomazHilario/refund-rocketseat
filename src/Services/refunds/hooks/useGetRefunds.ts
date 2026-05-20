import { useQuery } from "@tanstack/react-query";
import { getRefunds } from "../endpoints";
import type { GetRefundsParamsType } from "../types";

export const useGetRefunds = (params: GetRefundsParamsType) => useQuery({
    queryKey: ["refunds", params],
    queryFn: () => getRefunds({ ...params }),
})