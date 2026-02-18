import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.28, ease: 'circOut' }}
      className="card p-6"
      style={{ width: 360, borderRadius: 12, boxShadow: '0 10px 30px rgba(2,6,23,0.6)' }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div style={{ fontSize: 18, fontWeight: 800 }}>{project.name}</div>
          <div style={{ color: 'var(--muted)', marginTop: 6, fontSize: 13 }}>{project.description}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>Frontend</div>
          <div style={{ fontWeight: 700 }}>{project.frontend ?? '—'}</div>
          <div style={{ marginTop: 8, fontSize: 12, color: 'var(--muted)' }}>Backend</div>
          <div style={{ fontWeight: 700 }}>{project.backend ?? '—'}</div>
        </div>
      </div>

      <div style={{ marginTop: 12 }} className="project-stack">
        {project.stack.map(s => (
          <span key={s} className="tech-pill" style={{ marginRight: 8, marginBottom: 8 }}>
            {s}
          </span>
        ))}
      </div>

      <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
        {project.repoUrl ? (
          <a
            className="tech-pill"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', padding: '8px 12px' }}
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver repositorio
          </a>
        ) : (
          <div className="tech-pill" style={{ opacity: 0.6 }}>Sin repo</div>
        )}

        {project.demoUrl ? (
          <a
            className="tech-pill"
            style={{ background: '#7c3aed', color: '#fff', border: 'none' }}
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver demo
          </a>
        ) : (
          <div className="tech-pill" style={{ opacity: 0.6 }}>Sin demo</div>
        )}
      </div>
    </motion.div>
  );
}
