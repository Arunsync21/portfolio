import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award, Trophy } from "lucide-react"

export function EducationCards() {
  const education = [
    {
      degree: "B.E. ECE",
      institution: "Thanthai Periyar Government Institute of Technology, Vellore",
      year: "2022",
      grade: "CGPA – 8.13",
      type: "Bachelor's Degree",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
    },
    {
      degree: "HSC",
      institution: "Sri Sundareswara Vidhya Sala Matriculation Higher Secondary School",
      year: "2018",
      grade: "87.75%",
      type: "Higher Secondary",
      color: "from-green-500 to-blue-500",
      bgColor: "from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20",
    },
    {
      degree: "SSLC",
      institution: "Sri Sundareswara Vidhya Sala Matriculation Higher Secondary School",
      year: "2016",
      grade: "98.4%",
      type: "Secondary School",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
  ]

  const getGradeIcon = (grade: string) => {
    if (grade.includes("98.4")) return Trophy
    if (grade.includes("8.13")) return Award
    return Award
  }

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const GradeIcon = getGradeIcon(edu.grade)
            return (
              <Card
                key={index}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                <CardHeader className={`bg-gradient-to-br ${edu.bgColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                      <GraduationCap className={`h-6 w-6 sm:h-8 sm:w-8 text-blue-500`} />
                    </div>
                    <Badge variant="outline" className="text-sm font-medium">
                      {edu.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white leading-tight">{edu.degree}</CardTitle>
                </CardHeader>

                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="h-16 sm:h-20 flex items-start">
                      <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Fixed bottom section */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300 font-medium">{edu.year}</span>
                    </div>
                    <Badge className={`bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                      <GradeIcon className="h-3 w-3 mr-1" />
                      {edu.grade}
                    </Badge>
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
