import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Award, Target, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: User,
      title: "Professional Background",
      description: "4+ years of experience in network operations and support engineering"
    },
    {
      icon: Award,
      title: "CCNA Certified",
      description: "Cisco Certified Network Associate with comprehensive networking knowledge"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Expert in diagnosing complex network issues and implementing solutions"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Dedicated to maintaining network uptime and optimizing performance"
    }
  ];

  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate network engineer committed to delivering reliable, high-performance network solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a dedicated Network Support Engineer with extensive hands-on experience in ISP operations,
              specializing in troubleshooting connectivity issues, diagnosing network performance problems,
              and maintaining service uptime.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My work involves identifying root causes of latency, packet loss, and outages across LAN/WAN environments,
              and resolving them efficiently to minimize downtime. With CCNA-level training and practical exposure
              to real network environments, I bring a structured, analytical approach to incident handling and network stability.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Network Security", "Cloud Networking", "Automation", "Monitoring", "Documentation"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium border border-primary-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{highlight.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;