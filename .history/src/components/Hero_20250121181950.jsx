import React from 'react'

const Hero = () => {
    return (
        <section className="row" >
            <div className='col-6'><img style={{ width: "700px" }} src="https://www.seekpng.com/png/full/388-3886372_fashion-models-png.png" alt="" /></div>
            <div className="absolute  col-6  align-self-center text-center text-white">
                <h1 className="text-5xl text-black font-bold mb-4">Product Name</h1>
                <p className="text-lg text-black mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem culpa veniam totam deleniti. Consequuntur ipsum eius quasi dolor provident dolores veniam aliquam, laudantium aut perferendis, ratione consectetur in sunt tempora.A short description of the product that highlights its features or benefits.</p>
                <a
                    href="#"
                    className="text-black py-3rounded  px-6 text-xl font-semibold "
                >
                    Learn More
                </a>
            </div>
        </section>
    )
}

export default Hero