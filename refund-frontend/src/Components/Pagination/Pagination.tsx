import { Button } from "../Button"

export const Pagination = () => {
    return (
        <div className="inline-flex">
            <Button className="size-8 lfex items-center justify-center" variant="primary">‹</Button>
            <span>1</span>
            <Button className="size-8 lfex items-center justify-center" variant="primary">›</Button>
        </div>
    )
}