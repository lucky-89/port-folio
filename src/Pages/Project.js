import React,{useEffect} from 'react'
import {delay, motion} from "framer-motion";

function Project() {

  return (
    <div className='project'>
      <p className='mypro'>My Project</p>
      <p>Discover my projects, where creativity meets innovation</p>

      <div className='flexx'>

      <motion.div  className="compo"  animate={{x:30,scale:1.1}}  transition={{duration:5}} >
            
        <img src="https://i.ibb.co/y8wXxWF/Screenshot-2023-10-06-010055.png" alt="Description of the image" />
            
            <p>Food App</p>
            <p className='compara'>I have developed a food ordering website where users can order available food from any restaurant, provide their address, make payments online or offline, and check the status of their orders.</p>
            </motion.div>

            <motion.div  className="compo"  animate={{x:30,scale:1.1}}  transition={{duration:5}} >
            
        <img src="https://i.ibb.co/NNDjnbm/Screenshot-2024-07-13-184641.png" alt="Description of the image" />
            
            <p>ATGWorld Page</p>
            <p className='compara'>It is a frontend-based project that is fully responsive across all display widths.</p>
            </motion.div>

            <motion.div  className="compo"  animate={{x:30,scale:1.1}}  transition={{duration:5}} >
            
            <img src="https://i.ibb.co/KKSPWMH/Screenshot-2024-07-13-190743.png" alt="Description of the image" />
                
                <p>Random Joke Generator</p>
                <p className='compara'>
                The random joke generator website provides humor at the click of a button, offering an assortment of jokes spanning various categories. Users enjoy endless amusement with fresh jokes delivered instantly, making it a delightful source of laughter and entertainment.It uses different endpoint of api.</p>
            </motion.div>
            <motion.div  className="compo"  animate={{x:30,scale:1.1}}  transition={{duration:5}} >
            
            <img src="https://i.ibb.co/3Wc6n60/Screenshot-2024-07-13-194717.png" alt="Description of the image" />
                
                <p>Finance Management</p>
                <p className='compara'>The finance management web project provides robust tools for budgeting, expense tracking, and financial planning. It offers secure transactions, insightful analytics, and personalized recommendations, empowering users to achieve financial goals efficiently.</p>
            </motion.div>

      </div>
    </div>
  )
}

export default Project
