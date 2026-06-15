export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  url: string;
  description: string;
  longDescription: string;
  techStack: string[];
  keyFeatures: string[];
  colorTheme: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
    shadow: string;
  };
  metrics: {
    label: string;
    value: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  projectInterest: string;
  budget: string;
  message: string;
  submittedAt: string;
}
