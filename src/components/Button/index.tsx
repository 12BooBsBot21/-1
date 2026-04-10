import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-black hover:bg-yellow-300',
  secondary: 'bg-black text-white hover:bg-zinc-800',
};

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-none px-6 py-3 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
