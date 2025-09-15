import Image from "next/image";

export default function AboutPage() {

  return (
    <div className="bg-off-white">
      <div className="isolate">
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
            <div className="mx-auto max-w-7xl sm:px-6 pb-32 md:pt-20 lg:pt-0 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="text-center my-16">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-brown md:text-7xl my-8">About UnderWraps</h1>
                  <div className="inline-flex items-center gap-2 rounded-full bg-yellow-1/20 ring-1 ring-yellow-1/30 px-4 py-2 text-sm text-brown">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292c.14.43.54.72.99.72h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034c-.36.262-.51.73-.37 1.16l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.802-2.034a1 1 0 0 0-1.176 0l-2.802 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292c.14-.43-.01-.898-.37-1.16L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462c.45 0 .85-.29.99-.72l1.07-3.292Z" clipRule="evenodd" />
                    </svg>
                    Our Journey of Hope & Healing
                  </div>
                </div>

                {/* Story Section */}
                <div className="mb-40">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-yellow-1/30"></div>
                    <h2 className="text-3xl font-semibold text-brown mb-8 relative z-10">Semua dimulai dari...</h2>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-brown/80 space-y-6">
                    <p className="text-lg leading-relaxed">
                      Sebuah kerinduan sederhana untuk setiap orang bisa merasakan kasih Tuhan dan tidak kehilangan harapan.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Saat remaja, founder Underwraps yaitu <span className="font-semibold text-brown">Michelle Theodora</span>, menemukan sendiri bagaimana Firman Tuhan dalam Alkitab dapat memberi pengharapan dan arahan di tengah pergumulan hidup, bahkan ketika menghadapi leukemia.
                    </p>
                    
                    <div className="bg-off-white-2/50 rounded-2xl p-4 sm:p-8 border border-brown/10 my-8">
                      <p className="text-lg leading-relaxed">
                        Pada tahun 2020, kerinduan itu diwujudkan lewat Bible journaling—dimulai dari Highlighter Guide hingga Bible Journal Starter Kit yang membantu ribuan orang menemukan rasa seru dan semangat dalam membaca firman Tuhan.
                      </p>
                    </div>
                    
                    <p className="text-lg leading-relaxed">
                      Namun perjalanan tidak berhenti di sana. Setelah menempuh studi magister profesi di bidang Psikologi Klinis, Michelle memperluas visi Underwraps, bukan hanya sebagai gift shop rohani, tetapi juga sebagai sahabat yang rindu untuk mendukung pertumbuhan pribadi setiap orang secara menyeluruh, baik secara psikologis maupun spiritual. Kini, Underwraps fokus untuk menjembatani kebutuhan mental dan spiritual, supaya setiap orang bisa mencapai kehidupan yang utuh dan penuh makna.
                    </p>
                  </div>
                </div>

                {/* Vision & Mission Grid */}
                <div className="grid md:grid-cols-2 gap-12 my-40">
                  {/* Vision */}
                  <div className="bg-gradient-to-br from-yellow-1/10 to-yellow-2/10 rounded-3xl p-4 sm:p-8 border border-yellow-1/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-yellow-1/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold text-brown">Visi</h3>
                    </div>
                    <p className="text-brown/80 leading-relaxed">
                      Menjadi global Christian thoughtful gift shop yang menginspirasi pertumbuhan pribadi secara holistik dari sisi psikologis dan spiritual, melalui produk dan layanan yang penuh belas kasih, transformatif, dan mencerminkan nilai-nilai berdasarkan Firman Tuhan.
                    </p>
                  </div>

                  {/* Mission */}
                  <div className="bg-gradient-to-br from-brown/5 to-brown/10 rounded-3xl p-4 sm:p-8 border border-brown/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold text-brown">Misi</h3>
                    </div>
                    <ul className="space-y-4 text-brown/80">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-brown mt-2 flex-shrink-0"></div>
                        <span>Menghadirkan produk, packaging, dan pelayanan yang selalu mengingatkan setiap orang bahwa mereka berharga dan berdaya.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-brown mt-2 flex-shrink-0"></div>
                        <span>Menciptakan produk yang menolong orang bertumbuh dalam pengembangan diri—baik secara emosional, psikologis, maupun rohani.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-brown mt-2 flex-shrink-0"></div>
                        <span>Menghadirkan layanan, edukasi, dan produk yang memampukan orang bertumbuh dalam iman, tanpa mengabaikan kebutuhan psikologis, dan sebaliknya.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Founder Background Story */}
                <div className="my-40">
                  <div className="relative">
                    {/* <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-brown/20"></div> */}
                    <h2 className="text-3xl font-semibold text-brown mb-8 relative z-10 text-center">Founder Background Story</h2>
                  </div>
                  
                  {/* Photo Section */}
                  <div className="flex justify-center my-32">
                    <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
                      <div className="absolute inset-0 rounded-full ring-1 ring-yellow-1" />
                      <div className="absolute -inset-6 sm:-inset-8 rounded-full ring-1 ring-yellow-2" />
                      <div className="absolute -inset-12 sm:-inset-16 rounded-full ring-1 ring-yellow-3" />
                      <Image
                          alt="Michelle Theodora - Founder"
                          src="/michelle-theodora-kosasih.png"
                          fill
                          sizes="(max-width: 768px) 16rem, 20rem"
                          className="rounded-full object-cover drop-shadow-xl bg-transparent"
                        priority
                      />
                      
                      {/* Leukemia Survivor */}
                      <div className="absolute -top-6 -right-22 sm:-top-11 sm:-right-17.5 bg-off-white-2 rounded-xl p-3 sm:p-4 max-w-[200px] sm:max-w-[240px] shadow-lg ring-1 ring-brown/10">
                        <div className="text-center">
                          <div className="flex items-center space-x-2 justify-center text-xs sm:text-sm font-semibold text-brown mb-1">
                            <svg className="h-6 w-6 sm:h-8 sm:w-8 text-brown" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292c.14.43.54.72.99.72h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034c-.36.262-.51.73-.37 1.16l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.802-2.034a1 1 0 0 0-1.176 0l-2.802 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292c.14-.43-.01-.898-.37-1.16L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462c.45 0 .85-.29.99-.72l1.07-3.292Z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-xs text-brown/80 leading-tight">
                            Leukemia Survivor
                          </p>
                        </div>
                      </div>

                      {/* Age 15 Calling */}
                      <div className="absolute -top-10 -left-15 sm:-top-9 sm:-left-24 bg-off-white-2 rounded-xl p-2 sm:p-4 shadow-lg ring-1 ring-brown/10 max-w-[200px] sm:max-w-[240px]">
                        <div className="text-left">
                          <div className="flex items-center justify-start space-x-2 text-xs sm:text-sm font-semibold text-brown mb-1">
                            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>Calling at 15</span>
                          </div>
                          <p className="text-xs text-brown/80 leading-tight">
                            Bible journaling mission
                          </p>
                        </div>
                      </div>

                      {/* 2020 Launch */}
                      <div className="absolute -bottom-0 -right-22.5 sm:bottom-0 sm:-right-27 bg-off-white-2 rounded-xl p-2 sm:p-4 shadow-lg ring-1 ring-brown/10 max-w-[200px] sm:max-w-[240px]">
                        <div className="text-center">
                          <div className="flex items-center space-x-2 justify-center text-xs sm:text-sm font-semibold text-brown mb-0 sm:mb-1">
                            <span>2020</span>
                          </div>
                          <div className="text-xs text-brown/80 leading-tight">
                            Underwraps Launch
                          </div>
                        </div>
                      </div>

                      {/* Psychology Degree */}
                      <div className="absolute -bottom-10.5 -left-17 sm:-bottom-10 sm:-left-26.5 bg-off-white-2 rounded-xl p-2 sm:p-4 shadow-lg ring-1 ring-brown/10 max-w-[240px]">
                        <div className="text-left">
                          <div className="flex items-center justify-start space-x-2 text-xs sm:text-sm font-semibold text-brown mb-1">
                            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                            <span>Psychology</span>
                          </div>
                          <p className="text-xs text-brown/80 leading-tight">
                            M.Psi. Clinical Psychology
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Indonesian Version */}
                  <div className="bg-gradient-to-br from-brown/5 to-brown/10 rounded-3xl p-4 sm:p-8 border border-brown/10 mb-8">
                    <div className="prose prose-lg max-w-none text-brown/80 space-y-6">
                      <p className="text-lg leading-relaxed">
                        Pada tahun 2020, Underwraps lahir dari langkah kecil ketaatan dan kreativitas. Saat saya berjuang melawan leukemia selama 4 tahun, Firman Tuhan menjadi pegangan hidup saya. Dari pengalaman pribadi itu, saya menyadari betapa besar kuasa Firman Tuhan untuk memberi harapan, meluruskan cara pandang yang keliru, memberi arah, dan menyingkapkan hati-Nya bagi anakNya.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Di usia 15 tahun, saya merasakan panggilan untuk menolong orang lain untuk mengenal firman Tuhan di dalam Alkitab dengan cara yang sama—bukan sekadar rutinitas atau agama, tetapi sebagai kebutuhan untuk berkomunikasi agar bisa membangun hubungan yang intim dengan Sang Sumber segala sumber yang penuh kasih.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Saya mulai dengan sesuatu yang sederhana yaitu membuat <span className="font-semibold text-brown">Highlighter Guide</span>, panduan untuk menandai ayat berdasarkan kategori warna agar orang bisa membaca Alkitab dengan lebih personal dan kreatif. Tidak lama setelah itu, saya menghadirkan <span className="font-semibold text-brown">Bible Journal Starter Kit</span>—sebuah paket berisi jurnal Alkitab, alat, dan panduan yang membuat membaca Alkitab terasa lebih menyenangkan dan mudah dimengerti.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Hari-hari awal tentu tidak mudah mengingat pentingnya menjaga harga tetap terjangkau agar banyak orang bisa menikmati proses mengenali firmanNya. Namun setiap kesaksian yang masuk membuat semua usaha itu berarti, mulai dari kisah orang yang menemukan rasa penasaran dan semangat dalam mempelajari Alkitab, hingga memperoleh harapan baru serta bertumbuh dalam perjalanan imannya.
                      </p>
                      
                      <div className="bg-yellow-1/10 rounded-2xl p-4 sm:p-6 border border-yellow-1/20 my-8">
                        <p className="text-lg leading-relaxed font-medium text-brown">
                          Itulah hati dari Underwraps.
                          <br />
                          <br />
                          Lebih dari sekadar bisnis, ini adalah sebuah misi.
                        </p>
                      </div>
                      
                      <p className="text-lg leading-relaxed">
                        Underwraps hadir untuk menolong setiap orang menyadari harta berharga dalam Firman Tuhan—menjadikannya lebih mudah dipahami, lebih dekat, dan benar-benar mengubahkan hidup.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Karena pada akhirnya, hadiah terbaik yang bisa kami berikan bukanlah sekadar produk, melainkan sebuah teman perjalanan iman—pengingat bahwa Tuhan dekat, Firman-Nya hidup, dan janji-Nya tidak pernah gagal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Products & Services */}
                <div className="my-40">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-yellow-1/30"></div>
                    <h2 className="text-3xl font-semibold text-brown mb-8 relative z-10 text-center">Produk dan Layanan</h2>
                  </div>
                  
                  <div className="mb-12">
                    <p className="text-lg text-brown/80 mb-8 text-center max-w-3xl mx-auto">
                      Underwraps menghadirkan alat, produk, dan layanan yang thoughtful, terjangkau, dan relevan untuk mendukung pemulihan rohani, kesehatan psikologis, serta kedekatan yang lebih dalam dengan Tuhan.
                    </p>
                    
                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                      {/* Wellness & Growth Tools */}
                      <div className="bg-gradient-to-br from-yellow-1/10 to-yellow-2/10 rounded-2xl p-4 sm:p-6 border border-yellow-1/20 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-yellow-1/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-brown">Wellness & Growth Tools</h3>
                        </div>
                        <p className="text-brown/80 text-sm leading-relaxed">
                          Produk-produk yang dikembangkan untuk membantu mengelola emosi, memperkuat iman, serta membangun kebiasaan sehat untuk kesehatan mental dan spiritual.
                        </p>
                      </div>

                      {/* Bible Engagement Tools */}
                      <div className="bg-gradient-to-br from-brown/5 to-brown/10 rounded-2xl p-4 sm:p-6 border border-brown/10 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-brown">Bible Engagement Tools</h3>
                        </div>
                        <p className="text-brown/80 text-sm leading-relaxed">
                          Alat-alat seperti salah satunya yaitu <span className="font-semibold text-brown">Bible Journal Starter Kit</span> yang membuat pengalaman membaca Alkitab lebih seru, mendalam, dan personal.
                        </p>
                      </div>

                      {/* Spiritual & Psychological Support */}
                      <div className="bg-gradient-to-br from-yellow-1/10 to-yellow-2/10 rounded-2xl p-4 sm:p-6 border border-yellow-1/20 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-yellow-1/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-brown">Spiritual & Psychological Support</h3>
                        </div>
                        <p className="text-brown/80 text-sm leading-relaxed">
                          Melalui konseling dan faith-coaching, kami menyediakan ruang aman bagi siapa saja untuk menghadapi tantangan hidup, menjaga kesehatan mental, dan bertumbuh dalam iman tanpa rasa takut dihakimi.
                        </p>
                      </div>

                      {/* Workshops & Online Programs */}
                      <div className="bg-gradient-to-br from-brown/5 to-brown/10 rounded-2xl p-6 border border-brown/10 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-brown">Workshops & Online Programs</h3>
                        </div>
                        <p className="text-brown/80 text-sm leading-relaxed">
                          Pengalaman interaktif dan terarah yang dirancang untuk menjaga kestabilan kondisi psikologis dan pertumbuhan iman orang-orang.
                        </p>
                      </div>

                      {/* Community */}
                      <div className="bg-gradient-to-br from-yellow-1/10 to-yellow-2/10 rounded-2xl p-6 border border-yellow-1/20 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-yellow-1/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-brown">Community</h3>
                        </div>
                        <p className="text-brown/80 text-sm leading-relaxed">
                          Ruang aman untuk bertumbuh bersama lewat <span className="font-semibold text-brown">Bible Dates</span> dan <span className="font-semibold text-brown">Bible Reading Groups</span>, tempat orang bisa saling berbagi, belajar, dan menguatkan satu sama lain dalam perjalanan iman maupun kehidupan pribadi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Underwraps Exists */}
                <div className="my-40">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-brown/20"></div>
                    <h2 className="text-3xl font-semibold text-brown mb-8 relative z-10 text-center">Mengapa Under Wraps Ada?</h2>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-1/10 to-yellow-2/10 rounded-3xl p-4 sm:p-8 border border-yellow-1/20 max-w-4xl mx-auto">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 rounded-full bg-yellow-1/20 ring-1 ring-yellow-1/30 px-4 py-2 text-sm text-brown mb-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292c.14.43.54.72.99.72h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034c-.36.262-.51.73-.37 1.16l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.802-2.034a1 1 0 0 0-1.176 0l-2.802 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292c.14-.43-.01-.898-.37-1.16L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462c.45 0 .85-.29.99-.72l1.07-3.292Z" clipRule="evenodd" />
                        </svg>

                        
                      </div>
                      
                      <p className="text-xl leading-relaxed text-brown/80 max-w-3xl mx-auto">
                        Kami percaya setiap orang memiliki potensi dan hadiah istimewa dari Tuhan yang terkadang masih <span className="font-semibold text-brown">&ldquo;terbungkus.&rdquo;</span> Melalui setiap produk dan layanan, Underwraps ingin membantu orang-orang membuka bungkusan itu, menemukan harta di dalamnya, dan berjalan menuju hidup yang utuh, bermakna, dan dipenuhi Kristus.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Values */}
                <div className="mt-40 mb-10">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-yellow-1/30"></div>
                    <h2 className="text-3xl font-semibold text-brown mb-5 relative z-10 text-center">Core Values</h2>
                  </div>
                  
                  <div className="max-w-6xl mx-auto">
                    {/* GIFTS Acronym Header */}
                    <div className="text-center mb-12">
                      <h3 className="text-2xl font-bold text-brown mb-2">
                        <span className="text-brown">G</span>
                        <span className="text-brown">-</span>
                        <span className="text-brown">I</span>
                        <span className="text-brown">-</span>
                        <span className="text-brown">F</span>
                        <span className="text-brown">-</span>
                        <span className="text-brown">T</span>
                        <span className="text-brown">-</span>
                        <span className="text-brown">S</span>
                      </h3>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Growth-Oriented */}
                      <div className="bg-gradient-to-br from-yellow-1/10 to-yellow-2/10 rounded-2xl p-6 border border-yellow-1/20 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-yellow-1/20 flex items-center justify-center">
                            <span className="text-xl font-bold text-brown">G</span>
                          </div>
                          <h4 className="text-lg font-semibold text-brown">Growth-Oriented</h4>
                        </div>
                        <p className="text-brown/80 text-sm leading-relaxed">
                          We are committed to fostering holistic growth, both psychological and spiritual. Every product, service, and community we create is designed to help people become more resilient, adaptive, and deepening in their faith.
                        </p>
                      </div>

                      {/* Inspiring */}
                      <div className="bg-gradient-to-br from-brown/5 to-brown/10 rounded-2xl p-6 border border-brown/10 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                            <span className="text-xl font-bold text-brown">I</span>
                          </div>
                          <h4 className="text-lg font-semibold text-brown">Inspiring</h4>
                        </div>
                        <p className="text-brown/80 text-sm leading-relaxed">
                          We believe every interaction should bring encouragement and hope. Through tools, education, and guidance, we aim to inspire people to see life with fresh perspective, discover meaning, and walk forward with renewed hope.
                        </p>
                      </div>

                      {/* Faith-Integrated */}
                      <div className="bg-gradient-to-br from-yellow-1/10 to-yellow-2/10 rounded-2xl p-6 border border-yellow-1/20 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-yellow-1/20 flex items-center justify-center">
                            <span className="text-xl font-bold text-brown">F</span>
                          </div>
                          <h4 className="text-lg font-semibold text-brown">Faith-Integrated</h4>
                        </div>
                        <p className="text-brown/80 text-sm leading-relaxed">
                          Faith and psychology are not meant to be separated. We integrate both in balance, so people can grow in their faith without neglecting mental health and care for their mental health without losing spiritual depth.
                        </p>
                      </div>

                      {/* Thoughtful */}
                      <div className="bg-gradient-to-br from-brown/5 to-brown/10 rounded-2xl p-6 border border-brown/10 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                            <span className="text-xl font-bold text-brown">T</span>
                          </div>
                          <h4 className="text-lg font-semibold text-brown">Thoughtful</h4>
                        </div>
                        <p className="text-brown/80 text-sm leading-relaxed">
                          Everything we design is crafted with deep care, from products and programs to how we communicate, so it is truly relevant, meaningful, and adds value to each person&apos;s journey.
                        </p>
                      </div>

                      {/* Safe & Supportive */}
                      <div className="bg-gradient-to-br from-yellow-1/10 to-yellow-2/10 rounded-2xl p-6 border border-yellow-1/20 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-yellow-1/20 flex items-center justify-center">
                            <span className="text-xl font-bold text-brown">S</span>
                          </div>
                          <h4 className="text-lg font-semibold text-brown">Safe & Supportive</h4>
                        </div>
                        <p className="text-brown/80 text-sm leading-relaxed">
                          We provide a safe and supportive space where people can open up without fear of judgment. Here, everyone is valued, embraced, and strengthened to grow together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image section */}
      <div className=" lg:mx-auto lg:max-w-7xl lg:px-8 pb-4 md:pb-6">
        <div className="relative aspect-5/2 w-full outline-1 -outline-offset-1 outline-off-white-2 rounded-xl lg:rounded-3xl">
          <Image alt="banner" src="/banner.png" fill sizes="100vw" className="object-cover rounded-xl lg:rounded-3xl" priority />
        </div>
      </div>
    </div>
  );
}

