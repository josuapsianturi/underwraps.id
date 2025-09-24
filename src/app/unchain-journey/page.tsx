"use client";

import { PaperAirplaneIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import Image from 'next/image';
import { useState, useMemo } from 'react';

type Gender = "laki-laki" | "perempuan" | "memilih-tidak-menjawab";

type CounselingTopic = 
  | "penyakit-fisik" 
  | "tidak-percaya-diri" 
  | "hubungan-tidak-sehat" 
  | "pengkhianatan" 
  | "patah-hati" 
  | "kesepian" 
  | "masalah-komunikasi" 
  | "lainnya";

type FormErrors = Partial<Record<keyof FormState, string>> & {
  counselingTopicOther?: string;
};

interface FormState {
  fullName: string;
  gender: Gender | "";
  birthPlaceAndDate: string;
  domicile: string;
  religion: string;
  mainActivity: string;
  activityLocation: string;
  phoneNumber: string;
  counselingTopic: CounselingTopic | "";
  counselingTopicOther: string;
  problemDescription: string;
  expectations: string;
  email: string;
  // Pre-Counseling questions
  selfHarm: boolean | null;
  suicideThoughts: boolean | null;
  previousCounseling: boolean | null;
  previousComplaints: string;
  previousTreatments: string;
  expectedApproach: string;
  // Voluntary Contribution
  wantsToContribute: boolean | null;
  proofOfTransferFile: File | null;
  wantsHelp: boolean | null;
  willingToEvaluate: boolean | null;
}

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
  const [form, setForm] = useState<FormState>({
    fullName: "",
    gender: "",
    birthPlaceAndDate: "",
    domicile: "",
    religion: "",
    mainActivity: "",
    activityLocation: "",
    phoneNumber: "",
    counselingTopic: "",
    counselingTopicOther: "",
    problemDescription: "",
    expectations: "",
    email: "",
    // Pre-Counseling questions
    selfHarm: null,
    suicideThoughts: null,
    previousCounseling: null,
    previousComplaints: "",
    previousTreatments: "",
    expectedApproach: "",
    // Voluntary Contribution
    wantsToContribute: null,
    proofOfTransferFile: null,
    wantsHelp: null,
    willingToEvaluate: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isOtherTopicSelected = useMemo(() => form.counselingTopic === "lainnya", [form.counselingTopic]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Wajib diisi";
    if (!form.gender) nextErrors.gender = "Wajib dipilih";
    if (!form.birthPlaceAndDate.trim()) nextErrors.birthPlaceAndDate = "Wajib diisi";
    if (!form.domicile.trim()) nextErrors.domicile = "Wajib diisi";
    if (!form.mainActivity.trim()) nextErrors.mainActivity = "Wajib diisi";
    if (!form.activityLocation.trim()) nextErrors.activityLocation = "Wajib diisi";
    if (!form.phoneNumber.trim()) nextErrors.phoneNumber = "Wajib diisi";
    if (!form.counselingTopic) nextErrors.counselingTopic = "Wajib dipilih";
    if (isOtherTopicSelected && !form.counselingTopicOther.trim()) {
      nextErrors.counselingTopicOther = "Harap jelaskan topik lainnya";
    }
    if (!form.problemDescription.trim()) nextErrors.problemDescription = "Wajib diisi";
    if (!form.expectations.trim()) nextErrors.expectations = "Wajib diisi";
    if (!form.email.trim()) nextErrors.email = "Wajib diisi";
    
    // Pre-Counseling validation
    if (form.selfHarm === null) nextErrors.selfHarm = "Wajib dipilih";
    if (form.suicideThoughts === null) nextErrors.suicideThoughts = "Wajib dipilih";
    if (form.previousCounseling === null) nextErrors.previousCounseling = "Wajib dipilih";
    if (form.previousCounseling === true && !form.previousComplaints.trim()) {
      nextErrors.previousComplaints = "Wajib diisi jika pernah konseling";
    }
    if (!form.expectedApproach.trim()) nextErrors.expectedApproach = "Wajib diisi";
    
    // Voluntary Contribution validation
    if (form.wantsToContribute === null) nextErrors.wantsToContribute = "Wajib dipilih";
    if (form.wantsToContribute === true && !form.proofOfTransferFile) {
      nextErrors.proofOfTransferFile = "Bukti transfer wajib diunggah jika ingin berkontribusi";
    }
    
    if (form.wantsHelp === null) nextErrors.wantsHelp = "Wajib dipilih";
    if (form.willingToEvaluate === null) nextErrors.willingToEvaluate = "Wajib dipilih";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitted(false);
    if (!validate()) return;

    // Placeholder submit; integrate with backend or Google Form later
    console.log("Unchain Journey Form Data", form);
    setIsSubmitted(true);
  }

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
                <div className="absolute -top-10 -left-11 sm:-top-16 sm:-left-41 bg-off-white-2 rounded-xl p-2 sm:p-4 shadow-lg ring-1 ring-brown/10 max-w-[200px] sm:max-w-[240px]">
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
                <div className="absolute -bottom-15 -left-11 sm:-bottom-10 sm:-left-23 bg-off-white-2 rounded-xl p-2 sm:p-4 shadow-lg ring-1 ring-brown/10 max-w-[240px]">
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

      {/* About Section */}
      <div className="relative py-24 sm:py-32">
        {/* Decorative dots */}
        <div className="pointer-events-none absolute top-4 left-4 sm:top-6 sm:left-64 size-3 sm:size-4 rounded-full bg-brown" />
        <div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-6 sm:right-8 size-3 sm:size-4 rounded-full bg-brown" />
        <div className="pointer-events-none absolute top-1/6 right-1 sm:top-1/6 sm:right-1 size-3 sm:size-4 rounded-full ring-2 ring-yellow-3" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-brown mb-8 text-center">
              Tentang Unchain Journey
            </h2>
            
            <div className="prose prose-lg max-w-none text-brown/80 space-y-6">
              <p className="text-lg leading-relaxed">
                Kami menemukan adanya orang-orang yang masih merasa kesulitan menjaga keseimbangan antara iman dan kesehatan mental. Ada yang terlalu menekankan sisi rohani, hingga mengabaikan kebutuhan psikologisnya. Sebaliknya, ada yang fokus mencari pertolongan secara psikologis, namun merasa kosong secara rohani.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hal ini kemudian muncul dalam bentuk ketegangan batin seperti misalnya, ada yang merasa sudah rajin berdoa dan beriman pada Tuhan, tapi masih terluka secara emosional dan belum pulih dari luka batin; atau merasa stabil secara mental, tapi kehilangan arah dan tujuan Tuhan dalam hidupnya.
              </p>
              
              <p className="text-lg leading-relaxed">
                Meskipun sejak tahun 2020, Underwraps hanya berfokus untuk membantu orang-orang untuk lebih bersemangat membaca Alkitab melalui Bible journaling. Namun seiring waktu, kebutuhan yang muncul semakin jelas dari banyaknya cerita dan pesan yang masuk di sosial media Under Wraps. Kami menyadari bahwa saat ini banyak orang bukan hanya membutuhkan produk yang bisa membantu, tetapi juga ruang aman untuk bertumbuh secara psikologis dan rohani.
              </p>
              
              <div className="bg-off-white-2/50 rounded-2xl p-8 border border-brown/10">
                <p className="text-lg leading-relaxed mb-4">
                  Penelitian menunjukkan bahwa spiritualitas dan kesehatan mental saling berhubungan erat—keduanya sama-sama berkontribusi pada resiliensi, kebahagiaan, dan kualitas hidup seseorang (Gutierrez-Rojas et al., 2025; Aggarwal et al., 2023). Studi global menunjukkan bahwa ketika keseimbangan ini tercapai, seseorang lebih mampu menghadapi stres, mengelola emosi, dan menemukan makna hidup (Bożek et al., 2020; Parviniannasab et al., 2022).
                </p>
              </div>
              
              <p className="text-lg leading-relaxed">
                Oleh karena itu, Underwraps mengembangkan program bernama Unchain yaitu sebuah ruang aman yang menyediakan layanan berupa konseling dan mentoring, yang ditangani oleh psikolog berlisensi dan mentor atau coach. Unchain hadir untuk membantu kamu mengelola emosi, menghadapi tantangan hidup dengan cara yang lebih sehat dan adaptif sehingga kamu bisa menikmati kehidupan yang fulfilling dan penuh makna.
              </p>
              
              {/* References */}
              <div className="mt-12 pt-8 border-t border-brown/10">
                <h3 className="text-xl font-semibold text-brown mb-6">Referensi</h3>
                <div className="space-y-4 text-sm text-brown/70 leading-relaxed">
                  <p>
                    Bożek, A., Nowak, P. F., & Blukacz, M. (2020). The relationship between spirituality, health-related behavior, and psychological well-being. <em>Frontiers in psychology</em>, <em>11</em>, 1997.
                  </p>
                  <p>
                    Gutierrez-Rojas, A., Manco-Herrera, C., Nuñez-Escarcena, X., Loayza-Ramirez, L., Sanca-Valeriano, S., Rodriguez-Pantigoso, W., & Espinola-Sanchez, M. (2025). The influence of spirituality on psychological resilience in cancer patients undergoing oncological treatment: a cross-sectional study. <em>BMC Palliative Care</em>, <em>24</em>(1), 136.
                  </p>
                  <p>
                    Aggarwal, S., Wright, J., Morgan, A., Patton, G., & Reavley, N. (2023). Religiosity and spirituality in the prevention and management of depression and anxiety in young people: a systematic review and meta-analysis. <em>BMC psychiatry</em>, <em>23</em>(1), 729. https://doi.org/10.1186/s12888-023-05091-2
                  </p>
                  <p>
                    Parviniannasab, A. M., Bijani, M., & Dehghani, A. (2022). The mediating role of psychological capital in relations between spiritual well-being and mental health among nursing students. <em>BMC psychology</em>, <em>10</em>(1), 230.
                  </p>
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

      {/* Registration Form Section */}
      <div id="about-program" className="relative py-24 sm:py-32">
        {/* Decorative dots */}
        <div className="pointer-events-none absolute top-4 left-4 sm:top-6 sm:left-64 size-3 sm:size-4 rounded-full bg-brown" />
        <div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-6 sm:right-8 size-3 sm:size-4 rounded-full bg-brown" />
        <div className="pointer-events-none absolute top-1/6 right-1 sm:top-1/6 sm:right-1 size-3 sm:size-4 rounded-full ring-2 ring-yellow-3" />
        
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="px-0 mt-6 pb-6 sm:pb-8 space-y-10">
            {/* Form Header */}
            <div className="pt-6 sm:pt-8 text-center space-y-2">
              <h1 className="text-2xl sm:text-3xl font-semibold">Formulir Pendaftaran Unchain Journey</h1>
              <p className="text-brown/70">Silahkan isi formulir ini dengan lengkap</p>
            </div>

            {/* Consent Questions */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-brown">Pertanyaan Persetujuan</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <fieldset>
                  <legend className="text-brown font-medium">
                    1. Apakah kamu mau dibantu juga? <span className="text-red-600">*</span>
                  </legend>
                  <div className="space-y-3 mt-2">
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="wantsHelp"
                        value="true"
                        checked={form.wantsHelp === true}
                        onChange={() => update("wantsHelp", true)}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Ya</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="wantsHelp"
                        value="false"
                        checked={form.wantsHelp === false}
                        onChange={() => update("wantsHelp", false)}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Tidak</span>
                    </label>
                  </div>
                  {errors.wantsHelp && <p className="text-red-600 text-sm mt-1">{errors.wantsHelp}</p>}
                </fieldset>

                <fieldset>
                  <legend className="text-brown font-medium">
                    2. Apakah kamu berkenan untuk mengisi link evaluasi setelah sesi? <span className="text-red-600">*</span>
                  </legend>
                  <div className="space-y-3 mt-2">
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="willingToEvaluate"
                        value="true"
                        checked={form.willingToEvaluate === true}
                        onChange={() => update("willingToEvaluate", true)}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Ya</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="willingToEvaluate"
                        value="false"
                        checked={form.willingToEvaluate === false}
                        onChange={() => update("willingToEvaluate", false)}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Tidak</span>
                    </label>
                  </div>
                  {errors.willingToEvaluate && <p className="text-red-600 text-sm mt-1">{errors.willingToEvaluate}</p>}
                </fieldset>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-brown">Informasi Data Diri</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="fullName" className="block text-brown font-medium">
                    3. Nama dan Nama Panggilan <span className="text-red-600">*</span>
                  </label>
                  <p className="text-sm text-brown/60 mb-2">Contoh: Hutomo, Tomo</p>
                  <input
                    type="text"
                    id="fullName"
                    value={form.fullName}
                    onChange={e => update("fullName", e.target.value)}
                    required
                    className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                    placeholder="Nama Lengkap"
                  />
                  {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Gender */}
                <fieldset>
                  <legend className="text-brown font-medium">4. Jenis Kelamin <span className="text-red-600">*</span></legend>
                  <div className="space-y-3 mt-2">
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="gender"
                        value="laki-laki"
                        checked={form.gender === "laki-laki"}
                        onChange={() => update("gender", "laki-laki")}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Laki-laki</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="gender"
                        value="perempuan"
                        checked={form.gender === "perempuan"}
                        onChange={() => update("gender", "perempuan")}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Perempuan</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="gender"
                        value="memilih-tidak-menjawab"
                        checked={form.gender === "memilih-tidak-menjawab"}
                        onChange={() => update("gender", "memilih-tidak-menjawab")}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Memilih tidak menjawab</span>
                    </label>
                  </div>
                  {errors.gender && <p className="text-red-600 text-sm mt-1">{errors.gender}</p>}
                </fieldset>

                {/* Birth Place and Date */}
                <div>
                  <label htmlFor="birthPlaceAndDate" className="block text-brown font-medium">
                    5. Tempat dan Tanggal Lahir <span className="text-red-600">*</span>
                  </label>
                  <p className="text-sm text-brown/60 mb-2">Contoh: Jakarta, 22 Mei 2000</p>
                  <input
                    type="text"
                    id="birthPlaceAndDate"
                    value={form.birthPlaceAndDate}
                    onChange={e => update("birthPlaceAndDate", e.target.value)}
                    required
                    className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                    placeholder="Tempat, Tanggal Lahir"
                  />
                  {errors.birthPlaceAndDate && <p className="text-red-600 text-sm mt-1">{errors.birthPlaceAndDate}</p>}
                </div>

                {/* Domicile */}
                <div>
                  <label htmlFor="domicile" className="block text-brown font-medium">
                    6. Domisili <span className="text-red-600">*</span>
                  </label>
                  <p className="text-sm text-brown/60 mb-2">Tempat tinggal saat ini</p>
                  <input
                    type="text"
                    id="domicile"
                    value={form.domicile}
                    onChange={e => update("domicile", e.target.value)}
                    required
                    className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                    placeholder="Domisili"
                  />
                  {errors.domicile && <p className="text-red-600 text-sm mt-1">{errors.domicile}</p>}
                </div>

                {/* Religion */}
                <div>
                  <label htmlFor="religion" className="block text-brown font-medium">
                    7. Agama <span className="text-sm text-brown/60 mb-2">(Optional)</span>
                  </label>
                  
                  <input
                    type="text"
                    id="religion"
                    value={form.religion}
                    onChange={e => update("religion", e.target.value)}
                    className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                    placeholder="Jawaban Anda"
                  />
                </div>

                {/* Main Activity */}
                <div>
                  <label htmlFor="mainActivity" className="block text-brown font-medium">
                    8. Kegiatan utama saat ini <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="mainActivity"
                    value={form.mainActivity}
                    onChange={e => update("mainActivity", e.target.value)}
                    required
                    className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                    placeholder="Kegiatan utama"
                  />
                  {errors.mainActivity && <p className="text-red-600 text-sm mt-1">{errors.mainActivity}</p>}
                </div>

                {/* Activity Location */}
                <div>
                  <label htmlFor="activityLocation" className="block text-brown font-medium">
                    9. Di mana Anda melakukan kegiatan utama Anda? (kuliah, kerja, atau wiraswasta) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="activityLocation"
                    value={form.activityLocation}
                    onChange={e => update("activityLocation", e.target.value)}
                    required
                    className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                    placeholder="Lokasi kegiatan"
                  />
                  {errors.activityLocation && <p className="text-red-600 text-sm mt-1">{errors.activityLocation}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-brown font-medium">
                    10. No Telp Aktif (Whatsapp) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={form.phoneNumber}
                    onChange={e => update("phoneNumber", e.target.value)}
                    required
                    className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                    placeholder="Nomor WhatsApp"
                  />
                  {errors.phoneNumber && <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>}
                </div>
              </div>
            </div>

            {/* Counseling Information Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-brown">Informasi Konseling</h2>
              
              {/* Counseling Topic */}
              <fieldset>
                <legend className="text-brown font-medium">
                  11. Silahkan pilih topik masalah yang ingin kamu sampaikan di sesi konseling <span className="text-red-600">*</span>
                </legend>
                <div className="space-y-3 mt-2">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="counselingTopic"
                      value="penyakit-fisik"
                      checked={form.counselingTopic === "penyakit-fisik"}
                      onChange={() => update("counselingTopic", "penyakit-fisik")}
                      className="h-5 w-5 accent-brown"
                    />
                    <span>Merasa bingung/down karena menderita penyakit fisik (kanker, dll)</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="counselingTopic"
                      value="tidak-percaya-diri"
                      checked={form.counselingTopic === "tidak-percaya-diri"}
                      onChange={() => update("counselingTopic", "tidak-percaya-diri")}
                      className="h-5 w-5 accent-brown"
                    />
                    <span>Merasa tidak percaya diri</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="counselingTopic"
                      value="hubungan-tidak-sehat"
                      checked={form.counselingTopic === "hubungan-tidak-sehat"}
                      onChange={() => update("counselingTopic", "hubungan-tidak-sehat")}
                      className="h-5 w-5 accent-brown"
                    />
                    <span>Berada di Hubungan yang Tidak Sehat</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="counselingTopic"
                      value="pengkhianatan"
                      checked={form.counselingTopic === "pengkhianatan"}
                      onChange={() => update("counselingTopic", "pengkhianatan")}
                      className="h-5 w-5 accent-brown"
                    />
                    <span>Pengkhianatan</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="counselingTopic"
                      value="patah-hati"
                      checked={form.counselingTopic === "patah-hati"}
                      onChange={() => update("counselingTopic", "patah-hati")}
                      className="h-5 w-5 accent-brown"
                    />
                    <span>Patah Hati karena Putus Cinta</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="counselingTopic"
                      value="kesepian"
                      checked={form.counselingTopic === "kesepian"}
                      onChange={() => update("counselingTopic", "kesepian")}
                      className="h-5 w-5 accent-brown"
                    />
                    <span>Kesepian</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="counselingTopic"
                      value="masalah-komunikasi"
                      checked={form.counselingTopic === "masalah-komunikasi"}
                      onChange={() => update("counselingTopic", "masalah-komunikasi")}
                      className="h-5 w-5 accent-brown"
                    />
                    <span>Masalah Komunikasi</span>
                  </label>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="counselingTopic"
                        value="lainnya"
                        checked={form.counselingTopic === "lainnya"}
                        onChange={() => update("counselingTopic", "lainnya")}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Yang lain:</span>
                    </label>
                    {isOtherTopicSelected && (
                      <input
                        type="text"
                        value={form.counselingTopicOther}
                        onChange={e => update("counselingTopicOther", e.target.value)}
                        className="w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                        placeholder="Tuliskan topik lainnya"
                      />
                    )}
                  </div>
                </div>
                {errors.counselingTopic && <p className="text-red-600 text-sm mt-1">{errors.counselingTopic}</p>}
                {errors.counselingTopicOther && isOtherTopicSelected && (
                  <p className="text-red-600 text-sm mt-1">{errors.counselingTopicOther}</p>
                )}
              </fieldset>

              {/* Problem Description */}
              <div>
                <label htmlFor="problemDescription" className="block text-brown font-medium">
                  12. Silahkan deskripsikan masalah kamu secara singkat <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="problemDescription"
                  rows={4}
                  value={form.problemDescription}
                  onChange={e => update("problemDescription", e.target.value)}
                  required
                  className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                  placeholder="Deskripsikan masalah yang ingin dibahas"
                />
                {errors.problemDescription && <p className="text-red-600 text-sm mt-1">{errors.problemDescription}</p>}
              </div>

              {/* Expectations */}
              <div>
                <label htmlFor="expectations" className="block text-brown font-medium">
                  13. Apa harapan kamu setelah mengikuti sesi konseling ini? <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="expectations"
                  rows={4}
                  value={form.expectations}
                  onChange={e => update("expectations", e.target.value)}
                  required
                  className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                  placeholder="Tuliskan harapan Anda"
                />
                {errors.expectations && <p className="text-red-600 text-sm mt-1">{errors.expectations}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-brown font-medium">
                  14. Alamat Email Aktif <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={e => update("email", e.target.value)}
                  required
                  className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                  placeholder="email@example.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Pre-Counseling Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-brown">Pre-Counseling</h2>
              
              <div className="space-y-6">
                {/* Question 15: Self-harm */}
                <fieldset>
                  <legend className="text-brown font-medium">
                    15. Apakah Anda pernah melakukan atau pernah memikirkan untuk menyakiti diri Anda dalam waktu 1 bulan terakhir? <span className="text-red-600">*</span>
                  </legend>
                  <div className="space-y-3 mt-2">
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="selfHarm"
                        value="true"
                        checked={form.selfHarm === true}
                        onChange={() => update("selfHarm", true)}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Pernah</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="selfHarm"
                        value="false"
                        checked={form.selfHarm === false}
                        onChange={() => update("selfHarm", false)}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Tidak Pernah</span>
                    </label>
                  </div>
                  {errors.selfHarm && <p className="text-red-600 text-sm mt-1">{errors.selfHarm}</p>}
                </fieldset>

                {/* Question 16: Suicide thoughts */}
                <fieldset>
                  <legend className="text-brown font-medium">
                    16. Apakah Anda pernah memikirkan atau melakukan percobaan bunuh diri dalam waktu 1 bulan terakhir?
                  </legend>
                  <div className="space-y-3 mt-2">
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="suicideThoughts"
                        value="true"
                        checked={form.suicideThoughts === true}
                        onChange={() => update("suicideThoughts", true)}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Pernah</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="suicideThoughts"
                        value="false"
                        checked={form.suicideThoughts === false}
                        onChange={() => update("suicideThoughts", false)}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Tidak Pernah</span>
                    </label>
                  </div>
                  {form.suicideThoughts === true && (
                    <div className="text-right mt-2">
                      <button
                        type="button"
                        onClick={() => update("suicideThoughts", null)}
                        className="text-sm text-brown/70 hover:text-brown underline"
                      >
                        Batalkan pilihan
                      </button>
                    </div>
                  )}
                  {errors.suicideThoughts && <p className="text-red-600 text-sm mt-1">{errors.suicideThoughts}</p>}
                </fieldset>

                {/* Question 17: Previous counseling */}
                <fieldset>
                  <legend className="text-brown font-medium">
                    17. Apakah kamu pernah mengikuti mentoring ataupun konseling sebelumnya? <span className="text-red-600">*</span>
                  </legend>
                  <div className="space-y-3 mt-2">
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="previousCounseling"
                        value="true"
                        checked={form.previousCounseling === true}
                        onChange={() => update("previousCounseling", true)}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Pernah</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="previousCounseling"
                        value="false"
                        checked={form.previousCounseling === false}
                        onChange={() => update("previousCounseling", false)}
                        className="h-5 w-5 accent-brown"
                      />
                      <span>Tidak Pernah</span>
                    </label>
                  </div>
                  {errors.previousCounseling && <p className="text-red-600 text-sm mt-1">{errors.previousCounseling}</p>}
                </fieldset>

                {/* Question 18: Previous complaints */}
                {form.previousCounseling === true && (
                  <div>
                    <label htmlFor="previousComplaints" className="block text-brown font-medium">
                      18. Jika pernah, keluhan apa yang kamu ceritakan sebelumnya? <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="previousComplaints"
                      value={form.previousComplaints}
                      onChange={e => update("previousComplaints", e.target.value)}
                      className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                      placeholder="Jelaskan keluhan yang pernah diceritakan"
                    />
                    {errors.previousComplaints && <p className="text-red-600 text-sm mt-1">{errors.previousComplaints}</p>}
                  </div>
                )}

                {/* Question 19: Previous treatments */}
                <div>
                  <label htmlFor="previousTreatments" className="block text-brown font-medium">
                    19. Penanganan apa saja yang pernah kamu dapatkan?
                  </label>
                  <textarea
                    id="previousTreatments"
                    rows={4}
                    value={form.previousTreatments}
                    onChange={e => update("previousTreatments", e.target.value)}
                    className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                    placeholder="Jelaskan penanganan yang pernah diterima"
                  />
                </div>

                {/* Question 20: Expected approach */}
                <div>
                  <label htmlFor="expectedApproach" className="block text-brown font-medium">
                    20. Pendekatan seperti apa yang Anda harapkan dari sesi ini? <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="expectedApproach"
                    rows={4}
                    value={form.expectedApproach}
                    onChange={e => update("expectedApproach", e.target.value)}
                    required
                    className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                    placeholder="Jelaskan pendekatan yang diharapkan"
                  />
                  {errors.expectedApproach && <p className="text-red-600 text-sm mt-1">{errors.expectedApproach}</p>}
                </div>
              </div>
            </div>

            {/* Voluntary Contribution Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-brown">Kontribusi Sukarela</h2>
              
              <p className="text-brown/70 leading-relaxed">
                Meski program ini tidak dikenakan biaya, kami membuka kesempatan bagi siapa pun yang tergerak untuk turut mendukung agar program ini bisa terus berjalan. Kontribusi yang diberikan sekecil apapun dengan ikhlas akan membantu program ini menjangkau lebih banyak orang, menjadikan kasih ini menyebar lebih luas lagi, agar lebih banyak beban yang bisa terasa lebih ringan, dan lebih banyak hidup yang kembali dikuatkan ✨❤️
              </p>

              <fieldset>
                <legend className="text-brown font-medium">
                  Apakah Anda ingin memberikan kontribusi sukarela? <span className="text-red-600">*</span>
                </legend>
                <div className="space-y-3 mt-2">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="wantsToContribute"
                      value="true"
                      checked={form.wantsToContribute === true}
                      onChange={() => update("wantsToContribute", true)}
                      className="h-5 w-5 accent-brown"
                    />
                    <span>Ya, saya ingin berkontribusi</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="wantsToContribute"
                      value="false"
                      checked={form.wantsToContribute === false}
                      onChange={() => {
                        update("wantsToContribute", false);
                        update("proofOfTransferFile", null);
                      }}
                      className="h-5 w-5 accent-brown"
                    />
                    <span>Tidak, saya tidak ingin berkontribusi saat ini</span>
                  </label>
                </div>
                {errors.wantsToContribute && <p className="text-red-600 text-sm mt-1">{errors.wantsToContribute}</p>}
              </fieldset>

              {form.wantsToContribute === true && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-brown">
                    Silahkan sertakan bukti transfer bagi kamu yang tergerak untuk mendukung program ini
                  </h3>
                  
                  <div className="bg-off-white-2/50 rounded-lg p-4 border border-brown/10">
                    <p className="text-brown font-medium mb-2">Informasi Bank:</p>
                    <p className="text-brown">BCA 6041182391 an Michelle Theodora</p>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-brown font-medium">
                      Upload bukti transfer <span className="text-red-600">*</span>
                    </label>
                    <p className="text-sm text-brown/60">Upload 1 file yang didukung: image. Maks 1 GB.</p>
                    
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        id="proofOfTransfer"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          update("proofOfTransferFile", file);
                        }}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => document.getElementById('proofOfTransfer')?.click()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-brown/30 text-brown hover:bg-brown/5 focus:outline-none focus:ring-2 focus:ring-yellow-2 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        Tambahkan file
                      </button>
                      {form.proofOfTransferFile && (
                        <span className="text-brown text-sm">
                          {form.proofOfTransferFile.name}
                        </span>
                      )}
                    </div>
                    {errors.proofOfTransferFile && <p className="text-red-600 text-sm mt-1">{errors.proofOfTransferFile}</p>}
                  </div>

                  <p className="text-sm text-brown/70 italic">
                    *Feel free untuk skip page ini dan langsung submit jika kamu belum tergerak untuk mendukung program ini 🙏😊
                  </p>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2 space-y-6 text-center">
              <button
                type="submit"
                className="hover:cursor-pointer text-center w-full sm:max-w-sm inline-flex items-center justify-center rounded-md bg-brown text-white px-5 py-2.5 font-medium hover:bg-brown-2 focus:outline-none focus:ring-2 focus:ring-yellow-2"
              >
                Kirim Formulir
              </button>
              {isSubmitted && (
                <p className="text-green-700 mt-3">Terima kasih! Form berhasil dikirim. Tim kami akan segera menghubungi Anda.</p>
              )}
            </div>
          </form>
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
            <h2 className="text-3xl font-semibold text-center tracking-tight text-brown sm:text-4xl">
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

