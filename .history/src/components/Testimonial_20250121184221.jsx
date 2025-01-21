import React from 'react';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        feedback: 'This product is amazing! It has greatly improved my daily workflow.',
        stars: 5,
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        feedback: 'Highly recommended. It exceeded my expectations and more.',
        stars: 4,
    },
    {
        id: 3,
        name: 'Sam Wilson',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        feedback: 'A game-changer for my business. Would definitely purchase again!',
        stars: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
                <div className="flex justify-center space-x-8 overflow-hidden">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="w-1/3 px-4 py-8 bg-white shadow-lg rounded-lg text-center"
                        >
                            <img
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                                src={testimonial.image}
                                alt={testimonial.name}
                            />
                            <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className={`w-5 h-5 ${index < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        x="0"
                                        y="0"
                                    >
                                        <path d="M10 15l-5.854 3.072L5.764 11 1 7.236l6.928-1L10 0l2.072 6.236 6.928 1L14.236 11l1.618 7.072L10 15z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600">{testimonial.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
