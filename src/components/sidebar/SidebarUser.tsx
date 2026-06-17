"use client";

import { ChevronsUpDown, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuth } from "@/hooks/state-hooks/useAuth";
import LogOutModal from "../global/LogoutModal";
// import LogOutModal from '../global/LogoutModal'

export function SidebarUser() {
  const { isMobile } = useSidebar();
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth();

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src={"/images/icon-primary.png"} alt={"CV"} />
                    <AvatarFallback className="rounded-lg">CV</AvatarFallback>
                  </Avatar>
                </div>

                <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                  <>
                    <span className="truncate font-semibold">
                      {user?.name || "Admin"}
                    </span>
                    <span className="truncate text-xs">
                      {user?.email || "admin@yeti.com"}
                    </span>
                  </>
                </div>

                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage src={"/images/icon-primary.png"} alt={"CV"} />
                    <AvatarFallback className="rounded-lg">CV</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {" "}
                      {user?.name}
                    </span>
                    <span className="truncate text-xs">{user?.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>

              {/* <DropdownMenuSeparator /> */}
              {/* <ThemeSelect /> */}

              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setOpen(true)}>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
      <LogOutModal open={open} setOpen={setOpen} />
    </>
  );
}
