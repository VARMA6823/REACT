import React from 'react'

const Card = ({imgC}) => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-5 bg-slate-100 shadow-xl rounded-lg'>
        <img className='h-[300px] rounded-lg shadow-lg w-[400px]' src={`${imgC}`}/>
        <h1 className='text-red-400 font-cinzel text-lg uppercase font-bold'>Web Development</h1>
    </section>
  )
}

export default Card