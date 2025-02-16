import dogImg from '@/public/dog-login.png'
import Image from 'next/image';
import userFrame from "@/public/userFrame.png"

export default function Login() {
  const inputs = [
    {
      name: "email",
      type: "email",
      placeholder: "Email"
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password"
    }
  ]



  return (
    <section className='flex min-h-screen items-center justify-center px-10'>


   




        <div className="relative h-screen max-w-[660px] ">
        <Image src={dogImg} alt='cachorro Da Tela' className='object-cover w-full h-full'/>
        </div>

        <div className="max-md:px-5 pt-32 px-[70px] pb-[70px] bg-white rounded-2xl h-fit max-md:min-w-full min-w-[620px]  relative ">

<div className='absolute -top-16 bg-white rounded-full left-[40%] transform-[translate(-50%, -50%)] p-5 max-md:hidden'>
<Image src={userFrame} className='   ' alt='cachorro Da Tela'/>
</div>
      

          <div className='text-center space-y-5 '>
          <h1 className='font-bold text-2xl'>Create Account</h1>
          <p className='text-sm'>Bem vindo! Por favor coloque suas informações.</p>
          </div>
      

        <form className='mt-10 mb-10 space-y-6 flex flex-col' action="form-action">
        {inputs.map((input) => (
            <input className='rounded-lg p-4 border' type={input.type}  id={input.type} placeholder={input.placeholder} />
        ))}
    
          <button type='submit' className='!mt-[91px] w-full p-4 rounded-lg bg-blue-500 text-white'>
            Create Account
          </button>
        </form>

        <p className='text-center'>Already have an account <a href="link-login" className='text-blue-500'>Log in here</a></p>
        </div>
    </section>
  );
}