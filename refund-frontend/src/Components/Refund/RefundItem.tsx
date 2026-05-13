import { useNavigate } from "react-router-dom";
import { ForkKnifeIcon, PoliceCarIcon, BedIcon, WrenchIcon, ReceiptIcon } from "../../Components"
import type { RefundCategoryType } from "../../Services/types"

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

type RefundItemProps = {
    title: string;
    category: RefundCategoryType;
    value: number;
    id: string;
    receiptId: string;
}

export const RefundItem = (refund: RefundItemProps) => {
    const navigate = useNavigate()

    const handleNavigateToRefundDetails = () => {
        navigate(`/refund/${refund.id}`)
    }

    const { RefundIcon, subTitle } = refundConfig[refund.category]

    const formatPrice = (value: number) => value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <li 
            className="w-full flex p-2 justify-between items-center cursor-pointer hover:bg-gray-300 rounded-md transition-colors duration-500" 
            onClick={handleNavigateToRefundDetails}
        >
            <div className="flex items-center gap-4">
                <RefundIcon className="text-green-700 shrink-0" />
                
                <section>
                    <h3 className="font-semibold line-clamp-1" title={refund.title}>{refund.title}</h3>
                    <h4 className="font-light text-xs text-gray-600">{subTitle}</h4>
                </section>
            </div>

            <span>
                {formatPrice(refund.value)}
            </span>
        </li>
    )
}