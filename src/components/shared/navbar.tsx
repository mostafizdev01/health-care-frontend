"use client"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href={'/'} className="text-2xl font-bold text-blue-600">
                            HealthCare
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href=""
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Home
                        </Link>
                        <Link
                            href="doctors"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Doctors
                        </Link>
                        <Link
                            href="services"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Services
                        </Link>
                        <Link
                            href="reviews"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Reviews
                        </Link>
                        <Link
                            href="dashboard"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            dashboard
                        </Link>
                        <Link href={"/login"} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                            Login
                        </Link>
                    </div>
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-3">
                        <Link
                            href=""
                            className="block text-gray-700 hover:text-blue-600 transition"
                        >
                            Home
                        </Link>
                        <Link
                            href="doctors"
                            className="block text-gray-700 hover:text-blue-600 transition"
                        >
                            Doctors
                        </Link>
                        <Link
                            href="services"
                            className="block text-gray-700 hover:text-blue-600 transition"
                        >
                            Services
                        </Link>
                        <Link
                            href="reviews"
                            className="block text-gray-700 hover:text-blue-600 transition"
                        >
                            Reviews
                        </Link>
                        <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                            Login
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}