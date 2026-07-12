# SHEALTH — Community Health Website

🌐 **Live Website:** [https://shealth-community.vercel.app/](https://shealth-community.vercel.app/)
Website komunitas SHEALTH yang terdiri dari:
- **Community Profile** — Landing page utama
- **Coming Soon** — Halaman sementara sebelum landing page selesai  
- **Form Pendaftaran Event** — Halaman pendaftaran per event (she-activity-1, she-activity-2, dst)

## Struktur Repository

```
shealth/
├── frontend/    ← Next.js + TypeScript (deploy terpisah)
└── backend/     ← Node.js + Express + Prisma + PostgreSQL (deploy terpisah)
```

## Quick Start

### Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit DATABASE_URL di .env
npm run db:generate
npm run db:migrate
npm run dev        # http://localhost:5000
```

## Deploy

| Bagian | Platform Rekomendasi |
|--------|---------------------|
| Frontend | Vercel (gratis) |
| Backend + DB | Railway / VPS / Render |

## Dokumentasi Lebih Lanjut

- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)
