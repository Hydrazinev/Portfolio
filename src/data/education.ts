export interface Degree {
  school: string;
  degree: string;
  period: string;
  location: string;
  courses: string[];
}

export const education: Degree[] = [
  {
    school: 'California State University, Long Beach',
    degree: 'Master of Science in Computer Science',
    period: 'Aug 2025 – May 2027',
    location: 'Long Beach, CA',
    courses: ['Artificial Intelligence', 'Machine Learning', 'Distributed Computing', 'Natural Language Processing'],
  },
  {
    school: 'Gujarat Technological University',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Aug 2020 – Jun 2024',
    location: 'Ahmedabad, India',
    courses: ['Object Oriented Programming', 'Data Structures', 'Relational Databases', 'Computer Networks', 'System Design'],
  },
];
