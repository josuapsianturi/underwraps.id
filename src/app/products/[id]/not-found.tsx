import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
     <main className="grid min-h-full place-items-center bg-off-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
        <Image
          src="/product-404.svg"
          alt="Ilustrasi halaman tidak ditemukan"
          width={463}
          height={406}
          className="mx-auto mt-8 h-40 w-auto max-w-[16rem] mb-4"
          priority
        />
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance text-brown">
            Produk tidak ditemukan.
          </h1>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/products"
              className="block w-full text-center rounded-md bg-brown px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brown-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown sm:w-auto"
            >
                Kembali ke halaman produk
            </Link>
          </div>
        </div>
      </main>
  );
}