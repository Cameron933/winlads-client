import { motion } from 'framer-motion'
import React from 'react'
import nontera from '../../assets/images/partners/partner5.png'
import stripe from '../../assets/images/partners/partner6.png'

const OurPartners = () => {
  return (
    <div className='bg-white/75 md:py-10 py-5'>
        <motion.p
            initial={{ opacity: 0, y: "-40%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4 mt-4 text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
          >
            SOME OUR PARTNERS
          </motion.p>
          <div className='flex items-center justify-center gap-2 md:flex-row flex-col'>
                    <div className='md:w-1/4 w-3/4'>
                        <img src={nontera} className='w-full h-full object-contain' />
                    </div>
                    <div className='md:w-1/4 w-3/4'>
                        <img src={stripe} className='w-full h-full object-contain' />
                    </div>
          </div>
    </div>
  )
}

export default OurPartners