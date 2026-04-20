import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Wifi, AlertTriangle, ShieldCheck } from 'lucide-react';

const scenarios = [
  {
    id: 'latency',
    title: 'High Latency Incident',
    summary: 'Customer reports intermittent high latency during peak hours.',
    causes: ['Network congestion', 'Misconfigured QoS', 'Packet loss on uplink', 'Underprovisioned link'],
    steps: ['Check interface utilization and packet drops', 'Review QoS policies and queue behavior', 'Trace route to endpoint', 'Validate traffic shaping and buffer utilization']
  },
  {
    id: 'route-flap',
    title: 'Route Instability',
    summary: 'BGP route updates appear unstable and failover is inconsistent.',
    causes: ['Unstable peer link', 'BGP neighbor flaps', 'Incorrect route-map', 'Prefix filtering issues'],
    steps: ['Inspect BGP session state and update frequency', 'Review peer configuration and timers', 'Validate route filtering policies', 'Monitor convergence after stabilization']
  },
  {
    id: 'dns',
    title: 'DNS Resolution Failure',
    summary: 'Some customer services fail to resolve while others remain reachable.',
    causes: ['DNS server outage', 'Firewall blocking UDP/TCP 53', 'Incorrect zone records', 'Recursive resolver issues'],
    steps: ['Test DNS from multiple locations', 'Verify DNS service health on authoritative servers', 'Inspect firewall and ACL rules', 'Confirm DNS zone integrity']
  }
];

const icons = {
  latency: Wifi,
  'route-flap': Zap,
  dns: AlertTriangle
};

const NetworkThinking = () => {
  const [selected, setSelected] = useState(scenarios[0].id);
  const scenario = scenarios.find((item) => item.id === selected);

  return (
    <section id="thinking" className="section-padding bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Live Network Thinking
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Walk through common ISP troubleshooting scenarios with the types of questions and investigation steps I use on the job.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8">
          <div className="glass-effect rounded-3xl border border-white/10 p-6 bg-slate-950/80">
            <h3 className="text-xl font-semibold text-white mb-6">Choose a scenario</h3>
            <div className="space-y-3">
              {scenarios.map((item) => {
                const Icon = icons[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelected(item.id)}
                    className={`w-full text-left rounded-2xl border px-4 py-4 transition-all duration-300 ${
                      selected === item.id
                        ? 'border-accent-500 bg-accent-500/10 text-white'
                        : 'border-white/10 bg-slate-950/70 text-slate-300 hover:border-accent-500 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-2xl bg-accent-500/15 text-accent-400">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="glass-effect rounded-3xl border border-white/10 p-8 bg-slate-950/85">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{scenario.title}</h3>
                <p className="text-gray-400">{scenario.summary}</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-accent-500/10 px-4 py-2 text-accent-400 text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                Incident mindset
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="rounded-2xl bg-dark-800 p-5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3">Possible causes</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {scenario.causes.map((cause) => (
                    <li key={cause} className="flex items-start gap-3">
                      <span className="mt-1 text-accent-400">•</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-dark-800 p-5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3">Investigation steps</h4>
                <ol className="space-y-3 text-gray-300 text-sm list-decimal list-inside">
                  {scenario.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="rounded-2xl bg-dark-800 p-5 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3">What I look for first</h4>
              <p className="text-gray-300 leading-relaxed">
                I start by validating the customer impact, checking traffic flow, and isolating the issue to the core network, edge device, or service layer. I then prioritize fast remediation while preserving service availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkThinking;
