"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { services } from "@/lib/data";
import { Button } from "./ui/button";
import { Input, Textarea } from "./ui/input";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "General enquiry" },
  });

  async function onSubmit(data: ContactInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const err = (m?: string) => m && <p role="alert" className="mt-1 text-sm text-red-500">{m}</p>;
  const lbl = "mb-1.5 mt-4 block font-semibold";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass p-7" noValidate>
      <h2 className="font-display text-2xl font-bold">Send a message</h2>
      <label htmlFor="name" className={lbl}>Name</label>
      <Input id="name" autoComplete="name" {...register("name")} />{err(errors.name?.message)}
      <label htmlFor="email" className={lbl}>Email</label>
      <Input id="email" type="email" autoComplete="email" {...register("email")} />{err(errors.email?.message)}
      <label htmlFor="service" className={lbl}>Service</label>
      <select id="service" {...register("service")} className="min-h-12 w-full rounded-2xl border border-[var(--stroke)] bg-[var(--bg)] px-4">
        <option>General enquiry</option>
        {services.map((s) => <option key={s.title}>{s.title}</option>)}
      </select>
      <label htmlFor="message" className={lbl}>Project details</label>
      <Textarea id="message" {...register("message")} />{err(errors.message?.message)}
      <Button type="submit" disabled={isSubmitting} className="mt-6">{isSubmitting ? "Sending..." : "Send message"}</Button>
      {status === "sent" && <p role="status" className="mt-4 font-semibold text-green-600">Message sent. We will reply within one business day.</p>}
      {status === "error" && <p role="alert" className="mt-4 font-semibold text-red-500">Could not send your message. Try again or email contact@technusoft.com.</p>}
    </form>
  );
}
