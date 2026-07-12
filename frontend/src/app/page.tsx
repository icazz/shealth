import { redirect } from 'next/navigation';

/**
 * Halaman utama (shealth.id)
 * Sementara redirect ke /coming-soon.
 * Setelah landing page siap, ganti isi file ini dengan komponen landing page.
 */
export default function Home() {
  redirect('/coming-soon');
}
