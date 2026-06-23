import Hero from '@/components/Hero';
import { content } from '@/data/content';

export const metadata = {
  title: 'About | gramsci',
};

export default function About() {
  return (
    <>
      <Hero title="gramsciについて" subtitle="戦略的かつ創造的なデザインソリューションを創造するデザインスタジオ" compact />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg text-gray-600 mb-8">
          私たちは、イノベーションを推進し、先進的なブランドに行動へのインスピレーションを与える、意味のある視覚体験の創造に専念するデザインスタジオです。
        </p>

        <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          戦略的思考と創造的卓越性を組み合わせることで、先進的なブランドが目立つことを支援することです。
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">チーム</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.about.team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg text-accent font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
