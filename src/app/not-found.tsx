import Link from "next/link";

export default function NotFound() {
  return (
      <main className="grid min-h-full place-items-center bg-off-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-brown">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-brown sm:text-7xl">
            Halaman tidak ditemukan.
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-brown sm:text-xl/8">
            Maaf, kami tidak dapat menemukan halaman yang kamu cari.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/"
              className="block w-full text-center rounded-md bg-brown px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brown-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown sm:w-auto"
            >
              Kembali ke beranda.
            </Link>
            <Link href="/about" className="block w-full text-center text-sm font-semibold text-brown sm:w-auto">
              Hubungi kami. <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
  );
}


