import { advantages } from '../../data/advantages';
import { mediaAssets } from '../../data/media';
import { Card } from '../Card';
import { Section } from '../Section';

export const Advantages = () => {
  return (
    <Section
      id="advantages"
      title="Кто мы и почему с нами выгодно"
      subtitle="11 лет опыта в застройке фестивалей и бренд-зон. Ваш прямой вход на фестивали через нас без лишней бюрократии."
      className="relative overflow-hidden bg-base"
    >
      <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="relative min-h-[420px]">
          <div className="absolute -left-20 -top-16 -z-10 h-[360px] w-[360px] rounded-full bg-accent" />
          <div className="relative grid grid-cols-2 gap-3 pl-6 sm:pl-12">
            {mediaAssets.advantagesImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Фестиваль ${index + 1}`}
                className={`h-44 w-full object-cover shadow-card ${index === 1 ? 'translate-y-8' : ''} ${index === 2 ? 'col-span-2 h-52 w-4/5 justify-self-center' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          {advantages.map((item) => (
            <Card key={item.id} className="rounded-none border-l-4 border-l-accent">
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
