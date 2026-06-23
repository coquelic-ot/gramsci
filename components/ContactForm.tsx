'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-3 border border-gray-300 bg-white text-primary focus:outline-none focus:border-accent transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 bg-white text-primary focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          required
          className="w-full px-4 py-3 border border-gray-300 bg-white text-primary focus:outline-none focus:border-accent transition-colors"
        />

        <textarea
          placeholder="Message"
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-300 bg-white text-primary focus:outline-none focus:border-accent transition-colors resize-none"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-primary text-secondary font-semibold hover:bg-accent disabled:opacity-50 transition-colors"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

        {isSubmitted && (
          <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm">
            Thank you! We'll get back to you soon.
          </div>
        )}
      </div>
    </form>
  );
}
