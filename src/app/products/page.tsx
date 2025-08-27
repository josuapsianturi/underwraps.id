import Image from 'next/image';
import Link from 'next/link';
import { products } from './data';

export default function ProductsPage() {
  return (
    <div className="bg-off-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="group ring ring-brown/5 rounded-lg pb-4 bg-off-white-2 shadow">
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
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}