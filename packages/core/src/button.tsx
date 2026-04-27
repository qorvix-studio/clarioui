import {
  Button as AriaButton,
  composeRenderProps,
  type ButtonProps as AriaButtonProps
} from "react-aria-components";

export interface ButtonProps extends AriaButtonProps {
  variant?: "solid" | "ghost";
}

export function Button({
  children,
  className,
  variant = "solid",
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      className={composeRenderProps(className, (providedClassName) =>
        ["aui-button", `aui-button--${variant}`, providedClassName].filter(Boolean).join(" ")
      )}
      data-variant={variant}
      {...props}
    >
      {children}
    </AriaButton>
  );
}
