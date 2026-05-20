import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'

type DialogRootProps = PropsWithChildren & Dialog.DialogProps


export const DialogRoot = ({ children, ...props}: DialogRootProps) => (
    <Dialog.Root {...props}>
        {children}
    </Dialog.Root>
)