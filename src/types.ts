export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}
