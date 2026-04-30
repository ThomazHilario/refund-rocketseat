import type { ReactNode } from "react"

type RefundProps = {
    children: ReactNode
}

export const Refund = ({ children }: RefundProps) => (
    <ul>
        {children}
    </ul>
)