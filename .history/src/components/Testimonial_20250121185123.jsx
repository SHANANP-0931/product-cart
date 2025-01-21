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
        <section className="py-4 bg-light">
            <div className="container text-center">
                <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
                <div className="row justify-content-center">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="col-md-4 mb-3">
                            <div className="card shadow-sm h-100">
                                <img
                                    className="card-img-top rounded-circle mx-auto mt-3"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    style={{ width: '80px', height: '80px' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title text-sm">{testimonial.name}</h5>
                                    <div className="mb-2">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className={`w-5 h-5 ${index < testimonial.stars ? 'text-warning' : 'text-muted'}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.854 3.072L5.764 11 1 7.236l6.928-1L10 0l2.072 6.236 6.928 1L14.236 11l1.618 7.072L10 15z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="card-text text-muted text-sm">{testimonial.feedback}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
