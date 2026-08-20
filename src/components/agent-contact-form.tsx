"use client";

import { useState, type FormEvent } from "react";

/**
 * Variante COURTE du formulaire de contact, pour la page /agents-ia.
 * Le composant ContactForm existant (home + /contact) n'est pas modifie.
 * Meme logique et MEME endpoint : POST /api/contact.
 * L'API attend name, email et hotel (entreprise) ; phone et message sont
 * optionnels. Les champs non demandes ici sont simplement envoyes vides.
 */

type Status = "idle" | "submitting" | "success" | "error";

export function AgentContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      hotel: (form.elements.namedItem("hotel") as HTMLInputElement).value.trim(),
      website: "",
      city: "",
      sector: "",
      message: (
        form.elements.namedItem("message") as HTMLTextAreaElement
      ).value.trim(),
    };

    if (!data.name || !data.email || !data.hotel) {
      setErrorMessage(
        "Veuillez remplir les champs obligatoires (nom, email, entreprise)."
      );
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Erreur lors de l'envoi.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Veuillez réessayer."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="pa-form-done">
        <p className="pa-form-done-title">Demande envoyée.</p>
        <p className="pa-form-done-text">
          Merci. Je reviens vers vous sous 24h pour cadrer votre premier agent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="pa-form" noValidate>
      {status === "error" && errorMessage && (
        <p className="pa-form-error" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="pa-field">
        <label htmlFor="ag-name">
          Nom et prénom <span aria-hidden>*</span>
        </label>
        <input id="ag-name" name="name" type="text" required placeholder="Jean Dupont" />
      </div>

      <div className="pa-field">
        <label htmlFor="ag-email">
          Email <span aria-hidden>*</span>
        </label>
        <input id="ag-email" name="email" type="email" required placeholder="jean@monentreprise.fr" />
      </div>

      <div className="pa-field">
        <label htmlFor="ag-phone">Téléphone</label>
        <input id="ag-phone" name="phone" type="tel" placeholder="06 12 34 56 78" />
      </div>

      <div className="pa-field">
        <label htmlFor="ag-hotel">
          Entreprise <span aria-hidden>*</span>
        </label>
        <input id="ag-hotel" name="hotel" type="text" required placeholder="Mon entreprise" />
      </div>

      <div className="pa-field pa-field-full">
        <label htmlFor="ag-message">
          Quelle tâche vous fait perdre le plus de temps aujourd&apos;hui ?
        </label>
        <textarea
          id="ag-message"
          name="message"
          rows={4}
          placeholder="Les relances de devis, le tri des mails, la préparation des dossiers…"
        />
      </div>

      <button type="submit" disabled={status === "submitting"} className="pa-btn pa-btn-primary pa-form-submit">
        <span>{status === "submitting" ? "Envoi en cours…" : "Cadrer mon agent"}</span>
      </button>
    </form>
  );
}
