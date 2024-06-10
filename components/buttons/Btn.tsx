import { MouseEventHandler, ReactNode } from "react";

interface BtnProps {
  size?: "large" | "middle" | "small";
  block?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "default" | "dashed" | "text" | "link";
  color?: string;
  children: ReactNode;
  className?: string;
}

const Btn = ({
  size,
  block,
  onClick,
  type = "default",
  color,
  children,
  className,
}: BtnProps) => {
  

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Btn;
