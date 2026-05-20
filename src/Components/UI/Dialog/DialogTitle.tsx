import { cn } from '@/utils'
import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'

type DialogTitleProps = PropsWithChildren & Dialog.DialogTitleProps

export const DialogTitle = ({ children, className, ...props}: DialogTitleProps) => (
    <Dialog.Title className={cn('text-lg', className)} {...props}>
        {children}
    </Dialog.Title>
)