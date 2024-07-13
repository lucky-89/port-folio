import React from 'react'
import {delay, motion} from "framer-motion";

function Education() {
  return (
    <div class="education-content" id="education">
        <div className='container'>
        
        <motion.div  className="content"  animate={{y:30,x:30}}  transition={{duration:4}} >
            <p className='yello'>Education</p>
            <div className='table'>

            <div className='row'>
            
                <ul>
                    <li>B.tech CSE-85%</li>
                </ul>
                
                <p>Kamla Nehru Institute Of Technology, Sultanpur</p>
                <p>📆 2021-2025</p>
                </div>
                <div className='row'>
                <ul>
                    <li>High School-85.67%</li>
                </ul>
                <p>Adarsh Inter College, Adalhat</p>
                <p>📆 2016-2018</p>
                </div>

                <div className='row'>
                <ul>
                    <li>Intermediate-82%</li>
                </ul>
                <p>Udai Pratap Inter College, Varanasi</p>
                <p>📆 2018-2020</p>
                </div>

            </div>
            </motion.div>

            <motion.div  className="content"  animate={{y:30,x:-10}}  transition={{duration:4}} >
            <p className='yello'>Internship</p>
            <div className='table tab1'>

            <div className='row'>
            
                <ul>
                    <li>Webstack Academy</li>
                </ul>
                
                <p>Virtual MERN stack Internship</p>
                <p>📆 Aug 2023-Oct 2023</p>
                </div>
                <div className='row'>
                <ul>
                    <li>iNeuBytes Virtual Internship</li>
                </ul>
                <p>Frontend Developement</p>
                <p>📆 July 2023-Aug 2023</p>
                </div>
            </div>
            </motion.div>

        </div>

        <motion.div  className="content"  animate={{y:30}}  transition={{duration:4}} >
            <p className='yello'>Skills</p>
            <div className='table tab1'>

            <div className='row'>
            
                <ul>
                    <li>Problem Solving</li>
                    <li>C++</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>Web Developement</li>
                    <li>Frontend</li>
                    <li>Backend</li>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React</li>
                    <li>Nodejs</li>
                    <li>Sql</li>
                    
                </ul>
                </div>
            </div>
            </motion.div>

    </div>
  )
}

export default Education
