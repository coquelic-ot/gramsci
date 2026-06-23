import Hero from '@/components/Hero';
import { content } from '@/data/content';

export const metadata = {
  title: 'About | gramsci',
};

export default function About() {
  return (
    <>
      <Hero title="gramsciについて" subtitle="イノベーションを推進し、ブランドの成長を支援するデザインスタジオ" compact />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg text-gray-600 mb-8">
          企業やブランドの成長に貢献する、意味のある視覚体験を創造することに専念するデザインスタジオです。
        </p>

        <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          細やかなヒアリング、高い技術と創造性で、顧客満足を実現することを重視しています。
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
