"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, Quote, Check } from "lucide-react";

const steps = [
  {
    icon: Eye,
    label: "ÉTAPE 1",
    title: "L'IA vous voit",
    text: "Votre entreprise existe là où ChatGPT, Gemini et Perplexity cherchent leurs réponses.",
    ring: "bg-[#EAF0FF]",
    iconColor: "text-[#2547D0]",
    labelColor: "text-[#2547D0]",
  },
  {
    icon: Quote,
    label: "ÉTAPE 2",
    title: "L'IA vous cite",
    text: "Quand un client pose sa question, votre nom fait partie de la réponse de Claude ou Google.",
    ring: "bg-[#F0EDFC]",
    iconColor: "text-[#7F77DD]",
    labelColor: "text-[#7F77DD]",
  },
  {
    icon: Check,
    label: "ÉTAPE 3",
    title: "Le client vous choisit",
    text: "Il vous trouve, vous contacte, et devient client.",
    ring: "bg-[#E6F5EE]",
    iconColor: "text-[#1D9E75]",
    labelColor: "text-[#1D9E75]",
  },
];

export function JourneySteps() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mt-14">
      {/* Ligne de progression desktop, derrière les icônes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[42px] hidden h-[2px] bg-[linear-gradient(90deg,#2547D0_0%,#7F77DD_50%,#1D9E75_100%)] opacity-25 lg:block"
      />

      <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.label}
              className="flex flex-col items-center text-center transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${index * 160}ms`,
              }}
            >
              <div
                className={`relative flex size-[84px] items-center justify-center rounded-full border-4 border-white shadow-[0_14px_30px_rgba(15,23,42,0.08)] ${step.ring}`}
              >
                <Icon className={`size-8 ${step.iconColor}`} strokeWidth={2.2} />
              </div>
              <span
                className={`mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] ${step.labelColor}`}
              >
                {step.label}
              </span>
              <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-navy">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[320px] text-[15px] leading-7 text-navy/58">
                {step.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
