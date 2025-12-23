'use client'

import { useEffect, useState, useRef } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Terminal as TerminalIcon,
  GitBranch,
  GitCommit,
  Star,
  Code2,
  Briefcase,
  User,
  FolderGit2,
  Send,
  ChevronRight,
  FileCode,
  Database,
  Cpu,
  Globe,
  Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ============================================
// TYPE DEFINITIONS
// ============================================

interface Project {
  name: string
  description: string
  tech: string[]
  language: string
  languageColor: string
  links: {
    code?: string
    demo?: string
  }
  featured?: boolean
}

interface Experience {
  company: string
  role: string
  period: string
  projects: {
    name: string
    role: string
    tasks: string[]
  }[]
}

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: { name: string; level: number }[]
}

// ============================================
// DATA
// ============================================

const personalInfo = {
  name: "Suthep Jantawee",
  role: "Full Stack Developer",
  location: "Thailand",
  experience: "3+ years",
  email: "bananammm0001@gmail.com",
  phone: "0901834036",
  available: true,
  github: "https://github.com/bananafaraday",
  linkedin: "https://linkedin.com/in/suthep-jantawee",
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 90 },
      { name: "Dart", level: 70 },
      { name: "SQL", level: 75 },
      { name: "Python", level: 65 },
    ]
  },
  {
    name: "Frameworks",
    icon: <Cpu className="w-4 h-4" />,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "NestJS", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "Electron", level: 65 },
      { name: "Three.js", level: 60 },
    ]
  },
  {
    name: "Databases",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Supabase", level: 85 },
      { name: "Prisma", level: 80 },
      { name: "Kibana", level: 65 },
    ]
  },
  {
    name: "DevOps",
    icon: <Globe className="w-4 h-4" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Jenkins", level: 75 },
      { name: "Vercel", level: 90 },
    ]
  },
  {
    name: "AI Tools",
    icon: <Sparkles className="w-4 h-4" />,
    skills: [
      { name: "Claude Code", level: 90 },
      { name: "Cursor", level: 85 },
      { name: "Gemini API", level: 80 },
      { name: "ChatGPT", level: 85 },
      { name: "v0.dev", level: 75 },
    ]
  },
]

const experiences: Experience[] = [
  {
    company: "iApp Technology",
    role: "Full Stack Developer",
    period: "Feb 2023 - Present",
    projects: [
      {
        name: "NBTC - Drone Data Transmission",
        role: "Backend Developer",
        tasks: [
          "Developed API for transmitting drone data to mobile and web platforms",
          "Presented API functionality to clients"
        ]
      },
      {
        name: "ACT & ACT Phase 2",
        role: "Full Stack Developer",
        tasks: [
          "Updated API for data fetching from web and Kibana database",
          "Wrote Python logic for project risk assessment",
          "Created Excel export functionality",
          "Redesigned data fetching flow for EGP, DBD, and GOV",
          "Set up Jenkins processes for automation"
        ]
      },
      {
        name: "iApp Speech Flow for Web",
        role: "Full Stack Developer",
        tasks: [
          "Converted mobile codebase to Next.js web application",
          "Built Electron app for macOS and Windows"
        ]
      },
      {
        name: "digitaltouchpoint-wellness-chatbot",
        role: "Full Stack Developer",
        tasks: [
          "Built API for CRUD operations and package pricing",
          "Implemented JWT authentication flow",
          "Created dashboard bot view"
        ]
      }
    ]
  },
  {
    company: "Vertobase Co., Ltd.",
    role: "Front-end Developer",
    period: "Mar 2022 - Dec 2022",
    projects: [
      {
        name: "Zignway App",
        role: "Front-end Developer",
        tasks: [
          "Built front-end using React and Next.js",
          "Developed Flutter code for mobile PIN login"
        ]
      }
    ]
  }
]

const projects: Project[] = [
  {
    name: "Job Matching AI",
    description: "AI-powered job matching using RAG and vector search technology for analyzing resumes and matching with job opportunities.",
    tech: ["Next.js", "TypeScript", "Google Gemini", "RAG", "IndexedDB"],
    language: "TypeScript",
    languageColor: "#3178c6",
    links: { demo: "#" },
    featured: true
  },
  {
    name: "Crypto News Analysis",
    description: "AI-powered crypto news aggregator with sentiment analysis and trending score using Google Gemini API.",
    tech: ["Next.js", "Supabase", "Google Gemini API", "RSS Parser"],
    language: "TypeScript",
    languageColor: "#3178c6",
    links: { code: "#", demo: "#" },
    featured: true
  },
  {
    name: "WebRecord Sound App",
    description: "Browser-based audio recording with IndexedDB storage, Firebase auth, and privacy-first approach.",
    tech: ["React", "TypeScript", "IndexedDB", "Firebase"],
    language: "TypeScript",
    languageColor: "#3178c6",
    links: { code: "#", demo: "#" },
    featured: true
  },
  {
    name: "WEB Planning Generator",
    description: "AI-powered website planning tool that generates project discovery documents and flowcharts.",
    tech: ["Next.js 15", "Google Gemini API", "Mermaid.js", "shadcn/ui"],
    language: "TypeScript",
    languageColor: "#3178c6",
    links: { code: "#", demo: "#" }
  },
  {
    name: "Crypto Sentiment Analysis",
    description: "Analyze cryptocurrency sentiment using AI Gemini API for better investment decisions.",
    tech: ["Next.js", "NestJS", "Three.js", "Supabase"],
    language: "TypeScript",
    languageColor: "#3178c6",
    links: { demo: "#" }
  },
  {
    name: "CryptoTracker",
    description: "Modern cryptocurrency tracking with categorized views, search, and 7-day price charts.",
    tech: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
    language: "TypeScript",
    languageColor: "#3178c6",
    links: { code: "#", demo: "#" }
  },
  {
    name: "HTML Fetcher",
    description: "Web application for fetching and processing HTML content from URLs with syntax highlighting.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prism.js"],
    language: "TypeScript",
    languageColor: "#3178c6",
    links: { code: "#", demo: "#" }
  },
  {
    name: "PyThaiTTS App",
    description: "Full-stack Thai text-to-speech with FastAPI backend and PyThaiTTS integration.",
    tech: ["Next.js", "FastAPI", "Python", "PyThaiTTS"],
    language: "Python",
    languageColor: "#3776ab",
    links: { code: "#" }
  }
]

const navItems = [
  { id: "about", label: "about.json", icon: <User className="w-4 h-4" /> },
  { id: "skills", label: "skills.ts", icon: <Code2 className="w-4 h-4" /> },
  { id: "experience", label: "experience.log", icon: <Briefcase className="w-4 h-4" /> },
  { id: "projects", label: "projects/", icon: <FolderGit2 className="w-4 h-4" /> },
  { id: "contact", label: "contact.sh", icon: <Send className="w-4 h-4" /> },
]

// ============================================
// COMPONENTS
// ============================================

function TerminalWindow({ children, title = "terminal" }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="terminal-window shadow-2xl">
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="ml-4 font-mono text-sm text-comment-gray">{title}</span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  )
}

function TypeWriter({ text, speed = 50, className = "", onComplete }: {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setIsComplete(true)
        onComplete?.()
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed, onComplete])

  return (
    <span className={className}>
      {displayText}
      <span className={cn("cursor", isComplete && "blink")} />
    </span>
  )
}

function CodeLine({ lineNum, children, indent = 0 }: {
  lineNum: number;
  children: React.ReactNode;
  indent?: number
}) {
  return (
    <div className="flex font-mono text-sm leading-relaxed">
      <span className="w-8 text-right pr-4 text-comment-gray/50 select-none">{lineNum}</span>
      <span style={{ paddingLeft: `${indent * 1.5}rem` }}>{children}</span>
    </div>
  )
}

function ProgressBar({
  label,
  progress,
  delay = 0
}: {
  label: string;
  progress: number;
  delay?: number
}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-1 font-mono text-sm">
        <span className="text-text-secondary group-hover:text-code-green transition-colors">{label}</span>
        <span className="text-comment-gray">{progress}%</span>
      </div>
      <div className="h-2 bg-terminal-black rounded-full overflow-hidden border border-editor-border">
        <div
          className="h-full bg-gradient-to-r from-code-green to-syntax-blue rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${progress}%` : '0%',
            boxShadow: visible ? '0 0 10px rgba(0, 255, 159, 0.5)' : 'none'
          }}
        />
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={cn(
      "repo-card group cursor-pointer",
      project.featured && "ring-1 ring-code-green/30"
    )}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-5 h-5 text-syntax-blue" />
          <h3 className="font-mono text-text-primary group-hover:text-code-green transition-colors">
            {project.name}
          </h3>
          {project.featured && (
            <span className="px-2 py-0.5 text-xs font-mono bg-code-green/10 text-code-green rounded">
              featured
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {project.links.code && (
            <a href={project.links.code} className="text-comment-gray hover:text-code-green transition-colors">
              <Code2 className="w-4 h-4" />
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} className="text-comment-gray hover:text-code-green transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <p className="text-comment-gray text-sm mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-2 py-1 text-xs font-mono bg-terminal-black text-comment-gray rounded border border-editor-border">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-xs text-comment-gray">
        <div className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: project.languageColor }}
          />
          <span>{project.language}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3" />
          <span>--</span>
        </div>
      </div>
    </div>
  )
}

function GitTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="relative">
      {/* Git branch line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-editor-border" />

      {experiences.map((exp, expIndex) => (
        <div key={expIndex} className="relative mb-8 last:mb-0">
          {/* Company header - main branch */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative z-10 w-10 h-10 rounded-full bg-code-green/20 border-2 border-code-green flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-code-green" />
            </div>
            <div className="flex-1 pt-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-mono text-lg text-text-primary">{exp.company}</h3>
                <span className="px-2 py-0.5 text-xs font-mono bg-syntax-purple/20 text-syntax-purple rounded">
                  {exp.role}
                </span>
              </div>
              <p className="font-mono text-sm text-comment-gray mt-1">{exp.period}</p>
            </div>
          </div>

          {/* Projects as commits */}
          <div className="ml-5 pl-9 border-l-2 border-editor-border space-y-4">
            {exp.projects.map((project, projIndex) => (
              <div key={projIndex} className="relative group">
                {/* Commit dot */}
                <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-syntax-blue group-hover:bg-code-green transition-colors" />

                <div className="p-4 bg-editor-dark/50 rounded-lg border border-editor-border hover:border-syntax-blue/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <GitCommit className="w-4 h-4 text-syntax-orange" />
                    <span className="font-mono text-sm text-syntax-blue">{project.name}</span>
                    <span className="text-xs text-comment-gray">({project.role})</span>
                  </div>
                  <ul className="space-y-1">
                    {project.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2 text-sm text-comment-gray">
                        <ChevronRight className="w-4 h-4 text-code-green shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setTimeout(() => {
      setStatus("sent")
      setTimeout(() => setStatus("idle"), 3000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="font-mono text-sm space-y-3">
        <CodeLine lineNum={1}>
          <span className="syntax-keyword">const</span>
          <span className="text-text-primary ml-2">message</span>
          <span className="text-text-primary ml-2">=</span>
          <span className="syntax-punctuation ml-2">{"{"}</span>
        </CodeLine>

        <CodeLine lineNum={2} indent={1}>
          <span className="syntax-property">name:</span>
          <input
            type="text"
            value={formState.name}
            onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
            className="ml-2 bg-transparent border-b border-editor-border text-syntax-yellow focus:border-code-green outline-none px-2 py-1 w-48"
            placeholder='"Your Name"'
          />
          <span className="syntax-punctuation">,</span>
        </CodeLine>

        <CodeLine lineNum={3} indent={1}>
          <span className="syntax-property">email:</span>
          <input
            type="email"
            value={formState.email}
            onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
            className="ml-2 bg-transparent border-b border-editor-border text-syntax-yellow focus:border-code-green outline-none px-2 py-1 w-64"
            placeholder='"your@email.com"'
          />
          <span className="syntax-punctuation">,</span>
        </CodeLine>

        <CodeLine lineNum={4} indent={1}>
          <span className="syntax-property">message:</span>
          <span className="syntax-punctuation ml-2">`</span>
        </CodeLine>

        <CodeLine lineNum={5} indent={2}>
          <textarea
            value={formState.message}
            onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
            rows={3}
            className="w-full bg-terminal-black/50 border border-editor-border rounded text-syntax-yellow focus:border-code-green outline-none p-3 resize-none"
            placeholder="Your message here..."
          />
        </CodeLine>

        <CodeLine lineNum={6} indent={1}>
          <span className="syntax-punctuation">`</span>
        </CodeLine>

        <CodeLine lineNum={7}>
          <span className="syntax-punctuation">{"}"}</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>

        <CodeLine lineNum={8}>&nbsp;</CodeLine>

        <CodeLine lineNum={9}>
          <span className="syntax-keyword">await</span>
          <span className="syntax-function ml-2">sendMessage</span>
          <span className="syntax-punctuation">(</span>
          <span className="text-text-primary">message</span>
          <span className="syntax-punctuation">)</span>
          <span className="syntax-punctuation">;</span>
          <span className="syntax-comment ml-4">// Click to send</span>
        </CodeLine>
      </div>

      <button
        type="submit"
        disabled={status !== "idle"}
        className={cn(
          "mt-6 w-full py-3 px-6 font-mono text-sm rounded border transition-all duration-300",
          status === "idle" && "bg-code-green/10 border-code-green text-code-green hover:bg-code-green hover:text-terminal-black",
          status === "sending" && "bg-syntax-blue/10 border-syntax-blue text-syntax-blue",
          status === "sent" && "bg-code-green/20 border-code-green text-code-green"
        )}
      >
        {status === "idle" && "$ git push origin message"}
        {status === "sending" && "Pushing to remote..."}
        {status === "sent" && "Message sent successfully!"}
      </button>
    </form>
  )
}

function StatusBar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="status-bar fixed bottom-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <GitBranch className="w-3 h-3" />
          main
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          online
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span>UTF-8</span>
        <span>LF</span>
        <span>TypeScript React</span>
        <span>{time.toLocaleTimeString('en-US', { hour12: false })}</span>
      </div>
    </footer>
  )
}

function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-black/95 backdrop-blur border-b border-editor-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-5 h-5 text-code-green" />
            <span className="font-mono text-sm text-text-primary">suthep.dev</span>
          </div>

          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "editor-tab flex items-center gap-2",
                  activeSection === item.id && "active"
                )}
              >
                {item.icon}
                <span className="hidden lg:inline">{item.label}</span>
                <span className="lg:hidden">{`0${index + 1}`}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-comment-gray hover:text-code-green transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-comment-gray hover:text-syntax-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ============================================
