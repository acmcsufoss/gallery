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
    description: 'The artificial intelligence team is dedicated to providing accessible information about artificial intelligence and machine learning to all. AI focuses on fun projects geared towards beginners in the field.',
    logo: 'ai-logo.svg',
    logoAlt: 'AI Logo',
    primaryColor: '#21d19f',
    secondaryColor: '#22e3ac',
    headerClass: 'AI-header'
  },
  'oss': {
    slug: 'oss',
    name: 'Open Source',
    displayName: 'Open Source',
    description: 'Take off into the world of collaborative Open Source software development. The open source team is committed to fostering collaboration and innovation in the tech community. Open Source actively contributes to ACM open source projects, sharing their expertise and driving advancements in software development.',
    logo: 'oss-logo.svg',
    logoAlt: 'OSS Logo',
    primaryColor: '#0EAC90',
    secondaryColor: '#11D4B1'
  },
  'game-dev': {
    slug: 'game-dev',
    name: 'Game Dev',
    displayName: 'Game Dev',
    description: 'Level up your game development skills at the Game Dev hub. The game development team is dedicated to teaching the basics of programming in the gaming industry. Gamedev focuses on educating students about design principles, design tools, and the development process of a project.',
    logo: 'gamedev-logo.svg',
    logoAlt: 'gamedev-Logo',
    primaryColor: '#fc3263',
    secondaryColor: '#75172f'
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
    description: 'Explore the world of software development and engineering. The development team is dedicated to giving students the opportunity to explore tech via hands-on projects and activities. Dev focuses on introducing students to software development, and the various tech stacks used in the industry.',
    logo: 'dev-logo.svg',
    logoAlt: 'Dev Logo',
    primaryColor: '#2341a1',
    secondaryColor: '#335ee8'
  },
  'algo': {
    slug: 'algo',
    name: 'Algo',
    displayName: 'Algorithms',
    description: 'Master algorithms and data structures with the Algorithms team. The algorithm team is dedicated to building programming fundamentals within students. Algo focuses on mastering data structures and algorithms, enhancing problem solving abilities, and exploration of competitive programming.',
    logo: 'algo-logo.svg',
    logoAlt: 'Algo Logo',
    primaryColor: '#AF3FFF',
    secondaryColor: '#AF3FE0'
  }, 
  'nb': {
    slug: 'node-buds',
    name: 'Node Buds',
    displayName: 'Node Buds',
    description: 'Connect & grow with Node Buds! Our big-little program pairs you with an experienced club officer for social events, workshops, and guidance as you navigate the tech world. Build friendships, skills, and have a blast!',
    logo: 'nodebuds-logo.svg',
    logoAlt: 'Node Buds Logo',
    primaryColor: '#fc3263',
    secondaryColor: '#75172f'
  },
  'general': {
    slug: 'general',
    name: 'General',
    displayName: 'General',
    description: 'The ACM general team is a dynamic group of individuals driving the success of our organization. ACM General manages operations, organizes events, and ensure the smooth functioning of ACM. They are the backbone of our community, fostering collaboration and innovation among members.',
    logo: 'acm-logo.svg',
    logoAlt: 'ACM Logo',
    primaryColor: '#1E6CFF',
    secondaryColor: '#082863'
  },
  'icpc': {
    slug: 'icpc',
    name: 'ICPC',
    displayName: 'ICPC',
    description: 'Competitive programming and International Collegiate Programming Contest preparation. The Intercollegiate Competitive Programming Competition is a contest to challenge students on their algorithms and problem solving skills. The ICPC Team is dedicated to preparing students for the competition by hosting weekly practice sessions and mock contests.',
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