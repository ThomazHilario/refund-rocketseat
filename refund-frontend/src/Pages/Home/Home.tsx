import { Refund, RefundItem, Search } from "../../Components"

import { useGetRefunds } from "../../Services"


export const Home = () => {
    const { data } = useGetRefunds()
    
    const refunds = data?.refunds.data ?? []

    return (
        <div className="bg-[#F9FBFA] min-h-full w-full rounded-md p-10">
            <section className="flex flex-col gap-5">
                <h2 className="text-2xl font-semibold">
                    Solicitações
                </h2>

                <Search placeholder="Pesquisar pelo nome..." />

                <Refund>
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
            </section>

            <section>
                
            </section>
        </div>
    )
}