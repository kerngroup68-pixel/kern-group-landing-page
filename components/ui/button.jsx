import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-slate-950 text-white hover:bg-slate-800",
  secondary: "bg-white text-slate-950 hover:bg-slate-100",
};

export function Button({
  className = "",
  variant = "default",
  asChild = false,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    variants[variant] || variants.default,
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
