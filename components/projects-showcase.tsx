import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Gamepad2, Sparkles } from "lucide-react"
import Link from "next/link"

export function ProjectsShowcase() {
  const projects = [
    {
      title: "Interactive Quiz Game",
      organization: "Center for Environment and Development",
      description:
        "Developed an interactive quiz web application for water management programs, enhancing user engagement through real-time scoring. Designed a dynamic UI with Next.js and implemented backend logic using Node.js for seamless performance.",
      technologies: ["Next.js", "Node.js", "React JS"],
      icon: Gamepad2,
      features: [
        "Real-time scoring system",
        "Dynamic UI with Next.js",
        "Gamification elements",
        "Environmental education focus",
      ],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl text-gray-900 dark:text-white mb-2 flex items-center">
                        {project.title}
                        <Sparkles className="h-6 w-6 text-yellow-500 ml-2" />
                      </CardTitle>
                      <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">{project.organization}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-8">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{project.description}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center">
                          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center">
                          <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3"></div>
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              className={`bg-gradient-to-r ${project.gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-4 py-2`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Button
                        variant="outline"
                        asChild
                        className="flex items-center space-x-2 bg-transparent border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                      >
                        <Link href="https://github.com/Arunsync21/BoardGame-NextApp" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                          <span>View Source Code</span>
                        </Link>
                      </Button>

                      <Button
                        asChild
                        className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white`}
                      >
                        <Link href="https://aquanagar-quizapp.github.io/AquaNagar-NextApp/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                          <span>Live Demo</span>
                        </Link>
                      </Button>
                    </div>
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
