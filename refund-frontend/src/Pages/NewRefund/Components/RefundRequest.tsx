import { Button, SuccessIcon } from "@/Components"

type RefundRequestProps = {
    handleNewRefund: () => void
}

export const RefundRequest = ({ handleNewRefund }: RefundRequestProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <article className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-green-100">Solicitação enviada!</h1>

                <SuccessIcon />

                <p className="text-xs text-center text-gray-200">Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o setor financeiro irá entrar em contato com você.</p>
            </article>

            <Button onClick={handleNewRefund}>Nova solicitação</Button>
        </div>
    )
}