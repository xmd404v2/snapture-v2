// components/Header.tsx
"use client";
import Image from "next/image";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar"



import Link from "next/link";

const MenuBar = () => {
  return (
    <nav>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Projects</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Create New<MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Manage Existing<MenubarShortcut>⌘M</MenubarShortcut></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Reports</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              View All<MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Analyze Tool<MenubarShortcut>⌘A</MenubarShortcut></MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {"\u00A0"}
        <MenubarMenu>
          <MenubarTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Create New<MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Manage Existing<MenubarShortcut>⌘M</MenubarShortcut></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
      </Menubar>
    </nav>
);
}

export { MenuBar }