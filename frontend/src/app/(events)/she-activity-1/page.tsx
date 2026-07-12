import type { Metadata } from 'next';
import EventRegistrationForm from '@/components/forms/EventRegistrationForm';

export const metadata: Metadata = {
  title: 'SHE Activity 1',
  description: 'Form pendaftaran SHE Activity 1 — event komunitas SHEALTH.',
};

// Slug event ini harus sama dengan yang ada di database
const EVENT_SLUG = 'she-activity-1';

export default function SheActivity1Page() {
  return (
    <EventRegistrationForm
      eventSlug={EVENT_SLUG}
      eventTitle="SHE Activity 1"
      eventDescription="Daftarkan dirimu untuk mengikuti SHE Activity 1 bersama komunitas SHEALTH!"
    />
  );
}
