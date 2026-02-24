import { Particles } from './ui/particles'
import { BorderBeam } from './ui/border-beam'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-12 max-w-4xl mx-auto">

      {/* Star field */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={200}
        color="#4F8EF7"
        size={0.5}
        staticity={30}
      />

      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 text-[11px] text-[#4F8EF7] bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] px-3 py-1 rounded-full mb-8 w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
        Disponible · Remote / Europe
      </div>

      {/* Name */}
      <h1
        className="text-[clamp(52px,9vw,100px)] font-black tracking-[-0.04em] leading-[0.92] mb-6"
        style={{ color: '#e8f0fe' }}
      >
        <span
          className="block"
          style={{ textShadow: '0 0 80px rgba(79,142,247,0.4), 0 0 160px rgba(79,142,247,0.15)' }}
        >
          Maxime
        </span>
        <span className="block text-[#4F8EF7]">Tamburrini</span>
      </h1>

      {/* Title */}
      <p className="text-lg font-light text-[#4B5563] mb-4 tracking-wide">
        Frontend Developer
      </p>

      {/* Tagline */}
      <p className="text-base font-light text-[rgba(232,240,254,0.55)] leading-relaxed max-w-md mb-8">
        Construit avec le produit, l'utilisateur et le business en tête.
      </p>

      {/* Stack pills */}
      <div className="flex gap-2 flex-wrap mb-10">
        {['React', 'Vue', 'Svelte', 'TypeScript', 'Next.js', 'Nuxt 3', 'Astro'].map(s => (
          <span
            key={s}
            className="text-xs font-medium px-3.5 py-1 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.08)] text-[#e8f0fe]"
          >
            {s}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex gap-3">
        <a
          href="#"
          className="px-6 py-3 bg-[#4F8EF7] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
          style={{ boxShadow: '0 0 24px rgba(79,142,247,0.35)' }}
        >
          Télécharger le CV
        </a>
        <a
          href="mailto:max@maxgraux.dev"
          className="px-6 py-3 border border-[rgba(79,142,247,0.2)] text-[#e8f0fe] text-sm font-medium rounded-lg hover:border-[#4F8EF7] hover:text-[#4F8EF7] transition-colors"
        >
          Me contacter
        </a>
      </div>

      {/* Border beam on a hero card variant — on the section itself */}
      <BorderBeam
        colorFrom="#4F8EF7"
        colorTo="transparent"
        duration={8}
        size={80}
        borderWidth={1}
      />
    </section>
  )
}
