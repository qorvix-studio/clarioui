import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function Button({ children, className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      className={["aui-button", className].filter(Boolean).join(" ")}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

