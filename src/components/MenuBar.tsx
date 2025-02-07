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

export function Header() {
  return (
    <header className="bg-background border-b border-border py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
            <Image
                className="dak:invert"
                src="/snapture_logo.svg"
                alt="Next.js logo"
                width={104}
                height={32}
                priority
            />
        </Link>
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
      </div>
    </header>
  );
}
