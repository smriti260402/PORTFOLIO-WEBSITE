import React from 'react';
import { Code, Database, Layout, Server } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 75, category: 'Programming Skills' },
  { name: 'Node', level: 80, category: 'Programming Skills' },
  { name: 'HTML/CSS', level: 70, category: 'Programming Skills' },
  { name: 'React', level: 80, category: 'Programming Skills' },
  { name: 'Javascript', level: 75, category: 'Programming Skills' },
  { name: 'Tailwind CSS', level: 60, category: 'Programming Skills' },

  { name: 'DSA', level: 80, category: 'Technical Skills' },
  { name: 'Competitive Programming', level: 60, category: 'Technical Skills' },
  { name: 'Git/Github', level: 85, category: 'Technical Skills' },
  { name: 'MySQL', level: 70, category: 'Technical Skills' },
  { name: 'Machine Learning ', level: 60, category: 'Technical Skills' },

  { name: 'Problem solving ', level: 75, category: 'Soft Skills' },
  { name: 'Critical Thinking ', level: 80, category: 'Soft Skills' },
  { name: 'Collaboration ', level: 85, category: 'Soft Skills' },
  { name: 'Communication ', level: 90, category: 'Soft Skills' },
  { name: 'Time Management ', level: 85, category: 'Soft Skills' },
  { name: 'Creativity ', level: 90, category: 'Soft Skills' },
  
 
];

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                {category === 'Language' && <Layout className="w-6 h-6 text-purple-500" />}
                
                <h3 className="text-3xl font-semibold ml-2">{category}</h3>
              </div>

              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-pink-400 to-blue-400 h-2.5 rounded-full transition-all duration-500"

                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;