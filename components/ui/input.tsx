import * as React from "react";
import { cn } from "@/lib/utils";

const field = "w-full min-h-12 rounded-2xl border border-[var(--stroke)] bg-[var(--glass2)] px-4 py-3 text-fg placeholder:text-muted/70";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input ref={ref} className={cn(field, className)} {...props} />
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => <textarea ref={ref} className={cn(field, "min-h-36", className)} {...props} />
);
Textarea.displayName = "Textarea";
