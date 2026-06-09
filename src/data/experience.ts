export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
}

export const experience: Job[] = [
  {
    company: 'Technolee',
    role: 'Software Engineer (Data & ML)',
    period: 'Jul 2024 – Jul 2025',
    location: 'Ahmedabad, India',
    summary: 'Shipped ML prediction APIs at <200ms, automated PostgreSQL + NLP ETL pipelines on AWS, and built demand forecasting models — enabling real-time dashboards for 20+ product lines.',
  },
  {
    company: 'Indian Space Research Organization (ISRO)',
    role: 'AI/ML Engineer Intern',
    period: 'Jan 2024 – Jul 2024',
    location: 'Ahmedabad, India',
    summary: 'Built satellite data pipelines processing 1+GB daily at 99.9% integrity and optimized LSTM forecasting models in PyTorch/CUDA, reducing prediction error by 25% and reporting cycles by 40%.',
  },
  {
    company: 'Cre-Art Solutions',
    role: 'Software Engineer Intern',
    period: 'Jun 2023 – Aug 2023',
    location: 'Ahmedabad, India',
    summary: 'Redesigned Django REST APIs processing 50K+ daily financial transactions and built Power BI dashboards with SQL integration, cutting monthly reporting time by 30%.',
  },
];
