import { HomePath, ticketsPath } from "@/app/path";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between">
      <div>
        <Link href={HomePath()}>Home</Link>
      </div>
      <div>
        <Link href={ticketsPath()}>tickets</Link>
      </div>
    </div>
  );
};

export default Navbar;
