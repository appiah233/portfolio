import Image from 'next/image'
import { Bot, GitBranch, Headset, MessageSquare, Plug, Workflow } from 'lucide-react'

const logos: Record<string, string> = {
  'Microsoft 365': 'microsoft365',
  'Exchange Online': 'exchange',
  'Identity & Access Management': 'entra',
  'Power Automate': 'powerautomate',
  TypeScript: 'typescript', JavaScript: 'javascript', React: 'react',
  'Next.js': 'nextjs', 'Node.js': 'nodejs', PostgreSQL: 'postgresql',
  Prisma: 'prisma', Supabase: 'supabase', Vercel: 'vercel', Git: 'git',
  'GitHub collaboration': 'github', 'GitLab Auto DevOps': 'gitlab',
  Slack: 'slack', 'Microsoft Teams': 'teams', GitHub: 'github',
  'Git workflows': 'git',
}

const skillIcons = {
  'Technical Support': Headset,
  'AI agent development': Bot,
  'Conversational assistants': MessageSquare,
  'Agent workflow design': Workflow,
  'Tool and API integration': Plug,
  'CI/CD': GitBranch,
}

export function SkillIcon({ skill }: { skill: string }) {
  const logo = logos[skill]
  if (logo) return <Image className="skill-logo" src={`/brands/skills/${logo}.svg`} alt="" aria-hidden="true" width={26} height={26} unoptimized />
  const Icon = skillIcons[skill as keyof typeof skillIcons]
  return Icon ? <Icon className="skill-symbol" size={20} aria-hidden="true" /> : null
}
