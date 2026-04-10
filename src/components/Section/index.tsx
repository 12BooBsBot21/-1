import { type ReactNode } from 'react';
import { Container } from '../Container';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export const Section = ({ id, title, subtitle, className = '', children }: SectionProps) => {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-10 max-w-3xl sm:mb-12">
            {title && <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};
