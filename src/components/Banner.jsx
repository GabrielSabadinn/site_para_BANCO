import React from 'react'
import styles from '../style'
import { discount,robotv2 } from '../assets'
import GetStarted from './GetStarted'

const Banner = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}> 
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className='w-[32px] h-[32opx]'/>
         <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> Desconto para {" "}
          <span className='text-white'>2 Meses</span>
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px]
           text-[52px] text-white ss:leading-[100px] leading-[75px]'>A Futura <br className='sm:block hidden'/> {" "} 
          <span className='text-gradient'>Geração</span>
         </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
             <GetStarted/>
          </div>
        </div>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[68px]
           text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Métodos De Pagamento </h1>

           <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Nossa equipe de especialistas utiliza uma metodologia para identificar os cartões de crédito mais adequados às suas necessidades. Analisamos as taxas de juros anuais, as taxas anuais.</p>
      
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} mb:my-0 my-10 relative`}>
        <img src={robotv2} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>
      <div className={` ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Banner