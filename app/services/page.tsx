import Hero from '@/components/Hero';

export const metadata = {
  title: 'Services | gramsci',
};

const services = [
  {
    title: 'ブランド戦略・デザイン',
    description: 'ロゴデザインから完全なブランドアイデンティティシステムまで、オーディエンスに共鳴する一貫した視覚言語を創造します。',
    items: ['ロゴデザイン', 'ブランドガイドライン', 'ビジュアルアイデンティティ', 'ブランドポジショニング'],
  },
  {
    title: 'Web・デジタルデザイン',
    description: '美しく、直感的で、成果を出すデジタル体験をデザインします。',
    items: ['UX/UIデザイン', 'Webデザイン', 'アプリデザイン', 'デジタル戦略'],
  },
  {
    title: 'プロダクト・パッケージング',
    description: 'プロダクト体験を向上させ、売り場で目立つデザイン。',
    items: ['パッケージデザイン', 'プロダクトデザイン', 'ラベルデザイン'],
  },
  {
    title: '編集・印刷',
    description: '明確に伝え、長く記憶に残る印刷物。',
    items: ['マガジンデザイン', 'ブックデザイン', '印刷物', '編集デザイン'],
  },
  {
    title: 'キャンペーン・マーケティング',
    description: 'オーディエンスを惹きつけ、測定可能な成果を生み出すクリエイティブキャンペーン。',
    items: ['キャンペーンデザイン', 'ソーシャルメディアコンテンツ', '広告', 'アートディレクション'],
  },
  {
    title: '空間デザイン',
    description: 'ストーリーを語るイマーシブな環境。',
    items: ['展示会デザイン', 'ストアデザイン', 'イベントデザイン', 'ウェイファインディング'],
  },
];

export default function Services() {
  return (
    <>
      <Hero title="サービス" subtitle="戦略、創造性、実行にまたがる包括的なデザインサービス" compact />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
