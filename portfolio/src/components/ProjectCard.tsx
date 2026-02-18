import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      className="card p-6"
      style={{ borderRadius: 14 }}
      whileHover={{ translateY: -6 }}
    >
      <div className="text-sm text-slate-400">{project.id}</div>
      <h3 className="mt-2 font-semibold">{project.name}</h3>
      <p className="subtitle mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
        {project.description}
      </p>
      <div className="project-stack mt-4">
        {project.stack.map(s => (
          <div key={s} className="tech-pill">{s}</div>
        ))}
      </div>
      <div className="mt-4 text-sm" style={{ color: 'var(--muted)' }}>
        <strong>Frontend:</strong> {project.frontend ?? '—'} • <strong>Backend:</strong> {project.backend ?? '—'}
      </div>
    </motion.article>
  );
}
