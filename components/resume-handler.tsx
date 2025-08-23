"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ResumeHandler() {
    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = "/Arunbalaji_S_Resume.pdf" // Path from public folder
        link.download = "Arunbalaji_S_Resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button
                    onClick={handleDownload}
                    variant="outline"
                    size="lg"
                    className="cursor-pointer w-full sm:w-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Download Resume
                </Button>
            </div>
        </>
    )
}
