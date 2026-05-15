type QuickAnswerProps = {
  question: string;
  answer: string;
};

export function QuickAnswer({ question, answer }: QuickAnswerProps) {
  return (
    <section className="mt-6 rounded-[24px] border border-[#DCE5F3] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAFF_100%)] p-4.5 shadow-[0_12px_28px_rgba(15,23,42,0.05)] sm:mt-8 sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan">
        Réponse rapide
      </p>
      <h2 className="mt-3 text-[18px] font-semibold tracking-[-0.03em] text-navy sm:text-[20px]">{question}</h2>
      <p className="mt-3 text-[14px] leading-6 text-navy/70 sm:text-[15px] sm:leading-7">{answer}</p>
    </section>
  );
}
