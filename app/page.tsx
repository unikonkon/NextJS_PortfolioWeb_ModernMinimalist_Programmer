'use client'

import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Terminal as TerminalIcon,
  GitBranch,
  GitCommit,
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
  Sparkles,
  Download,
  X,
  ZoomIn
} from 'lucide-react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { personalProjects, workProjects, type PersonalProject, type WorkProject } from './DATAprojectSection'
import Stack from '@/components/Stack'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ============================================
// GSAP ANIMATION HOOKS
// ============================================

function useGSAP(callback: (ctx: gsap.Context) => void, deps: React.DependencyList = []) {
  const ctxRef = useRef<gsap.Context | null>(null)

  useLayoutEffect(() => {
    ctxRef.current = gsap.context(() => {
      callback(ctxRef.current!)
    })

    return () => {
      ctxRef.current?.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ctxRef
}

// ============================================
// TYPE DEFINITIONS
// ============================================

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
  github: "https://github.com/unikonkon",
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
      { name: "SQL", level: 75 },
      { name: "Dart", level: 65 },
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
      { name: "Supabase", level: 80 },
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
    name: "Testing & API Tools",
    icon: <span role="img" aria-label="Test Tubes">🧪</span>,
    skills: [
      { name: "Postman", level: 85 },
      { name: "Jest", level: 80 },
      { name: "SonarQube", level: 70 },
    ]
  },
  {
    name: "Design & Tools",
    icon: <span role="img" aria-label="Palette">🎨</span>,
    skills: [
      { name: "Figma", level: 85 },
      { name: "Draw.io (Diagrams.net)", level: 85 },
      { name: "Discord", level: 85 },
      { name: "Slack", level: 80 },
      { name: "Lark", level: 80 },
      { name: "Monday", level: 70 },
    ]
  },
  {
    name: "AI Tools",
    icon: <Sparkles className="w-4 h-4" />,
    skills: [
      { name: "Cursor", level: 90 },
      { name: "Chat GPT", level: 85 },
      { name: "Claude Code", level: 90 },
      { name: "Blackbox.AI", level: 80 },
      { name: "Gemini", level: 80 },
      { name: "Google Gemini API", level: 80 },
      { name: "v0.dev", level: 75 },
      { name: "lovable.dev", level: 70 },
    ]
  },
  {
    name: "Soft Skills",
    icon: <span role="img" aria-label="Handshake">🤝</span>,
    skills: [
      { name: "Creativity", level: 90 },
      { name: "Critical thinking", level: 85 },
      { name: "Responsibility", level: 95 },
      { name: "Problem solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 90 },
    ]
  }
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
        name: "ACT",
        role: "Full Stack Developer",
        tasks: [
          "Updated the API for fetching data from the web and retrieving data from the Kibana database.",
          "Updated the front-end view to display data from MA and newly integrated database sources.",
          "Wrote Python logic for project risk assessment and created Excel export functionality for project and company data.",
          "Redesigned the data fetching flow for three web pages: EGP, DBD, and GOV.",
          "Updated the API for fetching data from the three web pages (EGP, DBD, GOV) based on the previous version.",
          "Set up Jenkins processes to execute commands for fetching project and company data."
        ]
      },
      {
        name: "ACT Phase 2",
        role: "Full Stack Developer",
        tasks: [
          "Designed the workflow for fetching project and company data from three web pages: EGP, DBD, and GOV.",
          "Developed an API to fetch project data from these web pages and store it in the database.",
          "Set up a Jenkins process to automate commands for fetching project and company data.",
          "Developed the front-end web view for Phase 2."
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
        name: "iisi huboftalent",
        role: "Front-end Developer",
        tasks: [
          "Connect the role data API from the signup process to display and edit the data in the view according to the design.",
          "Connect the API flow for liking profiles and viewing the data in the system according to the design."
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

function TerminalWindow({
  children,
  title = "terminal",
  className = "",
  animate = false
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
  animate?: boolean;
}) {
  const terminalRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!animate || !terminalRef.current) return

    // Initial state
    gsap.set(terminalRef.current, {
      opacity: 0,
      y: 40,
      scale: 0.95
    })

    // Animate in
    gsap.to(terminalRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2
    })

    // // Floating effect
    // gsap.to(terminalRef.current, {
    //   y: -8,
    //   duration: 3,
    //   ease: "sine.inOut",
    //   yoyo: true,
    //   repeat: -1,
    //   delay: 1
    // })
  }, [animate])

  return (
    <div ref={terminalRef} className={cn("terminal-window shadow-2xl", className)}>
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


function CodeLine({ lineNum, children, indent = 0, className = "" }: {
  lineNum: number;
  children: React.ReactNode;
  indent?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex font-mono text-sm leading-relaxed", className)}>
      <span className="w-8 text-right pr-4 text-comment-gray/50 select-none">{lineNum}</span>
      <span style={{ paddingLeft: `${indent * 1.5}rem` }}>{children}</span>
    </div>
  )
}


// ============================================
// IMAGE STACK MODAL COMPONENT
// ============================================

function ImageStackModal({
  images,
  title,
  isOpen,
  onClose
}: {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void
}) {
  const modalRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // GSAP animation for modal open/close
  useEffect(() => {
    if (!modalRef.current || !backdropRef.current || !contentRef.current) return

    if (isOpen) {
      // Show modal
      gsap.set(modalRef.current, { display: 'flex' })

      // Animate backdrop
      gsap.fromTo(backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      )

      // Animate content
      gsap.fromTo(contentRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.4)" }
      )
    } else {
      // Animate out
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      })

      gsap.to(contentRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          if (modalRef.current) {
            gsap.set(modalRef.current, { display: 'none' })
          }
        }
      })
    }
  }, [isOpen])

  if (images.length === 0) return null

  // Create cards for Stack component
  const stackCards = images.map((img, idx) => (
    <div key={idx} className="w-full h-full bg-editor-dark rounded-2xl overflow-hidden border border-editor-border">
      <Image
        src={img}
        alt={`${title} - ${idx + 1}`}
        fill
        className="object-contain p-2"
        sizes="(max-width: 768px) 90vw, 600px"
        priority={idx === 0}
        draggable={false}
      />
    </div>
  ))

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 hidden items-center justify-center p-4"
      style={{ display: 'none' }}
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-terminal-black/95 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        ref={contentRef}
        className="relative flex flex-col gap-6 w-full max-w-5xl h-[96vh] items-center justify-center"
      >
        {/* Header */}
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-sm text-text-primary">{title}</span>
            <span className="font-mono text-xs text-syntax-purple px-2 py-0.5 bg-syntax-purple/10 rounded">
              {images.length} images
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-comment-gray hover:text-text-primary hover:bg-editor-border/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stack Container */}
        <div className="relative w-full aspect-video max-h-[95vh]">
          <Stack
            cards={stackCards}
            randomRotation={false}
            sensitivity={150}
            sendToBackOnClick={true}
            animationConfig={{ stiffness: 300, damping: 25 }}
            mobileClickOnly={true}
            mobileBreakpoint={768}
          />
        </div>

        {/* Instructions */}
        <div className="flex items-center gap-4 text-xs font-mono text-comment-gray/70">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-editor-border/30 rounded">Drag</span>
            <span>or</span>
            <span className="px-2 py-1 bg-editor-border/30 rounded">Click</span>
            <span>to shuffle</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-editor-border/30 rounded">ESC</span>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// PERSONAL PROJECT CARD
