import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
export function CTA() {
    return (
        <section className="w-full bg-linear-to-r from-white to-blue-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-black space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Start Your Healthcare Journey Today
                        </h2>
                        <p className="text-lg text-black">
                            Join thousands of patients who have found their perfect healthcare
                            match through our AI-powered platform.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <CheckCircle
                                    className="text-blue-500 shrink-0"
                                    size={24}
                                />
                                <span className="text-black">
                                    Instant AI-powered doctor matching
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle
                                    className="text-blue-500 shrink-0"
                                    size={24}
                                />
                                <span className="text-black">
                                    500+ verified healthcare professionals
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle
                                    className="text-blue-500 shrink-0"
                                    size={24}
                                />
                                <span className="text-black">Secure and HIPAA compliant</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold">
                                <span>Get Started Now</span>
                                <ArrowRight size={20} />
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-100 transition text-lg font-semibold">
                                Schedule a Demo
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-400 rounded-3xl transform rotate-3"></div>
                        <Image
                        width={500}
                        height={500}
                            src="https://img.freepik.com/premium-photo/young-doctor-man-raising-both-thumbs-up_1187-90952.jpg"
                            alt="Healthcare professionals"
                            className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        Ready in minutes
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        No waiting, start immediately
                                    </p>
                                </div>
                                <div className="bg-green-100 px-4 py-2 rounded-lg">
                                    <p className="text-green-600 font-bold">Free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
