"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { ContactField } from "@/components/contact/contact-field";
import {
  formatLastName,
  formatFirstName,
  formatMessage,
  validateLastName,
  validateFirstName,
  validateEmail,
  validateMessage,
  MESSAGE_MAX_LENGTH,
} from "@/lib/contact-validation";

interface FormState {
  lastName: string;
  firstName: string;
  email: string;
  message: string;
}

interface TouchedState {
  lastName: boolean;
  firstName: boolean;
  email: boolean;
  message: boolean;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialForm: FormState = { lastName: "", firstName: "", email: "", message: "" };
const initialTouched: TouchedState = {
  lastName: false,
  firstName: false,
  email: false,
  message: false,
};

export function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>(initialForm);
  const [touched, setTouched] = useState<TouchedState>(initialTouched);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const lastNameResult = validateLastName(form.lastName);
  const firstNameResult = validateFirstName(form.firstName);
  const emailResult = validateEmail(form.email);
  const messageResult = validateMessage(form.message);

  const isFormValid =
    lastNameResult.valid && firstNameResult.valid && emailResult.valid && messageResult.valid;

  function touchAll() {
    setTouched({ lastName: true, firstName: true, email: true, message: true });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    touchAll();
    if (!isFormValid) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleReset() {
    setForm(initialForm);
    setTouched(initialTouched);
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.4 }}
        className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-[0_20px_50px_-25px_rgba(10,15,30,0.25)]"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        </div>
        <p className="mt-4 font-display text-lg font-bold text-navy-950">
          Merci {form.firstName || ""}. Nous avons bien reçu votre message et
          reviendrons vers vous prochainement.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Votre demande a bien été transmise à OpenDoorsClass.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-mist"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_20px_50px_-25px_rgba(10,15,30,0.25)] sm:p-8">
      <h2 className="font-display text-xl font-bold text-navy-950">Écrivez-nous</h2>
      <p className="mt-1.5 text-sm text-slate-500">
        Prenez quelques instants pour nous expliquer votre besoin.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <ContactField
            label="Nom"
            placeholder="VOTRE NOM"
            value={form.lastName}
            onChange={(v) => setForm((f) => ({ ...f, lastName: formatLastName(v) }))}
            onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
            touched={touched.lastName}
            error={lastNameResult.error}
            autoComplete="family-name"
          />
          <ContactField
            label="Prénom"
            placeholder="Nathan"
            value={form.firstName}
            onChange={(v) => setForm((f) => ({ ...f, firstName: formatFirstName(v) }))}
            onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
            touched={touched.firstName}
            error={firstNameResult.error}
            autoComplete="given-name"
          />
        </div>

        <ContactField
          label="Adresse e-mail"
          placeholder="vous@exemple.com"
          type="email"
          value={form.email}
          onChange={(v) => setForm((f) => ({ ...f, email: v }))}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          touched={touched.email}
          error={emailResult.error}
          autoComplete="email"
        />

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label htmlFor="contact-message" className="text-sm font-medium text-navy-950">
              Votre message
            </label>
            <span className="font-mono text-xs text-slate-400">
              {form.message.length} / {MESSAGE_MAX_LENGTH}
            </span>
          </div>
          <textarea
            id="contact-message"
            rows={5}
            value={form.message}
            maxLength={MESSAGE_MAX_LENGTH}
            placeholder="Bonjour OpenDoorsClass, je souhaiterais..."
            onChange={(e) => setForm((f) => ({ ...f, message: formatMessage(e.target.value) }))}
            onBlur={() => setTouched((t) => ({ ...t, message: true }))}
            aria-invalid={touched.message && !!messageResult.error}
            aria-describedby={touched.message && messageResult.error ? "message-error" : undefined}
            className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-navy-950 placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 ${
              touched.message && messageResult.error
                ? "border-red-300 focus:ring-red-200"
                : "border-black/10 focus:border-gold-600/50 focus:ring-gold-600/20"
            }`}
          />
          {touched.message && messageResult.error && (
            <p id="message-error" role="alert" className="mt-1.5 text-xs font-medium text-red-500">
              {messageResult.error}
            </p>
          )}
        </div>

        <AnimatePresence>
          {status === "error" && (
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              className="flex items-start gap-2.5 overflow-hidden rounded-xl bg-red-50 p-4"
            >
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              <p className="text-sm text-red-700">
                Impossible d&apos;envoyer votre message pour le moment.
                Veuillez vérifier votre connexion et réessayer.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-navy-950 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer mon message
              <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}