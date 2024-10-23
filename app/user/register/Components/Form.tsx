"use client"
import { Role } from "@/types";
import { showToast } from "@/app/Components/toastItem";
import { action } from "../Components/actions/serverCall";
import { useRef } from "react";
import { signPwd } from "./actions/signPwd";


export default function Register({noAdmin}: {noAdmin: boolean}){

    const formRef = useRef<HTMLFormElement>(null)

    const formaction = async (formdata: FormData) => {
        const unsignedPwd = formdata.get("password") as string;
        const password = await signPwd(unsignedPwd)
        const data = {
            firstName: formdata.get("firstName") as string,
            lastName: formdata.get("lastName") as string,
            email: formdata.get("email") as string,
            password: password,
            role: formdata.get("role")? formdata.get("role") as Role : Role.CLIENT as Role
        }
        
        try {
            const newUser = await action(data)

            if(newUser){
              showToast("success", "User created successfully")
            }
        
            formRef?.current?.reset()
        } catch (err: any) {
            console.log(err)
            showToast("error", "An Error occured. Please try again!")
            formRef?.current?.reset()
        }
    }


    return (
        <div className="p-8 justify-center h-screen flex">
            
            <form className="flex flex-col gap-10" action={formaction} ref={formRef}>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName">LastName</label>
                        <input
                            className="bg-gray-200 shadow-inner p-2 flex-1"
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        className="bg-gray-200 shadow-inner p-2 flex-1"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                    />

                    {noAdmin? <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input
                            className="bg-gray-200 shadow-inner p-2 flex-1"
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                        />
                    </div>
                    :
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-col">
                                <label htmlFor="password">Password</label>
                                <input
                                    className="bg-gray-200 shadow-inner p-2 flex-1"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    required
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <label>Select a User role</label>
                                <select
                                    className="bg-gray-200 shadow-inner p-2 flex-1"
                                    id="roles" name="role"
                                >

                                    <option value="CLIENT" >User</option>
                                    <option value="ADMIN">Admin</option>

                                </select>
                            </div>
                        </div>}
                </div>

                <button
                    className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
                    type="submit"
                >
                    Sign Up
                </button>
            </form>
            <div>

            </div>
        </div>
    )
}