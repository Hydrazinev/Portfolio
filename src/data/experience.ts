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
    summary: 'Engineered an LSTM-based RUL prediction model on 100K+ vibration samples (22% lower error, 15% less downtime) and shipped a real-time gaze estimation pipeline on NVIDIA Jetson Orin Nano at 22 FPS for 10+ billboard locations, cutting signal preprocessing time by 68%.',
  },
  {
    company: 'Indian Space Research Organization (ISRO)',
    role: 'AI/ML Engineer Intern',
    period: 'Jan 2024 – Jul 2024',
    location: 'Ahmedabad, India',
    summary: 'Built an enterprise satellite data pipeline processing 1+GB daily at 99.9% data integrity for solar insolation forecasting, and optimized LSTM models in PyTorch/CUDA and MATLAB, cutting prediction error by 25% and reporting cycles by 40%.',
  },
  {
    company: 'Cre-Art Solutions',
    role: 'Software Engineer Intern',
    period: 'Jun 2023 – Aug 2023',
    location: 'Ahmedabad, India',
    summary: 'Redesigned Django REST APIs processing 50K+ daily financial transactions (20% faster), built an automated validation framework that cut accounting discrepancies by 18%, and shipped Power BI dashboards that cut monthly reporting time by 30%.',
  },
];
