import { cn } from '@/utils'
import { AlertDialog } from 'radix-ui'
import type { PropsWithChildren } from 'react'

type DialogAlertDescriptionProps = PropsWithChildren<AlertDialog.AlertDialogDescriptionProps>

export const DialogAlertDescription = ({ children, className, ...props }: DialogAlertDescriptionProps) => (
    <AlertDialog.Description className={cn('text-md text-gray-200', className)} {...props}>
        {children}
    </AlertDialog.Description>
)