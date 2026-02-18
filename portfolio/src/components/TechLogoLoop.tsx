import React, { useMemo } from 'react';
import LogoLoop, { type LogoItem } from './LogoLoop';
import { technologies } from '../data/technologies';

export default function TechLogoLoop() {
  const logos: LogoItem[] = useMemo(
    () =>
      technologies.map(t => ({
        node: (
          <div className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
            {t}
          </div>
        ),
        title: t
      })),
    []
  );

  return <LogoLoop logos={logos} speed={80} gap={20} logoHeight={36} pauseOnHover={true} fadeOut={true} />;
}
