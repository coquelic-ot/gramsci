import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { content } from '@/data/content';

export default function Contact() {
  const { contact } = content;

  return (
    <>
      <Hero
        title={contact.title}
        subtitle={contact.intro}
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {['Instagram', 'Dribbble', 'Twitter'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm font-medium hover:text-accent transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 p-6 bg-gray-50">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Business Hours</p>
              <div className="space-y-2 text-sm">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200 h-96 w-full">
        {/* Placeholder for map */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <p>Map will be integrated here</p>
        </div>
      </section>
    </>
  );
}
