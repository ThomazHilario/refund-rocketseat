import { Refund, RefundItem, Search } from "../../Components"

import { useGetRefunds } from "../../Services"


export const Home = () => {
    const { data } = useGetRefunds()

    return (
        <div className="bg-[#F9FBFA] min-h-full w-full rounded-md p-10">
            <section className="flex flex-col gap-5">
                <h2 className="text-2xl font-semibold">
                    Solicitações
                </h2>

                <Search placeholder="Pesquisar pelo nome..." />

                <Refund>
                    <RefundItem 
                        category="food" 
                        title={'Rodrigo'} 
                        receipt={'1234'} 
                        value={1230} 
                    />               
                </Refund>
            </section>

            <section>
                
            </section>
        </div>
    )
}