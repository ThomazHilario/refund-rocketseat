import { cn } from '@/utils'
import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'

type DialogContentProps = PropsWithChildren & Dialog.DialogContentProps

export const DialogContent = ({ children, className, ...props}: DialogContentProps) => (
    <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-gray-100/80 transition-all [data-state="open"]:ease-out [data-state="open"]:duration-500'/>
        <Dialog.Content className={cn('transition absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-lg bg-gray-300 flex flex-col gap-4 rounded-lg p-10 [data-state="open"]:ease-out [data-state="open"]:duration-500', className)} {...props}>
            {children}
        </Dialog.Content>
    </Dialog.Portal>
)