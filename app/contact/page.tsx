'use client';

import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Hero title="Contact" subtitle="お見積もり、ご相談など、お気軽にお問い合わせください" compact />

      <section className="max-w-2xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            プロジェクトのご相談やお見積もりのご依頼など、どんなことでもお気軽にお問い合わせください。担当者がなるべく早くご連絡させていただきます。
          </p>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
