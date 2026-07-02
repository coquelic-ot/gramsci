import Hero from '@/components/Hero';
import { content } from '@/data/content';

export const metadata = {
  title: 'About | gramsci',
};

export default function About() {
  return (
    <>
      <Hero title="About gramsci" subtitle="イノベーションを推進し、ブランドの成長を支援するデザインスタジオ" compact />

      {/* Grid Collage Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Tile 1: Our Story (Large card) */}
          <div className="md:col-span-2 bg-primary text-secondary p-8 md:p-12 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 block mb-4">Our Story</span>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                お客様に寄り添い、企業やブランドの成長に貢献する、価値の高い視覚体験を創造することに専念するデザインスタジオです。
              </p>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
              <span className="text-sm font-semibold">株式会社グラムシ</span>
              <span className="text-xs text-gray-400">gramsci, Inc.</span>
            </div>
          </div>

          {/* Tile 2: Established Year (Small Highlight card) */}
          <div className="bg-gray-50 border border-gray-100 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-500 block mb-2">History</span>
              <h3 className="text-5xl font-black text-primary tracking-tight">2002</h3>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              2002年1月設立。20年以上にわたり、多種多様な業界のグラフィック、エディトリアル、WEB等のデザインをリードしてきました。
            </p>
          </div>

          {/* Tile 3: Mission Quote (Large banner card) */}
          <div className="md:col-span-3 bg-gradient-to-r from-accent to-pink-600 text-white p-8 md:p-12 hover:shadow-lg transition-all duration-300">
            <span className="text-xs uppercase tracking-wider text-pink-200 block mb-4">Our Mission</span>
            <blockquote className="text-2xl md:text-3xl font-bold leading-snug">
              「細やかなヒアリングで貴社の強みを引き出し、高い技術と創造性で、顧客満足の最大化を目指します。」
            </blockquote>
          </div>

          {/* Tile 4: Location (Medium card) */}
          <div className="bg-gray-50 border border-gray-100 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-500 block mb-2">Location</span>
              <h4 className="text-xl font-bold text-primary mb-2">東京・日本橋</h4>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                〒103-0003<br />東京都中央区日本橋横山町9-7＃603
              </p>
              <p className="text-xs text-gray-400">
                東京の伝統とクリエイティビティが交差する繊維問屋街・日本橋横山町を拠点としています。
              </p>
            </div>
          </div>

          {/* Tile 5: Capital & Financials (Medium card) */}
          <div className="bg-gray-50 border border-gray-100 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-500 block mb-2">Capital</span>
              <h4 className="text-2xl font-black text-primary">1,000万円</h4>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              安定した財務基盤のもと、大規模なコーポレートサイトの設計からPRイベントの空間デザインまで、責任あるディレクションを提供します。
            </p>
          </div>

          {/* Tile 6: Core Expertise (Medium card) */}
          <div className="bg-primary text-secondary p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 block mb-2">Expertise</span>
              <h4 className="text-xl font-bold mb-4 text-white">多領域のデザイン</h4>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              IT、エレクトロニクス、エンタメ、ファッションなど、業界の枠を超えて「グラフィック・WEB・プロダクト・パッケージ・空間・編集」をシームレスに横断します。
            </p>
          </div>

        </div>
      </section>

      {/* Team Collage Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-gray-500 block mb-2">Our People</span>
          <h2 className="text-4xl font-bold text-primary">メインスタッフ</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.about.team.map((member) => {
            let highlights: string[] = [];
            if (member.name === '田中智康') highlights = ['エディトリアル', '空間・立体', '柳町恒彦に師事'];
            if (member.name === 'コマツザキツトム') highlights = ['検索エンジン立ち上げ', 'クロスメディア', '企画制作'];
            if (member.name === '石田瑞枝') highlights = ['英語翻訳', '広報・PR', 'プロデューサー'];
            if (member.name === '柴田幸夫') highlights = ['WAN/LAN設計', 'CP/M・DOS・UNIX', 'オンラインショップ'];

            return (
              <div 
                key={member.name} 
                className="bg-white border border-gray-100 hover:border-gray-200 rounded-lg p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider">{member.role}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 my-4">
                    {highlights.map(tag => (
                      <span key={tag} className="text-xs bg-gray-50 border border-gray-200/50 text-gray-600 px-2.5 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm mt-4">{member.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
