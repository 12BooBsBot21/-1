import { type MouseEvent, type ReactNode, useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          type="button"
          className="absolute right-4 top-4 text-xl leading-none text-zinc-500 transition-colors hover:text-black"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        <h3 className="mb-2 pr-8 text-2xl font-bold text-black">{title}</h3>
        <p className="mb-6 text-sm text-zinc-600">Оставьте контакты, и мы свяжемся с вами.</p>
        {children}
      </div>
    </div>
  );
};
