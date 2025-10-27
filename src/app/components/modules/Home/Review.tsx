
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
const reviews = [
    {
        name: 'Jennifer Martinez',
        rating: 5,
        comment:
            'The AI doctor matching feature is incredible! It connected me with the perfect specialist for my condition. The entire process was seamless and professional.',
        image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        date: '2 weeks ago',
    },
    {
        name: 'Robert Thompson',
        rating: 5,
        comment:
            'Outstanding service! I found an excellent cardiologist through their AI system. The doctor was knowledgeable, caring, and exactly what I needed.',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        date: '1 month ago',
    },
    {
        name: 'Lisa Anderson',
        rating: 5,
        comment:
            'Best healthcare platform I have used. The AI suggestions were spot-on, and booking an appointment was so easy. Highly recommend!',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        date: '3 weeks ago',
    },
]
export function Reviews() {
    return (
        <section
            id="reviews"
            className="w-full bg-linear-to-br from-blue-50 to-white py-16 md:py-24"
        >
            <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Our Patients Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real experiences from real patients who found their perfect
                        healthcare match
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Quote className="text-blue-600 mb-4" size={32} />
                            <div className="flex mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="text-yellow-400 fill-current"
                                        size={20}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {review.comment}
                            </p>
                            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                                <Image
                                width={500}
                                height={500}
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">{review.name}</p>
                                    <p className="text-sm text-gray-600">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