// ============================================

function PersonalProjectCard({ project, index }: { project: PersonalProject; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useGSAP(() => {
    if (!cardRef.current) return

    gsap.set(cardRef.current, { opacity: 0, y: 40 })

    gsap.to(cardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.01,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    })
  }, [index])

  const colorMap: Record<string, string> = {
    orange: 'border-orange-500/30 hover:border-orange-500/60',
    orangeLight: 'border-orange-400/30 hover:border-orange-400/60',
    blue: 'border-blue-500/30 hover:border-blue-500/60',
    yellow: 'border-yellow-500/30 hover:border-yellow-500/60',
    red: 'border-red-500/30 hover:border-red-500/60',
    green: 'border-green-500/30 hover:border-green-500/60',
    purple: 'border-purple-500/30 hover:border-purple-500/60',
    indigo: 'border-indigo-500/30 hover:border-indigo-500/60',
  }

  const hasSlideImages = project.slideImages && project.slideImages.length > 0

  return (
    <>
      <div
        ref={cardRef}
        className={cn(
          "group p-4 bg-editor-dark/50 rounded-lg border transition-all duration-300",
          colorMap[project.colorScheme] || 'border-editor-border',
          project.featured && "ring-1 ring-code-green/20"
        )}
      >
        {/* Image */}
        <div className="mb-4">
          <div
            className={cn(
              "relative aspect-video rounded-lg overflow-hidden bg-terminal-black border border-editor-border",
              hasSlideImages && "cursor-pointer"
            )}
            onClick={() => hasSlideImages && setIsModalOpen(true)}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Hover overlay with zoom icon */}
            {hasSlideImages && (
              <div className="absolute inset-0 bg-terminal-black/0 group-hover:bg-terminal-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <ZoomIn className="w-8 h-8 text-code-green" />
                  <span className="text-xs font-mono text-code-green">
                    View {project.slideImages!.length} images
                  </span>
                </div>
              </div>
            )}
            {/* Image count badge */}
            {hasSlideImages && project.slideImages!.length > 1 && (
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-terminal-black/80 rounded text-xs text-comment-gray group-hover:opacity-0 transition-opacity">
                +{project.slideImages!.length - 1} images
              </div>
            )}
          </div>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-mono text-text-primary group-hover:text-code-green transition-colors text-lg">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-syntax-purple">{project.role}</span>
          </div>
          {project.featured && (
            <span className="px-2 py-0.5 text-xs font-mono bg-code-green/10 text-code-green rounded">
              featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-comment-gray text-sm mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech, i) => (
            <span key={i} className="px-2 py-0.5 text-xs font-mono bg-terminal-black text-comment-gray rounded border border-editor-border">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 text-xs font-mono text-comment-gray">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 text-xs font-mono bg-terminal-black border border-editor-border rounded text-comment-gray hover:text-code-green hover:border-code-green transition-colors">
              <Github className="w-3 h-3" /> Code
            </a>
          )}
          {project.githubUrlFrontend && (
            <a href={project.githubUrlFrontend} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 text-xs font-mono bg-terminal-black border border-editor-border rounded text-comment-gray hover:text-code-green hover:border-code-green transition-colors">
              <Github className="w-3 h-3" /> FE
            </a>
          )}
          {project.githubUrlBackend && (
            <a href={project.githubUrlBackend} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 text-xs font-mono bg-terminal-black border border-editor-border rounded text-comment-gray hover:text-code-green hover:border-code-green transition-colors">
              <Github className="w-3 h-3" /> BE
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 text-xs font-mono bg-code-green/10 border border-code-green/30 rounded text-code-green hover:bg-code-green hover:text-terminal-black transition-colors">
              <ExternalLink className="w-3 h-3" /> Demo
            </a>
          )}
        </div>
      </div>

      {/* Image Stack Modal */}
      {hasSlideImages && (
        <ImageStackModal
          images={project.slideImages!}
          title={project.title}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

// ============================================
// WORK PROJECT CARD
// ============================================

function WorkProjectCard({ project, index }: { project: WorkProject; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [showFeatures, setShowFeatures] = useState(false)

  useGSAP(() => {
    if (!cardRef.current) return

    gsap.set(cardRef.current, { opacity: 0, y: 40 })

    gsap.to(cardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.01,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    })
  }, [index])

  const colorMap: Record<string, string> = {
    orange: 'border-orange-500/30',
    blue: 'border-blue-500/30',
    yellow: 'border-yellow-500/30',
    red: 'border-red-500/30',
    green: 'border-green-500/30',
    purple: 'border-purple-500/30',
    indigo: 'border-indigo-500/30',
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "p-4 bg-editor-dark/50 rounded-lg border transition-all duration-300 hover:border-syntax-blue/50",
        colorMap[project.colorScheme] || 'border-editor-border'
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">{project.icon}</span>
        <div className="flex-1">
          <h3 className="font-mono text-text-primary text-lg">{project.title}</h3>
          <span className="text-xs font-mono text-syntax-purple">{project.role}</span>
        </div>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
            className="text-comment-gray hover:text-code-green transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-comment-gray text-sm mb-4">{project.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-2 py-0.5 text-xs font-mono bg-terminal-black text-comment-gray rounded border border-editor-border">
            {tech}
          </span>
        ))}
      </div>

      {/* Features toggle */}
      <button
        onClick={() => setShowFeatures(!showFeatures)}
        className="flex items-center gap-1 text-xs font-mono text-syntax-blue hover:text-code-green transition-colors"
      >
        <ChevronRight className={cn("w-3 h-3 transition-transform", showFeatures && "rotate-90")} />
        {showFeatures ? 'Hide' : 'Show'} features ({project.features.length})
      </button>

      {/* Features list */}
      {showFeatures && (
        <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-editor-border">
          {project.features.map((feature, i) => (
            <li key={i} className="text-xs text-comment-gray flex items-start gap-2">
              <ChevronRight className="w-3 h-3 text-code-green shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ============================================
// PROJECTS SECTION WITH TABS
// ============================================

type ProjectTab = 'personal' | 'work'
type PersonalSubTab = 'all' | 'frontend' | 'fullstack'

function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ProjectTab>('personal')
  const [personalSubTab, setPersonalSubTab] = useState<PersonalSubTab>('all')
  const sectionRef = useRef<HTMLDivElement>(null)

  // Filter personal projects by role
  const filteredPersonalProjects = personalSubTab === 'all'
    ? personalProjects
    : personalProjects.filter(p =>
      personalSubTab === 'frontend'
        ? p.role.toLowerCase().includes('front-end') || p.role.toLowerCase().includes('frontend')
        : p.role.toLowerCase().includes('full stack') || p.role.toLowerCase().includes('fullstack')
    )

  useGSAP(() => {
    if (!sectionRef.current) return

    const tabs = sectionRef.current.querySelectorAll('.project-tab')
    gsap.set(tabs, { opacity: 0, y: -10 })
    gsap.to(tabs, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })
  }, [])

  return (
    <div ref={sectionRef}>
      {/* Main Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('personal')}
          className={cn(
            "project-tab px-4 py-2 font-mono text-sm rounded-t border-b-2 transition-colors",
            activeTab === 'personal'
              ? "bg-editor-dark text-code-green border-code-green"
              : "bg-transparent text-comment-gray border-transparent hover:text-text-secondary"
          )}
        >
          <FolderGit2 className="w-4 h-4 inline mr-2" />
          Personal Projects ({personalProjects.length})
        </button>
        <button
          onClick={() => setActiveTab('work')}
          className={cn(
            "project-tab px-4 py-2 font-mono text-sm rounded-t border-b-2 transition-colors",
            activeTab === 'work'
              ? "bg-editor-dark text-syntax-blue border-syntax-blue"
              : "bg-transparent text-comment-gray border-transparent hover:text-text-secondary"
          )}
        >
          <Briefcase className="w-4 h-4 inline mr-2" />
          Work Projects ({workProjects.length})
        </button>
      </div>

      {/* Personal Projects */}
      {activeTab === 'personal' && (
        <div>
          {/* Sub-tabs */}
          <div className="flex gap-1 mb-6 p-1 bg-terminal-black rounded-lg border border-editor-border w-fit">
            {[
              { key: 'all', label: 'All' },
              { key: 'frontend', label: 'Front-End' },
              { key: 'fullstack', label: 'Full Stack' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setPersonalSubTab(tab.key as PersonalSubTab)}
                className={cn(
                  "px-3 py-1.5 font-mono text-xs rounded transition-colors",
                  personalSubTab === tab.key
                    ? "bg-code-green/20 text-code-green"
                    : "text-comment-gray hover:text-text-secondary"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPersonalProjects.map((project, index) => (
              <PersonalProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {filteredPersonalProjects.length === 0 && (
            <div className="text-center py-12 text-comment-gray font-mono">
              No projects found in this category
            </div>
          )}
        </div>
      )}

      {/* Work Projects */}
      {activeTab === 'work' && (
        <div className="grid md:grid-cols-2 gap-4">
          {workProjects.map((project, index) => (
            <WorkProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}

function GitTimeline({ experiences }: { experiences: Experience[] }) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!timelineRef.current || !lineRef.current) return

    // Animate the branch line drawing
    gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top" })

    gsap.to(lineRef.current, {
      scaleY: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    // Animate company headers
    const companyHeaders = timelineRef.current.querySelectorAll('.company-header')
    companyHeaders.forEach((header, i) => {
      gsap.set(header, { opacity: 0, x: -30 })
      gsap.to(header, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: i * 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      })
    })

    // Animate commit cards
    const commitCards = timelineRef.current.querySelectorAll('.commit-card')
    commitCards.forEach((card, i) => {
      gsap.set(card, { opacity: 0, y: 30, x: -20 })
      gsap.to(card, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.5,
        delay: 0.1 * i,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      })
    })

    // Animate commit dots
    const commitDots = timelineRef.current.querySelectorAll('.commit-dot')
    commitDots.forEach((dot, i) => {
      gsap.set(dot, { scale: 0 })
      gsap.to(dot, {
        scale: 1,
        duration: 0.4,
        delay: 0.1 * i + 0.2,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: dot,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      })
    })
  }, [])

  return (
    <div ref={timelineRef} className="relative">
      {/* Git branch line */}
      <div ref={lineRef} className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-editor-border" />

      {experiences.map((exp, expIndex) => (
        <div key={expIndex} className="relative mb-8 last:mb-0">
          {/* Company header - main branch */}
          <div className="company-header flex items-start gap-4 mb-4">
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
              <div key={projIndex} className="commit-card relative group">
                {/* Commit dot */}
                <div className="commit-dot absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-syntax-blue group-hover:bg-code-green transition-colors" />

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
  const formRef = useRef<HTMLFormElement>(null)

  useGSAP(() => {
    if (!formRef.current) return

    const codeLines = formRef.current.querySelectorAll('.code-line-anim')

    gsap.set(codeLines, { opacity: 0, x: -30 })

    codeLines.forEach((line, i) => {
      gsap.to(line, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: i * 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })
    })

    // Animate the submit button
    const submitBtn = formRef.current.querySelector('.submit-btn')
    if (submitBtn) {
      gsap.set(submitBtn, { opacity: 0, y: 20 })
      gsap.to(submitBtn, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, message } = formState

    // Validate form
    if (!name.trim() || !email.trim() || !message.trim()) {
      return
    }

    setStatus("sending")

    // Create mailto link with form data
    const recipientEmail = "bananammm0001@gmail.com"
    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Update status
    setTimeout(() => {
      setStatus("sent")
      setFormState({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 3000)
    }, 500)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="font-mono text-sm space-y-3">
        <CodeLine lineNum={1} className="code-line-anim">
          <span className="syntax-keyword">const</span>
          <span className="text-text-primary ml-2">message</span>
          <span className="text-text-primary ml-2">=</span>
          <span className="syntax-punctuation ml-2">{"{"}</span>
        </CodeLine>

        <CodeLine lineNum={2} indent={1} className="code-line-anim">
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

        <CodeLine lineNum={3} indent={1} className="code-line-anim">
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

        <CodeLine lineNum={4} indent={1} className="code-line-anim">
          <span className="syntax-property">message:</span>
          <span className="syntax-punctuation ml-2">`</span>
        </CodeLine>

        <CodeLine lineNum={5} indent={2} className="code-line-anim">
          <textarea
            value={formState.message}
            onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
            rows={8}
            className="w-[330px] bg-terminal-black/50 border border-editor-border rounded text-syntax-yellow focus:border-code-green outline-none p-3 resize-none"
            placeholder="Your message here..."
          />
        </CodeLine>

        <CodeLine lineNum={6} indent={1} className="code-line-anim">
          <span className="syntax-punctuation">`</span>
        </CodeLine>

        <CodeLine lineNum={7} className="code-line-anim">
          <span className="syntax-punctuation">{"}"}</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>

        <CodeLine lineNum={8} className="code-line-anim">&nbsp;</CodeLine>

        <CodeLine lineNum={9} className="code-line-anim">
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
          "submit-btn mt-6 w-full py-3 px-6 font-mono text-sm rounded border transition-all duration-300",
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
        <span>Next.js</span>
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
// SKILL TAG COMPONENT
// ============================================

function SkillTag({ name, level, delay }: { name: string; level: number; delay: number }) {
  const tagRef = useRef<HTMLDivElement>(null)

  // Determine skill level indicator
  const getLevelIndicator = (level: number) => {
    if (level >= 85) return { dots: 3, color: 'text-code-green', label: 'advanced' }
    if (level >= 70) return { dots: 2, color: 'text-syntax-blue', label: 'intermediate' }
    return { dots: 1, color: 'text-syntax-orange', label: 'familiar' }
  }

  const levelInfo = getLevelIndicator(level)

  useGSAP(() => {
    if (!tagRef.current) return

    gsap.set(tagRef.current, { opacity: 0, scale: 0.8, y: 10 })

    gsap.to(tagRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.4,
      delay: delay / 1000,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: tagRef.current,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    })
  }, [delay])

  return (
    <div
      ref={tagRef}
      className="group relative inline-flex items-center gap-2 px-3 py-1.5 bg-terminal-black/80 border border-editor-border rounded-md font-mono text-sm hover:border-code-green/50 hover:bg-code-green/5 transition-all duration-200 cursor-default"
    >
      {/* Skill name */}
      <span className="text-text-secondary group-hover:text-code-green transition-colors">
        {name}
      </span>

      {/* Level dots indicator */}
      <div className="flex gap-0.5">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-colors",
              dot <= levelInfo.dots
                ? levelInfo.color === 'text-code-green'
                  ? "bg-code-green"
                  : levelInfo.color === 'text-syntax-blue'
                    ? "bg-syntax-blue"
                    : "bg-syntax-orange"
                : "bg-editor-border"
            )}
          />
        ))}
      </div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-editor-dark border border-editor-border rounded text-xs text-comment-gray opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
        {levelInfo.label}
      </div>
    </div>
  )
}

// ============================================
// SKILL CATEGORY WITH ANIMATIONS
// ============================================

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const categoryRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!categoryRef.current) return

    // Animate category card
    gsap.set(categoryRef.current, { opacity: 0, y: 30 })
    gsap.to(categoryRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: categoryRef.current,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    })
  }, [index])

  return (
    <div ref={categoryRef} className="p-4 bg-editor-dark/50 rounded-lg border border-editor-border hover:border-syntax-blue/30 transition-colors">
      {/* Category header - styled like a file path */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-editor-border">
        <span className="text-syntax-blue">{category.icon}</span>
        <span className="font-mono text-sm text-comment-gray">~/</span>
        <span className="font-mono text-sm text-code-green">{category.name.toLowerCase()}</span>
      </div>

      {/* Skills as tags */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <SkillTag
            key={skillIndex}
            name={skill.name}
            level={skill.level}
            delay={index * 150 + skillIndex * 80}
          />
        ))}
      </div>
    </div>
  )
}

// ============================================
// ABOUT CONTENT WITH ANIMATIONS
// ============================================

function AboutContent() {
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!contentRef.current) return

    // Animate paragraphs
    const paragraphs = contentRef.current.querySelectorAll('p')
    paragraphs.forEach((p, i) => {
      gsap.set(p, { opacity: 0, y: 30 })
      gsap.to(p, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: p,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      })
    })

    // Animate stats cards with counter
    if (statsRef.current) {
      const statCards = statsRef.current.querySelectorAll('.stat-card')
      statCards.forEach((card, i) => {
        gsap.set(card, { opacity: 0, y: 40, scale: 0.9 })
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.3 + i * 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        })

        // Counter animation for numbers
        const numberEl = card.querySelector('.stat-number')
        if (numberEl) {
          const targetText = numberEl.textContent || '0'
          const targetNumber = parseInt(targetText.replace('+', ''))
          const counter = { value: 0 }

          gsap.to(counter, {
            value: targetNumber,
            duration: 1.5,
            delay: 0.5 + i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            onUpdate: () => {
              numberEl.textContent = `${Math.round(counter.value)}+`
            }
          })
        }
      })
    }
  }, [])

  return (
    <div ref={contentRef} className="space-y-6">
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

      <div ref={statsRef} className="grid grid-cols-2 gap-4 pt-4">
        <div className="stat-card p-4 bg-editor-dark rounded-lg border border-editor-border" data-target="3">
          <div className="stat-number text-3xl font-bold text-code-green">3+</div>
          <div className="text-sm text-comment-gray">Years Experience</div>
        </div>
        <div className="stat-card p-4 bg-editor-dark rounded-lg border border-editor-border" data-target="10">
          <div className="stat-number text-3xl font-bold text-syntax-blue">10+</div>
          <div className="text-sm text-comment-gray">Projects Completed</div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// CONTACT AVAILABILITY WITH ANIMATIONS
// ============================================

function ContactAvailability() {
  const availRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!availRef.current) return

    gsap.set(availRef.current, { opacity: 0, y: 30, scale: 0.95 })

    gsap.to(availRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: availRef.current,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    })

    // Pulse animation for the dot
    const dot = availRef.current.querySelector('.availability-dot')
    if (dot) {
      gsap.to(dot, {
        scale: 1.3,
        opacity: 0.6,
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      })
    }
  }, [])

  return (
    <div ref={availRef} className="p-4 bg-editor-dark rounded-lg border border-code-green/30">
      <div className="flex items-center gap-2 text-code-green font-mono text-sm mb-2">
        <span className="availability-dot w-2 h-2 rounded-full bg-code-green" />
        Available for opportunities
      </div>
      <p className="text-comment-gray text-sm">
        I&apos;m currently open to new opportunities as a Front-End, Back-End, or Full Stack Developer.
      </p>
    </div>
  )
}

// ============================================
// ANIMATED SECTION WRAPPER
// ============================================

function AnimatedSection({
  children,
  id,
  className = ""
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    // Animate section comment headers
    const sectionComment = sectionRef.current.querySelector('.section-comment')
    if (sectionComment) {
      gsap.set(sectionComment, { opacity: 0, x: -50 })
      gsap.to(sectionComment, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })
    }

    // Animate terminal windows in this section
    const terminals = sectionRef.current.querySelectorAll('.terminal-window:not(.hero-terminal)')
    terminals.forEach((terminal, i) => {
      gsap.set(terminal, { opacity: 0, y: 40 })
      gsap.to(terminal, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: terminal,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      })
    })
  }, [])

  return (
    <section ref={sectionRef} id={id} className={className}>
      {children}
    </section>
  )
}

