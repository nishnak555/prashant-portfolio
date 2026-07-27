export interface Project {
  slug: string
  title: string
  location: string
  year: number
  category: 'residential' | 'commercial' | 'interior' | 'urban'
  description: string
  fullDescription: string
  images: string[]
  floorPlans: string[]
  renders: string[]
  challenges: string[]
  solutions: string[]
  area: string
  status: 'completed' | 'in-progress'
}

export interface Experience {
  title: string
  company: string
  year: string
  description: string
}

export interface Education {
  degree: string
  institution: string
  year: string
}

export interface Skill {
  name: string
  level: number
}

export interface Testimonial {
  name: string
  role: string
  project: string
  quote: string
}

export interface ResumeData {
  personal: {
    name: string
    title: string
    email: string
    phone: string
    location?: string
  }
  education: Education[]
  experience: Experience[]
  skills: Skill[]
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}
