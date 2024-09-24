import { Regdata } from "@/types";


export async function action(data: Regdata) {

    try {
        const newUser = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const response = await newUser.json()
        return response

    }
    catch (err: any) {
        return err
    }
}
