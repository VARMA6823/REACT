import React from 'react'
const Header = () => {
  return (
    <section className=' z-[1000]'>
<nav className='w-full flex fixed top-0 left-0 z-[1000]  px-10 py-2 bg-black'>
<div className='flex py-5  gap-10 flex-1'>

<a href='https://www.google.com'><img  className='w-12 rounded-lg h-12' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png'/></a>

<a href='https://www.google.com'><img  className='w-12 rounded-lg h-12' src='https://cdn-icons-png.flaticon.com/512/124/124021.png'/></a>

<a href='https://www.google.com'><img  className='w-12 rounded-lg h-12' src='https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg?w=2000'/></a>

<a href='https://www.google.com'><img  className='w-12 rounded-lg h-12' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/></a>

</div>
<div className='flex  justify-end items-center font-semibold flex-1 gap-5 px-3 py-5 '>
  <a href='#'><h1 className='text-red-500 hover:text-yellow-400 cursor-pointer uppercase text-lg'>HOME</h1></a>
 <a href='#works'> <h1 className='text-white hover:text-yellow-400 cursor-pointer uppercase text-lg'>My Works</h1></a>
  <a href='#contact'><h1 className='text-white hover:text-yellow-400 cursor-pointer uppercase text-lg'>Contact</h1>
  </a>
</div>

</nav>
    </section>
  )
}

export default Header