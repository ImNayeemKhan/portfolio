import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Network Monitoring Dashboard",
      description: "Real-time network monitoring system with automated alerting and performance analytics for ISP operations.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "web",
      github: "https://github.com",
      demo: "https://demo.com",
      features: ["Real-time monitoring", "Automated alerts", "Performance analytics", "Custom dashboards"]
    },
    {
      id: 2,
      title: "VLAN Configuration Tool",
      description: "Interactive tool for designing and validating VLAN configurations with visual network topology.",
      image: "/api/placeholder/400/300",
      technologies: ["JavaScript", "D3.js", "HTML5", "CSS3"],
      category: "tool",
      github: "https://github.com",
      demo: "https://demo.com",
      features: ["Visual topology", "Configuration validation", "Export options", "Template library"]
    },
    {
      id: 3,
      title: "Packet Analysis Platform",
      description: "Web-based packet analyzer for network troubleshooting with advanced filtering and visualization.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "Flask", "React", "Wireshark"],
      category: "analysis",
      github: "https://github.com",
      demo: "https://demo.com",
      features: ["Packet capture", "Advanced filtering", "Traffic visualization", "Export reports"]
    },
    {
      id: 4,
      title: "Network Documentation System",
      description: "Comprehensive documentation platform for network infrastructure with automated diagram generation.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Docker"],
      category: "web",
      github: "https://github.com",
      demo: "https://demo.com",
      features: ["Auto-generated diagrams", "Version control", "Team collaboration", "Search functionality"]
    },
    {
      id: 5,
      title: "ISP Customer Portal",
      description: "Customer-facing portal for service management, billing, and support ticket submission.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Firebase", "Stripe", "Material-UI"],
      category: "web",
      github: "https://github.com",
      demo: "https://demo.com",
      features: ["Service management", "Billing integration", "Support tickets", "Usage analytics"]
    },
    {
      id: 6,
      title: "Network Automation Scripts",
      description: "Collection of Python scripts for automating common network configuration and monitoring tasks.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "Netmiko", "NAPALM", "Jinja2"],
      category: "automation",
      github: "https://github.com",
      demo: "https://demo.com",
      features: ["Configuration backup", "Bulk updates", "Compliance checking", "Report generation"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'tool', label: 'Tools & Utilities' },
    { id: 'analysis', label: 'Analysis & Monitoring' },
    { id: 'automation', label: 'Automation' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of network engineering projects and tools I've developed
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    <a
                      href={selectedProject.demo}
                      className="btn-primary flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;