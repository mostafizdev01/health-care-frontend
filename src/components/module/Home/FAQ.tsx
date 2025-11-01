"use client"
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
const faqs = [
    {
        question: 'How does the AI doctor matching work?',
        answer:
            'Our AI analyzes your symptoms, medical history, location, and preferences to match you with the most suitable doctors. The algorithm considers specialty, experience, patient ratings, and availability to ensure the best match.',
    },
    {
        question: 'Is my health information secure?',
        answer:
            'Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your medical records and personal information are stored securely and never shared without your explicit consent.',
    },
    {
        question: 'Can I have virtual consultations?',
        answer:
            "Yes! We offer secure video consultations with licensed doctors. You can choose between in-person visits, video calls, or phone consultations based on your preference and the doctor's recommendation.",
    },
    {
        question: 'How quickly can I get an appointment?',
        answer:
            'Many doctors offer same-day or next-day appointments. Our AI prioritizes urgent cases and can often connect you with a doctor within hours for critical situations.',
    },
    {
        question: 'What if I need to cancel or reschedule?',
        answer:
            'You can easily cancel or reschedule appointments through our platform. We recommend doing so at least 24 hours in advance when possible to help doctors manage their schedules.',
    },
    {
        question: 'Do you accept insurance?',
        answer:
            'Most of our doctors accept major insurance plans. You can filter doctors by insurance acceptance during the search process. We also offer transparent pricing for self-pay patients.',
    },
]
export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about our platform
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-linear-to-br from-blue-50 to-white rounded-xl border border-blue-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50 transition"
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp
                                        className="text-blue-600 shrink-0"
                                        size={24}
                                    />
                                ) : (
                                    <ChevronDown
                                        className="text-blue-600 shrink-0"
                                        size={24}
                                    />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                        Contact Our Support Team →
                    </button>
                </div>
            </div>
        </section>
    )
}