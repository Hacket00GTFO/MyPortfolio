export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  frontend?: string;
  backend?: string;
  frontendDetails?: string[];
  backendDetails?: string[];
  highlights?: { id: number; title: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: 'codelumpos',
    name: 'CodelumPOS',
    description: 'Point of Sale con arquitectura hexagonal, observabilidad y seguridad empresarial.',
    stack: ['.NET 9', 'Dapper', 'OpenTelemetry', 'JWT'],
    frontend: '—',
    backend: 'C# (.NET)',
    highlights: [
      { id: 1, title: 'Arquitectura hexagonal', description: 'Diseño desacoplado (Ports & Adapters) para pruebas y mantenibilidad.' },
      { id: 2, title: 'Seguridad empresarial', description: 'Autenticación JWT, roles y validaciones para entornos críticos.' },
      { id: 3, title: 'Observabilidad', description: 'OpenTelemetry para trazas y métricas en producción.' }
    ]
  },
  {
    id: 'lapradera',
    name: 'LaPradera',
    description: 'Sistema multi-tenant para gestión de restaurantes y comercios. Backend en C# (.NET 7) y frontend en React + TypeScript.',
    stack: ['C#', '.NET 7', 'ASP.NET Core', 'React', 'TypeScript', 'Docker', 'SQL Server'],
    frontend: 'React + TypeScript',
    backend: 'C# (.NET)',
    highlights: [
      { id: 1, title: 'Multi‑tenant', description: 'Aislamiento por tenant y configuración por cliente.' },
      { id: 2, title: 'API RESTful', description: 'Endpoints versionados y cobertura de pruebas.' },
      { id: 3, title: 'Migraciones seguras', description: 'Scripts y constraints para integridad transaccional.' }
    ]
  },
  {
    id: 'remichain',
    name: 'Remichain',
    description: 'Plataforma blockchain para gestión de activos y contratos. Backend en Rust, frontend en TypeScript (web & mobile), integración con Arbitrum y despliegue en infra escalable.',
    stack: [
      'Rust', 'Axum', 'Tokio', 'Serde', 'sqlx',
      'Arbitrum (Stylus)', 'Ethers.rs', 'ERC20 (multi-token)',
      'TypeScript', 'React 18', 'Vite', 'TailwindCSS', 'React Native', 'Expo Router', 'React Navigation',
      'PostgreSQL 15+', 'Redis 7+', 'S3 + CloudFront',
      'Nginx', 'AWS ALB', 'TLS 1.3',
      'Docker Compose', 'AWS ECS Fargate', 'CloudFormation'
    ],
    frontend: 'TypeScript — React 18 (web); React Native + Expo (mobile)',
    backend: 'Rust — Axum, Tokio; Ethers.rs for blockchain',
    highlights: [
      { id: 1, title: 'Integración blockchain', description: 'Smart contracts y compatibilidad con Arbitrum/EVM.' },
      { id: 2, title: 'Backend en Rust', description: 'Alto rendimiento y seguridad con Axum + Tokio.' },
      { id: 3, title: 'Infra escalable', description: 'Despliegue en contenedores y escalado automático.' }
    ]
  },
  {
    id: 'straforai',
    name: 'StraforAI',
    description: 'Plataforma para generación y análisis de datos aplicados a IA en recursos humanos; pipelines, visualización y gestión de candidatos.',
    stack: ['Python', 'FastAPI', 'React', 'CSV', 'DataViz', 'MongoDB', 'JWT'],
    frontend: 'React',
    backend: 'Python (FastAPI) / MongoDB',
    frontendDetails: [
      'User authentication (Login/Logout)',
      'Dark/Light theme support',
      'Responsive dashboard layouts',
      'HR account management',
      'Job vacancy management',
      'Candidate management',
      'Settings and profile management'
    ],
    backendDetails: [
      'RESTful API endpoints (FastAPI)',
      'JWT authentication',
      'MongoDB integration',
      'Role-based access control',
      'File upload handling',
      'Email notifications'
    ],
    highlights: [
      { id: 1, title: 'Pipelines de datos', description: 'Ingesta y procesamiento para analytics y entrenamiento de modelos.' },
      { id: 2, title: 'Visualización avanzada', description: 'Dashboards interactivos para evaluación de candidatos.' },
      { id: 3, title: 'Generación sintética', description: 'Creación de datasets sintéticos para pruebas y modelado.' }
    ]
  },
  {
    id: 'desingvito',
    name: 'desingVITO',
    description: 'Sitio web oficial de VITO Technologies — especialistas en RFID, Auto-ID, movilidad empresarial e impresión industrial. Frontend moderno y responsivo con enfoque en experiencia de usuario.',
    stack: [
      'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Query', 'React Router', 'Responsive Design'
    ],
    frontend: 'React 18 + TypeScript (Vite, TailwindCSS)',
    backend: undefined,
    highlights: [
      { id: 1, title: 'RFID & Auto‑ID', description: 'Soluciones específicas para identificación y trazabilidad industrial.' },
      { id: 2, title: 'UX & prototipado', description: 'Prototipos interactivos y diseño responsivo centrado en usuarios.' },
      { id: 3, title: 'Integración industrial', description: 'Documentación y procesos para despliegues en planta.' }
    ]
  },
  {
    id: 'hpe-ai',
    name: 'HPE-AI',
    description: 'Soluciones de IA empresariales: modelos ML, pipelines y visualización. Frontend en React para dashboards e interfaces de usuario.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter', 'Streamlit', 'React'],
    frontend: 'React',
    backend: 'Python ML',
    highlights: [
      { id: 1, title: 'Modelos ML empresariales', description: 'Entrenamiento y despliegue de modelos para casos de negocio.' },
      { id: 2, title: 'Pipelines reproducibles', description: 'Pipelines para entrenamiento y despliegue con trazabilidad.' },
      { id: 3, title: 'Visualización y reporting', description: 'Dashboards y notebooks para análisis y toma de decisiones.' }
    ]
  }
];
