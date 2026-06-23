import Hero from '@/components/Hero';

export const metadata = {
  title: 'About | gramsci',
};

export default function About() {
  return (
    <>
      <Hero title="About gramsci" subtitle="Innovative design studio creating strategic and creative solutions" compact />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg text-gray-600 mb-8">
          We are a design studio committed to creating meaningful visual experiences that drive innovation and inspire action for forward-thinking brands.
        </p>

        <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our mission is to help advanced brands stand out by combining strategic thinking with creative excellence. 私たちは、戦略的思考と創造的卓越性を組み合わせることで、先進的なブランドが目立つことを支援します。
        </p>
      </section>
    </>
  );
}
