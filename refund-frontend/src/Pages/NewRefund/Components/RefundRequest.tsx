import { Button } from "../../../Components"

export const RefundRequest = () => {
    return (
        <div className="flex flex-col gap-10">
            <article>
                <h1>Solicitação enviada!</h1>

                {/* Icon */}

                <p>Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o setor financeiro irá entrar em contato com você.</p>
            </article>

            <Button>Nova solicitação</Button>
        </div>
    )
}