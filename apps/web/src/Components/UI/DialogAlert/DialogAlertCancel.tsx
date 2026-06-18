import { cn } from '@/utils'
import { AlertDialog } from 'radix-ui'
import type { PropsWithChildren } from 'react'

type DialogAlertCancelProps = PropsWithChildren<AlertDialog.AlertDialogCancelProps>

export const DialogAlertCancel = ({ children, className, ...props }: DialogAlertCancelProps) => (
    <AlertDialog.Cancel className={cn('text-green-100 w-28 rounded-lg cursor-pointer size-12 flex justify-center items-center', className)} {...props}>
        {children}
    </AlertDialog.Cancel>
)