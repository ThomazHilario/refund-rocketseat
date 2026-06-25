import { cn } from '@/utils'
import { AlertDialog } from 'radix-ui'
import type { PropsWithChildren } from 'react'

type DialogAlertTriggerProps = PropsWithChildren<AlertDialog.AlertDialogTriggerProps>

export const DialogAlertTrigger = ({ children, className, ...props }: DialogAlertTriggerProps) => (
    <AlertDialog.Trigger className={cn('cursor-pointer', className)} {...props}>
        {children}
    </AlertDialog.Trigger>
)