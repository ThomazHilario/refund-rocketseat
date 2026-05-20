import { cn } from '@/utils'
import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'

type DialogTriggerProps = PropsWithChildren & Dialog.DialogTriggerProps

export const DialogTrigger = ({ children, className, ...props}: DialogTriggerProps) => (
    <Dialog.Trigger className={cn('cursor-pointer text-green-100 bg-transparent', className)} {...props}>
        {children}
    </Dialog.Trigger>
)