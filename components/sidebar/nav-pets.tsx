/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Plus } from "lucide-react";
import { SidebarGroup } from "../ui/sidebar";
import { Button } from "../ui/button";
import { useState } from "react";

export default function NavPets() {
  const [pets, setPets] = useState([]);

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <p className="text-sm">Seus Pets</p>

      <div className="grid grid-cols-2 gap-5 mt-3">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <div
              key={pet}
              className="w-fit flex flex-col items-center justify-center"
            >
              <Button className="px-5 py-7 w-fit bg-gray-800 rounded-full border hover:scale-105 transition-all mb-1 border-white">
                <Plus />
              </Button>
              <p>Add Novo</p>
            </div>
          ))
        ) : (
          <div className="w-fit flex flex-col items-center justify-center">
            <Button className="px-5 py-7 w-fit bg-gray-800 rounded-full border hover:scale-105 transition-all mb-1 border-white">
              <Plus />
            </Button>
            <p>Add Novo</p>
          </div>
        )}
      </div>
    </SidebarGroup>
  );
}
