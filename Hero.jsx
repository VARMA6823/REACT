import React from 'react'

const Hero = () => {
  return (
    <section className="flex justify-center items-center py-20 border-b-2 border-red-400 bg-slate-400 w-full px-10">
        <div className='w-full flex flex-col justify-center items-center gap-3'>
            <img className='rounded-full h-64 border-2 border-black animate-pulse ' src='https://i.pinimg.com/originals/8e/d4/04/8ed4040e06e68818a07c3e15ac7c18dc.jpg'/>
          <h1 className='font-[Cinzel] text-xl font-semibold'>Aspiring <span className='text-red-500'>Full Stack</span> Developer</h1>
        </div>
    </section>
  )
}

export default Hero