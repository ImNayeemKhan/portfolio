import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Shield, Settings, Monitor, Code, Database } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Networking Fundamentals",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "TCP/IP", level: 95 },
        { name: "Subnetting", level: 90 },
        { name: "VLAN Configuration", level: 88 },
        { name: "Routing Protocols", level: 85 },
        { name: "Switching", level: 92 }
      ]
    },
    {
      title: "Network Security",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Firewall Configuration", level: 82 },
        { name: "VPN Setup", level: 78 },
        { name: "Access Control", level: 85 },
        { name: "Network Monitoring", level: 88 },
        { name: "Security Auditing", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Cisco Packet Tracer", level: 90 },
        { name: "Wireshark", level: 85 },
        { name: "SolarWinds", level: 80 },
        { name: "MikroTik", level: 88 },
        { name: "Ubiquiti", level: 82 }
      ]
    },
    {
      title: "Monitoring & Automation",
      icon: Monitor,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Network Monitoring", level: 87 },
        { name: "Python Scripting", level: 78 },
        { name: "SNMP", level: 83 },
        { name: "Nagios", level: 75 },
        { name: "Ansible", level: 70 }
      ]
    },
    {
      title: "Development Skills",
      icon: Code,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "JavaScript", level: 75 },
        { name: "Python", level: 80 },
        { name: "Bash Scripting", level: 78 },
        { name: "HTML/CSS", level: 85 },
        { name: "React", level: 70 }
      ]
    },
    {
      title: "Certifications",
      icon: Database,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "CCNA", level: 100 },
        { name: "CompTIA Network+", level: 85 },
        { name: "Juniper JNCIA", level: 70 },
        { name: "AWS Certified", level: 65 },
        { name: "ITIL Foundation", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technical competencies and certifications that drive my network engineering capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-primary-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.3 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Linux Administration", "Windows Server", "VMware", "Docker", "Kubernetes",
              "AWS", "Azure", "Git", "Jenkins", "Prometheus", "Grafana", "ELK Stack",
              "MySQL", "PostgreSQL", "MongoDB", "Redis", "Apache", "Nginx"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.05) }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium border border-primary-500/20 hover:bg-primary-500/20 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;