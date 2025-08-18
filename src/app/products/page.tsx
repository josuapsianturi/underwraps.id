import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Bible Journal Full Package✨ ( Christian Gifts/Kado Rohani/ Kado Natal/ Christmas Gift)',
    href: 'https://shopee.co.id/Bible-Journal-Full-Package-With-Highlighters-Christian-Gift-Set-With-Erasable-Pens-i.311520546.7968959751',
    price: 'Rp545.000',
    description:
      'Bible Journal Full Package✨ ( Christian Gifts/Kado Rohani/ Kado Natal/ Christmas Gift)',
    options: '8 colors',
    imageSrc: '/products/p1.jpg',
    imageAlt: 'Bible Journal Full Package✨ ( Christian Gifts/Kado Rohani/ Kado Natal/ Christmas Gift)',
  },
  {
    id: 2,
    name: 'Extra Packing',
    href: 'https://shopee.co.id/Extra-Packing-i.311520546.8818056723',
    price: 'Rp7.900',
    description: 'Extra Packing',
    options: 'Black',
    imageSrc: '/products/p2.jpg',
    imageAlt: 'Extra Packing',
  },
  {
    id: 3,
    name: 'Bible Reading Tools & Accesories',
    href: 'https://shopee.co.id/Bible-Reading-Tools-Accesories-i.311520546.3757546797',
    price: 'Rp17.900',
    description: 'Bible Reading Tools & Accesories',
    options: 'Black',
    imageSrc: '/products/p3.jpg',
    imageAlt: 'Bible Reading Tools & Accesories',
  },
  {
    id: 4,
    name: 'Bible Reading Tools Full Package✨ ( Christian Gifts/Kado Rohani / Kado Natal/ Christmas Gift )',
    href: 'https://shopee.co.id/Bible-Reading-Tools-Package-For-Christians-Christian-Bible-Study-Kit-With-Highlighters-i.311520546.5868942357',
    price: 'Rp217.000',
    description: 'Bible Reading Tools Full Package✨ ( Christian Gifts/Kado Rohani / Kado Natal/ Christmas Gift )',
    options: 'Black',
    imageSrc: '/products/p4.jpg',
    imageAlt: 'Bible Reading Tools Full Package✨ ( Christian Gifts/Kado Rohani / Kado Natal/ Christmas Gift )',
  },
  {
    id: 5,
    name: '72pcs STICKER BIBLE TABS ( Stiker Pembatas Nama Kitab)',
    href: 'https://shopee.co.id/72pcs-STICKER-BIBLE-TABS-(-Stiker-Pembatas-Nama-Kitab)-i.311520546.12622427524',
    price: 'Rp55.000',
    description: '72pcs STICKER BIBLE TABS ( Stiker Pembatas Nama Kitab)',
    options: 'Various styles',
    imageSrc: '/products/p5.jpg',
    imageAlt: '72pcs STICKER BIBLE TABS ( Stiker Pembatas Nama Kitab)',
  },
  {
    id: 6,
    name: 'Bible Pencil Case',
    href: 'https://shopee.co.id/Bible-Pencil-Case-i.311520546.6564211623',
    price: 'Rp85.000',
    description: 'Bible Pencil Case',
    options: 'Black',
    imageSrc: '/products/p6.jpg',
    imageAlt: 'Bible Pencil Case',
  },
  {
    id: 7,
    name: 'Prayer Board - Vision Board - Bucket List Board (Kado Natal/ Christmas Gift/ Hampers / Kado Rohani)',
    href: 'https://shopee.co.id/Prayer-Board-Vision-Board-Bucket-List-Board-(Kado-Natal-Christmas-Gift-Hampers-Kado-Rohani)-i.311520546.22634572524',
    price: 'Rp185.000',
    description: 'Prayer Board - Vision Board - Bucket List Board (Kado Natal/ Christmas Gift/ Hampers / Kado Rohani)',
    options: 'Black',
    imageSrc: '/products/p7.jpg',
    imageAlt: 'Prayer Board - Vision Board - Bucket List Board (Kado Natal/ Christmas Gift/ Hampers / Kado Rohani)',
  },
  {
    id: 8,
    name: 'Alkitab Jurnal with Free Bible Tool✨ ( Christian Gifts/Kado Rohani/ Kado Natal/ Christmas Gift )',
    href: 'https://shopee.co.id/Alkitab-Jurnal-with-Free-Bible-Tool%E2%9C%A8-(-Christian-Gifts-Kado-Rohani-Kado-Natal-Christmas-Gift-)-i.311520546.5169217743',
    price: 'Rp383.000',
    description: 'Alkitab Jurnal with Free Bible Tool✨ ( Christian Gifts/Kado Rohani/ Kado Natal/ Christmas Gift )',
    options: 'Black',
    imageSrc: '/products/p8.jpg',
    imageAlt: 'Alkitab Jurnal with Free Bible Tool✨ ( Christian Gifts/Kado Rohani/ Kado Natal/ Christmas Gift )',
  },
  {
    id: 9,
    name: 'Cancer Gift Package',
    href: 'https://shopee.co.id/Cancer-Gift-Package-i.311520546.9145908039',
    price: 'Rp129.000',
    description: 'Cancer Gift Package',
    options: 'Black',
    imageSrc: '/products/p9.jpg',
    imageAlt: 'Cancer Gift Package',
  },
  {
    id: 10,
    name: 'Mini Christmas Gift✨',
    href: 'https://shopee.co.id/Mini-Christmas-Gift%E2%9C%A8-i.311520546.7968958080',
    price: 'Rp38.000',
    description: 'Mini Christmas Gift✨',
    options: 'Black',
    imageSrc: '/products/p10.jpg',
    imageAlt: 'Mini Christmas Gift✨',
  },
  {
    id: 11,
    name: 'Bible Highlighters Guide',
    href: 'https://shopee.co.id/Bible-Highlighters-Guide-i.311520546.5864387173',
    price: 'Rp22.000',
    description: 'Bible Highlighters Guide',
    options: 'Black',
    imageSrc: '/products/p11.jpg',
    imageAlt: 'Bible Highlighters Guide',
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-off-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <a target="_blank" key={product.id} href={product.href} className="group border border-off-white-3 rounded-lg pb-4">
              <div className="relative aspect-square w-full">
                <Image
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  fill
                  sizes="(max-width: 640px) 100vw, 176px"
                  className="rounded-lg rounded-b-none object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
              </div>
              <h3 className="mt-4 text-sm md:text-base px-2 md:px-4 line-clamp-2 text-brown hover:text-brown-3">{product.name}</h3>
              <p className="mt-1 text-sm md:text-base font-semibold text-brown-3 px-2 md:px-4">{product.price}</p>
            </a>
          ))}
        </div>
        
      </div>
    </div>
  );
}