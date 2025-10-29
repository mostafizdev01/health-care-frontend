import React from 'react'
import {
    Heart,
    Brain,
    Baby,
    Bone,
    Eye,
    Stethoscope,
    Activity,
    Users,
} from 'lucide-react'
const specialties = [
    {
        icon: Heart,
        name: 'Cardiology',
        description: 'Heart and cardiovascular system care',
        doctors: 45,
        color: 'bg-red-100 text-red-600',
    },
    {
        icon: Brain,
        name: 'Neurology',
        description: 'Brain and nervous system treatment',
        doctors: 38,
        color: 'bg-purple-100 text-purple-600',
    },
    {
        icon: Baby,
        name: 'Pediatrics',
        description: 'Specialized care for children',
        doctors: 52,
        color: 'bg-pink-100 text-pink-600',
    },
    {
        icon: Bone,
        name: 'Orthopedics',
        description: 'Bone, joint, and muscle care',
        doctors: 41,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        icon: Eye,
        name: 'Ophthalmology',
        description: 'Eye and vision health',
        doctors: 29,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        icon: Stethoscope,
        name: 'General Practice',
        description: 'Comprehensive primary care',
        doctors: 67,
        color: 'bg-green-100 text-green-600',
    },
    {
        icon: Activity,
        name: 'Internal Medicine',
        description: 'Adult disease prevention and treatment',
        doctors: 43,
        color: 'bg-teal-100 text-teal-600',
    },
    {
        icon: Users,
        name: 'Family Medicine',
        description: 'Care for patients of all ages',
        doctors: 56,
        color: 'bg-indigo-100 text-indigo-600',
    },
]
export function Specialties() {
    return (
        <section
            id="specialties"
            className="w-full bg-linear-to-br from-blue-50 to-white py-16 md:py-24"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Medical Specialties
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find expert doctors across all major medical specialties. Our AI
                        matches you with the right specialist for your needs.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specialties.map((specialty, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
                        >
                            <div
                                className={`${specialty.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                            >
                                <specialty.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {specialty.name}
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                {specialty.description}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <span className="text-sm text-gray-500">
                                    {specialty.doctors} doctors
                                </span>
                                <button className="text-blue-600 text-sm font-semibold hover:text-blue-700">
                                    View All →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
                        Explore All Specialties
                    </button>
                </div>
            </div>
        </section>
    )
}
