import { toast, type ToastOptions } from 'vue3-toastify'

export function useToast() {
  const notify = (msg: string, type?: string) => {
    toast(msg, {
      autoClose: 1000,
      position: toast.POSITION.TOP_RIGHT,
      type
    } as ToastOptions)
  }

  return {
    notify
  }
}
