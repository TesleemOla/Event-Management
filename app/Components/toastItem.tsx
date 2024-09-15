"use client"
import { toast } from "sonner"


// export const defaultToastOptions: ToastOptions = {
//     position: "top-center",
//     autoClose: 4000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "colored",
//     transition: Slide,
// }

type ToastType = "success" | "error" | "info" | "warning" | "default"


export function showToast (
    type: ToastType,
    content: string
    // options: Partial<ToastOptions> = defaultToastOptions
) {
    switch (type) {
        case "success":
             toast.success(content);
        case "error":
             toast.error(content);
        case "info":
             toast.info(content);
        case "warning":
             toast.warning(content);
        default:
             toast(content);
    }
}