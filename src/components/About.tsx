import React from 'react';
import { BookOpen, Briefcase, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">About Me</h2>

        {/* Experience - full width */}
<div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 mb-8 transform hover:scale-105 transition-transform duration-300">
  <div className="flex items-center mb-4">
    <Briefcase className="w-6 h-6 text-pink-500" />
    <h3 className="text-3xl font-semibold ml-2 text-center">Experience</h3>
  </div>

  <p className="text-gray-600 dark:text-gray-300">
    <span className="font-bold text-black dark:text-white text-2xl">Devstringx Technologies Pvt. Ltd. - Software Developer</span> <br />
    - Completed a <span className="font-bold">2-month MERN stack training</span>, developing <span className="font-bold">Rootify</span>, a full-stack <span className="font-bold">plant e-commerce web application</span> using <span className="font-bold">React, Node.js, Express, MySQL, Tailwind CSS</span>, and <span className="font-bold">Cloudinary</span> for image hosting. <br />
    - Implemented <span className="font-bold">CRUD operations, product listing, seller-side dashboards</span>, and <span className="font-bold">responsive UI design</span>. <br />
    - Continued as a <span className="font-bold">2-month intern</span>, gaining experience in <span className="font-bold">real-world software development practices</span>, working on feature enhancements and debugging. <br />
    - Currently working as a <span className="font-bold">Software Developer</span> on the company’s core product <span className="font-bold">CloveHR - HRMS platform</span>, contributing to <span className="font-bold">backend APIs, frontend dashboards, employee management modules, and workflow optimizations</span>.
  </p>
  
  <br />

  <p className="text-gray-600 dark:text-gray-300">
    <span className="font-bold text-black dark:text-white text-2xl">Intern at Techgyan Avenues - IIT Bombay - Machine Learning using Python</span> <br />
    - Developed a <span className="font-bold">Rock and Mine Prediction Model</span> using <span className="font-bold">Python</span> and <span className="font-bold">Logistic Regression</span> algorithm. <br />
    - Implemented <span className="font-bold">data preprocessing, feature extraction, model training, and evaluation</span> to predict outcomes efficiently. <br />
    - Enhanced problem-solving and analytical skills in <span className="font-bold">machine learning model deployment and interpretation</span>.
  </p>

  <br />

  <p className="text-gray-600 dark:text-gray-300">
    <span className="font-bold text-black dark:text-white text-2xl">Intern at InternPe - Python Programming</span> <br />
    - Built interactive projects using <span className="font-bold">Python</span> such as <span className="font-bold">Snake Game, Tic Tac Toe, and Digital Clock</span> using <span className="font-bold">Pygame library</span>. <br />
    - Applied concepts like <span className="font-bold">loops, conditionals, functions, and event handling</span> for game logic and GUI development. <br />
    - Developed <span className="font-bold">problem-solving, coding best practices, and project management skills</span> during the internship.
  </p>
</div>


        {/* Education + Interests grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-pink-500" />
              <h3 className="text-3xl font-semibold ml-2 text-center">Education</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              B.Tech in Computer Science And Engineering -
              <span className="font-bold text-black dark:text-white"> 7.5 CGPA </span>
              (CENTRAL UNIVERSITY OF HARYANA)
            </p>
            <div>
              <br />
              <p className="text-gray-600 dark:text-gray-300">Matriculation - <span className="font-bold text-black dark:text-white"> 86% </span> (Kendriya Vidyalaya).</p>
              <br />
              <p className="text-gray-600 dark:text-gray-300">Intermediate -<span className="font-bold text-black dark:text-white">88%</span> (Kendriya Vidyalaya).</p>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
  <div className="flex items-center mb-4">
    <Heart className="w-6 h-6 text-pink-500" />
    <h3 className="text-3xl font-semibold ml-2 text-center">Interests</h3>
  </div>
  <p className="text-gray-600 dark:text-gray-300">
    Passionate about <span className="font-bold">developing interactive software applications</span> using <span className="font-bold">Python</span> and modern <span className="font-bold">web technologies</span>. I enjoy creating <span className="font-bold">visually appealing, responsive websites</span> and tools that provide an <span className="font-bold">exceptional user experience</span>. Exploring <span className="font-bold">innovative software solutions</span> and improving my technical skills continuously is what drives me.
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
