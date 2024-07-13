import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Home() {
  return (
    <div class="home">
  <div class="content">
    <div class="flex child_home">
      <div>
        <img src="https://avatars.githubusercontent.com/u/115821196?v=4" alt="" />
      </div>

      <div class="para">
        <h5>Hi, I'm</h5>
        <p class="text">Gurudayal</p>
        <p class="last">Welcome to my portfolio website! I'm a passionate and aspiring software engineer with a strong desire to create innovative solutions and push the boundaries of technology. With a deep love for coding and problem-solving, I am constantly seeking opportunities to learn and grow in this ever-evolving field.</p>

        <div class="flex">
          <a href="https://drive.google.com/file/d/1CoulXRyDIHG1ii0RYnVeCpzV92sPoFOv/view?usp=drive_link" class="btn active" target="_blank">Download CV</a>
          <a href="mailto:lucky9719@gmail.com" class="btn btn1">Contact</a>
        </div>
        <div class="social">
                <a href="mailto:luckymaurya9719@gmail.com.com"><CiMail/></a>
                <a href="https://github.com/lucky-89"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/gurudayal-maurya-971999242"><CiLinkedin/></a>
            </div>
      </div>
   
 
</div>
</div>
</div>
  )
}

export default Home
