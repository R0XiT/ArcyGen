import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">Create Ai Images</h1>
      <p className="text-blue-500 italic font-medium mb-12">Turn your imagination into visuals</p>
      <div className="flex flex-col gap-10 md:gap-20 md:flex-row items-center">
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg mb-8 md:mb-0' />
        <div className="flex flex-col gap-6 bg-white/60 rounded-xl p-8 shadow-lg">
            <h2 className="mb-4 font-semibold text-lg text-gray-800">
              <span className="text-blue-600 font-bold">Unleash your creativity</span> like never before with our powerful AI Image Generator.<br/>
              Whether you're a designer, a storyteller, a student, or just someone with an idea — we've got you covered.
            </h2>
            <p className="mb-4 text-gray-700">
              <span className="font-bold text-blue-700">No design skills? No problem.</span><br/>
              From fantasy characters and futuristic landscapes to realistic portraits and product concepts — generate anything you can imagine.<br/>
              It's fast, it's fun, and it's just the beginning of what you can create.
            </p>
            <p className="text-gray-600 font-semibold">
              Start with an idea.<br/>
              End with a masterpiece.<br/>
              <span className="text-blue-500">Simply. Effortlessly. Visually.</span>
            </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
