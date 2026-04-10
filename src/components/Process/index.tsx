import { processSteps } from '../../data/process';
import { Section } from '../Section';

export const Process = () => {
  return (
    <Section id="process" title="Как мы работаем с брендами" className="bg-base">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <div key={step.id} className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-card">
            {index < processSteps.length - 1 && <div className="absolute -right-3 top-10 hidden h-0.5 w-6 bg-accent lg:block" />}
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-accent text-sm font-bold text-black">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-black">{step.title}</h3>
            {step.description && <p className="mt-2 text-sm leading-relaxed text-zinc-700">{step.description}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
};
