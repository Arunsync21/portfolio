"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, Code, FolderOpen, GraduationCap, Mail, Menu, X } from "lucide-react"

interface FloatingNavProps {
  activeSection: string
}

export function FloatingNav({ activeSection }: FloatingNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation - Better positioning */}
      <nav className="fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl p-2 border border-neutral-200 dark:border-gray-700/20">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = activeSection === item.id
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="icon"
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer relative group h-10 w-10 xl:h-12 xl:w-12 rounded-xl transition-all duration-300 ${isActive
                      ? "hover:bg-blue-100 dark:hover:bg-blue-900/30 bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-300"
                    }`}
                >
                  <IconComponent className="h-4 w-4 xl:h-5 xl:w-5" />
                  <div className="absolute left-12 xl:left-16 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {item.label}
                  </div>
                </Button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Enhanced */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 h-10 w-10 sm:h-12 sm:w-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-gray-200 dark:border-gray-700"
        >
          {isOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
        </Button>

        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden">
            <div className="fixed left-4 right-4 top-16 sm:left-4 sm:right-auto sm:w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 border border-gray-200 dark:border-gray-700 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  const isActive = activeSection === item.id
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={`justify-start space-x-3 h-12 px-4 rounded-xl transition-all duration-300 text-left ${isActive
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }`}
                    >
                      <IconComponent className="h-5 w-5 flex-shrink-0" />
                      <span className="text-base">{item.label}</span>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
