import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from "../components/Button"

const CardDeal = () => {
  return (
   <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Encontre o cartão de crédito
      <br className='sm:block hidden'/> em 5 passos fáceis</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Oferecemos um serviço simplificado para encontrar seu cartão de crédito em cinco passos rápidos. Identifique os lugares comuns, revise recibos ou transações, contate a instituição financeira, utilize apps para rastrear gastos e faça uma busca minuciosa nos locais frequentados. Com essas etapas simples, facilitamos a recuperação do seu cartão.
      </p>
      <Button styles="mt-10"></Button>
    </div>
  <div className={layout.sectionImg}>
    <img src={card} className='w-[100%] '  />
  </div>
   </section>
  )
}

export default CardDeal