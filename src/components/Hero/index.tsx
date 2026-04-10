import { Button } from '../Button';
import { Container } from '../Container';
import { mediaAssets } from '../../data/media';

type HeroProps = {
  onOpenModal: () => void;
};

export const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-base py-16 sm:py-20 lg:py-24">
      <div className="absolute -left-36 top-0 h-[420px] w-[420px] rounded-full bg-accent" />
      <div className="absolute -bottom-40 right-1/3 h-[360px] w-[360px] rounded-full bg-white" />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
            Фестиваль Строй
            <span className="block">Участие брендов в крупнейших фестивалях 2026</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-700">
            Работаем напрямую с организаторами: быстро подбираем площадки, формат участия и приводим релевантную аудиторию к вашему бренду.
          </p>
          <p className="mt-6 text-xl font-bold text-black">День Медитации • День Йоги • DDX Fest • Гуляй Город</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button onClick={onOpenModal}>Оставить заявку</Button>
            <a href="tel:+74950000000" className="bg-white px-4 py-3 text-base font-semibold text-black">
              +7 495 000-00-00
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative ml-auto h-[320px] w-[320px] overflow-hidden rounded-full border-[18px] border-accent bg-black sm:h-[420px] sm:w-[420px]">
            <img src={mediaAssets.heroImage} alt="Фестиваль Строй" className="h-full w-full object-cover opacity-85" />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </div>
      </Container>
    </section>
  );
};
