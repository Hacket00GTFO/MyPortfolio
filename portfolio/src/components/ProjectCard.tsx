import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import Carousel, { CarouselItem } from './Carousel';
import { FiFileText } from 'react-icons/fi';
import { highlights as globalHighlights } from '../data/info';

export default function ProjectCard({ project, horizontal = false }: { project: Project; horizontal?: boolean }) {
  // use project-specific highlights when available; fallback to global highlights
  const makeCarouselItems = (): CarouselItem[] => {
    const source = (project.highlights && project.highlights.length) ? project.highlights : globalHighlights;
    return source.map((h, i) => ({ id: h.id ?? i, title: h.title, description: h.description, icon: <div className="h-[16px] w-[16px] bg-white rounded-full" /> }));
  };

  const carouselItems = makeCarouselItems();

  if (horizontal) {
    return (
      <motion.article data-key={project.id} layout className="card p-6 project-card project-card--horizontal" style={{ borderRadius: 14 }} whileHover={{ translateY: -6 }}>
        <div className="carousel-wrapper" style={{ minWidth: 320, maxWidth: 420 }}>
          <Carousel items={carouselItems} baseWidth={320} autoplay loop pauseOnHover autoplayDelay={3500} />
        </div>

        <div style={{ flex: 1, paddingLeft: 18 }}>
          <div className="project-id">{project.id}</div>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-desc">{project.description}</p>

          <div className="project-stack" aria-hidden={project.stack.length === 0} style={{ marginTop: 12 }}>
            {project.stack.map(s => (
              <div key={s} className="tech-pill">{s}</div>
            ))}
          </div>

          <div className="project-meta" style={{ marginTop: 14 }}>
            <div>
              <div className="meta-label">Frontend</div>
              <div className="meta-badge">{project.frontend ?? '—'}</div>
            </div>
            <div>
              <div className="meta-label">Backend</div>
              <div className="meta-badge">{project.backend ?? '—'}</div>
            </div>
          </div>

          {(project.frontendDetails || project.backendDetails) && (
            <div className="project-details mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.frontendDetails && (
                  <div>
                    <div className="meta-label">Frontend — features</div>
                    <ul>
                      {project.frontendDetails.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.backendDetails && (
                  <div>
                    <div className="meta-label">Backend — features</div>
                    <ul>
                      {project.backendDetails.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article data-key={project.id} layout className="card p-6 project-card" style={{ borderRadius: 14 }} whileHover={{ translateY: -6 }}>
      <div className="project-id">{project.id}</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-desc">{project.description}</p>

          <div style={{ marginTop: 12 }}>
            <Carousel items={carouselItems} baseWidth={260} autoplay loop pauseOnHover autoplayDelay={3500} />
          </div>
        </div>
      </div>

      <div className="project-stack" aria-hidden={project.stack.length === 0}>
        {project.stack.map(s => (
          <div key={s} className="tech-pill">{s}</div>
        ))}
      </div>

      <div className="project-meta">
        <div>
          <div className="meta-label">Frontend</div>
          <div className="meta-badge">{project.frontend ?? '—'}</div>
        </div>
        <div>
          <div className="meta-label">Backend</div>
          <div className="meta-badge">{project.backend ?? '—'}</div>
        </div>
      </div>

      {(project.frontendDetails || project.backendDetails) && (
        <div className="project-details mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.frontendDetails && (
              <div>
                <div className="meta-label">Frontend — features</div>
                <ul>
                  {project.frontendDetails.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.backendDetails && (
              <div>
                <div className="meta-label">Backend — features</div>
                <ul>
                  {project.backendDetails.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.article>
  );
}
