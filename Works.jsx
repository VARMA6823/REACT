import React from 'react'
import Card from './Card'
const Works = () => {
    const image=[
        'https://hbr.org/resources/images/article_assets/2018/08/R1805D_CHIN.jpg',
        'https://www.appnwebtechnologies.com/public/images/section/1622705227bannerwebpage.png',
        'https://www.ptc.com/-/media/Images/blog/CAD/concept-design-900x450.jpg?h=450&iar=0&w=900',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6z_BQr14nZizTySfdA_s68WiZJut05imH1jOunFRlkdl7XzMIpg6Q4jwBBzpIBQWb2k8&usqp=CAU'
  
          ]
                return (
   <section id='works' className='bg-yellow-200 gap-10 py-5 justify-center content-center items-center px-10 grid grid-cols-2 grid-rows-2 '>
{
    image.map((imgC)=>{
        return(
            <Card imgC={imgC}/>
        )
    })
}

   </section>
  )
}

export default Works