// src/components/ServiceCard.tsx
import type React from "react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-xl hover:bg-white/50 transition-colors duration-300 group">
      <div className="flex items-center justify-center w-10 h-10 mb-4 text-red-500">{icon}</div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-red-400">{description}</p>
    </div>
  )
}