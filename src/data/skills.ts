export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'Golang', 'Rust', 'C#'],
  },
  {
    label: 'AI / ML',
    skills: ['PyTorch', 'TensorFlow', 'LangChain', 'Scikit-learn', 'NumPy', 'Pandas', 'XGBoost', 'NLP', 'Computer Vision', 'R', 'Tableau', 'SAS'],
  },
  {
    label: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'CI/CD', 'Git', 'Linux', 'Modal'],
  },
  {
    label: 'Web & Other',
    skills: ['React', 'Next.js', 'Angular', 'Vue', 'Bootstrap', 'Tailwind CSS', 'HTML5 / CSS', 'Web3'],
  },
];
