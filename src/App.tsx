import {
  ArrowUpRight,
  BarChart3,
  Camera,
  Compass,
  HeartHandshake,
  Megaphone,
  MessageCircleHeart,
  NotebookPen,
  PenLine,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from './assets/hero-mary.jpg';
import workspaceImage from './assets/editorial-workspace.jpg';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Consulting', href: '#consulting' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    title: 'Estrategia & Posicionamiento',
    text: 'Claridad de marca, narrativa, arquitectura de mensajes y dirección para que una presencia digital se sienta coherente. Diseñamos sistemas personalizados a cada marca para que la estrategia pueda implementarse a largo plazo según sus distintas necesidades.',
    icon: Compass,
  },
  {
    title: 'Contenido & UGC',
    text: 'Conceptos, guiones, formatos y piezas pensadas para conectar con personas reales sin perder sensibilidad estetica.',
    icon: Camera,
  },
  {
    title: 'Paid Media & Performance',
    text: 'Campañas con criterio creativo y lectura de datos para que el contenido no solo se vea bien, también mueva decisiones. Implementamos campañas en todo el ecosistema digital — Google Ads, Meta Business y TikTok — con capacidad para trabajar ecommerce, escalar y optimizar según los objetivos de negocio.',
    icon: BarChart3,
  },
  {
    title: 'Direccion Creativa & Ecosistemas',
    text: 'Una mirada completa sobre visuales, tono, comunidad, experiencia y presencia para que todo converse entre sí. Incluye la creación de una biblia de marca para trabajar todos los conceptos creativos en base a esos pilares.',
    icon: Sparkles,
  },
  {
    title: 'Consultoria & Asesorias',
    text: 'Acompañamiento estratégico para ordenar ideas, detectar oportunidades y convertir intuición creativa en plan accionable. También me encargo de encontrar, adaptar y personalizar los sistemas necesarios para llevar la estrategia a la práctica, con acompañamiento en cada etapa del proceso.',
    icon: HeartHandshake,
  },
];


const portfolioItems = [
  { brand: 'Sony', type: 'UGC · Creadora', domain: 'sony.com' },
  { brand: 'Natura', type: 'UGC · Creadora', domain: 'natura.com' },
  { brand: 'MAC Cosmetics', type: 'Campaña · Marca personal', domain: 'maccosmetics.com' },
  { brand: 'Mercado Libre Clips', type: 'UGC · Creadora', domain: 'mercadolibre.com' },
  { brand: 'Anker', type: 'UGC · Creadora', domain: 'anker.com' },
  { brand: 'Soundcore', type: 'UGC · Creadora', domain: 'soundcore.com' },
  { brand: 'Oster', type: 'UGC · Creadora', domain: 'oster.com' },
  { brand: 'Preunic', type: 'Campaña · Marca personal', domain: 'preunic.cl' },
  { brand: 'Wiwi La Tienda', type: 'UGC · Creadora', domain: 'wiwilatiendo.cl' },
  { brand: 'Sandisk', type: 'UGC · Creadora', domain: 'sandisk.com' },
  { brand: 'Cozen', type: 'UGC · Creadora', domain: 'cozen.cl' },
  { brand: 'Nevermind', type: 'UGC · Creadora', domain: 'nevermind.cl' },
  { brand: 'Hairline', type: 'UGC · Creadora', domain: 'hairline.cl' },
  { brand: 'Youth Beauty', type: 'Campaña · Marca personal', domain: 'youthbeauty.cl' },
];