// ============================================
// MAIN PAGE
// ============================================

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)

  // Hero section animations
  useGSAP(() => {
    if (!heroContentRef.current) return

    const heroItems = heroContentRef.current.querySelectorAll('.hero-item')

    // Staggered reveal for hero content
    gsap.set(heroItems, { opacity: 0, y: 20 })
    gsap.to(heroItems, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      delay: 0.8
    })

    // Parallax effect on scroll
    gsap.to(heroRef.current, {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    })
  }, [])


  return (
    <div className="min-h-screen bg-terminal-black noise-overlay">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 grid-pattern overflow-hidden">
        <div ref={heroRef} className="max-w-4xl w-full">
          <TerminalWindow title="portfolio.dev - zsh" animate={true} className="hero-terminal">
            <div ref={heroContentRef} className="space-y-4">

              <div className="hero-item">
                <span className="text-code-green">$</span>
                <span className="ml-2 text-text-primary">cat about.json</span>
              </div>

              <div className="hero-item pl-4 border-l-2 border-editor-border">
                <pre className="text-lg">
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
                  {/* <span className="syntax-property ml-4">&quot;location&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-string">&quot;{personalInfo.location}&quot;</span>
                  <span className="syntax-punctuation">,</span>{"\n"}
                  <span className="syntax-property ml-4">&quot;available&quot;</span>
                  <span className="syntax-punctuation">: </span>
                  <span className="syntax-value">{personalInfo.available ? "true" : "false"}</span>{"\n"} */}
                  <span className="syntax-punctuation">{"}"}</span>
                </pre>
              </div>

              <div className="hero-item pt-4 flex flex-wrap gap-4">
                <a
                  href="/Resume Sutep Jantawee.pdf"
                  download="Resume_Sutep_Jantawee.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-syntax-purple/10 border border-syntax-purple text-syntax-purple rounded font-mono text-sm hover:bg-syntax-purple hover:text-terminal-black transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
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
            </div>
          </TerminalWindow>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 text-[#8b949e] animate-bounce cursor-pointer"
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById('about')?.offsetTop,
                  behavior: 'smooth'
                })
              }}
            >
              <span className="text-xs font-mono">Scroll</span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                className="text-[#00ff9f]"
              >
                <path
                  d="M10 4V16M10 16L4 10M10 16L16 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="section-comment mb-8">about.json</div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="terminal-window about-terminal">
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

            <AboutContent />
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-20 px-4 bg-editor-dark/30">
        <div className="max-w-6xl mx-auto">
          <div className="section-comment mb-8">npm install skills</div>

          <TerminalWindow title="npm install">
            <div className="space-y-2 mb-6">
              <div className="text-code-green">$ npm install @suthep/skills</div>
              <div className="text-comment-gray">Installing dependencies...</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, catIndex) => (
                <SkillCategoryCard key={catIndex} category={category} index={catIndex} />
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-editor-border">
              <div className="text-code-green">
                added {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} packages
              </div>
            </div>
          </TerminalWindow>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="section-comment mb-8">git log --oneline experience</div>
          <GitTimeline experiences={experiences} />
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-20 px-4 bg-editor-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="section-comment mb-8">ls -la projects/</div>

          <div className="mb-8">
            <TerminalWindow title="terminal">
              <div className="text-code-green">$ ls -la ~/projects</div>
              <div className="text-comment-gray mt-2 font-mono text-sm">
                <span className="text-syntax-blue">personal/</span> ({personalProjects.length} projects) |
                <span className="text-syntax-purple ml-2">work/</span> ({workProjects.length} projects)
              </div>
            </TerminalWindow>
          </div>

          <ProjectsSection />
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
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

              <ContactAvailability />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer spacing for status bar */}
      <div className="h-8" />

      <StatusBar />
    </div>
  )
}
