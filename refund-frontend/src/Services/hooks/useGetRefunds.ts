import { useQuery } from "@tanstack/react-query";
import { getRefund } from "../endpoints";

export const useGetRefunds = () => useQuery({
    queryKey: ["refunds"],
    queryFn: getRefund
})