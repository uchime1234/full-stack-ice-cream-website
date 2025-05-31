import type React from "react"
import { Truck, ShieldCheck, CreditCard } from "lucide-react"

const features = [
  { icon: Truck, title: "Fast Delivery", description: "Get your ice cream delivered quickly and fresh." },
  { icon: ShieldCheck, title: "Verified Vendors", description: "All our vendors are carefully vetted for quality." },
  { icon: CreditCard, title: "Secure Payments", description: "Your transactions are always safe and secure." },
]

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-pink-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center round bg-white text-pink-300 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white round p-6 rounded-lg shadow-md text-center">
              <feature.icon className="mx-auto text-pink-300 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-pink-300 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

