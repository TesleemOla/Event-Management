import prisma from "@/lib/db"
import { sign } from "jsonwebtoken"
import { redirect } from "next/navigation";
import { Role } from "@prisma/client";
import { showError, showSuccess, showToast } from "@/app/Components/toastItem";
import { toast } from "sonner";
import Swal from "sweetalert2";



const Register = async () => {

    async function formaction(formdata: FormData){
        "use server"
        let oldpwd  = formdata.get("password") as string 
        
        if(!oldpwd){
            throw new Error("Password is required")
        }
      
        formdata.set("password", sign(oldpwd, process.env.JWT_SECRET as string))

        const updated = Object.fromEntries(
            Array.from(formdata.keys()).slice(1).map(key => [key, formdata.getAll(key).length > 1 ? formdata.getAll(key) :
                 formdata.get(key)])) 

        const data = {
            firstName: updated.firstName as string,
            lastName: updated.lastName as string,
            email: updated.email as string,
            password: updated.password as string,
            role: updated.role as Role
        }
        try{
            const newUser = await prisma.user.create({
                data: data
            })
            console.log(newUser)
          newUser && 
          Swal.fire({
            title: "Auto close alert!",
            text: "User created successfully",
            icon: "success"
          })
        }
        catch(err){
            Swal.fire({
            title: "Error",
            text:"New User Created",
            icon: "error"
        }) 
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