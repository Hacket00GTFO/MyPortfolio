export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  frontend?: string;
  backend?: string;
  repoUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'codelumpos',
    name: 'CodelumPOS',
    description: 'Point of Sale con arquitectura hexagonal, observabilidad y seguridad empresarial.',
    stack: ['.NET 9', 'Dapper', 'OpenTelemetry', 'JWT'],
    frontend: '—',
    backend: 'C# (.NET)',
    repoUrl: '#',
    demoUrl: '#'
  },
  {
    id: 'lapradera',
    name: 'LaPradera',
    description: 'Sistema multi-tenant para gestión de restaurantes y comercios. Backend en C# (.NET 7) y frontend en React + TypeScript.',
    stack: ['C#', '.NET 7', 'ASP.NET Core', 'React', 'TypeScript', 'Docker', 'SQL Server'],
    frontend: 'React + TypeScript',
    backend: 'C# (.NET)',
    repoUrl: '#',
    demoUrl: '#'
  },
  {
    id: 'remichain',
    name: 'Remichain',
    description: 'Plataforma blockchain para gestión de activos y contratos. App móvil y web con monitoreo y despliegue en Kubernetes.',
    stack: ['Node.js', 'TypeScript', 'React', 'React Native', 'Docker', 'Kubernetes'],
    frontend: 'React / React Native',
    backend: 'Node.js (Express)',
    repoUrl: '#',
    demoUrl: '#'
  },
  {
    id: 'straforai',
    name: 'StraforAI',
    description: 'Generación y análisis de datos para IA aplicada a recursos humanos; pipelines y visualización de resultados.',
    stack: ['Node.js', 'JavaScript', 'CSV', 'DataViz'],
    frontend: 'React',
    backend: 'Node.js',
    repoUrl: '#',
    demoUrl: '#'
  },
  {
    id: 'desingvito',
    name: 'desingVITO',
    description: 'Prototipado y diseño UI/UX: prototipos en Figma, documentación UX y diseño responsivo.',
    stack: ['Figma', 'Adobe XD', 'Design Systems'],
    frontend: 'Prototipos (Figma)',
    backend: undefined,
    repoUrl: '#'
  },
  {
    id: 'hpe-ai',
    name: 'HPE-AI',
    description: 'Soluciones de IA empresariales: modelos ML, pipelines y visualización en Jupyter/Streamlit.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter', 'Streamlit'],
    frontend: 'Streamlit / Jupyter',
    backend: 'Python ML',
    repoUrl: '#'
  }
];
