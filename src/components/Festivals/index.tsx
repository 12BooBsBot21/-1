import { festivals } from '../../data/festivals';
import { Card } from '../Card';
import { Section } from '../Section';

export const Festivals = () => {
  return (
    <Section id="festivals" title="Фестивали для брендов" subtitle="Вместо таблицы: удобные карточки с ключевой информацией по каждому событию.">
      <div className="relative overflow-hidden rounded-3xl bg-base p-5 sm:p-8">
        <div className="absolute -bottom-20 left-0 right-0 h-40 rounded-[100%] bg-accent" />

        <div className="relative -mx-5 overflow-x-auto px-5 pb-8 sm:mx-0 sm:px-0">
          <div className="flex gap-4 md:grid md:grid-cols-2 md:gap-5">
            {festivals.map((festival) => (
              <Card key={festival.id} className="min-w-[290px] rounded-2xl md:min-w-0">
                <h3 className="text-xl font-semibold text-black">{festival.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-zinc-700">
                  <p>
                    <span className="font-semibold text-black">Дата:</span> {festival.date}
                  </p>
                  <p>
                    <span className="font-semibold text-black">Аудитория:</span> {festival.audience}
                  </p>
                  <p>
                    <span className="font-semibold text-black">Поток:</span> {festival.visitors}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
