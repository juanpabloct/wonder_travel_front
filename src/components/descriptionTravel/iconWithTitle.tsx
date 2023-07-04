import { ReactNode } from "react";

export const IconWithTitle = ({
  icon,
  text,
}: {
  icon: ReactNode;
  text: ReactNode;
}) => {
  return (
    <div className="flex gap-2 items-center">
      {icon}
      {text}
    </div>
  );
};
