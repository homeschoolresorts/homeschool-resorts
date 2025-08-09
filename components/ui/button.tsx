import * as React from "react";
import { clsx } from "clsx";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: "default" | "outline" | "secondary" | "ghost"; size?: "default" | "sm" | "icon"; }
const variantStyles: Record<string, string> = { default:"bg-indigo-600 text-white hover:bg-indigo-700", outline:"border border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800", secondary:"bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700", ghost:"hover:bg-slate-100 dark:hover:bg-slate-800", };
const sizeStyles: Record<string, string> = { default: "h-10 px-4 py-2", sm: "h-9 px-3", icon: "h-10 w-10 p-0 grid place-items-center" };
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "default", size = "default", ...props }, ref) => (
  <button ref={ref} className={clsx("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none", variantStyles[variant], sizeStyles[size], className)} {...props} />
));
Button.displayName = "Button";
export default Button;
