import prisma from "@/lib/db"
import { sign } from "jsonwebtoken"
import { Regdata } from "@/types";
import { redirect } from "next/navigation";


const Register = async () => {

    async function formaction(formdata: FormData){
        "use server"
        let oldpwd  = formdata.get("password")
      
        formdata.set("password", sign(oldpwd?.toString(), process.env.JWT_SECRET as string))

        const updated = Object.fromEntries(Array.from(formdata.keys()).slice(1).map(key => [key, formdata.getAll(key).length > 1 ? formdata.getAll(key) : formdata.get(key)]))
        try{
        const newUser = await prisma.user.create({
            data: updated 
        })
        if(newUser){
            
            console.log(newUser)
            redirect("/Events")
        }
        } catch(err){
            
            console.log(err)
        }
        
    }
    // pages/index.js

        return (
            <div className="p-8 justify-center items-center h-screen flex">
               
                <form className="flex flex-col gap-10" action={formaction}>
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
                    </div>
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
        );
    };

   

   

export default Register