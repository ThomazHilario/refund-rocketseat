import { cn } from '@/utils'
import { AlertDialog } from 'radix-ui'
import type { PropsWithChildren } from 'react'

type DialogAlertContentProps = PropsWithChildren<AlertDialog.AlertDialogContentProps>

export const DialogAlertContent = ({ children, className, ...props }: DialogAlertContentProps) => (
    <AlertDialog.Portal>
        <AlertDialog.Overlay className='inset-0 fixed bg-gray-100/80 transition-all duration-500'/>
        <AlertDialog.Content 
            className={cn('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-lg min-h-56 bg-gray-500 flex flex-col gap-4 rounded-lg p-10', className)} 
            {...props}
        >
            {children}
        </AlertDialog.Content>
    </AlertDialog.Portal>
)