import React from 'react'
import {
    Video,
    Calendar,
    FileText,
    Shield,
    Clock,
    Headphones,
} from 'lucide-react'
const services = [
    {
        icon: Video,
        title: 'Virtual Consultations',
        description:
            'Connect with doctors through secure video calls from anywhere',
    },
    {
        icon: Calendar,
        title: 'Easy Scheduling',
        description: 'Book appointments 24/7 with instant confirmation',
    },
    {
        icon: FileText,
        title: 'Digital Records',
        description: 'Access your medical history and prescriptions anytime',
    },
    {
        icon: Shield,
        title: 'HIPAA Compliant',
        description: 'Your health data is secure and fully encrypted',
    },
    {
        icon: Clock,
        title: '24/7 Availability',
        description: 'Round-the-clock access to healthcare professionals',
    },
    {
        icon: Headphones,
        title: 'Patient Support',
        description: 'Dedicated support team ready to help you',
    },
]
export function Services() {
    return (
        <section id="services" className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive healthcare solutions designed to make your medical
                        journey seamless and stress-free
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-linear-to-br from-blue-50 to-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-blue-100"
                        >
                            <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                <service.icon className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
