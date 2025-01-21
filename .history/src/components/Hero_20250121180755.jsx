import React from 'react';

const Hero = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: 'url("https://www.seekpng.com/png/full/388-3886372_fashion-models-png.png")' }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="relative text-center text-white px-4 md:px-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-md">
                    Product Name
                </h1>
                <p className="text-lg md:text-xl mb-6 text-shadow-md">
                    A short description of the product that highlights its features or benefits.
                </p>
                <a
                    href="#"
                    className="bg-blue-500 text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-blue-600 transition-all"
                >
                    Learn More
                </a>
            </div>
        </section>
    );
};

export default Hero;
