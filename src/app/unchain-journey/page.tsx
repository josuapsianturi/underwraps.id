import { PaperAirplaneIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import Image from 'next/image';

const faqs = [
  {
    question: "Apa itu Unchain?",
    answer:
      "Unchain adalah program layanan dari Underwraps yang menghadirkan konseling, mentoring, dan faith-coaching. Kami menyediakan ruang aman bagi siapa saja untuk menghadapi tantangan hidup, menjaga kesehatan mental, dan bertumbuh dalam iman tanpa rasa takut dihakimi.",
  },
  {
    question: "Apa bedanya konseling, mentoring, dan faith coaching di Unchain?",
    answer: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-brown mb-2">Konseling</h4>
          <p className="text-brown/80 mb-2">👉 Ditangani oleh psikolog klinis berlisensi yang telah menempuh pendidikan magister profesi Psikolog Klinis di berbagai universitas terakreditasi unggul.</p>
          <p className="text-brown/80">Konseling cocok buat kamu yang sedang menghadapi stres, kecemasan, trauma, atau yang merasa aktivitas sehari-harinya terganggu. Psikolog akan membantu kamu menemukan pola pikir yang lebih sehat dan cara baru untuk pulih serta menghadapi tantangan hidup.</p>
        </div>
        <div>
          <h4 className="font-semibold text-brown mb-2">Mentoring</h4>
          <p className="text-brown/80 mb-2">👉 Ditangani oleh mentor yang memiliki latar belakang Sarjana Psikologi yang sudah terlatih.</p>
          <p className="text-brown/80">Mentoring pas buat kamu yang butuh dukungan praktis, arahan, atau sekadar teman perjalanan.</p>
        </div>
        <div>
          <h4 className="font-semibold text-brown mb-2">Faith Coaching</h4>
          <p className="text-brown/80 mb-2">👉 Dipandu oleh pendeta, pemimpin rohani, atau mentor iman yang memiliki pemahaman mendalam tentang Alkitab—baik melalui pendidikan formal (teologi/sekolah Alkitab) maupun melalui pengalaman-pengalaman nyata dalam memimpin jemaat.</p>
          <p className="text-brown/80">Faith coaching membantu kamu memahami pertanyaan-pertanyaan kritis seputar iman dan eksistensi Tuhan serta memberi kamu framework logis dan kokoh untuk memahami Tuhan dengan pendekatan yang non-judgemental dan rasional. Tujuannya adalah menolong kamu memperdalam relasi dengan Tuhan dan memiliki dasar iman yang lebih kokoh untuk menghadapi pergumulan rohani yang kamu hadapi.</p>
        </div>
      </div>
    ),
  },
  {
    question: "Siapa saja praktisi di Unchain?",
    answer:
      "Setiap praktisi konseling di Unchain adalah Psikolog Klinis dengan lisensi resmi (SIPP) dari Himpunan Psikologi Indonesia (HIMPSI), sehingga layanan yang diberikan legal, profesional, dan dapat dipercaya. Kami juga bekerja sama dengan mentor rohani (spiritual companions) yang sudah terlatih untuk mendampingi perjalanan iman dengan bijaksana.",
  },
  {
    question: "Apakah harus orang Kristen yang bisa mencoba layanan Unchain?",
    answer:
      "Unchain dibangun dengan nilai-nilai iman Kristen, tapi siapa pun dipersilakan. Prinsip kami adalah menghadirkan pendampingan yang penuh kasih, non-judgmental, dan aman bagi siapa saja yang mencari pemulihan mental maupun spiritual.",
  },
  {
    question: "Apa bedanya Unchain dengan layanan konseling di biro psikologi pada umumnya?",
    answer:
      "Unchain lahir dari kerinduan untuk menghadirkan ruang pemulihan yang menyentuh dua sisi penting kehidupan: psikologis dan rohani. Kami bekerja dengan pendekatan profesional psikologi, namun tetap membuka ruang diskusi bagi nilai-nilai firman Tuhan untuk menyertai prosesnya. Tujuannya bukan menggantikan layanan konseling yang sudah ada, melainkan menjadi alternatif bagi mereka yang ingin bertumbuh secara mental dan rohani.",
  },
  {
    question: "Apakah data dan percakapan saya aman?",
    answer:
      "Sangat aman. Setiap percakapan dijaga kerahasiaannya sesuai kode etik psikologi dan etika pelayanan rohani. Apa yang dibicarakan hanya akan tinggal antara Anda dan praktisi.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Cukup hubungi admin kami, pilih layanan yang dibutuhkan, lalu ikuti langkah pendaftaran. Tim kami akan segera menghubungi untuk menjadwalkan sesi yang paling sesuai dengan jadwal kamu.",
    link: "#about-program",
    linkText: "Hubungi admin sekarang",
  },
];

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
      {/* Hero section */}
      <div className="">
        <div className="relative overflow-hidden">
          {/* Decorative dots */}
          <div className="pointer-events-none absolute top-4 left-4 sm:top-6 sm:left-64 size-3 sm:size-4 rounded-full bg-brown" />
          <div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-6 sm:right-8 size-3 sm:size-4 rounded-full bg-brown" />
          <div className="pointer-events-none absolute top-1/6 right-1 sm:top-1/6 sm:right-1 size-3 sm:size-4 rounded-full ring-2 ring-yellow-3" />
          <div className="pointer-events-none absolute bottom-2 left-2 sm:bottom-2 sm:left-2 size-3 sm:size-4 rounded-full ring-2 ring-yellow-3" />
            
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-32 lg:gap-16 items-center pb-20 py-10 sm:py-24 lg:py-36">
            {/* Left Content */}
            <div className="order-1 lg:order-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-off-white-2/70 ring-1 ring-brown/10 px-3 py-1 text-sm text-brown/70">
                Voluntary Counseling Program
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brown tracking-tight">
                Tempat Aman untuk Cerita & Pulih
              </h1>
              <p className="text-brown/80 max-w-xl mx-auto lg:mx-0">
                Saya <span className="font-semibold"> Michelle Theodora, M.Psi. Psikolog </span>, Psikolog Klinis dan Leukemia Survivor.
                Program konseling sukarela ini hadir agar kamu punya ruang untuk berbagi, menemukan arah, dan merasakan pendampingan penuh kasih.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a href="#about-program" className="inline-flex items-center gap-2 rounded-md bg-brown text-white px-5 py-2.5 font-medium hover:bg-brown-2 focus:outline-none focus:ring-2 focus:ring-yellow-2">
                  <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true" />
                  Daftar Sekarang
                </a>
                <div className="flex items-center gap-3 rounded-xl bg-off-white-2 ring-1 ring-brown/10 px-3 py-2">
                  <div className="text-left">
                    <p className="text-sm font-semibold text-brown">Gratis & Sukarela</p>
                    <p className="text-xs text-brown/70">Dukungan donasi terbuka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="order-2 lg:order-2">
              <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-full ring-1 ring-yellow-1" />
                <div className="absolute -inset-6 sm:-inset-8 rounded-full ring-1 ring-yellow-2" />
                <div className="absolute -inset-12 sm:-inset-16 rounded-full ring-1 ring-yellow-3" />
                <Image
                  alt="Profile Michelle"
                  src="/michelle-theodora-kosasih.png"
                  fill
                  sizes="(max-width: 768px) 16rem, 20rem"
                  className="rounded-full object-cover drop-shadow-xl bg-transparent"
                  priority
                />
                
                {/* Brain */}
                <div className="absolute -top-4 -right-1 sm:-top-11 sm:-right-19 bg-off-white-2 rounded-xl p-3 sm:p-4 max-w-[200px] sm:max-w-[240px] shadow-lg ring-1 ring-brown/10">
                  <div className="text-center">
                    <div className="flex items-center space-x-2 justify-center text-xs sm:text-sm font-semibold text-brown mb-1">
                      <svg className="h-6 w-6 sm:h-8 sm:w-8 text-brown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11 21V2.352A3.451 3.451 0 0 0 9.5 2a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 4.04 8.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.017 4.017 0 0 0 2.3 12.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 2 14c.003.24.027.48.072.716a4 4 0 0 0 .235.832c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.285.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 11 21Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 14.5 2a3.451 3.451 0 0 0-1.5.352V21a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 20 17.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z" />
                      </svg>
                    </div>
                    <p className="text-xs text-brown/80 leading-tight hidden sm:flex">
                      Healing is a journey
                    </p>
                  </div>
                </div>

                {/* Sertifikasi */}
                <div className="absolute -top-10 -left-10 sm:-top-16 sm:-left-40 bg-off-white-2 rounded-xl p-2 sm:p-4 shadow-lg ring-1 ring-brown/10 max-w-[200px] sm:max-w-[240px]">
                  <div className="text-left">
                    <div className="flex items-center justify-start space-x-2 text-xs sm:text-sm font-semibold text-brown mb-1">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-brown stroke-brown" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.37988 12.0001L10.7899 14.4201L15.6199 9.58008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.7499 2.45031C11.4399 1.86031 12.5699 1.86031 13.2699 2.45031L14.8499 3.81031C15.1499 4.07031 15.7099 4.28031 16.1099 4.28031H17.8099C18.8699 4.28031 19.7399 5.15031 19.7399 6.21031V7.91031C19.7399 8.30031 19.9499 8.87031 20.2099 9.17031L21.5699 10.7503C22.1599 11.4403 22.1599 12.5703 21.5699 13.2703L20.2099 14.8503C19.9499 15.1503 19.7399 15.7103 19.7399 16.1103V17.8103C19.7399 18.8703 18.8699 19.7403 17.8099 19.7403H16.1099C15.7199 19.7403 15.1499 19.9503 14.8499 20.2103L13.2699 21.5703C12.5799 22.1603 11.4499 22.1603 10.7499 21.5703L9.16988 20.2103C8.86988 19.9503 8.30988 19.7403 7.90988 19.7403H6.17988C5.11988 19.7403 4.24988 18.8703 4.24988 17.8103V16.1003C4.24988 15.7103 4.03988 15.1503 3.78988 14.8503L2.43988 13.2603C1.85988 12.5703 1.85988 11.4503 2.43988 10.7603L3.78988 9.17031C4.03988 8.87031 4.24988 8.31031 4.24988 7.92031V6.20031C4.24988 5.14031 5.11988 4.27031 6.17988 4.27031H7.90988C8.29988 4.27031 8.86988 4.06031 9.16988 3.80031L10.7499 2.45031Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      <span>Sertifikasi</span>
                    </div>
                    <ul className="text-xs text-brown/80 leading-tight list-disc pl-4 sm:pl-5 lg:pl-4.7">
                      <li>Neo NLP <span className="hidden sm:flex">(Neuro Linguistic Programming)</span></li>
                      <li> <span className="flex sm:hidden"> TPT </span> <span className="hidden sm:flex">Trauma Processing Therapy</span></li>
                    </ul>
                  </div>
                </div>

                {/* Patients */}
                <div className="absolute -bottom-0 -right-6 sm:bottom-0 sm:-right-23 bg-off-white-2 rounded-xl p-2 sm:p-4 shadow-lg ring-1 ring-brown/10 max-w-[200px] sm:max-w-[240px]">
                  <div className="text-center">
                    <div className="flex items-center space-x-2 justify-center text-xs sm:text-sm font-semibold text-brown mb-0 sm:mb-1">
                      <span>1000+</span>
                    </div>
                    <p className="text-xs text-brown/80 leading-tight flex sm:hidden">Patients</p>
                    <div className="text-xs text-brown/80 leading-tight hidden sm:flex">
                      Satisfied Patients
                    </div>
                  </div>
                </div>

                {/* Jadwal */}
                <div className="absolute -bottom-15 -left-9 sm:-bottom-10 sm:-left-21 bg-off-white-2 rounded-xl p-2 sm:p-4 shadow-lg ring-1 ring-brown/10 max-w-[240px]">
                  <div className="text-left">
                    <div className="flex items-center justify-start space-x-2 text-xs sm:text-sm font-semibold text-brown mb-1">
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                        />
                      </svg>

                      <span>Jadwal</span>
                    </div>
                    <ul className="text-xs text-brown/80 leading-tight list-disc pl-4 sm:pl-5 lg:pl-4.7">
                      <li>Google Meet</li>
                      <li>Setiap Sabtu</li>
                      <li>Max 55 Menit</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pendekatan terapi Section */}
      <div className="relative py-24 sm:py-32">
        {/* Decorative dots */}
        <div className="pointer-events-none absolute top-1/6 right-1 sm:top-1/6 sm:right-1 size-3 sm:size-4 rounded-full ring-2 ring-yellow-3" />
        
        <div className="px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-brown">
              Pendekatan Terapi
            </h2>
            <p className="mt-4 text-lg text-brown/80">
              Pendekatan terapi yang saya gunakan bersifat fleksibel dan disesuaikan dengan kebutuhan pribadi klien, dinamika kepribadian serta nilai dan tujuan hidup masing-masing individu.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {/* CBT Card */}
            <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-brown/10">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brown text-center mb-2">Cognitive Behavioral Therapy (CBT)</h3>
              <p className="text-sm text-brown/80 text-center leading-relaxed">
                Terapi yang fokus pada perubahan pola pikir dan perilaku untuk mengatasi masalah emosional dan psikologis.
              </p>
            </div>

            {/* DBT Card */}
            <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-brown/10">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brown text-center mb-2">Dialectical Behavior Therapy (DBT)</h3>
              <p className="text-sm text-brown/80 text-center leading-relaxed">
                Terapi yang menggabungkan penerimaan dan perubahan untuk mengatur emosi dan meningkatkan keterampilan interpersonal.
              </p>
            </div>

            {/* TPT Card */}
            <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-brown/10">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brown text-center mb-2">Trauma Processing Therapy (TPT)</h3>
              <p className="text-sm text-brown/80 text-center leading-relaxed">
                Pendekatan khusus untuk memproses dan menyembuhkan trauma dengan aman dan efektif.
              </p>
            </div>

            {/* SBFT Card */}
            <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-brown/10">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brown text-center mb-2">Solution Brief Focused Therapy (SBFT)</h3>
              <p className="text-sm text-brown/80 text-center leading-relaxed">
                Terapi berorientasi solusi yang fokus pada kekuatan dan sumber daya yang sudah dimiliki klien.
              </p>
            </div>

            {/* Expressive Writing Therapy Card */}
            <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-brown/10">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brown text-center mb-2">Expressive Writing Therapy</h3>
              <p className="text-sm text-brown/80 text-center leading-relaxed">
                Terapi melalui menulis ekspresif untuk memproses emosi dan pengalaman hidup.
              </p>
            </div>

            {/* Mindfulness Card */}
            <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-brown/10">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brown text-center mb-2">Mindfulness</h3>
              <p className="text-sm text-brown/80 text-center leading-relaxed">
                Praktik kesadaran penuh untuk meningkatkan kesejahteraan mental dan emosional.
              </p>
            </div>

            {/* Art Therapy Card */}
            <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-brown/10">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brown text-center mb-2">Art Therapy</h3>
              <p className="text-sm text-brown/80 text-center leading-relaxed">
                Terapi melalui seni untuk mengekspresikan emosi dan memproses pengalaman secara kreatif.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bidang konseling psikologis section */}
      <div className="relative py-24 sm:py-32">
        {/* Decorative dots */}
        <div className="pointer-events-none absolute top-4 left-4 sm:top-6 sm:left-64 size-3 sm:size-4 rounded-full bg-brown" />
        <div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-6 sm:right-8 size-3 sm:size-4 rounded-full bg-brown" />
        <div className="pointer-events-none absolute top-1/6 right-1 sm:top-1/6 sm:right-1 size-3 sm:size-4 rounded-full ring-2 ring-yellow-3" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-brown">
              Bidang Konseling Psikologis
            </h2>
            <p className="mt-4 text-lg text-brown/80">
              Saya siap mendampingi Anda dalam menghadapi berbagai tantangan kehidupan dan kesehatan mental berikut:
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Trauma dan Kecemasan */}
              <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brown/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brown">Trauma dan Kecemasan</h3>
                </div>
              </div>

              {/* Identitas Diri */}
              <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brown/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brown">Identitas Diri</h3>
                </div>
              </div>

              {/* Masalah Dalam Hubungan */}
              <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brown/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brown">Masalah Dalam Hubungan</h3>
                </div>
              </div>

              {/* Gangguan Mood */}
              <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brown/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="">
                  <h3 className="text-lg font-semibold text-brown">Gangguan Mood</h3>
                  <p className="text-sm text-brown/70">(seperti depresi, bipolar, dll.)</p>
                  </div>
                </div>
              </div>

              {/* Gangguan Kepribadian */}
              <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brown/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brown">Gangguan Kepribadian</h3>
                </div>
              </div>

              {/* Karier dan Pengembangan Diri */}
              <div className="rounded-2xl bg-off-white-2 p-6 shadow-lg ring-1 ring-brown/5">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brown/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brown">Karier dan Pengembangan Diri</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="relative py-24 sm:py-32">
        {/* Decorative dots */}
        <div className="pointer-events-none absolute top-4 left-4 sm:top-6 sm:left-64 size-3 sm:size-4 rounded-full bg-brown" />
        <div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-6 sm:right-8 size-3 sm:size-4 rounded-full bg-brown" />
        <div className="pointer-events-none absolute top-1/6 right-1 sm:top-1/6 sm:right-1 size-3 sm:size-4 rounded-full ring-2 ring-yellow-3" />
        
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
                            {typeof faq.answer === 'string' ? (
                              <div className="space-y-3">
                                <p className="text-base leading-relaxed text-brown/80 font-normal">
                                  {faq.answer}
                                </p>
                                {faq.link && (
                                  <div className="pt-2">
                                    <a 
                                      href={faq.link} 
                                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brown/10 hover:bg-brown/15 text-brown font-medium transition-all duration-300 ease-out hover:shadow-sm group"
                                    >
                                      <span>{faq.linkText}</span>
                                      <svg className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                      </svg>
                                    </a>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className="space-y-3">
                                <div className="text-base leading-relaxed text-brown/80 font-normal">
                                  {faq.answer}
                                </div>
                                {faq.link && (
                                  <div className="pt-2">
                                    <a 
                                      href={faq.link} 
                                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brown/10 hover:bg-brown/15 text-brown font-medium transition-all duration-300 ease-out hover:shadow-sm group"
                                    >
                                      <span>{faq.linkText}</span>
                                      <svg className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                      </svg>
                                    </a>
                                  </div>
                                )}
                              </div>
                            )}
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

    {/* Testimoni */}
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

