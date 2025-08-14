import Heading from "@/components/heading";
import Link from "next/link";
import React from "react";
import { ticketsPath } from "./path";

const Home = () => {
  return (
    <div>
      <Heading
        title="HomePage"
        desc={
          "Discover events, book tickets, and enjoy seamless access—all in one place."
        }
      />

      <Link href={ticketsPath()}>
        <div className="underline text-sm text-muted-foreground">
          Go to the tickets
        </div>
      </Link>
    </div>
  );
};

export default Home;
