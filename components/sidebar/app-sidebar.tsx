"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,

  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import logo from "@/public/logo.png";

import {
  BookOpen,
  Bot,

  LifeBuoy,
  Send,
  SquareTerminal,
} from "lucide-react";
import NavPets from "./nav-pets";
import Image from "next/image";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "Contatos",
        url: "/contact",
        icon: Bot,
      },
      {
        title: "Calendario",
        url: "/calendar",
        icon: BookOpen,
      },
      //   {
      //     title: "Settings",
      //     url: "#",
      //     icon: Settings2,
      //     items: [
      //       {
      //         title: "General",
      //         url: "#",
      //       },
      //       {
      //         title: "Team",
      //         url: "#",
      //       },
      //       {
      //         title: "Billing",
      //         url: "#",
      //       },
      //       {
      //         title: "Limits",
      //         url: "#",
      //       },
      //     ],
      //   },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "#",
        icon: Send,
      },
    ],
  };
  return (
    <Sidebar
      className="!border-none  px-5 text-white bg-[#2a3240]"
      variant="inset"
      {...props}
    >
      <SidebarHeader className="bg-[#2a3240] ">
        <SidebarMenu>
          <SidebarMenuItem>
            <div>
              {/* <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a> */}
              <Image src={logo} alt="Logo" className="mx-auto" />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-[#2a3240] overflow-x-hidden">
        <div className="space-y-7 mt-5">
        <SidebarSeparator className=" bg-gray-700 w-full" />
          <NavPets />
          <SidebarSeparator className=" bg-gray-700" />
          <NavMain items={data.navMain} />
        </div>

        <NavSecondary items={data.navSecondary} className="mt-auto px-0" />
      </SidebarContent>
      <SidebarFooter className="bg-[#2a3240] px-0">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
