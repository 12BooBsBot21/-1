import { Button } from '../Button';
import { Section } from '../Section';
import { mediaAssets } from '../../data/media';

type CTAProps = {
  onOpenModal: () => void;
};

export const CTA = ({ onOpenModal }: CTAProps) => {
  return (
    <Section id="cta" className="py-14 sm:py-20">
      <div
        className="relative overflow-hidden rounded-3xl px-5 py-12 sm:px-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${mediaAssets.ctaBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-3xl rounded-[999px] border-8 border-accent bg-base px-8 py-10 sm:px-12 sm:py-14">
          <a href="tel:+74950000000" className="inline-block bg-accent px-4 py-2 text-xl font-bold text-black">
            +7 495 000-00-00
          </a>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-black sm:text-4xl">Позвоните нам и забронируйте место на фестивале уже сегодня</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            Подберем формат участия, рассчитаем стоимость и подготовим предложение под задачи вашего бренда.
          </p>
          <p className="mt-5 text-lg font-semibold text-black">Не откладывайте: количество мест ограничено.</p>
          <Button className="mt-7" onClick={onOpenModal}>
            Отправить заявку
          </Button>
        </div>
      </div>
    </Section>
  );
};
