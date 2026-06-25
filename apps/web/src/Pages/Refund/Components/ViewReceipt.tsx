import { Button, DialogClose, DialogContent, DialogRoot, DialogTrigger, FileIcon, LoadingIcon } from "@/Components";

import { X, DownloadIcon } from 'lucide-react'

type ViewReceipt = {
    handleReceiptUrl: () => void;
    isPending: boolean;
    url: string | undefined
}

export const ViewReceipt = ({ handleReceiptUrl, url, isPending }: ViewReceipt) => {
    const imageUrl = import.meta.env.VITE_API_URL + url
    return (
        <DialogRoot>
            <DialogTrigger
            className="flex justify-center items-center gap-4"
                type="button" 
                onClick={handleReceiptUrl}
            >
                <FileIcon />
                Abrir Comprovante
            </DialogTrigger>

            <DialogContent className="flex items-center jusitfy-center">
                <DialogClose className="absolute p-2! top-0 right-0 bg-green-100 rounded-bl-sm">
                    <X className="text-white" size={16}/>
                </DialogClose>

                
                {isPending ? (
                    <LoadingIcon className="text-green-100! size-20" />
                ) : (
                    <img 
                        className="object-cover min-h-80 min-w-90 rounded-sm" 
                        src={imageUrl} 
                    />
                )}   

                {!isPending && (
                    <Button type="button" variant="primary">
                        <a className="flex justify-center items-center gap-4" href={imageUrl} download>
                            <DownloadIcon className="text-white"/>
                            Download
                        </a>
                    </Button>
                )}
            </DialogContent>
        </DialogRoot>
    )
}