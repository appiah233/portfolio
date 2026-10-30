type Project = {
  name: string
  description: string
  link?: string
  github?: string
  live?: string
  role?: string
  id: string
  featured?: boolean
  status?: 'live' | 'in-progress'
  tech: string[]
}

type Certification = {
  issuer: string
  name: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

type Experience = {
  period: string
  role: string
  focus: string
  detail: string
  id: string
}

type SkillGroup = {
  name: string
  skills: string[]
}

export const PROJECTS: Project[] = [
  {
    name: 'Picksy',
    description:
      'An evidence-led business software discovery platform. Its landing experience and catalogue architecture are in place while editorial research and publication review continue.',
    id: 'picksy',
    featured: true,
    status: 'in-progress',
    role: 'Product & engineering',
    github: 'https://github.com/appiah233/Picksy',
    live: 'https://picksy-umnx.vercel.app',
    tech: ['Next.js', 'TypeScript', 'Sanity', 'Vercel'],
  },
  {
    name: 'Fynnest Lady',
    description:
      'A skincare storefront built for Ghanaian commerce, with GHS pricing, product discovery, customer authentication and an order data model.',
    id: 'fynnestlady',
    featured: true,
    status: 'in-progress',
    role: 'Full-stack development',
    github: 'https://github.com/appiah233/fynnestlady',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Clerk'],
  },
  {
    name: 'JB Heights',
    description:
      'A single-property hospitality platform for rooms, availability, reservations and payments.',
    id: 'jb-heights',
    featured: true,
    status: 'in-progress',
    role: 'Full-stack development',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
  },
  {
    name: 'SC-100 Study Lab',
    description: 'A browser-based practice site built from 360 question screenshots, with answer feedback and locally saved progress.',
    id: 'sc100',
    featured: false,
    status: 'live',
    role: 'Design & development',
    github: 'https://github.com/appiah233/SC-100',
    live: 'https://appiah233.github.io/SC-100/',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
  },
  {
    name: 'Windows 10 VPS',
    description: 'A shell script that starts a Windows 10 virtual machine with QEMU and exposes Remote Desktop access through an ngrok tunnel.',
    id: 'windows-10-vps',
    featured: false,
    role: 'Infrastructure scripting',
    github: 'https://github.com/appiah233/Windows-10-VPS',
    tech: ['Shell', 'QEMU', 'ngrok', 'RDP'],
  },
  {
    name: 'Medical App',
    description: 'A staff medical claims application covering requests, approval routing, balances, approved hospitals, insurance plans, dependents and records.',
    id: 'medical-app',
    featured: false,
    role: 'Application development',
    tech: ['React', 'TypeScript', 'Azure SQL', 'Azure Storage'],
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    issuer: 'Microsoft',
    name: 'Identity and Access Management (IAM)',
    id: 'cert-microsoft-iam',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/eric-owusu-66b2b0256/',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/appiah233/',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    period: 'Present',
    role: 'Software Engineering & Full-Stack Development',
    focus: 'TypeScript \u2022 Next.js \u2022 React \u2022 Node.js \u2022 PostgreSQL \u2022 Supabase',
    detail:
      'Building modern web applications and automating workflows with AI-assisted engineering practices.',
    id: 'exp-software-engineering',
  },
  {
    period: 'Cloud & DevOps',
    role: 'Cloud Infrastructure & CI/CD',
    focus: 'Vercel \u2022 GitHub \u2022 Git \u2022 CI/CD \u2022 GitLab Auto DevOps',
    detail:
      'Working with teams through GitHub collaboration, Git workflows, and automated deployment pipelines.',
    id: 'exp-cloud-devops',
  },
  {
    period: 'Automation',
    role: 'Workflow Automation',
    focus: 'Power Automate \u2022 Microsoft 365 \u2022 Business Process Automation',
    detail:
      'Automating repetitive business processes and streamlining operations across Microsoft 365 environments.',
    id: 'exp-automation',
  },
  {
    period: 'Identity & Access Management',
    role: 'Identity & Access Management (IAM)',
    focus: 'Microsoft Entra \u2022 User Access \u2022 Identity Governance \u2022 Microsoft Certification',
    detail:
      'Managing user identities, access, and authentication in enterprise Microsoft cloud environments.',
    id: 'exp-iam',
  },
  {
    period: 'Microsoft 365 Administration',
    role: 'Microsoft 365 & Exchange Online',
    focus: 'Microsoft 365 \u2022 Exchange Online \u2022 Technical Support \u2022 User Management',
    detail:
      'Administering Microsoft 365 environments, troubleshooting Exchange Online, and supporting end users.',
    id: 'exp-m365',
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Microsoft & Enterprise',
    skills: [
      'Microsoft 365',
      'Exchange Online',
      'Identity & Access Management',
      'Power Automate',
      'Technical Support',
    ],
  },
  {
    name: 'Development',
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js'],
  },
  {
    name: 'Data',
    skills: ['PostgreSQL', 'Prisma', 'Supabase'],
  },
  {
    name: 'Cloud / DevOps',
    skills: ['Vercel', 'Git', 'GitHub collaboration', 'GitLab Auto DevOps', 'CI/CD'],
  },
  {
    name: 'Team collaboration',
    skills: ['Slack', 'Microsoft Teams', 'GitHub', 'Git workflows'],
  },
]

export const CONTACT_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/eric-owusu-66b2b0256/',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/appiah233/',
  },
]

export const SERVICES = [
  {
    name: 'Microsoft 365 & IT support',
    description: 'Practical support for the Microsoft tools your team depends on, from user administration to Exchange Online troubleshooting.',
    deliverables: ['Microsoft 365 administration', 'Email and account troubleshooting', 'User onboarding and technical support'],
  },
  {
    name: 'Identity & access management',
    description: 'Help managing who can access your systems, with a focus on Microsoft Entra, authentication, and identity governance.',
    deliverables: ['Identity and access reviews', 'User access administration', 'Authentication and governance support'],
  },
  {
    name: 'Workflow automation',
    description: 'Turn repetitive business tasks into clearer, more consistent workflows using Power Automate and Microsoft 365.',
    deliverables: ['Workflow discovery', 'Approval and notification flows', 'Process documentation and handover'],
  },
  {
    name: 'Web application development',
    description: 'Build practical web experiences for your business, from a professional profile to a storefront or internal application.',
    deliverables: ['React and Next.js development', 'Database and application integration', 'Deployment and ongoing improvements'],
  },
]

// Public contact details; a scheduling page can be added when available.
export const CONTACT = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'eric@esolutionsghana.com',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || '',
  linkedin: 'https://www.linkedin.com/in/eric-owusu-66b2b0256/',
}
