"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"
import { sendEmail } from "@/actions/send-email"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        })

        // Reset form after successful submission
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) {
          form.reset()
        }
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)

      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" })
      }, 5000)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7639067968",
      href: "tel:+917639067968",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "arunjegan21@gmail.com",
      href: "mailto:arunjegan21@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai - 600114",
      href: "#",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/arunbalaji-s-175807219/",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            I'm always open to discussing new opportunities and interesting projects. Let's connect and explore how we
            can work together to create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-white/20 dark:border-gray-700/20 shadow-xl">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl text-gray-900 dark:text-white flex items-center">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-3 flex-shrink-0" />
                Let's Connect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-blue-900/20 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`p-2 sm:p-3 bg-gradient-to-r ${info.color} rounded-xl shadow-lg flex-shrink-0`}>
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">{info.label}</p>
                      {info.href.startsWith("http") ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-all">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-white/20 dark:border-gray-700/20 shadow-xl">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl text-gray-900 dark:text-white flex items-center">
                <Send className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 mr-3 flex-shrink-0" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`mb-4 p-4 rounded-lg flex items-center space-x-3 ${submitStatus.type === "success"
                      ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                    }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              <form id="contact-form" action={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors h-10 sm:h-11"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors h-10 sm:h-11"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors h-10 sm:h-11"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={4}
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none min-h-[100px] sm:min-h-[120px] h-[120px] overflow-y-auto"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full h-11 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border-white/20 dark:border-gray-700/20 shadow-xl mt-6">
          <CardContent className="p-6 sm:p-8">
            <h4 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-3 sm:mb-4">
              Ready to Build Something Amazing?
            </h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love
              to hear from you. Let's create something extraordinary together!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-white/20 dark:border-gray-700/20">
        <div className="text-center px-4">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            © 2025 Arunbalaji S. Crafted with ❤️ using Next.js, Tailwind CSS, and creativity.
          </p>
        </div>
      </div>
    </section>
  )
}
