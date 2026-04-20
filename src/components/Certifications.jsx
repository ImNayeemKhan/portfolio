import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    year: '2024',
    detail: 'Validated routing, switching, and network fundamentals knowledge for enterprise and ISP environments.'
  },
  {
    id: 2,
    title: 'CompTIA Network+',
    issuer: 'CompTIA',
    year: '2023',
    detail: 'Proven network infrastructure, operations, and security proficiency for hands-on support roles.'
  },
  {
    id: 3,
    title: 'ITIL Foundation',
    issuer: 'Axelos',
    year: '2023',
    detail: 'Demonstrated understanding of service management practices for incident handling and change control.'
  }
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Official credentials that back my expertise in network operations, troubleshooting, and service delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-effect p-6 rounded-3xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-accent-500/15 text-accent-400">
                  {index === 0 ? <Award className="w-6 h-6" /> : index === 1 ? <ShieldCheck className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer} · {cert.year}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{cert.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
