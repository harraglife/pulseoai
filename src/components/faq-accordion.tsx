"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqCategories } from "@/lib/faq-data";

export function FaqAccordion() {
  return (
    <div className="space-y-12">
      {faqCategories.map((category, catIndex) => (
        <section key={catIndex}>
          <h2 className="text-2xl font-semibold text-navy mb-6">
            {category.title}
          </h2>
          <Accordion className="rounded-xl bg-[#F8F9FA] px-4 md:px-6">
            {category.items.map((item, itemIndex) => (
              <AccordionItem
                key={itemIndex}
                className="border-b border-gray-200 last:border-b-0"
              >
                <AccordionTrigger className="py-4 sm:py-5 text-[15px] sm:text-base font-medium text-navy hover:text-cyan hover:no-underline text-left min-h-[48px]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy/80 leading-[1.7] pb-5 text-[15px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </div>
  );
}
