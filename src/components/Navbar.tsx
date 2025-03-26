"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href="/">
                Home        
            </Link>
            
            <MenuItem setActive={setActive} active={active} item="Courses">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/courses">All Courses</HoveredLink>
                    <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
                    <HoveredLink href="/seo">Advanced Composition</HoveredLink>
                    <HoveredLink href="/seo">Songwriting</HoveredLink>
                    <HoveredLink href="/seo">Music Production</HoveredLink>
                </div>
            </MenuItem>
            <Link href={"/contact"}>
                Contact
            </Link>
            
        </Menu>
    </div>
  )
}

export default Navbar