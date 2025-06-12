import React from 'react';
import { Download, Github, Linkedin, Mail, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold">
              AB
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Aakash Beri
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Machine Learning Engineer & Data Scientist
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionate ML Engineer specializing in Computer Vision, NLP, and Deep Learning. 
              Google Certified Data Analyst with expertise in Python, SQL, and advanced AI solutions. 
              Ready to drive innovation in data-driven decision making.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Aakash-shetty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aakash-beri/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://leetcode.com/u/aakashshetty/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Code size={28} />
            </a>
            <a 
              href="mailto:aakashberi4809@gmail.com" 
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;