import { toast } from 'sonner'

export const UseToast = () => {
  const success = (message: string) => {
    toast.success(message)
  }

  const error = (message: string) => {
    toast.error(message)
  }

  return {
    success,
    error,
  }
}