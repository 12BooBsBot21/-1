import { type ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = '' }: CardProps) => {
  return <article className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-card ${className}`}>{children}</article>;
};