const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function PullUpWords({ text }: { text: string }) {
  return (
    <motion.span
      aria-label={text}
      className="block"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.018, delayChildren: 0.08 } },
      }}
    >
      {text.split(' ').map((word, index) => (
        <span className="mr-[0.22em] inline-block align-bottom" key={`${word}-${index}`}>
          <motion.span
            aria-hidden="true"
            className="inline-block"
            variants={{
              hidden: { y: 18, opacity: 1 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

function SectionHeading({
  title,
  copy,
  align = 'left',
}: {
  title: string;
  copy?: string;
  align?: 'left' | 'center';
}) {
  return (
    <Reveal
      className={`mx-auto max-w-4xl ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <h2 className="font-serif text-5xl font-medium leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-6 text-base leading-8 text-ink/70 sm:text-lg">{copy}</p>
      ) : null}
    </Reveal>
  );
}

function BrandLogo({ domain, brand }: { domain: string; brand: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <Megaphone className="text-mauve" size={18} strokeWidth={1.6} />;
  return (
    <img
      src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`}
      alt={brand}
      onError={() => setFailed(true)}
      className="h-8 w-8 object-contain rounded"
    />
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <section className="relative min-h-screen py-4 px-8 sm:py-6 sm:px-16 lg:py-8 lg:px-28">
        <div className="noise-overlay relative min-h-[calc(100vh-1.5rem)] overflow-hidden rounded-[2rem] bg-ink shadow-editorial sm:min-h-[calc(100vh-2.5rem)] lg:min-h-[calc(100vh-3rem)] lg:rounded-[2.5rem]">
          <img
            src={heroImage}
            alt="Mary, creative strategist, in the city"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(59,49,40,0.82)_0%,rgba(59,49,40,0.60)_40%,rgba(59,49,40,0.28)_68%,rgba(59,49,40,0.12)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(242,194,206,0.28),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(232,213,183,0.28),transparent_28%)]" />

          <header className="relative z-20 flex items-center justify-between px-4 py-4 sm:px-7 lg:px-10">
            <a className="font-serif text-2xl font-semibold text-cream" href="#">
              creative space
            </a>
            <nav className="hidden items-center gap-1 rounded-full border border-cream/40 bg-cream/20 px-3 py-2 text-sm font-medium text-cream shadow-soft backdrop-blur-2xl md:flex">
              {navItems.map((item) => (
                <a
                  className="rounded-full px-4 py-2 transition duration-300 hover:bg-cream/20"
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-8 px-4 pb-10 pt-12 sm:px-7 lg:grid-cols-12 lg:px-10 lg:pb-12">
            <div className="min-w-0 lg:col-span-6">
              <h1 className="max-w-[18.5rem] font-serif italic text-[2.65rem] font-medium leading-[0.95] text-cream sm:max-w-2xl sm:text-6xl lg:text-[4.45rem] xl:text-[4.75rem]">
                <PullUpWords text="Estrategia, contenido y campañas para marcas que quieren conectar de verdad." />
              </h1>
            </div>
            <motion.div
              className="hero-copy-card max-w-full min-w-0 rounded-[1.75rem] border border-cream/50 bg-cream/90 p-5 text-ink shadow-soft backdrop-blur-2xl lg:col-span-5 lg:col-start-8 lg:max-w-2xl lg:justify-self-end lg:p-7"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm leading-7 text-ink/75 sm:text-lg sm:leading-8">
                Ayudo a marcas y proyectos personales a construir una presencia
                digital mas humana, estetica y memorable a traves de contenido,
                storytelling y estrategias pensadas para sentirse reales en internet.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a className="btn btn-primary" href="#services">
                  Ver servicios
                  <ArrowUpRight size={16} />
                </a>
                <a className="btn btn-secondary" href="#portfolio">
                  Explorar proyectos
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Trabajemos juntas
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-9 right-10 hidden h-28 w-28 rounded-full border border-cream/40 bg-cream/10 backdrop-blur-xl lg:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </section>

      <section className="bg-noise px-5 py-14 sm:py-16">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="font-serif text-4xl font-medium leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
            Siempre he creido que las marcas{' '}
            <span className="italic font-bold">más exitosas</span>{' '}
            no son necesariamente las mas perfectas. Son las que logran hacer{' '}
            <span className="italic font-bold">sentir algo.</span>
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 text-left text-base leading-8 text-ink/70 md:grid-cols-2">
            <p>
              Por eso mi trabajo mezcla estrategia, contenido, campañas y creatividad
              para construir marcas con identidad, presencia y una narrativa que
              conecte de verdad con las personas.
            </p>
            <p>
              Desde posicionamiento digital, paid media y campañas UGC hasta influencer marketing. Me gusta crear ecosistemas donde todo conversa
              entre si: <span className="italic">lo visual, el mensaje, la comunidad y la experiencia.</span>
            </p>
          </div>
          <p className="font-serif italic mx-auto mt-10 max-w-3xl text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
            Porque hoy internet no necesita mas contenido vacio. Necesita marcas que cuenten su historia y se sientan humanas.
          </p>
        </Reveal>
      </section>

      <section className="px-5 py-14 sm:py-16" id="about">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-serif text-6xl font-medium leading-[0.95] text-ink sm:text-7xl">
              Sobre mi
            </h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-ink/70 sm:text-lg">
              <p>
                Soy Mary Gutiérrez, Ingeniera en Marketing con experiencia en contenido, campañas digitales y producción de proyectos — tanto en agencia como en industria creativa.
              </p>
              <p>
                He trabajado en la industria musical coordinando influencers, lanzamientos y cobertura de eventos, en agencia de medios gestionando campañas para marcas globales del sector beauty & luxury, y como creadora de contenido UGC para Mercado Libre Clips en distintos rubros y verticales.
              </p>
              <p>
                Me encanta pensar marcas como universos completos: cómo hablan, cómo se ven, cómo hacen sentir. Me muevo entre lo creativo y lo analítico — desde storytelling y UGC hasta paid media, estrategia digital y dirección creativa.
              </p>
              <p>
                Tengo formación y conocimiento profundo en cómo funcionan las plataformas digitales y sus algoritmos. Me mantengo constantemente actualizada con las novedades del ecosistema digital — porque en este mundo, lo que funciona hoy puede cambiar mañana, y eso hay que saberlo leer.
              </p>
            </div>
          </Reveal>

          <Reveal className="relative lg:col-span-7" delay={0.15}>
            <motion.div
              className="relative overflow-hidden rounded-[2rem] bg-beige p-4 shadow-editorial"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
            >
              <img
                src={workspaceImage}
                alt="Editorial creative workspace with notebook and moodboard"
                className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
              />
              <div className="absolute left-8 top-8 max-w-56 rotate-[-4deg] rounded-3xl border border-ink/10 bg-cream/90 p-5 shadow-soft backdrop-blur">
                <NotebookPen className="mb-4 text-mauve" size={24} />
                <p className="font-serif text-2xl leading-7 text-ink">
                  Ideas que se sienten antes de explicarse.
                </p>
              </div>
              <div className="absolute bottom-8 right-8 rounded-full border border-cream/70 bg-ink/70 px-5 py-3 text-sm font-medium text-cream backdrop-blur">
                creative strategy
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="bg-beige px-5 py-14 sm:py-16" id="services">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Servicios"
            copy="Una mezcla de pensamiento estrategico, sensibilidad visual y ejecucion de contenido para marcas que quieren construir presencia con identidad."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal delay={index * 0.05} key={service.title}>
                  <motion.article
                    className="group h-full rounded-[1.75rem] border border-ink/10 bg-cream/80 p-7 shadow-soft transition duration-300 hover:bg-cream"
                    whileHover={{ y: -8 }}
                  >
                    <div className="mb-9 flex h-12 w-12 items-center justify-center rounded-2xl bg-blush/50 text-ink transition duration-300 group-hover:bg-mauve/50">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>
                    <h3 className="font-serif text-3xl font-medium leading-8 text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-ink/70">{service.text}</p>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-16" id="portfolio">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <SectionHeading
              title="Portfolio"
              copy="Un recorrido por marcas, campañas y universos digitales donde la estrategia se cruza con contenido, sensibilidad visual y cultura de internet."
            />
            <Reveal className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-7 text-ink/60">
                La experiencia vive entre UGC, paid media, storytelling y ejecución creativa para marcas con distintas audiencias.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="marquee mt-12 overflow-hidden border-y border-ink/10 py-6">
          <motion.div
            className="flex min-w-max gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {[...portfolioItems, ...portfolioItems].map((item, index) => (
              <div
                className="flex min-w-[160px] flex-col justify-between rounded-[1.25rem] border border-ink/10 bg-cream/80 p-5 shadow-soft"
                key={`${item.brand}-${index}`}
              >
                <BrandLogo domain={item.domain} brand={item.brand} />
                <div>
                  <p className="font-serif text-xl font-medium text-ink leading-tight">{item.brand}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-ink/50">{item.type}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal className="mt-14">
            <h3 className="font-serif text-4xl font-medium text-ink sm:text-5xl">UGC Content</h3>
            <p className="mt-4 text-sm leading-7 text-ink/60">Una selección de videos creados para marcas reales.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { brand: 'Wiwi La Tienda', id: 'JKbGfM4Floc' },
              { brand: 'Youth Beauty', id: 't7gdJy2V5IA' },
              { brand: 'Sony', id: 'IFprGMpZ4FE' },
              { brand: 'Natura', id: 'rZsdpa-YVzk' },
            ].map((video, index) => (
              <Reveal delay={index * 0.08} key={video.brand}>
                <motion.div
                  className="group overflow-hidden rounded-[1.5rem] border border-ink/10 bg-beige/50 shadow-soft"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="aspect-[9/16] w-full overflow-hidden rounded-t-[1.5rem]">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.brand}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-serif text-2xl font-medium text-ink">{video.brand}</h4>
                    <p className="mt-1 text-xs uppercase tracking-widest text-mauve">UGC · Creadora</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-16" id="consulting">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Asesorías"
            copy="Proyectos reales donde acompañé desde la estrategia hasta la ejecución. Cada proceso fue distinto, adaptado a las necesidades y realidad de cada marca."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: 'Centro de salud',
                label: 'Estrategia de contenido · Posicionamiento digital',
                text: 'Trabajé en la construcción de confianza digital, convirtiendo conocimiento técnico en contenido cercano, educativo y humano. Acompañé la organización de pilares, narrativa de marca y crecimiento en redes.',
                icon: MessageCircleHeart,
              },
              {
                title: 'Profesional de la salud independiente',
                label: 'Marca personal · Dirección creativa',
                text: 'Acompañé el posicionamiento personal desde cero: definición de pilares de contenido, narrativa de marca y dirección creativa para comunicar autoridad profesional sin perder calidez humana.',
                icon: PenLine,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal delay={index * 0.1} key={item.title}>
                  <motion.article
                    className="group relative overflow-hidden rounded-[2rem] border border-ink/10 bg-[linear-gradient(135deg,rgba(255,249,225,0.96),rgba(242,194,206,0.34))] p-8 shadow-soft sm:p-10"
                    whileHover={{ y: -10, boxShadow: '0 32px 80px rgba(59,49,40,0.18)' }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-mauve/25 blur-3xl"
                      whileHover={{ scale: 1.6, opacity: 0.45 }}
                      transition={{ duration: 0.5 }}
                    />
                    <Icon className="relative text-camel transition-transform duration-300 group-hover:scale-110" size={32} strokeWidth={1.6} />
                    <p className="relative mt-8 text-xs font-semibold uppercase tracking-widest text-mauve">
                      {item.label}
                    </p>
                    <h3 className="relative mt-3 font-serif text-4xl font-medium text-ink">
                      {item.title}
                    </h3>
                    <p className="relative mt-5 max-w-xl text-base leading-8 text-ink/70">
                      {item.text}
                    </p>
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-mauve/60 to-blush/60"
                      initial={{ width: '0%' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-16" id="contact">
        <Reveal className="mx-auto max-w-5xl rounded-[2.25rem] bg-[linear-gradient(135deg,rgba(232,213,183,0.88),rgba(242,194,206,0.44),rgba(255,249,225,0.9))] p-8 text-center shadow-editorial sm:p-14 lg:p-20">
          <h2 className="font-serif text-6xl font-medium leading-[0.95] text-ink sm:text-7xl">
            Construyamos algo juntos.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-ink/70 sm:text-lg">
            Ya sea una campaña, una estrategia, contenido o una presencia digital
            completa, me interesa crear proyectos que conecten de forma real con las
            personas y se sientan autenticos dentro y fuera de internet.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="btn btn-primary" href="mailto:marygcubillos@gmail.com">
              Hablemos
              <ArrowUpRight size={16} />
            </a>
            <a className="btn btn-secondary" href="#portfolio">
              Ver portfolio
            </a>
            <a className="btn btn-ghost" href="mailto:marygcubillos@gmail.com">
              Contacto
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-ink/10 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
          <p>Creative Marketing · Content · Storytelling · Strategy · Paid Media · Influencer Marketing</p>
          <p>Based in Santiago, Chile ✿</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