// MAIN PAGE
// ============================================

export default function Portfolio() {
  const [heroComplete, setHeroComplete] = useState(false)

  return (
    <div className="min-h-screen bg-terminal-black noise-overlay">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-12 grid-pattern">
        <div className="max-w-4xl w-full">
          <TerminalWindow title="portfolio.dev - zsh">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-comment-gray">
                <span>Last login: {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
              </div>

              <div>
                <span className="text-code-green">$</span>
                <span className="ml-2 text-text-primary">cat about.json</span>
              </div>

              <div className="pl-4 border-l-2 border-editor-border">
                <pre className="text-sm">
                  <span className="syntax-punctuation">{"{"}</span>{"\n"}
                  <span className="syntax-property ml-4">&quot;name&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-string">&quot;{personalInfo.name}&quot;</span>
                  <span className="syntax-punctuation">,</span>{"\n"}
                  <span className="syntax-property ml-4">&quot;role&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-string">&quot;{personalInfo.role}&quot;</span>
                  <span className="syntax-punctuation">,</span>{"\n"}
                  <span className="syntax-property ml-4">&quot;experience&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-string">&quot;{personalInfo.experience}&quot;</span>
                  <span className="syntax-punctuation">,</span>{"\n"}
                  <span className="syntax-property ml-4">&quot;location&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-string">&quot;{personalInfo.location}&quot;</span>
                  <span className="syntax-punctuation">,</span>{"\n"}
                  <span className="syntax-property ml-4">&quot;available&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-value">{personalInfo.available ? "true" : "false"}</span>{"\n"}
                  <span className="syntax-punctuation">{"}"}</span>
                </pre>
              </div>

              <div className="pt-4">
                <span className="text-code-green">$</span>
                <TypeWriter
                  text=" I build intuitive interfaces and leverage AI tools to enhance developer workflows"
                  speed={30}
                  className="ml-2 text-text-primary"
                  onComplete={() => setHeroComplete(true)}
                />
              </div>

              {heroComplete && (
                <div className="pt-4 animate-fade-in-up flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-code-green/10 border border-code-green text-code-green rounded font-mono text-sm hover:bg-code-green hover:text-terminal-black transition-all"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-syntax-blue/10 border border-syntax-blue text-syntax-blue rounded font-mono text-sm hover:bg-syntax-blue hover:text-terminal-black transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </a>
                </div>
              )}
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="section-comment mb-8">about.json</div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 font-mono text-sm text-comment-gray">
                  <FileCode className="w-4 h-4 inline mr-2" />
                  developer.json
                </span>
              </div>
              <div className="p-6 font-mono text-sm space-y-1">
                <CodeLine lineNum={1}>
                  <span className="syntax-punctuation">{"{"}</span>
                </CodeLine>
                <CodeLine lineNum={2} indent={1}>
                  <span className="syntax-property">&quot;name&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-string">&quot;{personalInfo.name}&quot;</span>
                  <span className="syntax-punctuation">,</span>
                </CodeLine>
                <CodeLine lineNum={3} indent={1}>
                  <span className="syntax-property">&quot;role&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-string">&quot;{personalInfo.role}&quot;</span>
                  <span className="syntax-punctuation">,</span>
                </CodeLine>
                <CodeLine lineNum={4} indent={1}>
                  <span className="syntax-property">&quot;experience&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-string">&quot;{personalInfo.experience}&quot;</span>
                  <span className="syntax-punctuation">,</span>
                </CodeLine>
                <CodeLine lineNum={5} indent={1}>
                  <span className="syntax-property">&quot;focus&quot;</span>
                  <span className="syntax-punctuation">: [</span>
                </CodeLine>
                <CodeLine lineNum={6} indent={2}>
                  <span className="syntax-string">&quot;Frontend Development&quot;</span>
                  <span className="syntax-punctuation">,</span>
                </CodeLine>
                <CodeLine lineNum={7} indent={2}>
                  <span className="syntax-string">&quot;Backend APIs&quot;</span>
                  <span className="syntax-punctuation">,</span>
                </CodeLine>
                <CodeLine lineNum={8} indent={2}>
                  <span className="syntax-string">&quot;AI Integration&quot;</span>
                </CodeLine>
                <CodeLine lineNum={9} indent={1}>
                  <span className="syntax-punctuation">],</span>
                </CodeLine>
                <CodeLine lineNum={10} indent={1}>
                  <span className="syntax-property">&quot;available&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-value">true</span>
                </CodeLine>
                <CodeLine lineNum={11}>
                  <span className="syntax-punctuation">{"}"}</span>
                </CodeLine>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                I&apos;m a passionate Full Stack Developer with 3+ years of experience building
                web applications. I specialize in creating intuitive interfaces and robust
                backend systems using modern technologies.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Currently exploring the intersection of AI and web development, leveraging
                tools like Google Gemini API, Claude Code, and other AI assistants to
                enhance developer productivity and create innovative solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-editor-dark rounded-lg border border-editor-border">
                  <div className="text-3xl font-bold text-code-green">3+</div>
                  <div className="text-sm text-comment-gray">Years Experience</div>
                </div>
                <div className="p-4 bg-editor-dark rounded-lg border border-editor-border">
                  <div className="text-3xl font-bold text-syntax-blue">10+</div>
                  <div className="text-sm text-comment-gray">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-editor-dark/30">
        <div className="max-w-6xl mx-auto">
          <div className="section-comment mb-8">npm install skills</div>

          <TerminalWindow title="npm install">
            <div className="space-y-2 mb-6">
              <div className="text-code-green">$ npm install @suthep/skills</div>
              <div className="text-comment-gray">Installing dependencies...</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="space-y-4">
                  <div className="flex items-center gap-2 text-syntax-blue font-mono text-sm">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <ProgressBar
                        key={skillIndex}
                        label={skill.name}
                        progress={skill.level}
                        delay={catIndex * 200 + skillIndex * 100}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-editor-border">
              <div className="text-code-green">
                added {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} packages
              </div>
              <div className="text-comment-gray text-sm">
                found 0 vulnerabilities
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="section-comment mb-8">git log --oneline experience</div>
          <GitTimeline experiences={experiences} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-editor-dark/30">
        <div className="max-w-6xl mx-auto">
          <div className="section-comment mb-8">ls -la projects/</div>

          <div className="mb-8">
            <TerminalWindow title="terminal">
              <div className="text-code-green">$ ls -la projects/</div>
              <div className="text-comment-gray mt-2">
                total {projects.length} | {projects.filter(p => p.featured).length} featured
              </div>
            </TerminalWindow>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="section-comment mb-8">POST /api/contact</div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 font-mono text-sm text-comment-gray">contact.ts</span>
              </div>
              <div className="p-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-4 font-mono text-sm text-comment-gray">links.json</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-text-secondary hover:text-code-green transition-colors group"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="group-hover:underline">{personalInfo.email}</span>
                  </a>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-3 text-text-secondary hover:text-code-green transition-colors group"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="group-hover:underline">{personalInfo.phone}</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-secondary hover:text-code-green transition-colors group"
                  >
                    <Github className="w-5 h-5" />
                    <span className="group-hover:underline">github.com/bananafaraday</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-secondary hover:text-syntax-blue transition-colors group"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="group-hover:underline">linkedin.com/in/suthep-jantawee</span>
                  </a>
                </div>
              </div>

              <div className="p-4 bg-editor-dark rounded-lg border border-code-green/30">
                <div className="flex items-center gap-2 text-code-green font-mono text-sm mb-2">
                  <span className="w-2 h-2 rounded-full bg-code-green animate-pulse" />
                  Available for opportunities
                </div>
                <p className="text-comment-gray text-sm">
                  I&apos;m currently open to new opportunities as a Front-End, Back-End, or Full Stack Developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacing for status bar */}
      <div className="h-8" />

      <StatusBar />
    </div>
  )
}
