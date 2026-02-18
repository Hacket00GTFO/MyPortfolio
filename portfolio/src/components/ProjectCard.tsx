import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article layout className="card p-6" style={{ borderRadius: 14 }} whileHover={{ translateY: -6 }}>
      <div className="project-id">{project.id}</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-desc">{project.description}</p>
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
    </motion.article>
  );
}
