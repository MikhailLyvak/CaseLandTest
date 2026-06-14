export type NavLink = {
  href: string;
  label: string;
};

export type ProductBullet = {
  title: string;
  text: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navLinks: NavLink[] = [
  { href: "#details", label: "Деталі" },
  { href: "#faq", label: "Питання" },
  { href: "#order", label: "Замовити" },
];

export const footerNavLinks: NavLink[] = [
  { href: "#details", label: "Характеристики" },
  { href: "#faq", label: "Питання" },
  { href: "#order", label: "Замовити" },
];

export const productBullets: ProductBullet[] = [
  {
    title: "Сумісність",
    text: "iPhone 15 Pro — точна посадка без люфту",
  },
  {
    title: "Захист камер",
    text: "Підняті бортики навколо модуля камер",
  },
  {
    title: "Матеріал",
    text: "М'який силікон soft-touch, приємний у руці",
  },
  {
    title: "Профіль",
    text: "Тонкий корпус без зайвого обʼєму",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/hand-front.png",
    alt: "Помаранчевий чохол на iPhone 15 Pro в руці",
    caption: "Помаранчевий чохол iPhone 15 Pro в руці",
  },
  {
    src: "/images/hand-angle.png",
    alt: "Чохол iPhone 15 Pro під кутом",
    caption: "Чохол iPhone 15 Pro під кутом",
  },
  {
    src: "/images/hero-hand-case.png",
    alt: "Фронтальне фото чохла iPhone 15 Pro",
    caption: "Фронтальний вигляд чохла iPhone 15 Pro",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Чи підходить чохол для iPhone 15 Pro Max?",
    answer:
      "Наразі чохол доступний для iPhone 15 Pro. Моделі iPhone 15 та iPhone 15 Pro Max зʼявляться пізніше — залиште заявку, і ми повідомимо, коли буде в наявності.",
  },
  {
    question: "Скільки коштує доставка по Україні?",
    answer:
      "Доставка Новою Поштою по Україні займає 1–2 дні. Вартість доставки залежить від вашого міста і тарифів перевізника. Оплата чохла — при отриманні.",
  },
  {
    question: "З якого матеріалу зроблений чохол?",
    answer:
      "Чохол виготовлений із м'якого силікону soft-touch. Він приємний на дотик, добре сидить у руці та не додає зайвого обʼєму телефону.",
  },
  {
    question: "Чи можна повернути товар?",
    answer:
      "Так, якщо чохол не підійшов або є виробничий дефект — напишіть нам у Telegram протягом 14 днів після отримання, і ми допоможемо з обміном або поверненням.",
  },
];

export const offerTags = [
  "Оплата при отриманні",
  "Швидка відправка",
  "Доставка по Україні",
] as const;

export const iphoneModels = [
  "iPhone 15 Pro",
  "iPhone 15",
  "iPhone 15 Pro Max",
] as const;
