import { HERO_CONTENT } from '../constants'
import  profilePic  from "../assets/new.jpg";
import {motion } from "motion/react"

const container = (delay) =>({
    hidden:  { x: -100, opacity:0} ,
    visible:{
        x:0, 
        opacity: 1,
        transition:{duration:0.5, delay: delay}
    } ,
  
})

function NewHero() {
  return (
    <>
    <div className='border-b border-neutral-900 lg:mb-36 pb-4'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 md:mt-10'>
                <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                        variants={container(0)}
                        initial= "hidden"
                        animate = "visible"
                        className='text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl pb-10'>Hasibul Alam.</motion.h1>
                        <motion.span
                           variants={container(0.5)}
                           initial= "hidden"
                           animate = "visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent  text-4xl tracking-tight'> Front-End Developer</motion.span>
                        <motion.p
                         variants={container(1)}
                         initial= "hidden"
                         animate = "visible"
                        className='my-2 max-w-l py-3 font-light tracking-tighter max-w-xl pr-2'> {HERO_CONTENT} </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:px-8 py-8 lg:py-0'>
                <div className='flex justify-center  '>
                    <motion.img
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity: 1}}
                    transition={{duration:1, delay:1.2}}
                    className='rounded-lg'
                    src={profilePic} alt="Profilepic" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewHero