import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

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
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Main Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-6xl lg:text-7xl">
              <span className="block">Pertumbuhan Pribadi yang</span>
              <span className="block bg-gradient-to-r from-brown to-brown-2 bg-clip-text text-transparent">
                Utuh & Bermakna
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="mt-8 text-xl leading-8 text-brown/80 sm:text-2xl">
              A safe space to grow where faith and mental health walk together.
            </p>
            
            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-brown/70 max-w-3xl mx-auto">
              Underwraps menghadirkan produk, layanan, dan komunitas untuk mendukung pertumbuhan pribadi—baik secara rohani maupun psikologis. Kami menjembatani kebutuhan mental dan spiritual agar setiap orang bisa mencapai kehidupan yang utuh dan penuh makna.
            </p>
            
            {/* Social Proof Stats */}
            <div className="mt-8 flex flex-wrap gap-8 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-brown">500+</div>
                <div className="text-sm text-brown/70">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brown">50+</div>
                <div className="text-sm text-brown/70">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brown">98%</div>
                <div className="text-sm text-brown/70">Satisfaction</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brown text-white font-semibold text-lg hover:bg-brown-2 transition-all duration-300 ease-out hover:shadow-lg hover:scale-105 group"
              >
                <span>Jelajahi Produk</span>
                <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/unchain-journey"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-brown text-brown font-semibold text-lg hover:bg-brown hover:text-white transition-all duration-300 ease-out hover:shadow-lg hover:scale-105 group"
              >
                <span>Mulai Perjalanan</span>
                <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-1/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-brown/10 rounded-full blur-2xl"></div>
        {/* <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-2/30 rounded-full blur-lg"></div> */}
      </div>

      {/* Tips section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight text-brown sm:text-4xl text-center mb-16">
            Tips
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-brown leading-tight">
                Miliki Mindset yang Benar
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-brown/80">
                  Jadikan pembacaan Firman bukan sekadar{' '}
                  <span className="underline decoration-brown/60 decoration-2 underline-offset-2">
                    kewajiban/rutinitas semata
                  </span>
                  .
                </p>
                
                <p className="text-lg leading-relaxed text-brown/80">
                  Jadikan perenungan firman Tuhan sebagai sebuah{' '}
                  <span className="underline decoration-brown/60 decoration-2 font-semibold underline-offset-2">
                    kerinduan
                  </span>{' '}
                  untuk membangun{' '}
                  <span className="underline decoration-brown/60 decoration-2 underline-offset-2">
                    hubungan yang intim dengan Tuhan
                  </span>
                  .
                </p>
              </div>
            </div>
            
            {/* Circular Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-yellow-2 shadow-lg">
                  <Image
                    src="/products/p1.jpg"
                    alt="Bible reading and meditation"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-1 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-brown/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Communication Process Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 bg-off-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-brown text-center mb-16 leading-tight">
            Firman Tuhan adalah cara komunikasi utama Tuhan pada kita
          </h2>
          
          <div className="relative">
            {/* Wavy connecting line */}
            <div className="absolute top-16 left-8 right-8 h-0.5 bg-brown/20 rounded-full hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-brown/30 via-brown/40 to-brown/30 rounded-full"></div>
            </div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {/* Step 1: KENAL */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-1 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-brown" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-yellow-1 px-3 py-1 rounded">
                  <h3 className="text-base font-bold text-brown">KENAL</h3>
                </div>
                <p className="text-sm leading-relaxed text-brown text-left">
                  Kumpulkan informasi sebanyaknya dan lakukan komunikasi 2 arah yang seimbang melalui doa dan perenungan firman dari Alkitab maupun khotbah.
                </p>
              </div>

              {/* Step 2: PERCAYA */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-1 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-brown" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-yellow-1 px-3 py-1 rounded">
                  <h3 className="text-base font-bold text-brown">PERCAYA</h3>
                </div>
                <p className="text-sm leading-relaxed text-brown text-left">
                  Informasi yang didapatkan dan seberapa sering kita membangun komunikasi 2 arah yang seimbang menjadi dasar kita percaya.
                </p>
              </div>

              {/* Step 3: SAYANG */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-1 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-brown" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-yellow-1 px-3 py-1 rounded">
                  <h3 className="text-base font-bold text-brown">SAYANG</h3>
                </div>
                <p className="text-sm leading-relaxed text-brown text-left">
                  Saat kita tahu kita disayangi dan kita dapat mempercayainya akan timbul rasa sayang.
                </p>
              </div>

              {/* Step 4: TINDAKAN */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-1 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-brown" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-yellow-1 px-3 py-1 rounded">
                  <h3 className="text-base font-bold text-brown">TINDAKAN</h3>
                </div>
                <p className="text-sm leading-relaxed text-brown text-left">
                  Rasa percaya dan sayang akan dibuktikan dengan tindakan yang mencerminkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bible Journaling Process Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-brown text-center mb-16 leading-tight">
            Bible Journaling Process
          </h2>
          
          <div className="relative">
            {/* Wavy connecting line */}
            <div className="absolute top-16 left-8 right-8 h-0.5 bg-brown/20 rounded-full hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-brown/30 via-brown/40 to-brown/30 rounded-full"></div>
            </div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {/* Step 1: Scriptures */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-1 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-brown font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="bg-yellow-1 px-3 py-1 rounded">
                  <h3 className="text-base font-bold text-brown">Scriptures</h3>
                </div>
                <div className="text-sm leading-relaxed text-brown text-left space-y-1">
                  <p>• Pilih pasal yang mau dibaca</p>
                  <p>• Usahakan minimal baca per-perikop</p>
                </div>
              </div>

              {/* Step 2: Objectives */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-1 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-brown font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="bg-yellow-1 px-3 py-1 rounded">
                  <h3 className="text-base font-bold text-brown">Objectives</h3>
                </div>
                <div className="text-sm leading-relaxed text-brown text-left space-y-1">
                  <p>• Read Slowly</p>
                  <p>• Amati dan Tandai dengan Highlighters/Pen</p>
                </div>
              </div>

              {/* Step 3: Application */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-1 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-brown font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="bg-yellow-1 px-3 py-1 rounded">
                  <h3 className="text-base font-bold text-brown">Application</h3>
                </div>
                <div className="text-sm leading-relaxed text-brown text-left space-y-1">
                  <p>• Tuliskan apa yang kamu pelajari</p>
                  <p>• Kreasikan catatanmu</p>
                  <p>• Praktikan</p>
                </div>
              </div>

              {/* Step 4: Prayer */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-1 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-brown font-bold text-lg">4</span>
                  </div>
                </div>
                <div className="bg-yellow-1 px-3 py-1 rounded">
                  <h3 className="text-base font-bold text-brown">Prayer</h3>
                </div>
                <p className="text-sm leading-relaxed text-brown text-left">
                  Mengucap syukur dan meminta dukungan Tuhan untuk dimampukan mempraktikan apa yang dipelajari
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-brown sm:text-4xl mb-4">
              Video Tips
            </h2>
            <p className="text-lg text-brown/80">
              Tonton video berikut untuk tips dan panduan yang lebih detail
            </p>
          </div>

          <div className="space-y-12">
            {/* YouTube Video */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-brown text-center">YouTube Video</h3>
              <div className="relative w-full max-w-2xl mx-auto" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/ujMgBC8SsgI?si=QaigODOsdvHb6OJk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Instagram Video */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-brown text-center">Instagram Reel</h3>
              <div className="relative w-full max-w-md mx-auto" style={{ paddingBottom: '87%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.instagram.com/reel/ChZYQbNFkQd/embed/"
                  title="Instagram video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl text-center font-semibold tracking-tight text-brown sm:text-4xl">
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
