import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-sans text-sm font-medium transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-copper text-ink hover:bg-copper/90",
    ghost: "bg-transparent text-paper border border-line hover:border-copper/60 hover:text-copper",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
