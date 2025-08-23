import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Globe, Languages } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-white/20 dark:border-gray-700/20 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-start sm:items-center flex-col sm:flex-row">
                  <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mb-2 sm:mb-0 sm:mr-4"></div>
                  Objective
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Seeking a position that allows me to advance my career by actively learning and applying emerging technologies, 
                  while leveraging my strong skills and collaborative abilities to contribute effectively to organizational success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-white/20 dark:border-gray-700/20 shadow-xl">
              <CardContent className="p-4 sm:p-5.5">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                  <Languages className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-3 flex-shrink-0" />
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg">
                    English
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm font-medium shadow-lg">
                    Tamil
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
                    German A1
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-white/20 dark:border-gray-700/20 shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mb-2 sm:mb-0 sm:mr-4"></div>
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="p-1.5 sm:p-2 bg-blue-500 rounded-lg flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium break-all">
                    +91 7639067968
                  </span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="p-1.5 sm:p-2 bg-purple-500 rounded-lg flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium break-all">
                    arunjegan21@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="p-1.5 sm:p-2 bg-green-500 rounded-lg flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                    Chennai - 600114
                  </span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="p-1.5 sm:p-2 bg-pink-500 rounded-lg flex-shrink-0">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/arunbalaji-s-175807219/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline font-medium break-all"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
