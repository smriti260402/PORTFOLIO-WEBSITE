import React from 'react';
import { Github } from 'lucide-react';
import calculator from "../gallery/calculator.jpeg"
import chatapp from "../gallery/chatapp.png"
import digiclock from "../gallery/digital_clock.png"
import flbird from "../gallery/flappy_bird_snippet.png"
import pswrdgen from "../gallery/password_gen.png"
import portfolio from "../gallery/portfolio_snippet.png"
import qr from "../gallery/qr_code_gen.png"
import snake from "../gallery/sanke_game_snippet.png"

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'My Portfolio',
    description: 'A Portfolio Website built with React and Tailwind CSS is a modern, fast, and fully responsive web application designed to showcase my skills, projects, experience, and achievements. Using React.js, the portfolio offers a dynamic and interactive user experience, while Tailwind CSS ensures a sleek and minimalistic design with utility-first styling. The website is optimized for performance, SEO, and responsiveness, making it ideal for developers, designers, and professionals looking to create a strong online presence. ',
    image: portfolio,
    technologies: ['React', 'Tailwind CSS','Typescript'],
    githubUrl: 'https://github.com/smriti260402/My_portfolio',
  },
  {
    title: 'Sentiment Analysis System',
    description: 'I built a complete sentiment analysis platform that takes user reviews as input, processes them using Python and a Logistic Regression model trained on TF-IDF vectors, and predicts whether each review is positive or negative. The backend is powered by Flask and scikit-learn, while the frontend is built using React and Tailwind CSS for a clean modern UI. Users can upload a list of reviews and instantly get sentiment predictions along with visual insights, demonstrating the integration of machine learning with full-stack web development.',
    image: chatapp,
    technologies: ['Python', 'Flask','Logistic Regression','TF-IDF Vectorizer','React.js','Tailwind CSS','Axios (API calls)','Pandas', 'scikit-learn'],
    githubUrl: 'https://github.com/smriti260402/Sentiment-Analysis-System',
  },

  {
    title: 'Flappy Bird',
    description: 'Flappy Bird using Pygame is a side-scrolling arcade game where the player controls a bird to navigate through moving pipes while avoiding collisions. It features smooth gameplay, realistic gravity, dynamic obstacles, a scoring system, and engaging sound effects.',
    image: flbird,
    technologies: ['Python', 'Pygame', 'Canva'],
    githubUrl: 'https://github.com/smriti260402/Flappy_bird',
  },
  {
    title: 'QR-code Generator',
    description: 'A QR Code Generator using Python is a simple application that creates QR codes from text or URLs using the qrcode library. It allows users to generate scannable QR codes that can be saved as images. The project is lightweight, efficient, and useful for encoding information securely. It can be further enhanced by adding a GUI with tkinter for a user-friendly experience.',
    image: qr,
    technologies: ['Python', 'qrcode', 'pil'],
    githubUrl: 'https://github.com/smriti260402/QR_generator',
  },

  {
    title: 'Password Generator',
    description: 'A Password Generator using Python is a simple yet powerful tool that creates strong, random passwords to enhance security. It allows users to generate passwords with a mix of uppercase & lowercase letters, numbers, and special characters. The project can be implemented as a CLI-based tool or an interactive GUI using tkinter. Advanced features like password length customization and clipboard copying can be added for better usability.',
    image: pswrdgen,
    technologies: ['Python', 'tkinter','random', ' string'],
    githubUrl: 'https://github.com/smriti260402/password_generator',
  },
  {
    title: 'Digital Clock',
    description: 'A Digital Clock using Python is a simple GUI application that displays the current time in HH:MM:SS AM/PM format using the tkinter library. It updates every second using the time module, allowing real-time time tracking.',
    image: digiclock,
    technologies: ['Python', 'Tkinter', 'Time'],
    githubUrl: 'https://github.com/smriti260402/internpe_internship/tree/master/digital%20clock',
  },
  {
    title: 'Snake Game',
    description: 'The Snake Game using Python is a classic arcade game built with pygame, where the player controls a snake to eat food and grow in size while avoiding collisions. It features smooth movement, real-time score tracking, and increasing difficulty as the snake grows.',
    image: snake,
    technologies: ['Python', 'Pygame'],
    githubUrl: 'https://github.com/smriti260402/internpe_internship/tree/master/snake%20game',
  },

  

 
  {
    title: 'Calculator',
    description: 'A Calculator using Python is a simple application that performs basic arithmetic operations like addition, subtraction, multiplication, and division. It can be built using tkinter library for a GUI-based calculator or simply implemented as a command-line tool. The project helps in understanding GUI programming and event handling in Python. It can be further enhanced with advanced features like scientific calculations, history tracking, and keyboard support. ',
    image: calculator,
    technologies: ['Python', 'tkinter','math'],
    githubUrl: 'https://github.com/smriti260402/calculator',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Github className="w-6 h-6 text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-blue-900 text-blue-600 dark:text-purple-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;