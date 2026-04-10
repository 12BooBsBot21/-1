export type NavigationItem = {
  label: string;
  href: string;
};

export type AdvantageItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type FestivalItem = {
  id: number;
  title: string;
  date: string;
  audience: string;
  visitors: string;
};

export type ProcessStep = {
  id: number;
  icon: string;
  title: string;
  description?: string;
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type FormValues = {
  name: string;
  phone: string;
};

export type FormErrors = Partial<Record<keyof FormValues, string>>;

export type FormStatus = 'idle' | 'success' | 'error';

export type FooterSocial = {
  id: number;
  label: string;
  href: string;
};

export type MediaAssets = {
  heroImage: string;
  advantagesImages: string[];
  ctaBackground: string;
};
