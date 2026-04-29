import { Search } from "../../Components"

export const Home = () => {
    return (
        <div className="bg-[#F9FBFA] h-full w-full rounded-md p-10">
            <section className="flex flex-col gap-5">
                <h2 className="text-2xl font-semibold">
                    Solicitações
                </h2>

                <Search placeholder="Pesquisar pelo nome..." />

                <ul>

                </ul>
            </section>

            <section>
                
            </section>
        </div>
    )
}