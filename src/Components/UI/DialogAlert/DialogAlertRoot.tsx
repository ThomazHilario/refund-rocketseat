import { AlertDialog } from 'radix-ui'
import type { PropsWithChildren } from 'react'

type DialogAlertRootProps = PropsWithChildren<AlertDialog.AlertDialogProps>

export const DialogAlertRoot = ({ children, ...props }: DialogAlertRootProps) => (
    <AlertDialog.Root {...props}>
        {children}
    </AlertDialog.Root>
)