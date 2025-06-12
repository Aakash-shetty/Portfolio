import React from 'react';
import { GraduationCap, Award, Code, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
      title: "Education",
      description: "Kalasalingam Academy of Research and Education"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Certifications",
      description: "Google Certified Data Analyst, Coursera DeepLearning.AI"
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Expertise",
      description: "ML, DL, Computer Vision, NLP, Data Science"
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Tools",
      description: "Python, SQL, TensorFlow, PyTorch, Scikit-learn"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Driven by curiosity and powered by data, I transform complex problems into intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As a passionate Machine Learning Engineer and Data Scientist, I specialize in developing 
              intelligent systems that solve real-world problems. My expertise spans across Computer Vision, 
              Natural Language Processing, and Deep Learning, with a strong foundation in statistical analysis 
              and data-driven decision making.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I hold prestigious certifications including Google Certified Data Analyst and have completed 
              advanced courses from DeepLearning.AI through Coursera. My educational background from 
              Kalasalingam Academy of Research and Education, combined with hands-on project experience, 
              has equipped me with both theoretical knowledge and practical skills.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm passionate about leveraging cutting-edge AI technologies to create innovative solutions 
              that drive business value and make a positive impact on society.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;