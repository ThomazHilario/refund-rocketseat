import { cn } from '@/utils'
import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'

type DialogCloseProps = PropsWithChildren & Dialog.DialogCloseProps

export const DialogClose = ({ children, className, ...props}: DialogCloseProps) => (
    <Dialog.Close className={cn('p-4 cursor-pointer', className)} {...props}>
        {children}
    </Dialog.Close>
)