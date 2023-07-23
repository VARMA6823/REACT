import React from 'react'

const Contact = () => {
    
  const notify=()=>{
    alert("Form Submitted")

  }
  return (

  <section id='contact'>
    <div className='w-full flex justify-center py-5 items-center  bg-blue-400'>
   <h1 className='text-xl font-bold  uppercase'>Contact Me</h1>
    </div>
     <section className='flex relative justify-center items-center px-10 py-10 bg-green-400 h-screen'>
    <img className='h-32 rounded-full absolute mr-10' src='https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?w=2000'/>
<form onSubmit={notify} className='flex bg-slate-700 shadow-xl px-10 py-10  flex-col gap-5 justify-center  items-center'>
<input placeholder='First Name' type='text' className='w-[400px] bg-slate-100 outline-none text-lg px-2 py-1 text-black' required/>
<input placeholder='Last Name' type='text' className='w-[400px] bg-slate-100 outline-none text-lg px-2 py-1 text-black' required/>
<input placeholder='Email Address' type='email' className='w-[400px] bg-slate-100 outline-none text-lg px-2 py-1 text-black' required/>
<input placeholder='Mobile' type='tel' className='w-[400px] bg-slate-100 outline-none text-lg px-2 py-1 text-black' required/>
<input placeholder='Your Website' type='url' className='w-[400px] bg-slate-100 outline-none text-lg px-2 py-1 text-black' required/>

<button  className="px-2 py-2 text-lg font-semibold bg-yellow-400 border-1 border-black rounded-lg" type='submit'>Submit</button>

 

</form>
   </section>
  </section>
  )
}

export default Contact