/**
 * lib/api.ts
 * Fungsi-fungsi helper untuk memanggil backend API SHEALTH
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// ---- Types ----

export interface Event {
  id: string;
  title: string;
  slug: string;
  description?: string;
  date: string;
  location: string;
  maxParticipants?: number;
  isActive: boolean;
  createdAt: string;
}

export interface Registration {
  id: string;
  eventId: string;
  fullName: string;
  email: string;
  phone: string;
  institution?: string;
  notes?: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

// ---- Events ----

export async function getEventBySlug(slug: string): Promise<ApiResponse<Event>> {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  return res.json();
}

export async function getAllEvents(): Promise<ApiResponse<Event[]>> {
  const res = await fetch(`${API_URL}/api/events`);
  return res.json();
}

// ---- Registrations ----

export interface RegistrationPayload {
  eventId: string;
  fullName: string;
  email: string;
  phone: string;
  institution?: string;
  notes?: string;
}

export async function submitRegistration(
  payload: RegistrationPayload
): Promise<ApiResponse<Registration>> {
  const res = await fetch(`${API_URL}/api/registrations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}
