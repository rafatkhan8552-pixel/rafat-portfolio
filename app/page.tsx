"use client";

export default function LuxuryDubaiPortfolio() {
  const skills = [
    'Personal Loans',
    'Credit Cards',
    'Relationship Management',
    'Field Sales',
    'MS Excel',
    'MIS Reporting',
    'KYC Handling',
    'Customer Acquisition',
  ]

  const experience = [
    {
      company: 'Urban Money',
      role: 'Financial Sales Professional',
      duration: 'May 2026 – Present',
      points: [
        'Managing customer acquisition and loan sales operations.',
        'Building long-term client relationships and portfolio growth.',
      ],
    },
    {
      company: 'Card Expertise',
      role: 'Team Leadership – Credit Cards & Loans',
      duration: 'Apr 2023 – Apr 2026',
      points: [
        'Specialized in personal loans and credit card sales.',
        'Created MIS reports using Pivot Tables and VLOOKUP.',
        'Consistently achieved monthly and quarterly targets.',
      ],
    },
    {
      company: 'HDFC Bank',
      role: 'Sales Officer',
      duration: 'Feb 2021 – Mar 2023',
      points: [
        'Promoted banking products and managed KYC processes.',
        'Handled customer servicing and relationship management.',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20 scale-105 animate-[slowZoom_20s_linear_infinite]"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-amber-950/70"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]"></div>
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-300 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-yellow-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
        <div className="absolute w-96 h-96 bg-amber-500/10 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full bottom-0 right-0 animate-pulse"></div>
      </div>

      <div className="relative z-10 pointer-events-auto">
        <section className="min-h-screen flex items-center px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
            <div>
              <p className="uppercase tracking-[6px] text-amber-300 mb-4 text-sm">
                Banking Sales & Relationship Management Professional
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                RAFAT <span className="text-amber-300">KHAN</span>
              </h1>

              <p className="mt-6 text-xl md:text-2xl text-slate-300 leading-9 max-w-2xl">
                Banking Sales & Relationship Management Professional with 10+ years of expertise in personal loans, credit cards, customer acquisition, and financial services.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="/Rafat_Khan_Professional_CV.pdf"
                  download
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,215,0,0.4)] inline-flex items-center justify-center cursor-pointer"
                >
                  Download Luxury CV
                </a>

                <a
                  href="mailto:rafatkhan8552@gmail.com"
                  className="px-8 py-4 rounded-full border border-amber-400 text-amber-300 hover:bg-amber-500/10 transition duration-300 inline-flex items-center justify-center cursor-pointer"
                >
                  Hire Me
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-[40px] blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

                <div className="absolute -inset-4 rounded-[50px] border border-amber-300/20 animate-pulse"></div>
                <img
                  src="/profile.jpg"
                  alt="Rafat Khan"
                  className="relative w-[320px] md:w-[420px] rounded-[40px] border border-amber-400/30 shadow-[0_0_50px_rgba(255,215,0,0.25)] hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-20 py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-amber-400/20 rounded-[32px] p-8 hover:-translate-y-2 transition duration-300 shadow-[0_0_40px_rgba(255,215,0,0.08)]">
              <h3 className="text-4xl font-bold text-amber-300">10+</h3>
              <p className="mt-4 text-slate-300">Years Experience</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-amber-400/20 rounded-[32px] p-8 hover:-translate-y-2 transition duration-300 shadow-[0_0_40px_rgba(255,215,0,0.08)]">
              <h3 className="text-4xl font-bold text-amber-300">1000+</h3>
              <p className="mt-4 text-slate-300">Customers Handled</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-amber-400/20 rounded-[32px] p-8 hover:-translate-y-2 transition duration-300 shadow-[0_0_40px_rgba(255,215,0,0.08)]">
              <h3 className="text-4xl font-bold text-amber-300">Top</h3>
              <p className="mt-4 text-slate-300">Sales Performer</p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              About <span className="text-amber-300">Me</span>
            </h2>

            <div className="bg-white/5 backdrop-blur-xl border border-amber-400/20 rounded-[40px] p-10 md:p-16 text-slate-300 leading-9 text-lg shadow-[0_0_40px_rgba(255,215,0,0.08)]">
              I am a banking sales and financial services professional focused on personal loans, credit cards, relationship management, and customer acquisition. I have successfully worked with banking and financial companies handling retail and corporate clients while consistently achieving sales targets.
            </div>
          </div>
        </section>

        <section className="px-6 md:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Core <span className="text-amber-300">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-5">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-8 py-4 rounded-full bg-amber-500/10 border border-amber-300/30 hover:bg-amber-500/20 hover:scale-105 transition duration-300 text-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Professional <span className="text-amber-300">Experience</span>
            </h2>

            <div className="space-y-10">
              {experience.map((job) => (
                <div
                  key={job.company}
                  className="bg-white/5 backdrop-blur-xl border border-amber-400/20 rounded-[36px] p-10 hover:border-amber-300 transition duration-300 shadow-[0_0_40px_rgba(255,215,0,0.08)]"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold">{job.company}</h3>
                      <p className="text-amber-300 mt-2">{job.role}</p>
                    </div>

                    <div className="text-slate-400">{job.duration}</div>
                  </div>

                  <ul className="mt-8 space-y-4 text-slate-300 leading-8 list-disc ml-6">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-20 py-20">
          <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-amber-700/20 to-yellow-500/10 border border-amber-400/20 rounded-[40px] p-12 backdrop-blur-xl shadow-[0_0_50px_rgba(255,215,0,0.1)]">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let’s Build Financial Growth Together
            </h2>

            <p className="mt-8 text-slate-300 text-lg leading-8 max-w-3xl mx-auto">
              Available for banking sales, relationship management, financial services, and customer acquisition opportunities in Dubai, UAE, and Qatar.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a
                href="https://wa.me/919718392581"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-black font-bold hover:scale-110 transition duration-300 shadow-[0_0_30px_rgba(34,197,94,0.4)] inline-flex items-center justify-center cursor-pointer relative z-50"
              >
                WhatsApp Now
              </a>

              <a
                href="mailto:rafatkhan8552@gmail.com"
                className="px-8 py-4 rounded-full border border-amber-400 text-amber-300 hover:bg-amber-500/10 transition duration-300 inline-flex items-center justify-center cursor-pointer relative z-50"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-20 pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-300/20 rounded-[32px] p-8 backdrop-blur-xl hover:scale-105 transition duration-500">
              <div className="text-5xl mb-5">🏆</div>
              <h3 className="text-2xl font-bold text-amber-300">Top Performer</h3>
              <p className="mt-4 text-slate-300 leading-7">Recognized for achieving consistent banking and financial sales targets.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-300/20 rounded-[32px] p-8 backdrop-blur-xl hover:scale-105 transition duration-500">
              <div className="text-5xl mb-5">💼</div>
              <h3 className="text-2xl font-bold text-amber-300">Corporate Sales</h3>
              <p className="mt-4 text-slate-300 leading-7">Experience handling retail and corporate clients across banking products.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-300/20 rounded-[32px] p-8 backdrop-blur-xl hover:scale-105 transition duration-500">
              <div className="text-5xl mb-5">📈</div>
              <h3 className="text-2xl font-bold text-amber-300">Growth Focused</h3>
              <p className="mt-4 text-slate-300 leading-7">Focused on customer acquisition, portfolio growth, and relationship management.</p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
