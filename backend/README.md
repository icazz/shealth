# SHEALTH Backend API

Backend API untuk website komunitas SHEALTH, dibangun dengan Node.js + TypeScript + Express + Prisma.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Validation**: Zod

## Struktur Folder

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts         # Koneksi Prisma
│   ├── controllers/
│   │   ├── eventController.ts       # Logic CRUD event
│   │   └── registrationController.ts # Logic pendaftaran event
│   ├── routes/
│   │   ├── index.ts            # Gabungkan semua routes
│   │   ├── eventRoutes.ts      # GET/POST/PUT/DELETE /api/events
│   │   └── registrationRoutes.ts # POST /api/registrations
│   ├── middlewares/
│   │   ├── errorHandler.ts     # Global error handler
│   │   └── validateRequest.ts  # Middleware validasi Zod
│   └── index.ts                # Entry point server
├── prisma/
│   └── schema.prisma           # Skema database
├── .env.example
├── tsconfig.json
└── package.json
```

## API Endpoints

| Method | Endpoint                          | Deskripsi                  |
|--------|-----------------------------------|----------------------------|
| GET    | /health                           | Health check server        |
| GET    | /api/events                       | Ambil semua event          |
| GET    | /api/events/:slug                 | Ambil event by slug        |
| POST   | /api/events                       | Buat event baru            |
| PUT    | /api/events/:id                   | Update event               |
| DELETE | /api/events/:id                   | Hapus event                |
| POST   | /api/registrations                | Daftar ke event            |
| GET    | /api/registrations/event/:eventId | Lihat pendaftar per event  |
| GET    | /api/registrations/:id            | Detail pendaftaran         |

## Setup & Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Buat file .env
```bash
cp .env.example .env
# Edit .env dan isi DATABASE_URL dengan koneksi PostgreSQL kamu
```

### 3. Setup database
```bash
npm run db:generate   # Generate Prisma client
npm run db:migrate    # Jalankan migrasi database
```

### 4. Jalankan server development
```bash
npm run dev
```

Server berjalan di `http://localhost:5000`
