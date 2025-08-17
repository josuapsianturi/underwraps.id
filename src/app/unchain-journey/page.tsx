import Image from 'next/image';

const featuredTestimonial = {
  body: "Sebelum sesi mentoring ini aku penuh dengan perasaan dan pikiran tertuduh. Tapi setelah ngobrol sama ci Michelle bisa jauh lebih tenang. Bukan cuman wawasan baru yg didapet tapi dikasih contoh praktek sehari-harinya juga. Salah satu hal yang buat aku amaze ngeliat ci Michelle percaya dan mengasihi Tuhan dari penyampaiannya dan berkali-kali ingetin aku juga akan Kasih Tuhan, jujur itu berarti bgt disaat sebelum ini aku tertuduh dengan perasaan ga layak. Thankyouu so much untuk sesi mentoringnya berarti bgt 🙏 God bless ci",
  author: {
    name: 'Jes****a — 23 Tahun',
    rating: 5,
    imageUrl: '/logo.png',
  },
};

const testimonials = [
  [
    [
      {
        body: 'Mentoring session ini sangat membantu bagi saya yang saat ini mengalami pergumulan dan pencerahan dari mentor seperti menarik arah hidup saya ke yang seharusnya, walau saya tahu mungkin prosesnya tidak mudah',
        author: {
          name: 'Jor**n — 25 Tahun',
          rating: 5,
          imageUrl: '/logo.png',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'Sangat lega bisa coba pertama kali konseling dan pengalaman pertama ini bermakna buatku, jadi berani untuk coba konsul kembali :)',
        author: {
          name: 'Kez***a — 27 Tahun',
          rating: 5,
          imageUrl: '/logo.png',
        },
      },
    ],
  ],
];

function classNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}

function Stars({ count = 5, max = 5 }: { count?: number, max?: number }) {
  const safeCount = Math.max(0, Math.min(max, Math.floor(count ?? 0)));
  return (
    <div
      role="img"
      aria-label={`${safeCount} out of ${max} stars`}
      className="flex items-center gap-0.5 text-yellow-1"
    >
      {Array.from({ length: max }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={classNames('h-4 w-4', index < safeCount ? '' : 'opacity-30')}
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292c.14.43.54.72.99.72h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034c-.36.262-.51.73-.37 1.16l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.802-2.034a1 1 0 0 0-1.176 0l-2.802 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292c.14-.43-.01-.898-.37-1.16L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462c.45 0 .85-.29.99-.72l1.07-3.292Z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function UnchainJourneyPage() {
  return (
    <section>
      <h1 className="text-2xl sm:text-3xl font-semibold text-brown">Unchain Journey</h1>
      <div className="relative isolate pt-24 pb-32 sm:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100 % 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-yellow-1 to-yellow-3"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-yellow-1 to-yellow-3 xl:mr-[calc(50%-12rem)] xl:ml-0"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-brown">Testimoni</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-brown sm:text-5xl">
              Kami telah melayani lebih dari 100 orang yang luar biasa
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-brown sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-off-white-2 shadow-lg ring-1 ring-brown/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold tracking-tight text-brown sm:p-12 sm:text-xl/8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-brown/10 px-6 py-4 sm:flex-nowrap">
                <Image
                  alt=""
                  src={featuredTestimonial.author.imageUrl}
                  width={40}
                  height={40}
                  className="size-10 flex-none rounded-full bg-off-white-2"
                />
                <div className="flex-auto">
                  <div className="font-semibold text-brown">{featuredTestimonial.author.name}</div>
                  <div className="text-brown"><Stars count={featuredTestimonial.author.rating} /></div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8',
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={`${testimonial.author.name}-${testimonial.body.substring(0, 10)}`}
                        className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5"
                      >
                        <blockquote className="text-brown">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <Image alt="" src={testimonial.author.imageUrl} width={40} height={40} className="size-10 rounded-full bg-off-white-2" />
                          <div>
                            <div className="font-semibold text-brown">{testimonial.author.name}</div>
                            <div className="text-brown"><Stars count={testimonial.author.rating} /></div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

