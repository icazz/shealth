import type { Metadata } from 'next';
import EventRegistrationForm from '@/components/forms/EventRegistrationForm';

export const metadata: Metadata = {
  title: 'SHE Activity 2',
  description: 'Form pendaftaran SHE Activity 2 — event komunitas SHEALTH.',
};

const EVENT_SLUG = 'she-activity-2';

export default function SheActivity2Page() {
  return (
    <EventRegistrationForm
      eventSlug={EVENT_SLUG}
      eventTitle="SHE Activity 2"
      eventDescription="Daftarkan dirimu untuk mengikuti SHE Activity 2 bersama komunitas SHEALTH!"
    />
  );
}
