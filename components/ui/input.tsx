import * as React from "react";
import clsx from "clsx";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => { return (<input ref={ref} className={clsx("w-full rounded-md border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500", className)} {...props} />); });
Input.displayName = "Input";
export default Input;
