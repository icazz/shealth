'use client';

import { useState, FormEvent } from 'react';

interface Props {
  eventSlug: string;
  eventTitle: string;
  eventDescription?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  notes: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function EventRegistrationForm({ eventSlug, eventTitle, eventDescription }: Props) {
  const [form, setForm] = useState<FormData>({
    fullName: '', email: '', phone: '', institution: '', notes: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const eventRes = await fetch(`${API_URL}/api/events/${eventSlug}`);
      const eventData = await eventRes.json();

      if (!eventData.success) throw new Error('Event tidak ditemukan');

      const res = await fetch(`${API_URL}/api/registrations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId: eventData.data.id, ...form }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setForm({ fullName: '', email: '', phone: '', institution: '', notes: '' });
      } else {
        setStatus('error');
        setMessage(data.message || 'Terjadi kesalahan. Coba lagi.');
      }
    } catch {
      setStatus('error');
      setMessage('Tidak dapat terhubung ke server. Coba beberapa saat lagi.');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1e] via-[#0d2137] to-[#0a1a0f] p-4 md:p-8">
      <div className="w-full max-w-xl bg-gray-900/85 backdrop-blur-md border border-green-500/15 rounded-3xl p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(34,197,94,0.05)] animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-sm font-semibold tracking-wide mb-4">
            💚 SHEALTH Event
          </span>
          <h1 className="text-3xl font-bold text-slate-100 mb-2 leading-tight">
            {eventTitle}
          </h1>
          {eventDescription && (
            <p className="text-slate-400 text-base">
              {eventDescription}
            </p>
          )}
        </div>

        {/* Success State */}
        {status === 'success' ? (
          <div className="text-center py-8 flex flex-col items-center gap-4">
            <span className="text-5xl">✅</span>
            <h2 className="text-2xl font-bold text-green-400">Pendaftaran Berhasil!</h2>
            <p className="text-slate-400">{message}</p>
            <button
              className="mt-4 px-6 py-2.5 bg-transparent text-green-400 font-semibold border border-green-500/40 rounded-xl hover:bg-green-500/10 hover:border-green-500/60 transition-colors"
              onClick={() => setStatus('idle')}
            >
              Daftar Lagi
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            
            {/* Nama Lengkap */}
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-sm font-semibold text-slate-300 tracking-wide">
                Nama Lengkap <span className="text-red-400">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-100 text-base transition-all focus:outline-none focus:border-green-500/50 focus:bg-slate-800/90 focus:ring-4 focus:ring-green-500/10 placeholder-slate-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-300 tracking-wide">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-100 text-base transition-all focus:outline-none focus:border-green-500/50 focus:bg-slate-800/90 focus:ring-4 focus:ring-green-500/10 placeholder-slate-500"
              />
            </div>

            {/* No. HP */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-slate-300 tracking-wide">
                No. HP / WhatsApp <span className="text-red-400">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-100 text-base transition-all focus:outline-none focus:border-green-500/50 focus:bg-slate-800/90 focus:ring-4 focus:ring-green-500/10 placeholder-slate-500"
              />
            </div>

            {/* Institusi */}
            <div className="flex flex-col gap-2">
              <label htmlFor="institution" className="text-sm font-semibold text-slate-300 tracking-wide">
                Asal Institusi / Kampus
              </label>
              <input
                id="institution"
                name="institution"
                type="text"
                value={form.institution}
                onChange={handleChange}
                placeholder="Universitas / Instansi (opsional)"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-100 text-base transition-all focus:outline-none focus:border-green-500/50 focus:bg-slate-800/90 focus:ring-4 focus:ring-green-500/10 placeholder-slate-500"
              />
            </div>

            {/* Catatan */}
            <div className="flex flex-col gap-2">
              <label htmlFor="notes" className="text-sm font-semibold text-slate-300 tracking-wide">
                Catatan / Pesan
              </label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Ada yang ingin disampaikan? (opsional)"
                rows={3}
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-100 text-base transition-all focus:outline-none focus:border-green-500/50 focus:bg-slate-800/90 focus:ring-4 focus:ring-green-500/10 placeholder-slate-500 resize-y min-h-[80px]"
              />
            </div>

            {/* Error message */}
            {status === 'error' && (
              <div className="px-4 py-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 text-sm">
                ⚠️ {message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full mt-2 py-3.5 bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-base rounded-xl transition-all shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:opacity-90 hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(34,197,94,0.4)] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === 'loading' ? '⏳ Mendaftarkan...' : 'Daftar Sekarang'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
