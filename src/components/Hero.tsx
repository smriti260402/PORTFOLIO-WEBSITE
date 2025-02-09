import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, Code } from 'lucide-react';
import resumePDF from "../gallery/SmritiSarojSinha_Resume.pdf"
import Myphoto from "../gallery/photo.jpg"


const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600 dark:from-pink-400 dark:to-blue-400">
              Hi, I'm 
              </h1>
              <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600 dark:from-pink-400 dark:to-blue-400">SMRITI SAROJ SINHA
              </h1>
            <p className="text-2xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400 dark:from-pink-300 dark:to-blue-300">
              <h1 >PYTHON DEVELOPER</h1>
            </p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Building the future with Python and web development — where every line of code is an adventure!
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/smriti260402" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github className="w-6 h-6" />
              </a>
              <a href="http://www.linkedin.com/in/smriti-sinha26" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://leetcode.com/u/smritisinhaofficial26/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Code className="w-6 h-6" />
              </a>
              
              <a href="https://api.whatsapp.com/send?phone=917496843750" target="_blank" rel="noopener noreferrer" className="social-icon">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="mailto:smritisinhaofficial26@gmail.com" className="social-icon">
                <Mail className="w-6 h-6" />
              </a>

              
            </div>
            <br/>
            

            <div 
  onClick={() => window.open(resumePDF, "_blank")}  // Opens resume in a new tab
  className="w-60 h-12 flex items-center justify-center text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-full shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
>
  Download Resume
</div>
          </div>
          
          <div className="relative w-80 h-80 mx-auto">
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-200 to-blue-200 p-2">
    <div className="w-full h-full rounded-full bg-white p-1">
      <img
        src={Myphoto}
        alt="Profile"
        className="rounded-full w-full h-full object-cover shadow-2xl"
      />
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
