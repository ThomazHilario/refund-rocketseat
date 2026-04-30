import { ForkKnifeIcon, PoliceCarIcon, BedIcon, WrenchIcon, ReceiptIcon } from "../../Components"
import type { RefundType } from "../../Services/types"

const refundConfig = {
    food: { 
        subTitle: 'Alimentação', 
        RefundIcon: ForkKnifeIcon 
    },
    hosting: { 
        subTitle: 'Hospedagem', 
        RefundIcon: BedIcon 
    },
    transport: { 
        subTitle: 'Transporte',
        RefundIcon: PoliceCarIcon 
    },
    services: { 
        subTitle: 'Serviços', 
        RefundIcon: WrenchIcon 
    },
    other: { 
        subTitle: 'Outros', 
        RefundIcon: ReceiptIcon 
    },
} as const

export const RefundItem = (refund: RefundType) => {

    const { RefundIcon, subTitle } = refundConfig[refund.category]

    const formatPrice = (value: number) => value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <li className="w-full flex p-4 justify-between items-center">
            <div className="flex items-center gap-4">
                <RefundIcon className="text-green-700" />
                
                <section>
                    <h3 className="font-semibold">{refund.title}</h3>
                    <h4 className="font-light text-gray-400">{subTitle}</h4>
                </section>
            </div>

            <span>
                {formatPrice(refund.value)}
            </span>
        </li>
    )
}