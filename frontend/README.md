# SHEALTH Frontend

Frontend website komunitas SHEALTH, dibangun dengan Next.js + TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (Vanilla CSS)
- **Font**: Inter (Google Fonts)

## Halaman

| URL | File | Keterangan |
|-----|------|-----------|
| `/` | `src/app/page.tsx` | Redirect ke `/coming-soon` sementara |
| `/coming-soon` | `src/app/coming-soon/page.tsx` | Halaman Coming Soon |
| `/she-activity-1` | `src/app/(events)/she-activity-1/page.tsx` | Form pendaftaran Event 1 |
| `/she-activity-2` | `src/app/(events)/she-activity-2/page.tsx` | Form pendaftaran Event 2 |

## Struktur Folder

```
frontend/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (font, metadata)
│   │   ├── page.tsx                # Redirect ke /coming-soon
│   │   ├── globals.css             # CSS global & design tokens
│   │   ├── coming-soon/            # Halaman coming soon
│   │   └── (events)/               # Group halaman event
│   │       ├── she-activity-1/
│   │       └── she-activity-2/
│   ├── components/
│   │   ├── ui/                     # Komponen UI dasar
│   │   ├── layout/                 # Navbar, Footer
│   │   └── forms/
│   │       └── EventRegistrationForm.tsx  # Form pendaftaran (dipakai semua event)
│   ├── lib/
│   │   └── api.ts                  # Helper fungsi API ke backend
│   └── types/
│       └── index.ts
```

## Setup & Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Buat file .env.local
```bash
cp .env.example .env.local
# Edit NEXT_PUBLIC_API_URL sesuai URL backend
```

### 3. Jalankan development server
```bash
npm run dev
```

Buka `http://localhost:3000`

## Menambah Event Baru

Untuk menambah event baru (misal: `she-activity-3`):
1. Duplikat folder `src/app/(events)/she-activity-2/`
2. Rename menjadi `she-activity-3`
3. Edit `page.tsx`: ganti `EVENT_SLUG`, `eventTitle`, dan `eventDescription`
4. Pastikan event dengan slug tersebut sudah dibuat di database via backend
