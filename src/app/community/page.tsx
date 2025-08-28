"use client";

import { useMemo, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, MinusSmallIcon } from "@heroicons/react/24/solid";

type ReadingPackage = "1-pasal" | "1-pasal-1-renungan";

type AgeRange = "<20" | "21-30" | "31-40" | ">40";

type SourceOption = "instagram" | "youtube" | "shopee" | "teman" | "lain";

type FormErrors = Partial<Record<keyof FormState, string>> & {
  readingPackage?: string;
  sourceOtherText?: string;
};

interface FormState {
  fullName: string;
  whatsappUsername: string;
  instagramUsername: string;
  email: string;
  birthPlaceAndDate: string;
  ageRange: AgeRange | "";
  phoneNumber: string;
  readingPackage: ReadingPackage | "";
  source: SourceOption | "";
  sourceOtherText: string;
  motivation: string;
}

export default function CommunityPage() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    whatsappUsername: "",
    instagramUsername: "",
    email: "",
    birthPlaceAndDate: "",
    ageRange: "",
    phoneNumber: "",
    readingPackage: "",
    source: "",
    sourceOtherText: "",
    motivation: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isOtherSourceSelected = useMemo(() => form.source === "lain", [form.source]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  // No toggle needed for readingPackage since it's a single radio selection

  function validate(): boolean {
    const nextErrors: FormErrors = {};

    if (!form.source) nextErrors.source = "Wajib dipilih";
    if (isOtherSourceSelected && !form.sourceOtherText.trim()) {
      nextErrors.sourceOtherText = "Harap jelaskan sumber lainnya";
    }

    if (!form.fullName.trim()) nextErrors.fullName = "Wajib diisi";
    if (!form.whatsappUsername.trim()) nextErrors.whatsappUsername = "Wajib diisi";
    if (!form.email.trim()) nextErrors.email = "Wajib diisi";
    if (!form.birthPlaceAndDate.trim()) nextErrors.birthPlaceAndDate = "Wajib diisi";
    if (!form.phoneNumber.trim()) nextErrors.phoneNumber = "Wajib diisi";
    if (!form.readingPackage) nextErrors.readingPackage = "Pilih salah satu";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitted(false);
    if (!validate()) return;

    // Placeholder submit; integrate with backend or Google Form later
    console.log("Join Community Form Data", form);
    setIsSubmitted(true);
    // Optional: reset minimal fields
    // setForm({
    //   fullName: "",
    //   whatsappUsername: "",
    //   instagramUsername: "",
    //   email: "",
    //   birthPlaceAndDate: "",
    //   ageRange: "",
    //   phoneNumber: "",
    //   readingPackages: [],
    //   source: "",
    //   sourceOtherText: "",
    // });
  }

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-sm ring-1 ring-brown/10">
        <div className="px-6 sm:px-8 pt-6 sm:pt-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold">Valuable People Community</h1>
          <p className="mt-2 text-brown/70">Silahkan isi formulir ini</p>
        </div>

        <form onSubmit={handleSubmit} className="px-6 mt-6 sm:px-8 pb-6 sm:pb-8 space-y-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <fieldset className="">
          <legend className="text-brown">Darimana kamu tau info tentang Komunitas ini? <span className="text-red-600">*</span></legend>

          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="source"
                value="instagram"
                checked={form.source === "instagram"}
                onChange={() => update("source", "instagram")}
                className="h-5 w-5 accent-brown"
              />
              <span>Instagram</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="source"
                value="youtube"
                checked={form.source === "youtube"}
                onChange={() => update("source", "youtube")}
                className="h-5 w-5 accent-brown"
              />
              <span>Youtube</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="source"
                value="shopee"
                checked={form.source === "shopee"}
                onChange={() => update("source", "shopee")}
                className="h-5 w-5 accent-brown"
              />
              <span>Shopee</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="source"
                value="teman"
                checked={form.source === "teman"}
                onChange={() => update("source", "teman")}
                className="h-5 w-5 accent-brown"
              />
              <span>Diajak teman</span>
            </label>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="source"
                  value="lain"
                  checked={form.source === "lain"}
                  onChange={() => update("source", "lain")}
                  className="h-5 w-5 accent-brown"
                />
                <span>Yang lain:</span>
              </label>
              {isOtherSourceSelected && (
                <textarea
                  value={form.sourceOtherText}
                  onChange={e => update("sourceOtherText", e.target.value)}
                  rows={2}
                  className="w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                  placeholder="Tuliskan sumber lainnya di sini"
                />
              )}
            </div>

            {errors.source && (
              <p className="text-red-600 text-sm">{errors.source}</p>
            )}
            {errors.sourceOtherText && isOtherSourceSelected && (
              <p className="text-red-600 text-sm">{errors.sourceOtherText}</p>
            )}
          </div>
        </fieldset>

            <div>
              <label htmlFor="motivation" className="block text-brown font-medium">Apa yang membuat kamu ingin mengikuti Group Pembacaan Alkitab ini?</label>
              <textarea
                id="motivation"
                rows={4}
                value={form.motivation}
                onChange={e => update("motivation", e.target.value)}
                className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                placeholder="Tuliskan alasan atau motivasi kamu di sini"
              />
            </div>

          <div>
            <label htmlFor="fullName" className="block text-brown font-medium">
              Nama Lengkap <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={form.fullName}
              onChange={e => update("fullName", e.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.fullName) || undefined}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
              placeholder="Nama Lengkap"
            />
            {errors.fullName && <p id="fullName-error" className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
          </div>

            <div>
              <label htmlFor="email" className="block text-brown font-medium">Email <span className="text-red-600">*</span></label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={e => update("email", e.target.value)}
                required
                aria-required="true"
                aria-invalid={Boolean(errors.email) || undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                placeholder="email@gmail.com"
              />
              {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="igUsername" className="block text-brown font-medium">Username Instagram</label>
              <input
                type="text"
                id="igUsername"
                value={form.instagramUsername}
                onChange={e => update("instagramUsername", e.target.value)}
                className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
                placeholder="@usernameinstagram"
              />
            </div>
            
          <div>
            <label htmlFor="waUsername" className="block text-brown font-medium">
              Username Whatsapp <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="waUsername"
              value={form.whatsappUsername}
              onChange={e => update("whatsappUsername", e.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.whatsappUsername) || undefined}
              aria-describedby={errors.whatsappUsername ? "waUsername-error" : undefined}
              className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
              placeholder="@usernamewhatsapp"
            />
            {errors.whatsappUsername && <p id="waUsername-error" className="text-red-600 text-sm mt-1">{errors.whatsappUsername}</p>}
          </div>

          <div>
            <label htmlFor="birthPlaceAndDate" className="block text-brown font-medium">Tempat dan Tanggal Lahir <span className="text-red-600">*</span></label>
            <input
              type="text"
              id="birthPlaceAndDate"
              value={form.birthPlaceAndDate}
              onChange={e => update("birthPlaceAndDate", e.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.birthPlaceAndDate) || undefined}
              aria-describedby={errors.birthPlaceAndDate ? "birthPlaceAndDate-error" : undefined}
              className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
              placeholder="Contoh: Jakarta, 01 Jan 2000"
            />
            {errors.birthPlaceAndDate && <p id="birthPlaceAndDate-error" className="text-red-600 text-sm mt-1">{errors.birthPlaceAndDate}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-brown font-medium">Nomor Whatsapp <span className="text-red-600">*</span></label>
            <input
              type="tel"
              id="phoneNumber"
              value={form.phoneNumber}
              onChange={e => update("phoneNumber", e.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.phoneNumber) || undefined}
              aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
              className="mt-2 w-full rounded-md border border-brown/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-2 bg-white"
              placeholder="08xxxxxxxxxx"
            />
            {errors.phoneNumber && <p id="phoneNumber-error" className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>

          <fieldset className="space-y-3">
            <legend className="text-brown font-medium">Usia Saat Ini</legend>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="ageRange"
                value="<20"
                checked={form.ageRange === "<20"}
                onChange={() => update("ageRange", "<20")}
                className="h-5 w-5 accent-brown"
              />
              <div className="flex items-center">
                <ChevronLeftIcon className="h-5 w-5 text-brown -ml-1" aria-hidden="true" />
                <span>20 tahun</span>
              </div>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="ageRange"
                value="21-30"
                checked={form.ageRange === "21-30"}
                onChange={() => update("ageRange", "21-30")}
                className="h-5 w-5 accent-brown"
              />
              <div className="flex items-center">
                21 <MinusSmallIcon className="h-5 w-5 text-brown" aria-hidden="true" /> 30 tahun
              </div>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="ageRange"
                value="31-40"
                checked={form.ageRange === "31-40"}
                onChange={() => update("ageRange", "31-40")}
                className="h-5 w-5 accent-brown"
              />
              <div className="flex items-center">
                31 <MinusSmallIcon className="h-5 w-5 text-brown" aria-hidden="true" /> 40 tahun
              </div>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="ageRange"
                value=">40"
                checked={form.ageRange === ">40"}
                onChange={() => update("ageRange", ">40")}
                className="h-5 w-5 accent-brown"
              />
              <div className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-brown -ml-1" aria-hidden="true" />
                <span>40 tahun</span>
              </div>
            </label>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-brown font-medium">Paket Bacaan <span className="text-red-600">*</span></legend>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="readingPackage"
                value="1-pasal"
                checked={form.readingPackage === "1-pasal"}
                onChange={() => update("readingPackage", "1-pasal")}
                className="h-5 w-5 accent-brown"
              />
              <span>1 pasal setiap hari</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="readingPackage"
                value="1-pasal-1-renungan"
                checked={form.readingPackage === "1-pasal-1-renungan"}
                onChange={() => update("readingPackage", "1-pasal-1-renungan")}
                className="h-5 w-5 accent-brown"
              />
              <span>1 pasal + 1 renungan setiap hari</span>
            </label>
            {errors.readingPackage && (
              <p className="text-red-600 text-sm">{errors.readingPackage}</p>
            )}
          </fieldset>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brown text-white px-5 py-2.5 font-medium hover:bg-brown-2 focus:outline-none focus:ring-2 focus:ring-yellow-2"
          >
            Kirim
          </button>
          {isSubmitted && (
            <p className="text-green-700 mt-3">Terima kasih! Form berhasil dikirim.</p>
          )}
        </div>
        </form>
      </div>
      </section>
  );
}

