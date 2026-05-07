import z from "zod"

export const refundSchema = z.object({
    title: z.string().min(1, "O título é obrigatório"),
    category: z.string().min(1, "A categoria é obrigatória"),
    value: z.string().min(0.01, "O valor deve ser maior que zero"),
    receipt: z.file().min(1).mime(["image/jpeg", "image/png", "image/jpeg"], "O comprovante deve ser um arquivo JPEG, PNG ou jpeg")
})

export type RefundFormTypes = z.infer<typeof refundSchema>