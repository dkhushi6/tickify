import React from "react";
import { Separator } from "./ui/separator";
type HeadingProps = {
  title: string;
  desc?: string;
};
const Heading = ({ title, desc }: HeadingProps) => {
  return (
    <div className="flex-1 flex flex-col gap-y-2">
      <div className="">
        <div className="text-3xl font-bold tracking-tight ">{title}</div>
        {desc && (
          <div className="text-muted-foreground text-sm">{desc}</div>
        )}{" "}
      </div>
      <Separator />
    </div>
  );
};

export default Heading;
