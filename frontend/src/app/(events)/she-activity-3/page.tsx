import type { Metadata } from 'next';
import MultiStepRegistrationForm from '@/components/forms/MultiStepRegistrationForm';

export const metadata: Metadata = {
  title: 'SHE Activity 3',
  description: 'Registration Form for SHE Activity 3',
};

const EVENT_SLUG = 'she-activity-3';

export default function SheActivity3Page() {
  return (
    <MultiStepRegistrationForm
      eventSlug={EVENT_SLUG}
      headerImageUrl="/images/forms/banner-3.png"
      waGroupLink="https://chat.whatsapp.com/EToboYUYwxeKfY6sFOeKAj"
    />
  );
}
