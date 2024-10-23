

export async function login(formData: FormData, signIn:Function) {
    "use server"
    const username = formData.get("username")
    const password = formData.get("password")

    const response = await signIn("credentials", {
        redirect: true,
        callbackUrl: "/Events",
        email: username,
        password: password,
    })

    alert(response)

}