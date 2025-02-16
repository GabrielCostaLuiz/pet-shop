"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface InputsForm {
  name: "password" | "email";
  type: string;
  placeholder: string;
}

export default function FormLogin() {
  const formSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
  });

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formData: { email: string; password: string }) => {
    console.log(formData);
  };

  const inputs: InputsForm[] = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <div key={input.name} className="space-y-6">
          <input
            className="rounded-lg p-4 border w-full bg-white"
            type={input.type}
            id={input.type}
            placeholder={input.placeholder}
            {...register(input.name)}
          />
          <p>
            {formState.errors[input.name]?.message && (
              <span className="text-red-500 text-sm">
                {formState.errors[input.name]?.message as string}
              </span>
            )}
          </p>
        </div>
      ))}

      <Link href="#" className="text-blue-500">
        Esqueceu a senha ?
      </Link>

      <div className="space-y-8">
        <Button
          type="submit"
          className="bg-blue-500 text-white w-full py-6 rounded-lg mt-16"
        >
          Entrar
        </Button>

        <p className="text-center">
          Não tem uma conta?{" "}
          <Link href="/register" className="text-blue-500">
            Faça o registro aqui
          </Link>
        </p>
      </div>
    </form>
  );
}
