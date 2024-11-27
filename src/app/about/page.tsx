import React from 'react'

const page = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{ backgroundImage: "url('/bg13.jpg')" }}>
       <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
          <h2 className='text-4xl font-bold mb-4' data-aos='fade-up'>About Us</h2>
          <p>At WATCH HUB, we craft innovative and stylish watches that blend technology and elegance. Our mission is to redefine timekeeping with designs that inspire confidence and functionality, ensuring every moment is both timeless and unique.</p>
       </div>
    </section>
  )
}

export default page
