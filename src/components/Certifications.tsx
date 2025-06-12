import React from 'react';
import { Award, CheckCircle, Star, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2024",
      description: "Comprehensive program covering data analysis, visualization, and statistical methods using industry-standard tools.",
      skills: ["Data Analysis", "SQL", "Tableau", "R", "Data Visualization"],
      badge: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
      verified: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI - Coursera",
      date: "2024",
      description: "Advanced specialization covering neural networks, CNN, RNN, and cutting-edge deep learning techniques.",
      skills: ["Deep Learning", "Neural Networks", "TensorFlow", "CNN", "RNN"],
      badge: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&h=100&fit=crop&crop=center",
      verified: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning Course",
      issuer: "Stanford University - Coursera",
      date: "2023",
      description: "Foundational course covering supervised and unsupervised learning algorithms and practical applications.",
      skills: ["Machine Learning", "Python", "Algorithms", "Statistics"],
      badge: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=center",
      verified: true,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    { icon: <Award className="w-5 h-5" />, text: "Top 5% performer in Google Data Analytics Certificate" },
    { icon: <Star className="w-5 h-5" />, text: "Completed DeepLearning.AI specialization with honors" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Verified certificates with industry recognition" },
    { icon: <Calendar className="w-5 h-5" />, text: "Continuous learning with latest AI/ML trends" }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Industry-recognized certifications validating expertise in machine learning and data science
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-blue-400 font-medium">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                  </div>
                  {cert.verified && (
                    <div className="flex items-center text-green-400">
                      <CheckCircle size={20} />
                    </div>
                  )}
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Award size={16} />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-300">
                <div className="text-blue-400">{achievement.icon}</div>
                <span>{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;