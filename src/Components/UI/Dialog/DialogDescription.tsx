import { cn } from '@/utils'
import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'

type DialogDescriptionProps = PropsWithChildren & Dialog.DialogDescriptionProps

export const DialogDescription = ({ children, className, ...props}: DialogDescriptionProps) => (
    <Dialog.Description className={cn('text-md', className)} {...props}>
        {children}
    </Dialog.Description>
)