import { useState } from "react"
import { Pagination, Refund, RefundItem, Search } from "../../Components"

import { useGetRefunds } from "../../Services"


export const Home = () => {
    const [search, setSearch] = useState('')
    const { data, isLoading } = useGetRefunds({ q: search, page: 1 })

    const refunds = data?.refunds.data ?? []

    return (
        <div className="bg-[#F9FBFA] min-h-full w-full rounded-md p-10">
            <section className="flex flex-col items-center gap-5">
                <h2 className="text-2xl font-semibold">
                    Solicitações
                </h2>

                <Search 
                    placeholder="Pesquisar pelo nome..." 
                    onChange={(e) => setSearch(e.target.value)} 
                />

                <Refund totalItems={refunds.length} isLoading={isLoading}>
                    {refunds.map((refund) => (
                        <RefundItem 
                            key={refund.id}
                            title={refund.title} 
                            category={refund.category}
                            receiptId={refund.receipt.id} 
                            value={refund.value} 
                        />
                    ))}     
                </Refund>

                <Pagination />
            </section>

            <section>
                
            </section>
        </div>
    )
}