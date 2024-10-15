import RegisterClient from "../Components/Form"


export default async function RegisterAdmin(){

       return (
        <>
            <p className="text-rose-700 text-center font-extrabold text-xl">Register Admin</p>
            <RegisterClient noAdmin={false} />
       </>
    )
}