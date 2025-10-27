
import { Sparkles, ArrowRight, Stethoscope, Clock, Shield } from 'lucide-react'
import Image from 'next/image'
export function Hero() {
    return (
        <section className=" w-screen bg-linear-to-br from-blue-100 to-white py-16 md:py-24">
            <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
                            <Sparkles size={18} />
                            <span className="text-sm font-semibold">
                                AI-Powered Doctor Matching
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Find Your Perfect Doctor with{' '}
                            <span className="text-blue-600">AI Intelligence</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Our advanced AI algorithm analyzes your symptoms, medical history,
                            and preferences to match you with the most suitable healthcare
                            professionals in seconds.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold">
                                <span>Try AI Doctor Finder</span>
                                <ArrowRight size={20} />
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition text-lg font-semibold">
                                Learn More
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            <div className="flex items-start space-x-2">
                                <Stethoscope className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">500+</p>
                                    <p className="text-sm text-gray-600">Expert Doctors</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <Clock className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">24/7</p>
                                    <p className="text-sm text-gray-600">Available</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <Shield className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">100%</p>
                                    <p className="text-sm text-gray-600">Secure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-200 rounded-3xl transform rotate-3"></div>
                        <Image
                        width={500}
                        height={500}
                            src="https://media.istockphoto.com/id/1188648041/photo/male-doctor-using-smartphone-at-workplace-making-online-consultation.jpg?s=612x612&w=0&k=20&c=qAyD8oJnx-lEQkUPcLtIMmXcJhCfQ4TsHRXCX_25qOs="
                            alt="Doctor using AI technology"
                            className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                            <div className="flex items-center space-x-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <Sparkles className="text-green-600" size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">AI Match Found!</p>
                                    <p className="text-sm text-gray-600">
                                        Dr. Sarah Johnson - 98% compatibility
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
