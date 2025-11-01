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
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
        iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
        icon: Calendar,
        title: 'Easy Scheduling',
        description: 'Book appointments 24/7 with instant confirmation',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
        iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
        icon: FileText,
        title: 'Digital Records',
        description: 'Access your medical history and prescriptions anytime',
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50',
        iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
        icon: Shield,
        title: 'HIPAA Compliant',
        description: 'Your health data is secure and fully encrypted',
        color: 'from-red-500 to-red-600',
        bgColor: 'bg-red-50',
        iconBg: 'bg-gradient-to-br from-red-500 to-red-600',
    },
    {
        icon: Clock,
        title: '24/7 Availability',
        description: 'Round-the-clock access to healthcare professionals',
        color: 'from-orange-500 to-orange-600',
        bgColor: 'bg-orange-50',
        iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600',
    },
    {
        icon: Headphones,
        title: 'Patient Support',
        description: 'Dedicated support team ready to help you',
        color: 'from-teal-500 to-teal-600',
        bgColor: 'bg-teal-50',
        iconBg: 'bg-gradient-to-br from-teal-500 to-teal-600',
    },
]
export function ServiceComponents() {
    return (
        <section
            id="services"
            className="w-full bg-linear-to-b bg-blue-50 py-16 md:py-24 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Premium Services
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive healthcare solutions designed to make your medical
                        journey seamless, secure, and stress-free
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div
                                    className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                                >
                                    <service.icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="text-sm">Learn More</span>
                                    <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                className={`absolute top-0 right-0 w-32 h-32 ${service.bgColor} rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                            ></div>
                        </div>
                    ))}
                </div>
                {/* <div className="mt-16 text-center">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">Explore All Services</button>
                </div> */}
            </div>
        </section>
    )
}