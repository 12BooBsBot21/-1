import { type InputHTMLAttributes } from 'react';

type InputProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, error, id, className = '', ...props }: InputProps) => {
  const inputId = id ?? props.name;

  return (
    <div>
      <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-zinc-700">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full rounded-lg border px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-zinc-400 focus:border-black ${error ? 'border-red-500' : 'border-zinc-300'} ${className}`}
        {...props}
      />
      {error ? <p className="mt-1.5 text-xs text-red-600">{error}</p> : null}
    </div>
  );
};
