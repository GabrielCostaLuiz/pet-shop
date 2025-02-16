import FormRegister from "./form";

export default function Register() {
  return (
    <div className="bg-white relative lg:p-16 md:py-10 md:px-6 h-fit max-w-[620px] rounded-3xl max-lg:fixed max-lg:bottom-0 max-lg:min-w-full max-lg:p-6">
      <div className="text-center space-y-5 mb-10">
        <h1 className="font-bold text-2xl">Cria Conta</h1>
        <p className="text-sm">
          Bem vindo! Por favor coloque suas informações.
        </p>
      </div>

      <FormRegister />
    </div>
  );
}
