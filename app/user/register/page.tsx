import RegisterClient from "./Components/Form";





const Register = () => {
    
        return (
            <>
                <p className="text-rose-700 text-center font-extrabold text-xl">Register User</p>
                <RegisterClient noAdmin={true} />
           </>
        );
    };


   

   

export default Register