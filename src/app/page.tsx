import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Apa itu Underwraps?",
    answer:
      "Underwraps adalah platform yang menghadirkan produk, layanan, dan komunitas untuk mendukung pertumbuhan pribadi—baik secara rohani maupun psikologis. Melalui alat kreatif, konseling, mentoring, hingga komunitas, kami ingin membantu orang-orang untuk bertumbuh lebih dekat dengan Tuhan tanpa mengabaikan kebutuhan psikologis dan kesehatan mental.",
  },
  {
    question: "Apakah produk Underwraps hanya untuk orang Kristen?",
    answer:
      "Mayoritas produk kami memang terinspirasi dari Firman Tuhan, tapi banyak juga yang relevan untuk siapa saja, misalnya affirmation cards atau tools untuk mengelola emosi. Jadi, siapa pun bisa mendapatkan manfaatnya.",
  },
  {
    question: "Apa keunikkan Underwraps?",
    answer:
      "Kami menghadirkan produk dengan pertimbangan psikologis dan spiritual berdasarkan firman-firman Tuhan di Alkitab. Tidak hanya itu, kami juga menyediakan layanan psikologis yang profesional dan komunitas yang supportive karena misi kami adalah menjembatani kebutuhan mental dan spiritual, supaya setiap orang bisa mencapai kehidupan yang utuh dan penuh makna.",
  },
  {
    question: "Saya lagi bergumul dengan masalah pribadi, apakah bisa ikut program Unchain?",
    answer:
      "Tentu bisa. Unchain adalah program counseling, mentoring, dan faith-coaching yang terbuka untuk siapa saja yang ingin mendapat pendampingan—baik dalam hal emosional, psikologis, maupun spiritual.",
  },
  {
    question: "Bagaimana cara bergabung dengan komunitas (Bible Dates atau Bible Reading Group)?",
    answer:
      "Caranya mudah, cukup mendaftar melalui website atau media sosial kami. Semua orang dipersilakan ikut, karena komunitas ini dirancang sebagai ruang aman untuk belajar, berbagi, dan saling menguatkan.",
    link: "/community",
    linkText: "Daftar di sini",
  },
  {
    question: "Kenapa sih ada integrasi iman dan psikologi di UnderWraps?",
    answer:
      "Kami percaya iman dan psikologi bukanlah dua hal yang bertentangan. Justru, ketika diintegrasikan, keduanya membantu kita mengalami pertumbuhan yang utuh—secara mental sehat, secara rohani bertumbuh, dan secara kehidupan jadi lebih fulfilling.",
  },
  {
    question: "Kenapa produk atau layanan yang disediakan UnderWraps bisa bermanfaat?",
    answer:
      "Semua yang kami buat dirancang dengan dasar psikologi, dikurasi oleh profesional, dan diinspirasi Firman Tuhan. Ditambah, testimoni orang-orang yang merasakan manfaat nyata jadi penguat kami.",
  },
];

export default function Home() {
  return (
    <section>
      <h1>Home</h1>

      {/* faq section */}
      <div className="">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-brown sm:text-5xl">
              Pertanyaan yang sering diajukan
            </h2>
            <dl className="mt-16 space-y-6">
              {faqs.map((faq, idx) => (
                <Disclosure key={`${faq.question}-${idx}`} as="div" className="group">
                  <div className="rounded-2xl bg-off-white-2/50 hover:bg-off-white-2/70 transition-all duration-500 ease-out border border-brown/10 hover:border-brown/20 group-data-open:border-brown/30 overflow-hidden">
                    <dt>
                      <DisclosureButton className="group flex w-full items-center justify-between text-left p-6 hover:bg-brown/5 transition-all duration-300 ease-out cursor-pointer">
                        <span className="text-lg font-semibold text-brown group-hover:text-brown/90 transition-colors duration-300 ease-out leading-relaxed flex-1 pr-4">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brown/10 group-hover:bg-brown/15 group-data-open:bg-brown/20 transition-all duration-300 ease-out">
                            <ChevronDownIcon 
                              aria-hidden="true" 
                              className="h-5 w-5 text-brown transition-all duration-500 ease-out group-data-open:rotate-180" 
                            />
                          </div>
                        </div>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel 
                      as="dd" 
                      className="overflow-hidden transition-all duration-800 ease-out data-[closed]:max-h-0 data-[open]:max-h-[800px]"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-brown/10 pt-4">
                          <div className="pl-4">
                            <p className="text-base leading-relaxed text-brown/80 font-normal">
                              {faq.answer}
                              {faq.link && (
                                <>
                                  {' '}
                                  <a 
                                    href={faq.link} 
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brown/10 hover:bg-brown/15 text-brown font-medium transition-all duration-300 ease-out hover:shadow-sm group"
                                  >
                                    <span>{faq.linkText}</span>
                                    <svg className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </a>
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </div>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
