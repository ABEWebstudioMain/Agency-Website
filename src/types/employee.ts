export interface Employee {
  id: string;
  slug: string;
  name: string;
  role: string;
  photo: string;
  summary: string;
  email?: string;
  phone?: string;
  location?: string;
  skills: Skill[];
  experience: Experience[];
  services: Service[];
  socialLinks?: SocialLink[];
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience: number;
  description: string;
  tools: string[];
  projects: ProjectExample[];
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Design' | 'Management' | 'Other';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  location?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  tools: string[];
  projects: ProjectExample[];
  pricing?: {
    type: 'hourly' | 'project' | 'retainer';
    range: string;
  };
  deliverables: string[];
}

export interface ProjectExample {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  duration?: string;
  outcome?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon?: string;
}

export interface EmployeeFilters {
  skills: string[];
  services: string[];
  experience: string[];
}