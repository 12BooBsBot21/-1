import { useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { navigation } from '../../data/navigation';

type HeaderProps = {
  onOpenModal: () => void;
};

export const Header = ({ onOpenModal }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#hero" className="text-lg font-bold tracking-tight text-black">
          Фестиваль Строй
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-zinc-700 transition-colors hover:text-black">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button onClick={onOpenModal}>Стать партнером</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
        >
          <span className="space-y-1">
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
          </span>
        </button>
      </Container>

      {isMenuOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-700"
                onClick={handleCloseMenu}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                handleCloseMenu();
                onOpenModal();
              }}
              fullWidth
            >
              Стать партнером
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
};
