import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, CheckCircle } from "lucide-react"

export function ExperienceTimeline() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Key Software, Inc",
      location: "Perungudi, Chennai",
      period: "Jan 2024 – Present",
      current: true,
      responsibilities: [
        "Develop and enhance Healthcare Management systems using WinForms, WPF (MVVM), JavaScript and React JS.",
        "Design and optimize databases with SQL.",
        "Collaborate on full-stack solutions to improve healthcare workflows and data management.",
      ],
      technologies: ["WinForms", "WPF", "MVVM", "JavaScript", "React JS", "SQL"],
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Software Developer",
      company: "Syncfusion Software Private Limited",
      location: "Anna Nagar, Chennai",
      period: "Nov 2022 – Jan 2024",
      current: false,
      responsibilities: [
        "Developed and enhanced features for BoldBI Dashboard Designer, a leading business intelligence tool, using TypeScript, jQuery and ASP .Net Core.",
        "Optimized SQL database queries to ensure efficient data handling and visualization, improving dashboard performance.",
        "Collaborated with cross-functional teams to deliver robust, user-friendly dashboard solutions.",
      ],
      technologies: ["TypeScript", "jQuery", "ASP .Net Core", "SQL", "BoldBI"],
      color: "from-green-500 to-blue-500",
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot - Hidden on mobile */}
                <div className="absolute left-4 sm:left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

                <Card className="md:ml-12 lg:ml-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                      <div className="flex-1 mb-4 lg:mb-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-300 mb-4">
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4 flex-shrink-0" />
                            <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span className="text-sm sm:text-base">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start lg:items-end space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{exp.period}</span>
                        </div>
                        {exp.current && (
                          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs sm:text-sm">
                            Current Position
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <ul className="space-y-2 sm:space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            className={`bg-gradient-to-r ${exp.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm px-2 sm:px-3 py-1`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
