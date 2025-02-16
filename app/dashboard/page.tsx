import empyPet from "@/public/empy-pet.png";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full">
      <h2 className="text-5xl font-bold">Uh Oh!</h2>

      <p className="max-w-sm text-center text-lg text-gray-400">
        Looks like you have no profiles set up at this moment, add your pet now
      </p>

      <Image src={empyPet} alt="Imagem animais" />
    </div>
  );
}
