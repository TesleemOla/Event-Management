"use client"
import React, { useActionState } from 'react'
import { useFormState } from 'react-dom'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { showToast } from '@/app/Components/toastItem'






const Login = () => {

    async function handleLogin( formData: FormData) {
        const username = formData.get("username")
        const password = formData.get("password") as string

        
    
        const response = await signIn("credentials", {
            redirect: true,
            callbackUrl: "/Events",
            email: username,
            password
        })

        if(response){
            showToast("success", "Successfully signed in")
        }else{
            showToast("error", "error signing in!")
        }

    }
   

    return (
        <div className=" flex-center min-h-screen mx-auto w-3/5 md:w-1/5
    h-3/4 md:h:2/5">

            <p className="text-xl text-blue-700">Login </p>
            <form className="flex flex-col border-black border-solid border-2 rounded-lg p-4"
                action={handleLogin}
            >
                <div className="flex flex-col gap-3">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="username" id="Email" className='border-black border-2 border-solid p-2' required />
                </div>
                <div className="flex flex-col gap-3 my-3">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" id="Password" className='border-black border-2 border-solid p-2' required />
                </div>

                <button className="bg-green-700 text-white  py-2">
                    LogIn
                </button>
            </form>
            <p> Dont have an account?</p>
            <Link href="/register">Register</Link>
        </div>
    )
}

export default Login