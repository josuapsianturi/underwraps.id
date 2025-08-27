import Image from "next/image";

export default function AboutPage() {

  return (
    <div className="bg-off-white">
      <div className="isolate pt-24 lg:pt-0">
        <div className="relative isolate">
          <svg aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-off-white-2">
            <defs>
              <pattern x="50%" y={-1} id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width={200} height={200} patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-off-white-2">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div aria-hidden="true" className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-yellow-1 to-yellow-3 opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 md:pt-20 lg:pt-0 lg:px-8">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-brown md:text-7xl">About UnderWraps</h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-brown sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    UnderWraps adalah sebuah gift shop rohani yang fokus mengembangkan produk-produk untuk mendukung pertumbuhan rohani dan iman setiap orang.
                    <br />
                    <br />
                    Salah satu produk yang kami kembangkan adalah <a target="_blank" href="https://shopee.co.id/underwraps.id/7968959751" className="text-brown underline">Bible Journal Starter Kit Package</a> yang dibuat dengan tujuan untuk membantu orang-orang yang kesulitan konsisten / mudah bosan ketika membaca Alkitab. Hal itu karena dalam paket tersedia beberapa tools yang bisa membantu meningkatkan motivasi & memperdalam perenungan firman Tuhan.
                    <br />
                  </p>
                </div>
                <div className="mt-14 md:mt-36 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                    <div className="relative aspect-2/3 w-full">
                      <Image
                        alt="about"
                        src="/products/p1.jpg"
                        fill
                        sizes="(max-width: 640px) 100vw, 176px"
                        className="rounded-xl bg-off-white-2 object-cover shadow-lg"
                        priority
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative aspect-2/3 w-full">
                      <Image
                        alt="about"
                        src="/products/p3.jpg"
                        fill
                        sizes="(max-width: 640px) 100vw, 176px"
                        className="rounded-xl bg-off-white-2 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-off-white-2/10 ring-inset" />
                    </div>
                    <div className="relative aspect-2/3 w-full">
                      <Image
                        alt="about"
                        src="/products/p7.jpg"
                        fill
                        sizes="(max-width: 640px) 100vw, 176px"
                        className="rounded-xl bg-off-white-2 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-off-white-2/10 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative aspect-2/3 w-full">
                      <Image
                        alt="about"
                        src="/products/p4.jpg"
                        fill
                        sizes="(max-width: 640px) 100vw, 176px"
                        className="rounded-xl bg-off-white-2 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-off-white-2/10 ring-inset" />
                    </div>
                    <div className="relative aspect-2/3 w-full">
                      <Image
                        alt="about"
                        src="/products/p5.jpg"
                        fill
                        sizes="(max-width: 640px) 100vw, 176px"
                        className="rounded-xl bg-off-white-2 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-off-white-2/10 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image section */}
      <div className="mt-16 lg:mx-auto lg:max-w-7xl lg:px-8 pb-4 md:pb-6">
        <div className="relative aspect-5/2 w-full outline-1 -outline-offset-1 outline-off-white-2 rounded-xl lg:rounded-3xl">
          <Image alt="banner" src="/banner.png" fill sizes="100vw" className="object-cover rounded-xl lg:rounded-3xl" priority />
        </div>
      </div>
    </div>
  );
}

