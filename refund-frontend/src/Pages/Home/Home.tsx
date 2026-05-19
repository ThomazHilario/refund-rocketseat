import { useState } from "react"
import { LoadingIcon, Pagination, Refund, RefundItem, Search } from "@/Components"

import { useGetRefunds } from "@/Services"


export const Home = () => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const { data, isLoading } = useGetRefunds({ q: search, page })

    const refunds = data?.refunds.data ?? []

    return (
        <div className=" min-h-full w-270.5 bg-gray-500 shadow-lg rounded-md p-10">
            <section className="flex flex-col items-center gap-5">
                <h2 className="text-2xl font-semibold">
                    Solicitações
                </h2>

                <Search 
                    placeholder="Pesquisar pelo nome..." 
                    onChange={(e) => setSearch(e.target.value)} 
                />
                
                { isLoading && <LoadingIcon className="text-green-100!" /> }

                {!isLoading && refunds.length === 0 ? <p className="text-gray-200">Nenhuma solicitacao encontrada!</p> : (
                    <section className="flex flex-col items-center justify-center w-full gap-4">
                        <Refund>
                            {refunds.map((refund) => (
                                <RefundItem 
                                    key={refund.id}
                                    id={refund.id}
                                    title={refund.title} 
                                    category={refund.category}
                                    receiptId={refund.receipt.id} 
                                    value={refund.value} 
                                />
                            ))}     
                        </Refund>

                        <Pagination 
                            currentPage={data?.refunds.meta.currentPage} 
                            totalPages={data?.refunds.meta.lastPage} 
                            onPageChange={setPage}
                        />
                    </section>
                )}
            </section>

            <section>
                
            </section>
        </div>
    )
}