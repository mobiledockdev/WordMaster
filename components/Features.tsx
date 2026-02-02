import Image from 'next/image'

const features = [
  {
    icon: '📚',
    title: 'Professional Collections',
    description: 'Oxford 3000, Cambridge CEFR, and Longman 3000 word lists curated by language experts.',
  },
  {
    icon: '🚗',
    title: 'Car Mode',
    description: 'Hands-free learning while driving. Listen, respond, and master vocabulary safely on the road.',
  },
  {
    icon: '🎨',
    title: 'Visual Learning',
    description: 'Memory aids and visual mnemonics help cement new vocabulary in your long-term memory.',
  },
  {
    icon: '🎵',
    title: 'Native Audio & IPA',
    description: 'Crystal-clear native speaker pronunciation with IPA phonetic guides for perfect accent.',
  },
  {
    icon: '🔤',
    title: 'Smart Dictionary',
    description: 'English-Russian bilingual definitions with context-aware translations for quick understanding.',
  },
  {
    icon: '⚡',
    title: 'Smart Tracking',
    description: 'Intelligent spaced repetition algorithms adapt to your learning pace for maximum retention.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-container">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Powerful Features for Language Mastery
        </h2>
        <p className="text-gray-600 text-lg">
          Мощные функции для овладения языком
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="card-shadow bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-200 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-3 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
