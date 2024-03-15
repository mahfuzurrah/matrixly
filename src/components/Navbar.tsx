"use client";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/moving-border";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <header
        className={cn("fixed inset-x-0 mx-auto z-50 bg-[#FBF9FF]", className)}
      >
        <div className="container">
          <div>
            <Menu setActive={setActive}>
              <Link href={"/"}>
                {" "}
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item=" Pricing"
                ></MenuItem>
              </Link>
              <Link href={"/"}>
                {" "}
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item=" Log In"
                ></MenuItem>
              </Link>
              <Button borderRadius="12px" className="px-6 py-3 bg-primary">
                Sign Up
              </Button>
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
