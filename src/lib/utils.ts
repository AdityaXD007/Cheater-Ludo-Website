import { clsx, type ClassValue } from "clsx"
import { toast } from "sonner"
import { twMerge } from "tailwind-merge"
import { AxiosError } from 'axios'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const showErrorToast = (error: AxiosError | unknown) => {
  if (error instanceof AxiosError) {
    toast.error(error.response?.data.message)
  } else {
    toast.error('Something went wrong')
  }
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
