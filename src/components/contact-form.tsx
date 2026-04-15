"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
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
      website: (form.elements.namedItem("website") as HTMLInputElement).value.trim(),
      city: (form.elements.namedItem("city") as HTMLInputElement).value.trim(),
      sector: (form.elements.namedItem("sector") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    // Client-side validation
    if (!data.name || !data.email || !data.hotel) {
      setErrorMessage("Veuillez remplir les champs obligatoires (nom, email, entreprise).");
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
        err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-sm border border-gray-100 text-center">
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-navy">Demande envoy&eacute;e !</h3>
        <p className="mt-3 text-navy/70 leading-relaxed">
          Merci ! Nous revenons vers vous sous 48&nbsp;h avec votre rapport
          d&apos;audit GEO personnalis&eacute;.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6"
    >
      {/* Error banner */}
      {status === "error" && errorMessage && (
        <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4">
          <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* Nom */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-navy">
          Nom <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Jean Dupont"
          className="h-12 rounded-lg border-gray-200 text-base focus-visible:border-cyan focus-visible:ring-cyan/30"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-navy">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jean@monhotel.fr"
          className="h-12 rounded-lg border-gray-200 text-base focus-visible:border-cyan focus-visible:ring-cyan/30"
        />
      </div>

      {/* Téléphone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-navy">
          T&eacute;l&eacute;phone
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="06 12 34 56 78"
          className="h-12 rounded-lg border-gray-200 text-base focus-visible:border-cyan focus-visible:ring-cyan/30"
        />
      </div>

      {/* Nom de l'entreprise */}
      <div className="space-y-2">
        <Label htmlFor="hotel" className="text-navy">
          Nom de l&apos;entreprise <span className="text-red-500">*</span>
        </Label>
        <Input
          id="hotel"
          name="hotel"
          required
          placeholder="Mon entreprise"
          className="h-12 rounded-lg border-gray-200 text-base focus-visible:border-cyan focus-visible:ring-cyan/30"
        />
      </div>

      {/* Site web */}
      <div className="space-y-2">
        <Label htmlFor="website" className="text-navy">
          Site web
        </Label>
        <Input
          id="website"
          name="website"
          type="url"
          placeholder="www.monentreprise.fr"
          className="h-12 rounded-lg border-gray-200 text-base focus-visible:border-cyan focus-visible:ring-cyan/30"
        />
      </div>

      {/* Ville */}
      <div className="space-y-2">
        <Label htmlFor="city" className="text-navy">
          Ville
        </Label>
        <Input
          id="city"
          name="city"
          placeholder="Nantes"
          className="h-12 rounded-lg border-gray-200 text-base focus-visible:border-cyan focus-visible:ring-cyan/30"
        />
      </div>

      {/* Secteur d'activité */}
      <div className="space-y-2">
        <Label htmlFor="sector" className="text-navy">
          Secteur d&apos;activit&eacute;
        </Label>
        <select
          id="sector"
          name="sector"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background h-12 rounded-lg border-gray-200 focus:border-cyan focus:ring-cyan/30 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            S&eacute;lectionnez votre secteur
          </option>
          <option value="hotellerie">H&ocirc;tellerie</option>
          <option value="restauration">Restauration</option>
          <option value="commerce">Commerce</option>
          <option value="services-b2b">Services B2B</option>
          <option value="tourisme-loisirs">Tourisme et loisirs</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-navy">
          Message (optionnel)
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Pr&eacute;cisez vos attentes ou questions..."
          className="rounded-lg border-gray-200 text-base focus-visible:border-cyan focus-visible:ring-cyan/30"
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-cyan hover:bg-cyan-dark text-white font-semibold h-14 sm:h-12 rounded-full text-base"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Recevoir mon audit gratuit
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}
