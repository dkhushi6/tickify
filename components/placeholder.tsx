import { LucideMessageCircleWarning } from "lucide-react";
import React, { cloneElement, JSX, ReactElement } from "react";
type PlaceholderProps = {
  label: string;
  icon?: ReactElement<{ className?: string }>;
  button?: ReactElement<{ className?: string }>;
};
const Placeholder = ({
  icon = <LucideMessageCircleWarning />,
  label,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, { className: "h-16 w-16" })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, { className: "h-10" })}
    </div>
  );
};

export default Placeholder;
