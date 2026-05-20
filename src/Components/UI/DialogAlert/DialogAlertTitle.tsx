import { cn } from '@/utils'
import { AlertDialog } from 'radix-ui'
import type { PropsWithChildren } from 'react'

type DialogAlertTitleProps = PropsWithChildren<AlertDialog.AlertDialogTitleProps>

export const DialogAlertTitle = ({ children, className, ...props }: DialogAlertTitleProps) => (
    <AlertDialog.Title className={cn('text-xl font-bold text-gray-100', className)} {...props}>
        {children}
    </AlertDialog.Title>
)