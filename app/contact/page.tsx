'use client';

import Hero from '@/components/Hero';

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

        <form action="https://formspree.io/f/mkolgvyr" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-primary text-secondary font-semibold rounded-lg hover:bg-accent transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
