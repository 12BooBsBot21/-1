import { footerSocials } from '../../data/footer';
import { Container } from '../Container';

export const Footer = () => {
  return (
    <footer id="contacts" className="border-t border-zinc-200 bg-white py-8">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-black">Фестиваль Строй</p>
          <a href="tel:+74950000000" className="mt-2 block text-sm text-zinc-700">
            +7 (495) 000-00-00
          </a>
          <a href="mailto:partners@stroyfest.ru" className="mt-1 block text-sm text-zinc-700">
            partners@stroyfest.ru
          </a>
        </div>

        <div className="text-sm text-zinc-600">
          <div className="mb-2 flex items-center gap-4">
            {footerSocials.map((social) => (
              <a key={social.id} href={social.href} className="transition-colors hover:text-black">
                {social.label}
              </a>
            ))}
          </div>
          <p>© 2026 Фестиваль Строй. Все права защищены.</p>
        </div>
      </Container>
    </footer>
  );
};
