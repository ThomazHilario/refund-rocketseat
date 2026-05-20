import { cn } from '@/utils'
import { AlertDialog } from 'radix-ui'
import type { PropsWithChildren } from 'react'

type DialogAlertActionProps = PropsWithChildren<AlertDialog.AlertDialogActionProps>

export const DialogAlertAction = ({ children, className, ...props }: DialogAlertActionProps) => (
    <AlertDialog.Action 
        className={cn('bg-green-100 w-28 text-white size-12 flex justify-center items-center rounded-lg cursor-pointer', className)} 
        {...props}
    >
        {children}
    </AlertDialog.Action>
)