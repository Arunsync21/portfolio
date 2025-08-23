"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { ResumeHandler } from "./resume-handler"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Software Developer & Full-Stack Engineer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <div className="space-y-6 sm:space-y-8">
          {/* Animated Profile Circle - Responsive sizing */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 sm:mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin-slow"></div>
            <div className="absolute inset-1 sm:inset-2 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl font-bold shadow-2xl">
                AS
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in leading-tight">
              Arunbalaji S
            </h1>
            <div className="h-6 sm:h-8">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium px-4">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Passionate about creating innovative solutions with modern technologies. Experienced in developing
              business intelligence tools and healthcare management systems.
            </p>
          </div>

          <ResumeHandler />

          <div className="flex justify-center space-x-4 sm:space-x-6 px-4">
            {/* Social links with responsive sizing */}
            <a
              href="https://www.linkedin.com/in/arunbalaji-s-175807219/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="mailto:arunjegan21@gmail.com"
              className="p-2 sm:p-3 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://github.com/Arunsync21"
              className="p-2 sm:p-3 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="cursor-pointer animate-bounce text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mt-8 sm:mt-12"
          >
            <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
