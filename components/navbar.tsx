import { HomePath, ticketsPath } from "@/app/path";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Tickets } from "lucide-react";

const Navbar = () => {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between">
      <div>
        <Link
          href={HomePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <div className="flex gap-1 items-center ">
            <Tickets className="text-lg" />
            <h1 className="font-bold tracking-tight text-lg">Tickify</h1>
          </div>
        </Link>
      </div>
      <div>
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "outline" })}
        >
          tickets
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
