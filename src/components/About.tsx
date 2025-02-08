import React from 'react';
import { BookOpen, Briefcase, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-pink-500" />
              <h3 className="text-xl font-semibold ml-2">Education</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
  B.Tech in Computer Science And Engineering - 
  <span className="font-bold text-black dark:text-white"> 8.10 SGPA </span> 
  (CENTRAL UNIVERSITY OF HARYANA)
</p>
<div>
              <br />
              <p className="text-gray-600 dark:text-gray-300">Matriculation - <span className="font-bold text-black dark:text-white"> 92% </span> (Kendriya Vidyalaya).
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300">Intermediate -<span className="font-bold text-black dark:text-white">94%</span>  (Kendriya Vidyalaya).
            </p>
</div>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 text-pink-500" />
              <h3 className="text-xl font-semibold ml-2">Experience</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
            <span className="font-bold text-black dark:text-white"> Intern at Techgyan Avenues - IIT Bombay</span> - 
            Machine Learning using Python <br/>Developed the Rock And Mine prediction Model using the Logistic
             Regression algorithm of machine learning.
            </p>
        <br />
          <div>
             <p className="text-gray-600 dark:text-gray-300"> 
             <span className="font-bold text-black dark:text-white"> Intern at InternPe</span> - 
              Python Developer <br/> Developed the projects like Snake Game, Tic Tac Toe game using pygame library of python and the Digital clock using the concepts of python.
            </p>
          </div>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-pink-500" />
              <h3 className="text-xl font-semibold ml-2">Interests</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate about developing interactive applications with Python and creating visually stunning, responsive websites that deliver an exceptional user experience.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
I am a passionate developer with a strong enthusiasm for building projects using Python and its powerful libraries, as well as working with modern web development tools. With a keen interest in crafting innovative solutions, I have developed a variety of projects that showcase my technical expertise and problem-solving abilities. I am always eager to explore new technologies, take on challenging opportunities, and continuously enhance my skills. My goal is to create impactful applications and contribute to meaningful projects while learning and growing in the ever-evolving world of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;