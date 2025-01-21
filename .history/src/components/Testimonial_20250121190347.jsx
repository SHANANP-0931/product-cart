import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const reviews = [
    {
        id: 1,
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        comments: 'This product is amazing! It has greatly improved my daily workflow.',
        stars: 5,
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        comments: 'Highly recommended. It exceeded my expectations and more.',
        stars: 4,
    },
    {
        id: 3,
        name: 'Sam Wilson',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        comments: 'A game-changer for my business. Would definitely purchase again!',
        stars: 5,
    },
];

const Testimonial = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Customer Reviews</h2>
                <div className="row">
                    {reviews.map((review) => (
                        <div key={review.id} className="col-md-4 mb-4">
                            <div className="card h-100 text-center shadow-sm">
                                <div className="card-body">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="rounded-circle mb-3"
                                        style={{ width: '80px', height: '80px' }}
                                    />
                                    <h5 className="card-title">{review.name}</h5>
                                    <div className="mb-3">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"

                                                className={` ${index < review.stars ? 'text-warning' : 'text-muted'
                                                    }`}
                                            >
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="card-text text-muted">{review.comments}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
