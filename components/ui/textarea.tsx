import * as React from "react";
import { clsx } from "clsx";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => { return (<textarea ref={ref} className={clsx("w-full rounded-md border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500", className)} {...props} />); });
Textarea.displayName = "Textarea";
export default Textarea;
