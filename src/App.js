import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion"
import {BsDownload,BsLinkedin, BsInstagram,BsGithub} from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import 'aos/dist/aos.css';

const variants = {
  hidden: {opacity:0},
  visible: {opacity:1, transition: {type:"tween",duration:1}}
}
export default function Banner(){
  return(
      <div className='h-full max-h-[440px] mb-0 xl:mb-1 px-5'>
          <div className=''>
<div className='flex flex-col lg:flex-row' >
  <div className='lg:ml-8 xl:ml-[150px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1
  px-4 lg:px-0'>
    <motion.h2
     variants={variants}
     initial="hidden"
     animate="visible" 
     className='font-bold text-5xl text-lbl pb-5'>Vito Rizqi Ananda</motion.h2>
     <motion.div 
     variants={variants}
     initial="hidden"
     animate="visible" >
      <TypeAnimation
    sequence={[
        'Developer',
        2000,
        'Graphic Designer',
        2000
      ]}
      speed={50}
      wrapper='span'
      className='pb-1 text-xl'
      repeat={Infinity}
    />
     </motion.div>
    
        <motion.p
        variants={variants}
        initial="hidden"
        animate= {{opacity:1, transition: { type:"tween", duration:1.5}}}
         className='pb-4 text-gray'>
              a freelancer offering programming and design services
          </motion.p>
          <motion.ul
          variants={variants}
          initial="hidden"
          animate={{opacity:1, transition: {duration:1.75}}} 
           className='flex items-center text-3xl'>
        <li>
        <a target='_blank' href="https://www.linkedin.com/in/vito-rizqi-ananda/"><BsLinkedin className='transform mr-4 cursor-pointer transition duration-500 hover:scale-110'/></a>
          </li>
          <li>
          <a target='_blank' href="https://www.instagram.com/mcm___archive/"><BsInstagram className='transform mr-4 cursor-pointer transition duration-500 hover:scale-110'/></a>
          </li>
          <li>
          <a target='_blank' href="https://github.com/vitoananda"><BsGithub className=' transform mr-4 cursor-pointer transition duration-500 hover:scale-110'/></a>
          </li>
        </motion.ul>   
  </div>
  <motion.div
  variants={variants}
  initial="hidden"
  animate="visible" 
   className='hidden flex-1 lg:flex justify-end items-end'>
               <img
               className="mb-0 pb-0"
                alt="avatar"
                src="https://storage.googleapis.com/positive-wonder-386103/avatar%20vector.png"
                width={500}
                height={500}
      />
             </motion.div>
</div>
      </div>
      </div>
    
  )
}


