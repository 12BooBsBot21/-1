import { useState } from 'react';
import { faqItems } from '../../data/faq';
import { Section } from '../Section';

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(faqItems[0]?.id ?? null);

  return (
    <Section id="faq" title="Вопрос-ответ" subtitle="Коротко отвечаем на самые частые вопросы брендов.">
      <div className="space-y-4">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="space-y-2">
              <button
                type="button"
                className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-left text-lg font-medium text-black shadow-card"
                onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
              >
                {item.question}
              </button>
              {isOpen && <div className="rounded-2xl bg-accent px-5 py-4 text-base text-black shadow-card">{item.answer}</div>}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
