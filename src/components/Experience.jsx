import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      title: "Network Support Engineer",
      company: "Tech Solutions Ltd.",
      period: "2022 - Present",
      description: "Leading network operations and support for enterprise clients. Managing complex network infrastructures, implementing monitoring solutions, and ensuring 99.9% uptime.",
      achievements: [
        "Reduced network downtime by 40% through proactive monitoring",
        "Implemented automated backup solutions for critical network devices",
        "Led migration to cloud-based network management platform"
      ],
      technologies: ["Cisco", "Juniper", "SolarWinds", "Python"]
    },
    {
      id: 2,
      title: "Network Administrator",
      company: "ISP Bangladesh",
      period: "2020 - 2022",
      description: "Managed ISP network operations including troubleshooting connectivity issues, configuring network devices, and maintaining service quality for 10,000+ subscribers.",
      achievements: [
        "Improved network performance by 25% through optimization",
        "Developed custom monitoring scripts for network health",
        "Trained junior engineers on network troubleshooting techniques"
      ],
      technologies: ["MikroTik", "Ubiquiti", "Wireshark", "Linux"]
    },
    {
      id: 3,
      title: "Junior Network Engineer",
      company: "Digital Networks Inc.",
      period: "2019 - 2020",
      description: "Assisted in network infrastructure setup, configuration of routing protocols, and basic troubleshooting of network connectivity issues.",
      achievements: [
        "Configured VLANs and trunking for segmented networks",
        "Assisted in OSPF and BGP protocol implementations",
        "Maintained network documentation and configurations"
      ],
      technologies: ["Cisco IOS", "Packet Tracer", "VMware", "Windows Server"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey in network engineering and the key milestones that shaped my expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{exp.title}</h3>
                    <span className="text-primary-400 font-medium">{exp.period}</span>
                  </div>

                  <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>

                  <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start">
                          <span className="text-primary-400 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;