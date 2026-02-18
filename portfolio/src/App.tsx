import React from 'react';
import ProjectCard from './components/ProjectCard';
import TechLogoLoop from './components/TechLogoLoop';

import Waves from './components/Waves';
import ProjectGridAnimator from './components/ProjectGridAnimator';
import { projects } from './data/projects';

export default function App() {

  return (
    <div className="relative min-h-screen">
      <Waves
        lineColor="#3a31af"
        backgroundColor="rgba(255, 255, 255, 0.02)"
        waveSpeedX={0.0125}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="z-0 pointer-events-none"
      />

      <main className="container relative z-10" style={{ paddingTop: 56 }}>
        <section className="hero">
          <div className="card p-8" style={{ borderRadius: 16 }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="hero-title">Portafolio</div>
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
          <div className="flex items-center justify-between">
            <h2 className="section-title">Proyectos</h2>

          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 12 }}>
            {projects.map(p => (
              <div key={p.id}>
                <ProjectCard project={p} horizontal />
              </div>
            ))}
          </div>

          <ProjectGridAnimator animateFrom="bottom" stagger={0.08} blurToFocus scaleOnHover hoverScale={0.97} />
        </section>

        <section id="technologies" style={{ marginTop: 40 }}>
          <h2 className="section-title">Lenguajes, frameworks y contenerización</h2>
          <div className="card p-6 mt-2">
            <p className="subtitle">Listado de lenguajes, frameworks, herramientas de contenerización y APIs de principal dominio/experiencia.</p>
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


        <footer className="footer" style={{ marginTop: 56 }}>
          <div className="container">
            © {new Date().getFullYear()} — Portafolio técnico • Información tomada del README del repositorio
          </div>
        </footer>
      </main>
    </div>
  );
}
