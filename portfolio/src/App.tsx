import React from 'react';
import CardNav, { type CardNavItem } from './components/CardNav';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import TechLogoLoop from './components/TechLogoLoop';
import Carousel, { type CarouselItem } from './components/Carousel';
import LetterGlitch from './components/LetterGlitch';
import Folder from './components/Folder';
import { projects } from './data/projects';
import { highlights } from './data/info';

export default function App() {
  const navItems: CardNavItem[] = projects.slice(0, 3).map(p => ({
    label: p.name,
    bgColor: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
    textColor: '#fff',
    links: [
      { label: 'Detalles', href: `#${p.id}`, ariaLabel: `${p.name} details` },
      { label: 'Stack', href: '#technologies', ariaLabel: `${p.name} stack` }
    ]
  }));

  const [openFolderId, setOpenFolderId] = React.useState<string | null>(null);

  return (
    <div className="relative min-h-screen">
      {/* animated background */}
      <LetterGlitch glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} />

      <header className="header fixed inset-x-0 top-0 z-40 pointer-events-none">
        <CardNav logo="/" items={navItems} baseColor="rgba(10,12,20,0.6)" menuColor="#fff" buttonBgColor="#7c3aed" buttonTextColor="#fff" />
      </header>

      <main className="container relative z-10" style={{ paddingTop: 120 }}>
        <section className="hero">
          <div className="card p-8" style={{ borderRadius: 16 }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="hero-title">Portfolio — Proyectos seleccionados</div>
                <div className="subtitle">Resumen técnico y tecnologías para proyectos profesionales: backend, frontend, contenerización y observabilidad.</div>
                <div style={{ marginTop: 16 }}>
                  <a href="#projects" className="tech-pill">Ver proyectos</a>
                </div>
              </div>
              <div style={{ minWidth: 240 }}>
                <div className="card p-4" style={{ borderRadius: 12 }}>
                  <div style={{ fontWeight: 700 }}>Tecnologías</div>
                  <div style={{ marginTop: 12 }}>
                    <TechLogoLoop />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" style={{ marginTop: 32 }}>
          <h2 className="section-title">Proyectos (click en carpeta para ver detalle)</h2>

          <div className="mt-4 grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
            {projects.map(p => (
              <div key={`folder-${p.id}`} className="flex items-start justify-center relative">
                <Folder
                  color="#2C6EF0"
                  size={1}
                  items={[
                    <div className="paper-summary">
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{p.stack.slice(0, 3).join(' • ')}</div>
                    </div>
                  ]}
                  detail={<ProjectDetail project={p} />}
                  isOpen={openFolderId === p.id}
                  onToggle={open => setOpenFolderId(open ? p.id : null)}
                />
              </div>
            ))}
          </div>
        </section>

        <section id="technologies" style={{ marginTop: 40 }}>
          <h2 className="section-title">Lenguajes, frameworks y contenerización</h2>
          <div className="card p-6 mt-2">
            <p className="subtitle">Listado técnico — lenguajes, frameworks, herramientas de contenerización y APIs.</p>
            <div style={{ marginTop: 12 }} className="project-stack">
              <div className="tech-pill">React</div>
              <div className="tech-pill">TypeScript</div>
              <div className="tech-pill">Node.js / Express</div>
              <div className="tech-pill">C# / .NET</div>
              <div className="tech-pill">Docker / Docker Compose</div>
              <div className="tech-pill">Kubernetes</div>
              <div className="tech-pill">RESTful APIs (OpenAPI/Swagger)</div>
            </div>
          </div>
        </section>

        <section id="highlights" style={{ marginTop: 40 }}>
          <h2 className="section-title">Puntos destacados</h2>
          <div style={{ marginTop: 12 }}>
            <Carousel
              items={highlights.map(h => ({ id: h.id, title: h.title, description: h.description, icon: <div className="h-[16px] w-[16px] bg-white rounded-full" /> })) as CarouselItem[]}
              baseWidth={360}
              autoplay
              autoplayDelay={3500}
              loop
              round={false}
            />
          </div>
        </section>

        <footer className="footer" style={{ marginTop: 56 }}>
          <div className="container">
            © {new Date().getFullYear()} — Portafolio técnico • Información tomada del README del repositorio
          </div>
        </footer>
      </main>
    </div>
  );
}
