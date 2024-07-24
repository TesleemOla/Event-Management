
import  { useFormik } from "formik";
import Yup from "yup"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { signIn } from "next-auth/react";
import Link from "next/link";
import SendButton from "@/app/Components/SendButton";
import prisma from "@prisma/client";
import { sign, verify } from "jsonwebtoken"

const Register = async () => {
    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         date: '',
    //         location: '',
    //     },
    //     validationSchema: Yup.object({
    //         name: Yup.string().required('Required'),
    //         date: Yup.date().required('Required'),
    //         location: Yup.string().required('Required'),
    //     }),
    //     onSubmit: (values) => {
    //         axios.post('/api/events', values).then(response => {
    //             // Handle success
    //         });
    //     },
    // });
    async function formaction(formdata){
        "use server"
        const oldpwd = formdata.get("password")
        formdata.set("password", sign(oldpwd, process.env.JWT_SECRET))
        const updated = formdata
          
        console.log(updated)

        const decoded = verify(formdata.get("password"), process.env.JWT_SECRET)
        console.log(decoded)
        // const newUser = prisma.user.create()
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
                        />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label>Select a User role</label>
                            <select
                                className="bg-gray-200 shadow-inner p-2 flex-1"
                                id="roles" name="role"
                            >
                               
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                
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
            </div>
        );
    };

   

    // return (
//         <div className="text-center mx-auto my-2">
//             <p>Register</p>
//             {/* <button onClick={()=>signIn()}>Sign IN</button> */}
//         <Box
//             component="form"
//             sx={{
//                 '& .MuiTextField-root': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//             className="grid grid-cols-2 items-center text-center"
//             action={formaction}
//         >
//         <div>
//             <TextField
//                 required
//                 id="outline-required"
//                 label="FirstName"
//                 defaultValue=""
//                 variant="filled"
//                 InputProps={{
//                     name: "firstName"
//                 }}
//             />
//             <TextField
//                 required
//                 id="outline-required"
//                 label="LastName"
//                 variant="filled"
//                 InputProps={{
//                     name: "lastName"
//                 }}
//             />
//                 <TextField
//                 required
//                     id="outline-required"
//                     label="Email"
//                     defaultValue=""
//                     InputProps={{
//                         name: "email",
//                         type:"email"
//                     }}
//                     variant="filled"
//                 />
//             <TextField
//             required
//                 id="filled-password-input"
//                 label="Password"
//                 type="password"
//                 autoComplete="current-password"
//                 variant="filled"
//                 name="password"
//             />
          
         

//                 <FormControl fullWidth>
//                     <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-label"
//                         id="demo-simple-select"
//                         // value={age}
//                         label="Age"
//                         name="age"
//                     >
//                         <MenuItem value="CLIENT">CLIENT</MenuItem>
//                         <MenuItem value="ADMIN">ADMIN</MenuItem>
                        
//                     </Select>
//                     <SendButton btnfunc="Sign Up" />
//                 </FormControl>
//         </div>
//         </Box>
//         </div>
// )}

export default Register