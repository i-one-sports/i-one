import TwLayout from '@/components/layouts/Tw'
import { motion } from 'framer-motion'

import * as React from 'react'

const Home = () => {
  return (
    <TwLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col mx-auto justify-center items-center gap-3 px-5 pt-[44px] lg:px-[120px] lg:pt-[89px]"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[#000] text-base md:text-[2xl] max-w-[800px] lg:text-4xl lg:leading-[50px] play-fair font-semibold text-center"
        >
          Simplifying Football management for teams and players at a non-pro
          level.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className=" text-primaryLight max-w-[600px] text-sm lg:text-lg play-fair font-normal text-center"
        >
          Find a pitch near you, get enough players together, split the cost,
          and get picked into fair teams then track every goal, assist and clean
          sheet.
        </motion.p>
      </motion.div>
    </TwLayout>
  )
}

export default Home
