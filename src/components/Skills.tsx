import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "R", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Deep Learning", level: 92 },
        { name: "Computer Vision", level: 88 },
        { name: "Natural Language Processing", level: 85 },
        { name: "MLOps", level: 82 }
      ]
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Data Analysis", level: 94 },
        { name: "Statistical Modeling", level: 88 },
        { name: "Data Visualization", level: 86 },
        { name: "Predictive Analytics", level: 90 }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "Pandas", level: 95 }
      ]
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", 
    "OpenCV", "NLTK", "Matplotlib", "Seaborn", "SQL", "MongoDB", 
    "Docker", "Git", "Jupyter", "Google Cloud", "AWS", "Tableau"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive technical skills across the full ML and data science stack
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full border border-gray-600 hover:border-blue-500 hover:bg-gray-700 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;