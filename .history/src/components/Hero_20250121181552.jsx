import React from 'react'

const Hero = () => {
    return (
        <section className="row" >
            <div className='col-6'><img style={{ width: "700px" }} src="https://www.seekpng.com/png/full/388-3886372_fashion-models-png.png" alt="" /></div>
            <div className="absolute mt-5 col-6 justify-content-center align-items-center d-flex text-center text-white">
                <h1 className="text-5xl text-black font-bold mb-4">Product Name</h1>
                <p className="text-lg text-black mb-6">A short description of the product that highlights its features or benefits.</p>
                <a
                    href="#"
                    className="bg-blue-500 text-white py-3 text-black bg-black px-6 rounded-full text-xl font-semibold hover:bg-blue-600 transition-all"
                >
                    Learn More
                </a>
            </div>
        </section>
    )
}

export default Hero