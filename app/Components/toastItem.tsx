"use client"
import { toast } from "sonner"




type ToastType = "success" | "error" | "info" | "warning" | "default"


export function showToast(
    type:ToastType, content:string
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
     }
     
       
    }


