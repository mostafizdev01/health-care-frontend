
import { Star, MapPin, Award } from 'lucide-react'
import Image from 'next/image'
const doctors = [
    {
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        experience: '15 years',
        rating: 4.9,
        reviews: 234,
        location: 'New York, NY',
        image:
            'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    },
    {
        name: 'Dr. Michael Chen',
        specialty: 'Neurologist',
        experience: '12 years',
        rating: 4.8,
        reviews: 189,
        location: 'Los Angeles, CA',
        image:
            'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    },
    {
        name: 'Dr. Emily Rodriguez',
        specialty: 'Pediatrician',
        experience: '10 years',
        rating: 5.0,
        reviews: 312,
        location: 'Chicago, IL',
        image:
            'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    },
    {
        name: 'Dr. James Wilson',
        specialty: 'Orthopedic Surgeon',
        experience: '18 years',
        rating: 4.9,
        reviews: 276,
        location: 'Houston, TX',
        image:
            'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
    },
]
export function TopDoctors() {
    return (
        <section id="doctors" className="w-full bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Meet Our Top Doctors
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Highly qualified healthcare professionals ready to provide you with
                        the best medical care
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative">
                                <Image
                                    width={500}
                                    height={500}
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                                    <Star className="text-yellow-400 fill-current" size={16} />
                                    <span className="text-sm font-semibold">{doctor.rating}</span>
                                </div>
                            </div>
                            <div className="p-6 space-y-3">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {doctor.name}
                                </h3>
                                <p className="text-blue-600 font-semibold">
                                    {doctor.specialty}
                                </p>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Award size={16} />
                                    <span>{doctor.experience} experience</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <MapPin size={16} />
                                    <span>{doctor.location}</span>
                                </div>
                                <div className="text-sm text-gray-600">
                                    {doctor.reviews} patient reviews
                                </div>
                                <div className=' md:flex gap-3 '>
                                    <button className="w-full border-2 bg-blue-50 border-blue-500 text-blue-600 py-3 rounded-lg hover:bg-white cursor-pointer transition font-semibold">
                                        View Profile
                                    </button>
                                    <button className="w-full mt-3 md:mt-0 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                                        Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
