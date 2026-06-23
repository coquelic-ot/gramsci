import Hero from '@/components/Hero';

export default function About() {
  return (
    <>
      <Hero
        title="About gramsci"
        subtitle="Creative design studio based in Tokyo, Japan"
      />

      {/* Company Info Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">gramsci, Inc.</h2>

        <div className="space-y-6 mb-12">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Company Name</p>
            <p className="text-lg font-semibold">株式会社グラムシ (gramsci, Inc.)</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Founded</p>
            <p className="text-lg font-semibold">January 2002</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Location</p>
            <p className="text-lg font-semibold">Tokyo, Japan</p>
            <p className="text-gray-600">〒103-0003 中央区日本橋横山町9-7</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Capital</p>
            <p className="text-lg font-semibold">¥10,000,000</p>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-8">
          gramsci is a creative design studio specializing in comprehensive design solutions across multiple disciplines. From graphic design and art direction to web design and system engineering, our multidisciplinary team brings together diverse expertise to deliver innovative and strategic design solutions.
        </p>
      </section>

      {/* Core Team Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Core Team</h2>

          <div className="space-y-12">
            {/* Member 1 */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">田中智康</h3>
              <p className="text-blue-600 font-semibold mb-4">Art Director / Graphic Designer</p>
              <p className="text-gray-600 leading-relaxed">
                Founder and Art Director with extensive experience in graphic design and art direction. Specialized in diverse industries including high-tech, electronics, computing, entertainment, and fashion. Known for delivering cohesive visual solutions across editorial, packaging, spatial design, and promotional materials.
              </p>
            </div>

            {/* Member 2 */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">コマツザキツトム</h3>
              <p className="text-blue-600 font-semibold mb-4">Creative Director / Web Director</p>
              <p className="text-gray-600 leading-relaxed">
                Creative Director with background in search engine development and video production. Leads web-centered campaigns, content strategy, and digital advertising initiatives. Expertise in conceptualizing and executing integrated campaigns across digital and traditional media channels.
              </p>
            </div>

            {/* Member 3 */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">石田瑞枝</h3>
              <p className="text-blue-600 font-semibold mb-4">Producer</p>
              <p className="text-gray-600 leading-relaxed">
                Producer with international experience in technical documentation and production management. Specializes in coordinating design projects across PR, advertising, web, events, and promotional campaigns. Known for managing complex productions for electronics and technology companies.
              </p>
            </div>

            {/* Member 4 */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">柴田幸夫</h3>
              <p className="text-blue-600 font-semibold mb-4">Web Systems Engineer</p>
              <p className="text-gray-600 leading-relaxed">
                Systems Engineer with decades of experience in computer systems and network architecture. Expertise in WAN/LAN design, web systems development, and IT infrastructure. Ensures robust technical implementation across all digital projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Our Approach</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Multidisciplinary Expertise</h3>
            <p className="text-gray-600">
              Our team combines diverse skills spanning art direction, graphic design, web design, and systems engineering. This integrated approach ensures cohesive solutions across all design disciplines.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Industry-Specific Knowledge</h3>
            <p className="text-gray-600">
              With experience across high-tech, electronics, entertainment, fashion, and corporate sectors, we bring industry-specific insights to every project.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Strategic Design</h3>
            <p className="text-gray-600">
              We believe design should be purposeful and strategic. Every visual decision is grounded in clear objectives and market understanding.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
