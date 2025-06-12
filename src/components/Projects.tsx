import React from 'react';
import { ExternalLink, Github, Eye, Brain, BarChart3, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mushroom Classification System",
      category: "Computer Vision",
      description: "Advanced image classification system using deep learning to identify mushroom species with 95%+ accuracy. Implemented CNN architecture with transfer learning using ResNet50.",
      tech: ["Python", "TensorFlow", "OpenCV", "ResNet50", "Flask"],
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-400 to-blue-500",
      features: [
        "Real-time image classification",
        "95%+ accuracy on test dataset",
        "Web-based interface for easy access",
        "Comprehensive species database"
      ]
    },
    {
      title: "Sentiment Analysis Engine",
      category: "Natural Language Processing",
      description: "Sophisticated NLP model for analyzing sentiment in customer reviews and social media data. Utilized BERT and ensemble methods for enhanced performance.",
      tech: ["Python", "BERT", "NLTK", "Transformers", "Django"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      features: [
        "Multi-class sentiment classification",
        "Real-time text processing",
        "Batch analysis capabilities",
        "Interactive dashboard"
      ]
    },
    {
      title: "Smart Grid Management System",
      category: "Artificial Intelligence",
      description: "AI-powered energy management system optimizing power distribution and consumption patterns. Implemented reinforcement learning for dynamic load balancing.",
      tech: ["Python", "TensorFlow", "Reinforcement Learning", "IoT", "React"],
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      features: [
        "Predictive load forecasting",
        "Automated demand response",
        "Real-time monitoring dashboard",
        "Energy efficiency optimization"
      ]
    },
    {
      title: "TDS Prediction Analytics",
      category: "Predictive Analytics",
      description: "Machine learning model for predicting Total Dissolved Solids (TDS) levels in water systems. Applied ensemble methods and time series analysis for accurate forecasting.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Plotly"],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      features: [
        "Time series forecasting",
        "Multi-variable regression analysis",
        "Automated data preprocessing",
        "Interactive visualization dashboard"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing real-world applications of machine learning and AI technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-800 text-blue-300 px-3 py-1 rounded-full text-xs border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 border border-gray-600 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
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