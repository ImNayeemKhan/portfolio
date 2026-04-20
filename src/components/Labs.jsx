import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wifi, Shield, Layers, Terminal } from 'lucide-react';

const labs = [
  {
    id: 1,
    title: 'VLAN Segmentation Lab',
    icon: Wifi,
    description: 'Designed a secure, multi-department network topology with VLAN separation and inter-VLAN routing for an ISP edge environment.',
    details: ['Structured VLAN design', 'Subnet planning', 'Switch trunking and gateway configuration']
  },
  {
    id: 2,
    title: 'Packet Capture Analysis',
    icon: Shield,
    description: 'Investigated live packet behavior to isolate retransmissions, ARP conflicts, and DNS failures using Wireshark and protocol analysis.',
    details: ['TCP retransmission tracing', 'Gateway validation', 'DNS and ARP inspection']
  },
  {
    id: 3,
    title: 'Routing Convergence Simulation',
    icon: Layers,
    description: 'Validated OSPF and BGP behavior under failover conditions and verified route stability across simulated ISP peers.',
    details: ['OSPF path selection', 'BGP neighbor stability', 'Controlled link failover']
  },
  {
    id: 4,
    title: 'Subnetting Plan Review',
    icon: Terminal,
    description: 'Developed an efficient hierarchical IP addressing plan for growth, minimizing waste while supporting multiple customer segments.',
    details: ['CIDR allocation', 'Subnet hierarchy', 'Address documentation']
  }
];

const Labs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="labs" className="section-padding bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Network Labs
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Practical simulations and troubleshooting exercises that reflect real ISP operations and incident response.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {labs.map((lab, index) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-effect p-6 rounded-3xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-primary-500/20 text-primary-400">
                  <lab.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{lab.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">{lab.description}</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                {lab.details.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-primary-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Labs;
