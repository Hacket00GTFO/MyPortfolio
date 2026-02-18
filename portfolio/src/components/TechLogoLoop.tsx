import React, { useMemo } from 'react';
import LogoLoop, { type LogoItem } from './LogoLoop';
import { technologies } from '../data/technologies';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiPostman,
  SiPrometheus,
  SiGrafana,
  SiJavascript,
  SiFigma,
  SiAdobexd,
  SiScikitlearn,
  SiPandas,
  SiJupyter,
  SiStreamlit,
  SiVite,
  SiTailwindcss,
  SiReactquery,
  SiReactrouter
} from 'react-icons/si';

const iconMap: Record<string, React.ReactNode> = {
  react: <SiReact className="text-[#61dafb]" />,
  typescript: <SiTypescript className="text-[#3178c6]" />,
  'node.js': <SiNodedotjs className="text-[#83cd29]" />,
  node: <SiNodedotjs className="text-[#83cd29]" />,
  python: <SiPython className="text-[#3776ab]" />,
  docker: <SiDocker className="text-[#2496ed]" />,
  kubernetes: <SiKubernetes className="text-[#326ce5]" />,
  '.net': <SiDotnet className="text-[#512bd4]" />,
  dotnet: <SiDotnet className="text-[#512bd4]" />,
  'asp.net core': <SiDotnet className="text-[#512bd4]" />,
  'c#': <SiCsharp className="text-[#68217a]" />,
  'sql server': <SiMicrosoftsqlserver className="text-[#4479a1]" />,
  postman: <SiPostman className="text-[#ef6b2d]" />,
  prometheus: <SiPrometheus className="text-[#e6522d]" />,
  grafana: <SiGrafana className="text-[#f05a28]" />,
  javascript: <SiJavascript className="text-[#f7df1e]" />,
  figma: <SiFigma className="text-[#0acf83]" />,
  'adobe xd': <SiAdobexd className="text-[#ff61f6]" />,
  'scikit-learn': <SiScikitlearn className="text-[#f97316]" />,
  pandas: <SiPandas className="text-[#150458]" />,
  jupyter: <SiJupyter className="text-[#f37626]" />,
  streamlit: <SiStreamlit className="text-[#ff4b4b]" />,
  vite: <SiVite className="text-[#646cff]" />,
  'tailwind css': <SiTailwindcss className="text-[#38bdf8]" />,
  'tailwindcss': <SiTailwindcss className="text-[#38bdf8]" />,
  'react query': <SiReactquery className="text-[#ff4b4b]" />,
  'react router': <SiReactrouter className="text-[#61dafb]" />
};

export default function TechLogoLoop() {
  const slugMap: Record<string, string> = {
    react: 'react',
    typescript: 'typescript',
    javascript: 'javascript',
    node: 'node-dot-js',
    'node.js': 'node-dot-js',
    python: 'python',
    docker: 'docker',
    kubernetes: 'kubernetes',
    'asp.net core': 'dot-net',
    '.net': 'dot-net',
    '.net 7': 'dot-net',
    '.net 9': 'dot-net',
    'c#': 'csharp',
    'sql server': 'microsoftsqlserver',
    postman: 'postman',
    prometheus: 'prometheus',
    grafana: 'grafana',
    figma: 'figma',
    'adobe xd': 'adobexd',
    streamlit: 'streamlit',
    jupyter: 'jupyter',
    pandas: 'pandas',
    'scikit-learn': 'scikitlearn',
    vite: 'vite',
    'tailwind css': 'tailwindcss',
    'tailwindcss': 'tailwindcss',
    'react query': 'reactquery',
    'react router': 'react-router'
  };

  function getSlug(tech: string): string | undefined {
    const key = tech.toLowerCase().trim();
    if (slugMap[key]) return slugMap[key];
    // heuristics
    if (key.includes('react')) return 'react';
    if (key.includes('ts') || key.includes('typescript')) return 'typescript';
    if (key.includes('node')) return 'node-dot-js';
    if (key.includes('docker')) return 'docker';
    if (key.includes('kubern')) return 'kubernetes';
    if (key.includes('python')) return 'python';
    if (key.includes('sql')) return 'microsoftsqlserver';
    return undefined;
  }

  const LogoImage: React.FC<{ tech: string; fallback?: React.ReactNode }> = ({ tech, fallback }) => {
    const slug = getSlug(tech);
    const [failed, setFailed] = React.useState(false);
    const cdn = slug ? `https://cdn.simpleicons.org/${slug}` : undefined;

    const circleSize = 72; // outer circle
    const iconSize = 36; // icon inside circle

    const circleStyle: React.CSSProperties = {
      width: circleSize,
      height: circleSize,
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.04)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
      transition: 'transform .18s ease',
      WebkitBackdropFilter: 'blur(6px)',
      backdropFilter: 'blur(6px)'
    };

    const imgStyle: React.CSSProperties = {
      width: iconSize,
      height: iconSize,
      objectFit: 'contain',
      filter: 'grayscale(1) brightness(0) invert(1)',
      opacity: 0.95
    };

const fallbackIconStyle: React.CSSProperties = { color: 'var(--text)', width: iconSize, height: iconSize };

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: circleSize, height: circleSize }}>
        <div className="tech-logo" style={circleStyle}>
          {cdn && !failed ? (
            <img
              src={cdn}
              alt={tech}
              width={iconSize}
              height={iconSize}
              style={imgStyle}
              onError={() => setFailed(true)}
              loading="lazy"
            />
          ) : fallback ? (
            <div style={fallbackIconStyle}>{React.cloneElement(fallback as any, { size: iconSize, color: 'currentColor' })}</div>
          ) : (
            <div className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
              {tech}
            </div>
          )}
        </div>
      </div>
    );
  };

  const logos: LogoItem[] = useMemo(() => {
    const grouped = new Map<string, { techs: string[]; fallback: React.ReactNode }>();

    for (const t of technologies) {
      const slug = getSlug(t) ?? t.toLowerCase().trim();
      const key = slug;
      if (!grouped.has(key)) {
        const fallback = iconMap[t.toLowerCase().trim()] ?? null; // no default to React — avoid duplicates
        grouped.set(key, { techs: [t], fallback });
      } else {
        grouped.get(key)!.techs.push(t);
      }
    }

    const result: LogoItem[] = [];
    for (const [key, { techs, fallback }] of grouped.entries()) {
      const title = techs.join(', ');
      result.push({ node: <div title={title}><LogoImage tech={techs[0]} fallback={fallback} /></div>, title });
    }

    return result;
  }, []);

  return <LogoLoop logos={logos} speed={80} gap={28} logoHeight={80} pauseOnHover={true} fadeOut={true} />;
}
