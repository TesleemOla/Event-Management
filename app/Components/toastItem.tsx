"use client"
import { toast, ToastContent, ToastOptions } from "react-toastify"


export const defaultToastOptions: ToastOptions = {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    // transition: Slide,
}

type ToastType = "success" | "error" | "info" | "warning" | "default"


export const ShowToast = (
    type: ToastType,
    content: ToastContent,
    options: Partial<ToastOptions> = defaultToastOptions
) => {
    switch (type) {
        case "success":
            return toast.success(content, options);
        case "error":
            return toast.error(content, options);
        case "info":
            return toast.info(content, options);
        case "warning":
            return toast.warn(content, options);
        default:
            return toast(content, options);
    }
}