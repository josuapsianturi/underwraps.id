export type Product = {
  id: number;
  name: string;
  href: string;
  price: string;
  options: string;
  imageSrc: string;
  imageAlt: string;
  rating: number;
  images: Array<{
    id: number;
    name: string;
    src: string;
    alt: string;
  }>;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Bible Journal Full Package✨ ( Christian Gifts/Kado Rohani/ Kado Natal/ Christmas Gift)',
    href: 'https://shopee.co.id/Bible-Journal-Full-Package-With-Highlighters-Christian-Gift-Set-With-Erasable-Pens-i.311520546.7968959751',
    price: 'Rp545.000',
    options: '8 colors',
    imageSrc: '/products/p1.jpg',
    imageAlt: 'Bible Journal Full Package✨ ( Christian Gifts/Kado Rohani/ Kado Natal/ Christmas Gift)',
    rating: 5,
    images: [
      { id: 1, name: 'Main View', src: '/products/p1.jpg', alt: 'Bible Journal Full Package main view' },
      { id: 2, name: 'Detail View', src: '/products/p2.jpg', alt: 'Bible Journal Full Package detail view' },
      { id: 3, name: 'Package Contents', src: '/products/p3.jpg', alt: 'Bible Journal Full Package contents' },
      { id: 4, name: 'Close Up', src: '/products/p4.jpg', alt: 'Bible Journal Full Package close up' },
      { id: 5, name: 'Close Up', src: '/products/p5.jpg', alt: 'Bible Journal Full Package close up' },
      { id: 6, name: 'Close Up', src: '/products/p6.jpg', alt: 'Bible Journal Full Package close up' },
      { id: 7, name: 'Close Up', src: '/products/p7.jpg', alt: 'Bible Journal Full Package close up' },
    ],
  },
  {
    id: 2,
    name: 'Extra Packing',
    href: 'https://shopee.co.id/Extra-Packing-i.311520546.8818056723',
    price: 'Rp7.900',
    options: 'Black',
    imageSrc: '/products/p2.jpg',
    imageAlt: 'Extra Packing',
    rating: 4,
    images: [
      { id: 1, name: 'Main View', src: '/products/p2.jpg', alt: 'Extra Packing main view' },
      { id: 2, name: 'Detail View', src: '/products/p2.jpg', alt: 'Extra Packing detail view' },
      { id: 3, name: 'Package View', src: '/products/p2.jpg', alt: 'Extra Packing package view' },
      { id: 4, name: 'Close Up', src: '/products/p2.jpg', alt: 'Extra Packing close up' },
    ],
  },
  {
    id: 3,
    name: 'Bible Reading Tools & Accesories',
    href: 'https://shopee.co.id/Bible-Reading-Tools-Accesories-i.311520546.3757546797',
    price: 'Rp17.900',
    options: 'Black',
    imageSrc: '/products/p3.jpg',
    imageAlt: 'Bible Reading Tools & Accesories',
    rating: 4,
    images: [
      { id: 1, name: 'Main View', src: '/products/p3.jpg', alt: 'Bible Reading Tools main view' },
      { id: 2, name: 'Tools Detail', src: '/products/p3.jpg', alt: 'Bible Reading Tools detail' },
      { id: 3, name: 'Package Contents', src: '/products/p3.jpg', alt: 'Bible Reading Tools contents' },
      { id: 4, name: 'Close Up', src: '/products/p3.jpg', alt: 'Bible Reading Tools close up' },
    ],
  },
  {
    id: 4,
    name: 'Bible Reading Tools Full Package✨ ( Christian Gifts/Kado Rohani / Kado Natal/ Christmas Gift )',
    href: 'https://shopee.co.id/Bible-Reading-Tools-Package-For-Christians-Christian-Bible-Study-Kit-With-Highlighters-i.311520546.5868942357',
    price: 'Rp217.000',
    options: 'Black',
    imageSrc: '/products/p4.jpg',
    imageAlt: 'Bible Reading Tools Full Package✨ ( Christian Gifts/Kado Rohani / Kado Natal/ Christmas Gift )',
    rating: 5,
    images: [
      { id: 1, name: 'Main View', src: '/products/p4.jpg', alt: 'Bible Reading Tools Full Package main view' },
      { id: 2, name: 'Package Contents', src: '/products/p4.jpg', alt: 'Bible Reading Tools Full Package contents' },
      { id: 3, name: 'Tools Detail', src: '/products/p4.jpg', alt: 'Bible Reading Tools Full Package detail' },
      { id: 4, name: 'Close Up', src: '/products/p4.jpg', alt: 'Bible Reading Tools Full Package close up' },
    ],
  },
  {
    id: 5,
    name: '72pcs STICKER BIBLE TABS ( Stiker Pembatas Nama Kitab)',
    href: 'https://shopee.co.id/72pcs-STICKER-BIBLE-TABS-(-Stiker-Pembatas-Nama-Kitab)-i.311520546.12622427524',
    price: 'Rp55.000',
    options: 'Various styles',
    imageSrc: '/products/p5.jpg',
    imageAlt: '72pcs STICKER BIBLE TABS ( Stiker Pembatas Nama Kitab)',
    rating: 4,
    images: [
      { id: 1, name: 'Main View', src: '/products/p5.jpg', alt: 'Bible Tabs main view' },
      { id: 2, name: 'Tabs Detail', src: '/products/p5.jpg', alt: 'Bible Tabs detail view' },
      { id: 3, name: 'Package View', src: '/products/p5.jpg', alt: 'Bible Tabs package view' },
      { id: 4, name: 'Close Up', src: '/products/p5.jpg', alt: 'Bible Tabs close up' },
    ],
  },
  {
    id: 6,
    name: 'Bible Pencil Case',
    href: 'https://shopee.co.id/Bible-Pencil-Case-i.311520546.6564211623',
    price: 'Rp85.000',
    options: 'Black',
    imageSrc: '/products/p6.jpg',
    imageAlt: 'Bible Pencil Case',
    rating: 4,
    images: [
      { id: 1, name: 'Main View', src: '/products/p6.jpg', alt: 'Bible Pencil Case main view' },
      { id: 2, name: 'Case Detail', src: '/products/p6.jpg', alt: 'Bible Pencil Case detail' },
      { id: 3, name: 'Interior View', src: '/products/p6.jpg', alt: 'Bible Pencil Case interior' },
      { id: 4, name: 'Close Up', src: '/products/p6.jpg', alt: 'Bible Pencil Case close up' },
    ],
  },
  {
    id: 7,
    name: 'Prayer Board - Vision Board - Bucket List Board (Kado Natal/ Christmas Gift/ Hampers / Kado Rohani)',
    href: 'https://shopee.co.id/Prayer-Board-Vision-Board-Bucket-List-Board-(Kado-Natal-Christmas-Gift-Hampers-Kado-Rohani)-i.311520546.22634572524',
    price: 'Rp185.000',
    options: 'Black',
    imageSrc: '/products/p7.jpg',
    imageAlt: 'Prayer Board - Vision Board - Bucket List Board (Kado Natal/ Christmas Gift/ Hampers / Kado Rohani)',
    rating: 5,
    images: [
      { id: 1, name: 'Main View', src: '/products/p7.jpg', alt: 'Prayer Board main view' },
      { id: 2, name: 'Board Detail', src: '/products/p7.jpg', alt: 'Prayer Board detail view' },
      { id: 3, name: 'Package View', src: '/products/p7.jpg', alt: 'Prayer Board package view' },
      { id: 4, name: 'Close Up', src: '/products/p7.jpg', alt: 'Prayer Board close up' },
    ],
  },
  {
    id: 8,
    name: 'Alkitab Jurnal with Free Bible Tool✨ ( Christian Gifts/Kado Rohani/ Kado Natal/ Christmas Gift )',
    href: 'https://shopee.co.id/Alkitab-Jurnal-with-Free-Bible-Tool%E2%9C%A8-(-Christian-Gifts-Kado-Rohani-Kado-Natal-Christmas-Gift-)-i.311520546.5169217743',
    price: 'Rp383.000',
    options: 'Black',
    imageSrc: '/products/p8.jpg',
    imageAlt: 'Alkitab Jurnal with Free Bible Tool✨ ( Christian Gifts/Kado Rohani/ Kado Natal/ Christmas Gift )',
    rating: 5,
    images: [
      { id: 1, name: 'Main View', src: '/products/p8.jpg', alt: 'Alkitab Jurnal main view' },
      { id: 2, name: 'Journal Detail', src: '/products/p8.jpg', alt: 'Alkitab Jurnal detail view' },
      { id: 3, name: 'Package Contents', src: '/products/p8.jpg', alt: 'Alkitab Jurnal contents' },
      { id: 4, name: 'Close Up', src: '/products/p8.jpg', alt: 'Alkitab Jurnal close up' },
    ],
  },
  {
    id: 9,
    name: 'Cancer Gift Package',
    href: 'https://shopee.co.id/Cancer-Gift-Package-i.311520546.9145908039',
    price: 'Rp129.000',
    options: 'Black',
    imageSrc: '/products/p9.jpg',
    imageAlt: 'Cancer Gift Package',
    rating: 4,
    images: [
      { id: 1, name: 'Main View', src: '/products/p9.jpg', alt: 'Cancer Gift Package main view' },
      { id: 2, name: 'Package Detail', src: '/products/p9.jpg', alt: 'Cancer Gift Package detail' },
      { id: 3, name: 'Contents View', src: '/products/p9.jpg', alt: 'Cancer Gift Package contents' },
      { id: 4, name: 'Close Up', src: '/products/p9.jpg', alt: 'Cancer Gift Package close up' },
    ],
  },
  {
    id: 10,
    name: 'Mini Christmas Gift✨',
    href: 'https://shopee.co.id/Mini-Christmas-Gift%E2%9C%A8-i.311520546.7968958080',
    price: 'Rp38.000',
    options: 'Black',
    imageSrc: '/products/p10.jpg',
    imageAlt: 'Mini Christmas Gift✨',
    rating: 4,
    images: [
      { id: 1, name: 'Main View', src: '/products/p10.jpg', alt: 'Mini Christmas Gift main view' },
      { id: 2, name: 'Gift Detail', src: '/products/p10.jpg', alt: 'Mini Christmas Gift detail' },
      { id: 3, name: 'Package View', src: '/products/p10.jpg', alt: 'Mini Christmas Gift package' },
      { id: 4, name: 'Close Up', src: '/products/p10.jpg', alt: 'Mini Christmas Gift close up' },
    ],
  },
  {
    id: 11,
    name: 'Bible Highlighters Guide',
    href: 'https://shopee.co.id/Bible-Highlighters-Guide-i.311520546.5864387173',
    price: 'Rp22.000',
    options: 'Black',
    imageSrc: '/products/p11.jpg',
    imageAlt: 'Bible Highlighters Guide',
    rating: 4,
    images: [
      { id: 1, name: 'Main View', src: '/products/p11.jpg', alt: 'Bible Highlighters Guide main view' },
      { id: 2, name: 'Guide Detail', src: '/products/p11.jpg', alt: 'Bible Highlighters Guide detail' },
      { id: 3, name: 'Package View', src: '/products/p11.jpg', alt: 'Bible Highlighters Guide package' },
      { id: 4, name: 'Close Up', src: '/products/p11.jpg', alt: 'Bible Highlighters Guide close up' },
    ],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getAllProductIds(): string[] {
  return products.map((p) => String(p.id));
}


