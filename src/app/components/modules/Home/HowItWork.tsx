import React from 'react'
import { MessageSquare, Brain, Video, CheckCircle } from 'lucide-react'
import Image from 'next/image'
const steps = [
    {
        icon: MessageSquare,
        title: 'Contact Us',
        description:
            'Call, message, or book online through our platform. Share your symptoms and concerns.',
        image:
            'https://thumbs.dreamstime.com/b/virtual-doctor-appointment-booking-laptop-person-using-laptop-to-book-virtual-consultation-doctor-bright-home-355461330.jpg',
    },
    {
        icon: Brain,
        title: 'AI Matching',
        description:
            'Our AI analyzes your needs and matches you with the perfect doctor based on specialty and availability.',
        image:
            'https://etedge-insights.com/wp-content/uploads/2025/05/resizecom_20250519_1748_Futuristic-AI-Clinic_simple_compose_01jvm7k149e22btmnjrhw7v423.png',
    },
    {
        icon: Video,
        title: 'Consultation',
        description:
            'Connect with your doctor via video call, phone, or in-person visit at your convenience.',
        image:
            'https://trueconf.com/images/telemedicine/telemed-en.png',
    },
    {
        icon: CheckCircle,
        title: 'Receive Care',
        description:
            'Get personalized treatment, prescriptions, and follow-up care from your matched healthcare provider.',
        image:
            'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop',
    },
]
export function HowItWorks() {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Getting quality healthcare is simple with our AI-powered platform.
                        Follow these easy steps to connect with the right doctor.
                    </p>
                </div>
                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                        >
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-100 p-4 rounded-2xl">
                                        <step.icon className="text-blue-600" size={32} />
                                    </div>
                                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:flex items-center space-x-2 text-blue-600">
                                        <div className="w-12 h-1 bg-blue-600 rounded"></div>
                                        <span className="text-sm font-semibold">Next Step</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 relative">
                                <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-blue-50 rounded-3xl transform rotate-3"></div>
                                <Image
                                width={500}
                                height={500}
                                    src={step.image}
                                    alt={step.title}
                                    className="relative rounded-3xl shadow-2xl w-full h-80 object-cover"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-semibold text-gray-900">
                                            Active
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 bg-linear-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to Get Started?
                    </h3>
                    <p className="text-lg mb-8 opacity-90">
                        Join thousands of satisfied patients who found their perfect
                        healthcare match
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold">
                        Book Your First Appointment
                    </button>
                </div>
            </div>
        </section>
    )
}
