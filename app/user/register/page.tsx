import RegisterClient from "./Components/Form";





const Register = async () => {
    // pages/index.js
   
    console.log(process.env.JWT_SECRET)
        return (
           <RegisterClient noAdmin={true} />
        );
    };


   

   

export default Register