import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shealth - coming soon',
  description: 'SHEALTH Community',
  icons: {
    icon: '/images/logo-utama.png',
  },
};

export default function ComingSoonPage() {
  return (
    <main className="relative w-screen min-h-screen overflow-hidden bg-[#fdf2f5]">
      {/* ── BACKGROUND ── */}
      <img src="/images/background.png" alt="" className="absolute inset-0 w-full h-full object-cover z-0" />

      {/* ── MAIN CENTER GROUP ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] md:w-[70vw] max-w-[900px] z-40 flex justify-center items-center animate-zoom-in">
        
        {/* Floating Wrapper */}
        <div className="relative w-full h-full flex justify-center items-center animate-float [animation-delay:1.5s]">
          {/* Background untuk judul */}
          <img src="/images/bg-judul.png" alt="Background Judul" className="relative w-full h-auto z-10 scale-[1.3] md:scale-[1.2] -translate-x-[6%] -translate-y-[8%]" />
          
          {/* Texts & Logo Group */}
          <div className="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 w-[65%] z-20 mt-[2%]">
            
            {/* Coming */}
            <div className="relative w-full -translate-x-[16%]">
              <img src="/images/coming.png" alt="Coming" className="relative w-full h-auto block z-20 animate-drop-in [animation-delay:0.5s] opacity-0" />
              
              {/* Logo Pinned to 'C' / Paper Corner */}
              <img src="/images/LOGO.png" alt="Logo" className="absolute top-[5%] left-[11%] md:top-[6%] md:left-[14%] -translate-x-1/2 -translate-y-1/2 w-[16%] md:w-[15%] h-auto z-40 drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)] animate-pop-in [animation-delay:1.5s] opacity-0" />
            </div>
            
            {/* Soon */}
            <div className="relative w-full flex justify-end mt-[-10%] pr-[2%] -translate-x-[26%] -translate-y-[20%]">
              <img src="/images/soon.png" alt="Soon" className="relative w-[48%] h-auto z-30 animate-pop-in [animation-delay:1s] opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
