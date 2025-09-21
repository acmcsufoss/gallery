export interface TeamConfig {
  slug: string;
  name: string;
  displayName: string;
  description: string;
  logo: string;
  logoAlt: string;
  primaryColor: string;
  secondaryColor: string;
  headerClass?: string;
}

export const teams: Record<string, TeamConfig> = {
  'ai': {
    slug: 'ai',
    name: 'AI',
    displayName: 'AI',
    description: 'Welcome to AI! The artificial intelligence team is dedicated to providing accessible information about artificial intelligence and machine learning to all. AI focuses on fun projects geared towards beginners in the field.',
    logo: 'ai-logo.svg',
    logoAlt: 'AI Logo',
    primaryColor: '#21d19f',
    secondaryColor: '#22e3ac',
    headerClass: 'AI-header'
  },
  'oss': {
    slug: 'oss',
    name: 'OSS',
    displayName: 'Open Source Software',
    description: 'Take off into the world of collaborative Open Source Software',
    logo: 'oss-logo.svg',
    logoAlt: 'OSS Logo',
    primaryColor: '#0EAC90',
    secondaryColor: '#11D4B1'
  },
  'game-dev': {
    slug: 'game-dev',
    name: 'Game Dev',
    displayName: 'Game Dev',
    description: 'Level up your game development skills at the Game Dev hub',
    logo: 'gamedev-logo.svg',
    logoAlt: 'gamedev-Logo',
    primaryColor: '#d41153',
    secondaryColor: '#f71461'
  },
  'design': {
    slug: 'design',
    name: 'Design',
    displayName: 'Design',
    description: 'Welcome to Design! The design team is dedicated to emphasizing the importance of product design and product management in the tech industry. Design focuses on educating students about design principles, design tools, and the intricacies of conceptualization, development, and management of a product.',
    logo: 'design-logo.svg',
    logoAlt: 'Design Logo',
    primaryColor: '#fc3263',
    secondaryColor: '#75172f'
  },
  'dev': {
    slug: 'dev',
    name: 'Dev',
    displayName: 'Software Development',
    description: 'Explore the world of software development and engineering',
    logo: 'dev-logo.svg',
    logoAlt: 'Dev Logo',
    primaryColor: '#2341a1',
    secondaryColor: '#335ee8'
  },
  'algo': {
    slug: 'algo',
    name: 'Algo',
    displayName: 'Algorithms',
    description: 'Master algorithms and data structures with the Algorithms team',
    logo: 'algo-logo.svg',
    logoAlt: 'Algo Logo',
    primaryColor: '#AF3FFF',
    secondaryColor: '#AF3FE0'
  },
  'general': {
    slug: 'general',
    name: 'General',
    displayName: 'General',
    description: 'General activities and events from ACM',
    logo: 'acm-logo.svg',
    logoAlt: 'ACM Logo',
    primaryColor: '#1E6CFF',
    secondaryColor: '#082863'
  },
  'icpc': {
    slug: 'icpc',
    name: 'ICPC',
    displayName: 'ICPC',
    description: 'Competitive programming and International Collegiate Programming Contest preparation',
    logo: 'icpc-logo.svg',
    logoAlt: 'ICPC Logo',
    primaryColor: '#c2590c',
    secondaryColor: '#c76116'
  }
};

export const getTeamBySlug = (slug: string): TeamConfig | null => {
  return teams[slug] || null;
};

export const isValidTeamSlug = (slug: string): boolean => {
  return slug in teams;
};

export const getAllTeamSlugs = (): string[] => {
  return Object.keys(teams);
};