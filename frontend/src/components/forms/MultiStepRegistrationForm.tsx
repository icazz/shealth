'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

interface Props {
  eventSlug: string;
  headerImageUrl: string;
  qrisImageUrl?: string;
  waGroupLink?: string;
}

export default function MultiStepRegistrationForm({ 
  eventSlug, 
  headerImageUrl, 
  qrisImageUrl = '/images/forms/qris.png',
  waGroupLink = '#'
}: Props) {
  const [step, setStep] = useState(1);
  
  // Step 1: Identity
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [instagram, setInstagram] = useState('');

  // Step 2: Registration
  const [participantCount, setParticipantCount] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [source, setSource] = useState('');
  const [sourceOther, setSourceOther] = useState('');

  // Step 3: Supporting Files
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [followProof, setFollowProof] = useState<File | null>(null);

  const handleNext = () => {
    // Basic validation could be added here
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      // Simulate submission delay
      setTimeout(() => {
        setStep(4);
      }, 1000);
    }
  };

  // Common input classes
  const inputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-green-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#e37194]/50 focus:border-[#e37194] placeholder-gray-400 mt-2";
  const labelClass = "text-sm font-bold text-[#20402b] block";

  return (
    <div className="min-h-screen bg-white font-sans text-[#20402b] overflow-y-auto overflow-x-hidden pb-24">
      {/* Navbar */}
      <nav className="w-full bg-[#fcdce6] py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
             {/* Logo Placeholder - assuming logo-utama is available in /images/ */}
             <img src="/images/logo-utama.png" alt="Shealth Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="font-bold text-[#20402b] tracking-wider text-sm">SHEALTH</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-[#20402b] text-sm">
          <Link href="/" className="hover:text-[#e37194] transition-colors">About Us</Link>
        </div>
      </nav>

      {/* Dynamic Header Image (Full Width) */}
      <div className="w-full">
        <img 
          src={headerImageUrl} 
          alt="Event Banner" 
          className="w-full h-[180px] sm:h-[250px] md:h-auto object-cover object-center drop-shadow-sm" 
        />
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        
        {/* Form Container (Hides progress & form when step 4) */}
        {step < 4 && (
          <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col items-center">
            
            {/* Progress Bar */}
            <div className="w-full flex items-center justify-between mb-10 relative px-4 z-0">
              {/* Line background */}
              <div className="absolute left-0 right-0 top-[24px] h-3 bg-[#fcdce6] rounded-full -translate-y-1/2 -z-10"></div>
              {/* Active line */}
              <div 
                className="absolute left-0 top-[24px] h-3 bg-[#df6e8c] rounded-full -translate-y-1/2 -z-10 transition-all duration-500 ease-in-out"
                style={{ width: step === 1 ? '64px' : step === 2 ? '50%' : 'calc(100% - 64px)' }}
              ></div>
              
              {/* Step 1 indicator */}
              <div className="flex flex-col items-center gap-2 relative z-10 w-24">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 1 ? 'bg-[#df6e8c] text-white shadow-md' : 'bg-[#fcdce6] text-[#df6e8c]'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <span className={`text-xs font-bold ${step >= 1 ? 'text-[#20402b]' : 'text-gray-400'}`}>Identity</span>
              </div>

              {/* Step 2 indicator */}
              <div className="flex flex-col items-center gap-2 relative z-10 w-24">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 2 ? 'bg-[#df6e8c] text-white shadow-md' : 'bg-[#fcdce6] text-[#df6e8c]'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className={`text-xs font-bold ${step >= 2 ? 'text-[#20402b]' : 'text-[#df6e8c]/60'}`}>Registration</span>
              </div>

              {/* Step 3 indicator */}
              <div className="flex flex-col items-center gap-2 relative z-10 w-24">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 3 ? 'bg-[#df6e8c] text-white shadow-md' : 'bg-[#fcdce6] text-[#df6e8c]'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <span className={`text-xs font-bold ${step >= 3 ? 'text-[#20402b]' : 'text-[#df6e8c]/60'}`}>Supporting Files</span>
              </div>
            </div>

            {/* Form Card */}
            <div className="w-full bg-[#fce0e8] rounded-3xl p-8 md:p-10 shadow-sm border border-pink-100/50">
              <h2 className="text-2xl font-extrabold text-[#20402b] text-center mb-8">
                {step === 1 && "Identity"}
                {step === 2 && "Registration"}
                {step === 3 && "Supporting Files"}
              </h2>

              <div className="flex flex-col gap-6">
                
                {/* STEP 1: IDENTITY */}
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="mb-5">
                      <label className={labelClass}>Nama<span className="text-red-500">*</span></label>
                      <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} required className={inputClass} placeholder="Nama Lengkap" />
                    </div>
                    <div className="mb-5">
                      <label className={labelClass}>Email<span className="text-red-500">*</span></label>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className={inputClass} placeholder="nama@gmail.com" />
                    </div>
                    <div className="mb-5">
                      <label className={labelClass}>Nomor WhatsApp Aktif<span className="text-red-500">*</span></label>
                      <input type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required className={inputClass} placeholder="E.g. +621234567890" />
                    </div>
                    <div className="mb-5">
                      <label className={labelClass}>Username IG<span className="text-red-500">*</span></label>
                      <input type="text" value={instagram} onChange={e => setInstagram(e.target.value)} required className={inputClass} placeholder="username instagram" />
                    </div>
                  </div>
                )}

                {/* STEP 2: REGISTRATION */}
                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="mb-5">
                      <label className={labelClass}>Jumlah Peserta yang Didaftarkan<span className="text-red-500">*</span></label>
                      <input type="text" value={participantCount} onChange={e => setParticipantCount(e.target.value)} required className={inputClass} placeholder="Full Name" />
                    </div>
                    <div className="mb-5">
                      <label className={labelClass}>Nama peserta lainnya</label>
                      <input type="text" value={otherNames} onChange={e => setOtherNames(e.target.value)} className={inputClass} placeholder="E.g. Surabaya" />
                    </div>
                    <div className="mb-5 mt-8">
                      <label className={labelClass}>Darimana kamu mengetahui SHEALTH?<span className="text-red-500">*</span></label>
                      <div className="flex flex-col gap-4 mt-4">
                        {['Instagram', 'Tiktok', 'Rekomendasi Teman', 'Yang Lain'].map((opt) => (
                          <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${source === opt ? 'border-[#516ef0] bg-[#e6eafb]' : 'border-gray-400 group-hover:border-[#df6e8c]'}`}>
                              {source === opt && <div className="w-2.5 h-2.5 rounded-full bg-[#516ef0]"></div>}
                            </div>
                            <input type="radio" name="source" value={opt} checked={source === opt} onChange={(e) => setSource(e.target.value)} className="hidden" />
                            <span className="text-sm font-bold text-[#20402b]">{opt}</span>
                          </label>
                        ))}
                        {source === 'Yang Lain' && (
                          <input type="text" value={sourceOther} onChange={e => setSourceOther(e.target.value)} className={`${inputClass} ml-8 w-[calc(100%-2rem)] mt-0`} placeholder="Please briefly explain your considerations" />
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: SUPPORTING FILES */}
                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col items-center">
                    <p className="text-sm text-[#20402b] text-center mb-6 max-w-md leading-relaxed">
                      Scan Barcode dibawah ini untuk pembayaran dan follow Instagram SHEALTH<br/>
                      Registration Fee:<br/>
                      🎟️ 1 Pax: Rp 75.000<br/>
                      👯‍♀️ 2 Pax: Rp 135.000
                    </p>
                    
                    <img src={qrisImageUrl} alt="QRIS" className="w-[300px] h-auto rounded-2xl shadow-md mb-8" />
                    
                    <div className="w-full flex flex-col md:flex-row gap-6">
                      {/* Bukti Pembayaran */}
                      <div className="flex-1">
                        <label className={`${labelClass} mb-2`}>Bukti Pembayaran<span className="text-red-500">*</span></label>
                        <div className="w-full h-32 border-2 border-dashed border-gray-400 rounded-xl bg-pink-50/30 flex flex-col items-center justify-center cursor-pointer hover:bg-pink-50/70 transition-colors relative">
                          <input type="file" accept="image/*,.pdf" onChange={(e) => setPaymentProof(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" required={step === 3} />
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span className="text-xs font-bold text-[#df6e8c]">{paymentProof ? paymentProof.name : "Upload File"}</span>
                          <span className="text-[10px] text-gray-500 mt-1 px-4 text-center">Click or Drag & Drop<br/>Supported files : .png, .jpg, .pdf with size up to 10 Mb</span>
                        </div>
                      </div>

                      {/* Bukti Follow */}
                      <div className="flex-1">
                        <label className={`${labelClass} mb-2`}>Bukti Follow Instagram @shealth.id<span className="text-red-500">*</span></label>
                        <div className="w-full h-32 border-2 border-dashed border-gray-400 rounded-xl bg-pink-50/30 flex flex-col items-center justify-center cursor-pointer hover:bg-pink-50/70 transition-colors relative">
                          <input type="file" accept="image/*,.pdf" onChange={(e) => setFollowProof(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" required={step === 3} />
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span className="text-xs font-bold text-[#df6e8c]">{followProof ? followProof.name : "Upload File"}</span>
                          <span className="text-[10px] text-gray-500 mt-1 px-4 text-center">Click or Drag & Drop<br/>Supported files : .png, .jpg, .pdf with size up to 10 Mb</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
            
            {/* Buttons placed outside the form card to match design */}
            <div className="w-full flex justify-center gap-4 mt-8 px-4">
              {step > 1 && (
                <button type="button" onClick={handleBack} className="w-[150px] py-2.5 bg-white text-[#df6e8c] font-bold text-sm rounded-xl border border-[#df6e8c] hover:bg-pink-50 transition-colors">
                  Back
                </button>
              )}
              
              <button type="submit" className={`${step > 1 ? 'w-[150px]' : 'w-2/3 max-w-[300px]'} py-2.5 bg-[#df6e8c] text-white font-bold text-sm rounded-xl hover:bg-[#c95c79] transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5`}>
                {step < 3 ? 'Continue' : 'Submit'}
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: SUCCESS ENVELOPE */}
        {step === 4 && (
          <div className="w-full max-w-2xl flex flex-col items-center mt-8 animate-in fade-in zoom-in duration-500">
            <h2 className="text-4xl font-extrabold text-[#20402b] text-center mb-12">
              You're all set!
            </h2>
            <div className="relative w-full max-w-md flex justify-center group">
              <a href={waGroupLink} target="_blank" rel="noopener noreferrer" className="block relative cursor-pointer hover:scale-105 transition-transform duration-300">
                <img src="/images/forms/surat.png" alt="Envelope" className="w-full h-auto drop-shadow-xl" />
                <div className="absolute top-[20%] left-[10%] right-[10%] text-center transform -rotate-1 group-hover:-translate-y-2 transition-transform duration-300">
                   <p className="text-[#517a61] text-[10px] font-bold mb-1">Stay Tuned Bestie🕊️</p>
                   <p className="text-[#517a61] text-[11px] font-medium px-4 mb-1">For more info and updates, join our WhatsApp group here 🤍</p>
                   <p className="text-[#516ef0] text-[10px] font-medium underline px-4 truncate">{waGroupLink}</p>
                </div>
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
