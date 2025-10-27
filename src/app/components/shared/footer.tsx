import React from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import Link from 'next/link'
export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              PH HealthCare
            </h3>
            <p className="text-gray-400 mb-4">
              AI-powered healthcare platform connecting patients with the right
              doctors for optimal care.
            </p>
            <div className="flex space-x-4">
              <Link
                href=""
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href=""
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href=""
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href=""
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-1 shrink-0"
                />
                <span className="text-gray-400">
                  123 Healthcare Ave, Medical District, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <span className="text-gray-400">info@ph-healthcare.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PH HealthCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
