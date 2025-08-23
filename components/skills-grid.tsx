"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Database, Settings, Monitor } from "lucide-react"

export function SkillsGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C#", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: [
        { name: "React JS", level: 90 },
        { name: "Next JS", level: 85 },
        { name: "jQuery", level: 80 },
        { name: "WinForms", level: 85 },
        { name: "WPF (MVVM)", level: 80 },
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Expo", level: 75 },
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: [
        { name: "ASP .Net Core", level: 85 },
        { name: "SQL", level: 90 },
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    },
    {
      title: "Project Management",
      icon: Settings,
      skills: [
        { name: "GIT", level: 90 },
        { name: "JIRA", level: 85 },
        { name: "Azure DevOps", level: 80 },
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
    },
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            const isHovered = hoveredCard === index
            return (
              <Card
                key={index}
                className={`bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${isHovered ? "ring-2 ring-blue-500" : ""
                  }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className={`text-center bg-gradient-to-br ${category.bgColor} rounded-t-lg p-4 sm:p-6`}>
                  <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg">
                    <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 text-blue-500`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                          <div
                            className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{
                              width: isHovered ? `${skill.level}%` : "0%",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
