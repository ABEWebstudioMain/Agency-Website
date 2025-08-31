export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  clientType: string;
  industry: string;
  challengeSnapshot: string;
  solutionSnapshot: string;
  impactSnapshot: string;
  serviceCategory: 'custom-software' | 'devsecops' | 'cloud-migration' | 'ai-optimization';
  featured: boolean;
  image: string;
  fullContent: {
    clientProfile: string;
    problemDescription: string;
    approach: string;
    keyTechnologies: string[];
    specificActions: string[];
    quantifiableResults: {
      metric: string;
      description: string;
    }[];
    qualitativeBenefits: string[];
    clientEndorsement?: {
      quote: string;
      author: string;
      position: string;
      company: string;
    };
  };
  metrics: {
    primaryMetric: string;
    secondaryMetrics: string[];
  };
  duration: string;
  teamSize: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'logistics-process-automation',
    title: 'Streamlining Global Operations',
    subtitle: 'Custom Process Automation for a Leading Logistics Provider',
    clientType: 'Leading European Logistics Provider',
    industry: 'Logistics & Supply Chain',
    challengeSnapshot: 'Manual, error-prone data flows across disparate systems led to inefficiencies and delayed shipments.',
    solutionSnapshot: 'Designed and implemented a bespoke integration platform and automated workflow engine.',
    impactSnapshot: 'Achieved a 40% reduction in manual data entry and accelerated order processing by 35%, significantly improving operational speed and accuracy.',
    serviceCategory: 'custom-software',
    featured: true,
    image: '/images/illustrations/undraw_data-analysis_b7cp.svg',
    fullContent: {
      clientProfile: 'A large, multinational logistics provider specializing in complex supply chain management across Europe, handling thousands of shipments daily through multiple distribution centers.',
      problemDescription: 'Their legacy systems involved extensive manual data transfer between disparate applications, leading to bottlenecks, human errors, and significant delays in processing orders. This lack of integration created a fragmented view of operations and hindered their ability to scale efficiently. Staff spent 60% of their time on manual data entry rather than strategic work.',
      approach: 'Our small, dedicated team conducted an intensive 2-week discovery phase, working closely with their operational leadership to map out critical workflows. We then designed a bespoke integration platform and developed an automated workflow engine. Our agile development cycles ensured rapid prototyping and continuous feedback, eliminating "ghost work" and keeping the client fully engaged throughout the 4-month implementation.',
      keyTechnologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'AWS Lambda', 'Apache Kafka'],
      specificActions: [
        'Built custom connectors for their ERP and WMS systems',
        'Developed a centralized data hub with real-time synchronization',
        'Implemented intelligent routing rules to automate shipment processing',
        'Created comprehensive monitoring and alerting systems',
        'Established automated data validation and error handling'
      ],
      quantifiableResults: [
        {
          metric: '40% reduction in manual data entry',
          description: 'Freeing up staff for more strategic tasks and reducing operational overhead'
        },
        {
          metric: '35% faster order processing',
          description: 'Leading to improved customer satisfaction and faster fulfillment'
        },
        {
          metric: '95% improvement in data accuracy',
          description: 'Eliminating human error and reducing costly reworks'
        },
        {
          metric: '25% increase in order volume capacity',
          description: 'Handling growth without additional headcount'
        }
      ],
      qualitativeBenefits: [
        'Significantly increased employee job satisfaction due to reduced tedious work',
        'Enhanced real-time operational visibility enabling better management decisions',
        'Improved customer service through faster response times',
        'Positioned for accelerated digital transformation across other departments'
      ],
      clientEndorsement: {
        quote: 'The Unit05 team quickly understood our complex needs and delivered an exceptional solution with remarkable efficiency. Their transparency and direct communication were a breath of fresh air compared to our previous experiences with large consultancies.',
        author: 'Sarah M.',
        position: 'Head of Operations',
        company: 'European Logistics Provider'
      }
    },
    metrics: {
      primaryMetric: '40% reduction in manual work',
      secondaryMetrics: ['35% faster processing', '95% accuracy improvement', '25% capacity increase']
    },
    duration: '4 months',
    teamSize: '3 senior developers'
  },
  {
    id: '2',
    slug: 'fintech-devsecops-platform',
    title: 'Building Secure Software Delivery',
    subtitle: 'DevSecOps Platform for a Mid-Sized FinTech Company',
    clientType: 'Mid-Sized FinTech Company',
    industry: 'Financial Technology',
    challengeSnapshot: 'Slow deployment cycles and growing security concerns hindered agile product development.',
    solutionSnapshot: 'Designed and implemented a comprehensive DevSecOps platform on Kubernetes with integrated security gates.',
    impactSnapshot: 'Reduced deployment time from days to hours and significantly improved security posture, enabling faster, more secure releases.',
    serviceCategory: 'devsecops',
    featured: true,
    image: '/images/illustrations/undraw_app-dark-mode_6ji2.svg',
    fullContent: {
      clientProfile: 'A rapidly growing FinTech company providing digital payment solutions across European markets, serving over 100,000 active users with strict regulatory compliance requirements.',
      problemDescription: 'Their development team faced significant challenges with manual deployment processes taking 2-3 days, inconsistent environments causing frequent bugs, and growing security concerns as they scaled. Regulatory compliance requirements added complexity to their release process, often causing additional delays.',
      approach: 'Our DevSecOps specialists worked directly with their development and security teams to design a comprehensive platform solution. We implemented an agile transformation approach, delivering working increments every 2 weeks while maintaining their existing operations. Our transparent methodology ensured all stakeholders understood progress and could provide immediate feedback.',
      keyTechnologies: ['Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'SonarQube', 'Vault', 'Prometheus', 'Grafana'],
      specificActions: [
        'Implemented containerized microservices architecture on Kubernetes',
        'Built automated CI/CD pipelines with integrated security scanning',
        'Established infrastructure as code with Terraform',
        'Integrated comprehensive monitoring and alerting systems',
        'Implemented automated compliance checking and reporting'
      ],
      quantifiableResults: [
        {
          metric: '90% reduction in deployment time',
          description: 'From 2-3 days to 2-3 hours for full production releases'
        },
        {
          metric: '99.9% system uptime achieved',
          description: 'Dramatic improvement in platform reliability and stability'
        },
        {
          metric: '75% faster security vulnerability resolution',
          description: 'Automated scanning and immediate feedback in development pipeline'
        },
        {
          metric: '50% reduction in environment-related bugs',
          description: 'Consistent containerized environments across all stages'
        }
      ],
      qualitativeBenefits: [
        'Development team morale significantly improved due to reduced manual work',
        'Enhanced confidence in releases with automated testing and security checks',
        'Improved collaboration between development, security, and operations teams',
        'Regulatory compliance became automated rather than manual overhead'
      ],
      clientEndorsement: {
        quote: 'Working with Unit05 transformed our entire development process. Their expertise in DevSecOps and direct, hands-on approach helped us achieve what we thought would take years in just a few months.',
        author: 'Marcus W.',
        position: 'CTO',
        company: 'FinTech Startup'
      }
    },
    metrics: {
      primaryMetric: '90% faster deployments',
      secondaryMetrics: ['99.9% uptime', '75% faster security fixes', '50% fewer bugs']
    },
    duration: '3 months',
    teamSize: '2 DevSecOps engineers'
  },
  {
    id: '3',
    slug: 'enterprise-cloud-migration',
    title: 'Seamless Cloud Migration & Cost Optimization',
    subtitle: 'Enterprise SaaS Provider Migration to AWS',
    clientType: 'Enterprise SaaS Provider',
    industry: 'Software as a Service',
    challengeSnapshot: 'High on-premise infrastructure costs and limited scalability constrained growth potential.',
    solutionSnapshot: 'Executed a phased, zero-downtime migration of core applications to AWS, followed by cloud cost optimization.',
    impactSnapshot: 'Reduced infrastructure operational costs by 45% and gained unprecedented scalability to support 300% user growth.',
    serviceCategory: 'cloud-migration',
    featured: true,
    image: '/images/illustrations/undraw_cloud-sync_h1ig.svg',
    fullContent: {
      clientProfile: 'An established enterprise SaaS provider serving B2B clients across multiple industries, with a growing user base requiring enhanced scalability and performance.',
      problemDescription: 'Their on-premise infrastructure was becoming increasingly expensive to maintain and lacked the flexibility to handle rapid user growth. Scaling required significant upfront hardware investments with long lead times, and disaster recovery was complex and costly.',
      approach: 'Our cloud architects developed a comprehensive migration strategy focusing on minimal business disruption. We implemented a phased approach, migrating non-critical systems first to validate our approach, then moving core applications during planned maintenance windows. Our transparent project management kept all stakeholders informed throughout the 6-month migration.',
      keyTechnologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'RDS', 'CloudFormation', 'CloudWatch'],
      specificActions: [
        'Conducted comprehensive cloud readiness assessment',
        'Designed resilient multi-AZ architecture on AWS',
        'Implemented infrastructure as code for consistent deployments',
        'Migrated databases with zero data loss',
        'Established automated backup and disaster recovery procedures'
      ],
      quantifiableResults: [
        {
          metric: '45% reduction in infrastructure costs',
          description: 'Significant savings through optimized resource utilization and pay-as-you-use model'
        },
        {
          metric: '300% user growth capacity',
          description: 'Platform now easily scales to handle rapid user base expansion'
        },
        {
          metric: '99.99% uptime achieved',
          description: 'Improved reliability through AWS managed services and redundancy'
        },
        {
          metric: '80% faster disaster recovery',
          description: 'Automated backup and recovery procedures reduce downtime risk'
        }
      ],
      qualitativeBenefits: [
        'Development teams gained access to modern cloud-native services',
        'Operations team freed from hardware maintenance responsibilities',
        'Enhanced security posture through AWS security services',
        'Improved ability to experiment and innovate with new features'
      ],
      clientEndorsement: {
        quote: 'The cloud migration was seamless and the cost savings were immediate. Unit05 delivered exactly what they promised, when they promised it, with complete transparency throughout the process.',
        author: 'Lisa C.',
        position: 'IT Director',
        company: 'Enterprise SaaS Provider'
      }
    },
    metrics: {
      primaryMetric: '45% cost reduction',
      secondaryMetrics: ['300% growth capacity', '99.99% uptime', '80% faster recovery']
    },
    duration: '6 months',
    teamSize: '2 cloud architects'
  }
];

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(study => study.featured);
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};

export const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
  return caseStudies.filter(study => study.serviceCategory === category);
};

export const getAllCaseStudySlugs = (): string[] => {
  return caseStudies.map(study => study.slug);
};