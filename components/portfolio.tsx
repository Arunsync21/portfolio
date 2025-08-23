"use client"

import { useState, useEffect } from "react"
import { FloatingNav } from "@/components/floating-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { SkillsGrid } from "@/components/skills-grid"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { EducationCards } from "@/components/education-cards"
import { ContactSection } from "@/components/contact-section"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeToggle } from "@/components/theme-toggle"

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-500">
      <ParticleBackground />
      <ThemeToggle />
      <FloatingNav activeSection={activeSection} />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsGrid />
        <ProjectsShowcase />
        <EducationCards />
        <ContactSection />
      </main>
    </div>
  )
}
