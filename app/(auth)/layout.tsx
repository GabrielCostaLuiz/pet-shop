import Image from "next/image";
import dogImg from "@/public/dog-auth.png";

export default function AuthRoot({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid max-lg:grid-cols-1 grid-cols-2 min-h-screen items-center justify-center gap-20 lg:px-5">
      <div className="relative h-screen flex max-lg:items-start items-end justify-center  ">
        <Image
          src={dogImg}
          alt="Cachorro com pelucia na boca"
          className="object-cover  lg:h-fit lg:w-fit"
        />
      </div>

      {children}
    </section>
  );
}
