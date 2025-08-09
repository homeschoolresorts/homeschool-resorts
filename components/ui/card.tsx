import * as React from "react";
import { clsx } from "clsx";
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={clsx("rounded-xl border bg-white/80 dark:bg-slate-900/80 dark:border-slate-800 shadow-sm", className)} {...props} />; }
export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={clsx("p-4 border-b dark:border-slate-800", className)} {...props} />; }
export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) { return <h3 className={clsx("font-semibold", className)} {...props} />; }
export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={clsx("p-4", className)} {...props} />; }
export default Card;
