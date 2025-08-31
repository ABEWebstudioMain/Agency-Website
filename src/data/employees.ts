import { Employee } from '@/types/employee';

export const employees: Employee[] = [
  {
    id: '1',
    slug: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Senior Full-Stack Developer',
    photo: '/images/hero/image-1.jpg',
    summary: 'Passionate full-stack developer with 8+ years of experience building scalable web applications using React, Node.js, and cloud technologies.',
    email: 'sarah.johnson@58solutions.com',
    location: 'San Francisco, CA',
    skills: [
      {
        id: 'react',
        name: 'React & Next.js',
        level: 'Expert',
        yearsOfExperience: 6,
        description: 'Expert in building modern, performant React applications with Next.js, including SSR, SSG, and advanced optimization techniques.',
        tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Query'],
        projects: [
          {
            id: 'ecommerce-platform',
            name: 'E-commerce Platform',
            description: 'Built a high-performance e-commerce platform serving 100k+ users',
            technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
            duration: '6 months',
            outcome: '40% improvement in page load times'
          },
          {
            id: 'saas-dashboard',
            name: 'SaaS Analytics Dashboard',
            description: 'Developed real-time analytics dashboard with complex data visualizations',
            technologies: ['React', 'D3.js', 'WebSocket', 'Redis'],
            duration: '4 months',
            outcome: 'Increased user engagement by 60%'
          }
        ],
        category: 'Frontend'
      },
      {
        id: 'nodejs',
        name: 'Node.js & Express',
        level: 'Expert',
        yearsOfExperience: 7,
        description: 'Extensive experience in building robust backend APIs, microservices, and real-time applications using Node.js ecosystem.',
        tools: ['Node.js', 'Express', 'Fastify', 'Socket.io', 'GraphQL', 'REST APIs'],
        projects: [
          {
            id: 'microservices-api',
            name: 'Microservices Architecture',
            description: 'Designed and implemented scalable microservices handling 1M+ requests/day',
            technologies: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB'],
            duration: '8 months',
            outcome: '99.9% uptime achieved'
          }
        ],
        category: 'Backend'
      },
      {
        id: 'aws',
        name: 'AWS Cloud Services',
        level: 'Advanced',
        yearsOfExperience: 5,
        description: 'Proficient in designing and deploying cloud-native applications using various AWS services for scalability and reliability.',
        tools: ['EC2', 'Lambda', 'S3', 'RDS', 'CloudFormation', 'API Gateway'],
        projects: [
          {
            id: 'serverless-app',
            name: 'Serverless Application',
            description: 'Built serverless application processing 500k+ events daily',
            technologies: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'CloudWatch'],
            duration: '3 months',
            outcome: '70% reduction in infrastructure costs'
          }
        ],
        category: 'DevOps'
      }
    ],
    experience: [
      {
        id: 'senior-dev-58solutions',
        company: '58Solutions',
        position: 'Senior Full-Stack Developer',
        startDate: '2022-01',
        description: 'Leading development of enterprise web applications and mentoring junior developers at 58agents.',
        achievements: [
          'Led development of 5+ major client projects',
          'Improved application performance by 45% on average',
          'Mentored 3 junior developers',
          'Implemented CI/CD pipelines reducing deployment time by 60%'
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL'],
        location: 'San Francisco, CA'
      },
      {
        id: 'fullstack-dev-techcorp',
        company: 'TechCorp Solutions',
        position: 'Full-Stack Developer',
        startDate: '2019-03',
        endDate: '2021-12',
        description: 'Developed and maintained multiple web applications for enterprise clients.',
        achievements: [
          'Built 10+ responsive web applications',
          'Reduced bug reports by 35% through comprehensive testing',
          'Collaborated with cross-functional teams of 15+ members',
          'Implemented automated testing increasing code coverage to 90%'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Jest'],
        location: 'Remote'
      }
    ],
    services: [
      {
        id: 'web-app-development',
        name: 'Web Application Development',
        description: 'Custom web applications built with modern technologies',
        detailedDescription: 'I specialize in creating high-performance, scalable web applications using the latest technologies. From concept to deployment, I handle the entire development lifecycle including architecture design, frontend development, backend APIs, database design, and cloud deployment.',
        tools: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
        projects: [
          {
            id: 'crm-system',
            name: 'Custom CRM System',
            description: 'Built comprehensive CRM system for sales team management',
            technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
            duration: '4 months',
            outcome: '50% increase in sales team productivity'
          }
        ],
        pricing: {
          type: 'project',
          range: '$15,000 - $50,000'
        },
        deliverables: [
          'Fully functional web application',
          'Responsive design for all devices',
          'Admin dashboard',
          'API documentation',
          'Deployment and hosting setup',
          '3 months of support and maintenance'
        ]
      },
      {
        id: 'api-development',
        name: 'API Development & Integration',
        description: 'RESTful APIs and third-party integrations',
        detailedDescription: 'I design and develop robust, scalable APIs that serve as the backbone of modern applications. This includes RESTful APIs, GraphQL endpoints, real-time WebSocket connections, and seamless third-party service integrations.',
        tools: ['Node.js', 'Express', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis'],
        projects: [
          {
            id: 'payment-api',
            name: 'Payment Processing API',
            description: 'Secure payment API with multiple gateway integrations',
            technologies: ['Node.js', 'Stripe', 'PayPal', 'PostgreSQL'],
            duration: '2 months',
            outcome: 'Processed $2M+ in transactions'
          }
        ],
        pricing: {
          type: 'project',
          range: '$5,000 - $20,000'
        },
        deliverables: [
          'Complete API documentation',
          'Authentication and authorization',
          'Rate limiting and security measures',
          'Testing suite',
          'Monitoring and logging setup'
        ]
      }
    ],
    socialLinks: [
      {
        id: 'linkedin',
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/sarah-johnson-dev'
      },
      {
        id: 'github',
        platform: 'GitHub',
        url: 'https://github.com/sarah-johnson'
      }
    ]
  },
  {
    id: '2',
    slug: 'michael-chen',
    name: 'Michael Chen',
    role: 'DevOps Engineer & Cloud Architect',
    photo: '/images/team/michael-chen.jpg',
    summary: 'Cloud infrastructure specialist with 10+ years of experience in DevOps, automation, and scalable system architecture across AWS, Azure, and GCP.',
    email: 'michael.chen@58agents.com',
    location: 'Seattle, WA',
    skills: [
      {
        id: 'kubernetes',
        name: 'Kubernetes & Docker',
        level: 'Expert',
        yearsOfExperience: 8,
        description: 'Expert in containerization and orchestration, designing and managing large-scale Kubernetes clusters for enterprise applications.',
        tools: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Prometheus', 'Grafana'],
        projects: [
          {
            id: 'k8s-migration',
            name: 'Legacy System Migration',
            description: 'Migrated monolithic application to microservices on Kubernetes',
            technologies: ['Kubernetes', 'Docker', 'Istio', 'MongoDB'],
            duration: '6 months',
            outcome: '99.99% uptime and 50% cost reduction'
          }
        ],
        category: 'DevOps'
      },
      {
        id: 'terraform',
        name: 'Infrastructure as Code',
        level: 'Expert',
        yearsOfExperience: 7,
        description: 'Proficient in managing infrastructure through code using Terraform, CloudFormation, and other IaC tools for consistent, repeatable deployments.',
        tools: ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi', 'AWS CDK'],
        projects: [
          {
            id: 'multi-cloud-infra',
            name: 'Multi-Cloud Infrastructure',
            description: 'Designed infrastructure spanning AWS, Azure, and GCP',
            technologies: ['Terraform', 'AWS', 'Azure', 'GCP'],
            duration: '4 months',
            outcome: 'Reduced deployment time by 80%'
          }
        ],
        category: 'DevOps'
      },
      {
        id: 'cicd',
        name: 'CI/CD Pipelines',
        level: 'Expert',
        yearsOfExperience: 9,
        description: 'Extensive experience in building automated CI/CD pipelines that ensure fast, reliable, and secure software delivery.',
        tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps', 'ArgoCD'],
        projects: [
          {
            id: 'automated-pipeline',
            name: 'Enterprise CI/CD Pipeline',
            description: 'Built automated pipeline for 50+ microservices',
            technologies: ['Jenkins', 'Docker', 'Kubernetes', 'SonarQube'],
            duration: '3 months',
            outcome: '90% reduction in deployment errors'
          }
        ],
        category: 'DevOps'
      }
    ],
    experience: [
      {
        id: 'cloud-architect-58solutions',
        company: '58Solutions',
        position: 'DevOps Engineer & Cloud Architect',
        startDate: '2021-06',
        description: 'Designing and implementing cloud infrastructure solutions for enterprise clients at 58agents.',
        achievements: [
          'Architected cloud solutions for 20+ enterprise clients',
          'Reduced infrastructure costs by 40% on average',
          'Achieved 99.9% uptime across all managed systems',
          'Led team of 5 DevOps engineers'
        ],
        technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins'],
        location: 'Seattle, WA'
      },
      {
        id: 'senior-devops-cloudtech',
        company: 'CloudTech Systems',
        position: 'Senior DevOps Engineer',
        startDate: '2018-02',
        endDate: '2021-05',
        description: 'Led DevOps initiatives and cloud migration projects for Fortune 500 companies.',
        achievements: [
          'Successfully migrated 15+ applications to cloud',
          'Implemented monitoring solutions reducing MTTR by 60%',
          'Automated deployment processes saving 200+ hours/month',
          'Mentored junior DevOps engineers'
        ],
        technologies: ['AWS', 'Azure', 'Docker', 'Ansible', 'Prometheus'],
        location: 'San Francisco, CA'
      }
    ],
    services: [
      {
        id: 'cloud-migration',
        name: 'Cloud Migration & Architecture',
        description: 'Complete cloud migration and architecture design services',
        detailedDescription: 'I help businesses migrate their infrastructure to the cloud with minimal downtime and maximum efficiency. This includes assessment of current systems, migration strategy development, implementation, and ongoing optimization.',
        tools: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
        projects: [
          {
            id: 'enterprise-migration',
            name: 'Enterprise Cloud Migration',
            description: 'Migrated 50+ applications to AWS with zero downtime',
            technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker'],
            duration: '8 months',
            outcome: '45% cost reduction and improved performance'
          }
        ],
        pricing: {
          type: 'project',
          range: '$25,000 - $100,000'
        },
        deliverables: [
          'Cloud readiness assessment',
          'Migration strategy and roadmap',
          'Infrastructure as Code templates',
          'Automated deployment pipelines',
          'Monitoring and alerting setup',
          'Documentation and training'
        ]
      },
      {
        id: 'devops-automation',
        name: 'DevOps Automation',
        description: 'CI/CD pipelines and infrastructure automation',
        detailedDescription: 'I implement comprehensive DevOps practices including automated testing, continuous integration and deployment, infrastructure monitoring, and security automation to streamline your development workflow.',
        tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible'],
        projects: [
          {
            id: 'cicd-implementation',
            name: 'CI/CD Pipeline Implementation',
            description: 'Built automated pipeline reducing deployment time by 90%',
            technologies: ['Jenkins', 'Docker', 'Kubernetes', 'SonarQube'],
            duration: '3 months',
            outcome: 'Deployment frequency increased from weekly to daily'
          }
        ],
        pricing: {
          type: 'project',
          range: '$10,000 - $40,000'
        },
        deliverables: [
          'Automated CI/CD pipelines',
          'Infrastructure monitoring setup',
          'Security scanning integration',
          'Automated testing frameworks',
          'Documentation and training materials'
        ]
      }
    ],
    socialLinks: [
      {
        id: 'linkedin',
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/michael-chen-devops'
      },
      {
        id: 'github',
        platform: 'GitHub',
        url: 'https://github.com/michael-chen'
      }
    ]
  },
  {
    id: '3',
    slug: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    role: 'UX/UI Designer & Frontend Developer',
    photo: '/images/team/emily-rodriguez.jpg',
    summary: 'Creative designer and frontend developer with 6+ years of experience crafting beautiful, user-centered digital experiences that drive engagement and conversion.',
    email: 'emily.rodriguez@58agents.com',
    location: 'Austin, TX',
    skills: [
      {
        id: 'ui-design',
        name: 'UI/UX Design',
        level: 'Expert',
        yearsOfExperience: 6,
        description: 'Expert in creating intuitive, accessible, and visually appealing user interfaces with a focus on user experience and conversion optimization.',
        tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
        projects: [
          {
            id: 'mobile-app-redesign',
            name: 'Mobile App Redesign',
            description: 'Redesigned mobile app increasing user engagement by 75%',
            technologies: ['Figma', 'Principle', 'React Native'],
            duration: '4 months',
            outcome: '75% increase in user engagement'
          },
          {
            id: 'ecommerce-ux',
            name: 'E-commerce UX Optimization',
            description: 'Optimized checkout flow reducing cart abandonment by 40%',
            technologies: ['Figma', 'Hotjar', 'Google Analytics'],
            duration: '2 months',
            outcome: '40% reduction in cart abandonment'
          }
        ],
        category: 'Design'
      },
      {
        id: 'frontend-dev',
        name: 'Frontend Development',
        level: 'Advanced',
        yearsOfExperience: 5,
        description: 'Skilled in translating designs into pixel-perfect, responsive, and interactive web applications using modern frontend technologies.',
        tools: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SASS', 'Framer Motion'],
        projects: [
          {
            id: 'design-system',
            name: 'Component Design System',
            description: 'Built comprehensive design system used across 10+ products',
            technologies: ['React', 'Storybook', 'TypeScript', 'Tailwind CSS'],
            duration: '3 months',
            outcome: '50% faster development time for new features'
          }
        ],
        category: 'Frontend'
      },
      {
        id: 'user-research',
        name: 'User Research & Testing',
        level: 'Advanced',
        yearsOfExperience: 4,
        description: 'Experienced in conducting user research, usability testing, and data analysis to inform design decisions and improve user experience.',
        tools: ['Hotjar', 'Maze', 'UserTesting', 'Google Analytics', 'Mixpanel'],
        projects: [
          {
            id: 'user-research-study',
            name: 'User Research Study',
            description: 'Conducted comprehensive user research for SaaS platform',
            technologies: ['Hotjar', 'Maze', 'Figma'],
            duration: '6 weeks',
            outcome: 'Identified 15 key usability issues and solutions'
          }
        ],
        category: 'Design'
      }
    ],
    experience: [
      {
        id: 'ux-designer-58solutions',
        company: '58Solutions',
        position: 'UX/UI Designer & Frontend Developer',
        startDate: '2022-03',
        description: 'Leading design and frontend development for client projects at 58agents, focusing on user experience and conversion optimization.',
        achievements: [
          'Designed interfaces for 15+ client projects',
          'Improved average conversion rates by 35%',
          'Built reusable component library used across projects',
          'Conducted user research for 8 major redesign projects'
        ],
        technologies: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        location: 'Austin, TX'
      },
      {
        id: 'ui-designer-designstudio',
        company: 'Creative Design Studio',
        position: 'UI/UX Designer',
        startDate: '2019-08',
        endDate: '2022-02',
        description: 'Designed user interfaces for web and mobile applications across various industries.',
        achievements: [
          'Designed 25+ web and mobile applications',
          'Led design workshops with clients and stakeholders',
          'Increased client satisfaction scores by 40%',
          'Mentored 2 junior designers'
        ],
        technologies: ['Figma', 'Adobe Creative Suite', 'InVision', 'Principle'],
        location: 'Remote'
      }
    ],
    services: [
      {
        id: 'ux-design',
        name: 'UX/UI Design Services',
        description: 'Complete user experience and interface design solutions',
        detailedDescription: 'I provide end-to-end UX/UI design services from user research and wireframing to high-fidelity prototypes and design systems. My approach focuses on understanding user needs and business goals to create interfaces that are both beautiful and functional.',
        tools: ['Figma', 'Adobe XD', 'Principle', 'InVision', 'Hotjar', 'Maze'],
        projects: [
          {
            id: 'saas-dashboard-design',
            name: 'SaaS Dashboard Design',
            description: 'Designed comprehensive dashboard for analytics platform',
            technologies: ['Figma', 'Principle', 'React'],
            duration: '3 months',
            outcome: '60% improvement in user task completion'
          }
        ],
        pricing: {
          type: 'project',
          range: '$8,000 - $30,000'
        },
        deliverables: [
          'User research and personas',
          'Wireframes and user flows',
          'High-fidelity mockups',
          'Interactive prototypes',
          'Design system and style guide',
          'Handoff documentation for developers'
        ]
      },
      {
        id: 'frontend-implementation',
        name: 'Frontend Implementation',
        description: 'Pixel-perfect frontend development from designs',
        detailedDescription: 'I specialize in bringing designs to life with clean, maintainable code. This includes responsive implementation, animations, accessibility compliance, and performance optimization.',
        tools: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
        projects: [
          {
            id: 'responsive-website',
            name: 'Responsive Website Implementation',
            description: 'Built responsive website with complex animations',
            technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
            duration: '6 weeks',
            outcome: '95+ Lighthouse performance score'
          }
        ],
        pricing: {
          type: 'project',
          range: '$5,000 - $20,000'
        },
        deliverables: [
          'Pixel-perfect implementation',
          'Responsive design for all devices',
          'Smooth animations and interactions',
          'Accessibility compliance (WCAG 2.1)',
          'Performance optimization',
          'Cross-browser compatibility'
        ]
      }
    ],
    socialLinks: [
      {
        id: 'linkedin',
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/emily-rodriguez-ux'
      },
      {
        id: 'dribbble',
        platform: 'Dribbble',
        url: 'https://dribbble.com/emily-rodriguez'
      },
      {
        id: 'behance',
        platform: 'Behance',
        url: 'https://behance.net/emily-rodriguez'
      }
    ]
  }
];

export const getEmployeeBySlug = (slug: string): Employee | undefined => {
  return employees.find(employee => employee.slug === slug);
};

export const getAllEmployeeSlugs = (): string[] => {
  return employees.map(employee => employee.slug);
};

export const getEmployeesBySkill = (skill: string): Employee[] => {
  return employees.filter(employee => 
    employee.skills.some(s => s.name.toLowerCase().includes(skill.toLowerCase()))
  );
};

export const getEmployeesByService = (service: string): Employee[] => {
  return employees.filter(employee => 
    employee.services.some(s => s.name.toLowerCase().includes(service.toLowerCase()))
  );
};

export const getAllSkills = (): string[] => {
  const skills = new Set<string>();
  employees.forEach(employee => {
    employee.skills.forEach(skill => {
      skills.add(skill.name);
    });
  });
  return Array.from(skills);
};

export const getAllServices = (): string[] => {
  const services = new Set<string>();
  employees.forEach(employee => {
    employee.services.forEach(service => {
      services.add(service.name);
    });
  });
  return Array.from(services);
};