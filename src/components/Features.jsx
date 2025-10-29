import { Fingerprint, Shield, Zap, CheckCircle, Lock } from 'lucide-react';

const items = [
  {
    icon: Fingerprint,
    title: 'Biometric-first',
    desc: 'FaceID, TouchID, and passkeys with seamless WebAuthn fallback.'
  },
  {
    icon: Shield,
    title: 'Zero secrets',
    desc: 'Phishing-resistant, no shared secrets to steal or reuse.'
  },
  {
    icon: Zap,
    title: 'Blazing integration',
    desc: 'Add auth in minutes with SDKs, REST, and drop-in UI.'
  },
  {
    icon: CheckCircle,
    title: 'Delightfully simple',
    desc: 'A tiny surface area and ergonomic APIs developers love.'
  },
  {
    icon: Lock,
    title: 'Enterprise-grade',
    desc: 'SAML/OIDC federation, device trust, and audit logs built-in.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-gradient-to-b from-black to-[#0A0A0B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">Security that feels invisible</h2>
        <p className="mt-3 text-center text-white/70 max-w-2xl mx-auto">
          Remove passwords, remove friction. Keep compliance and control.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <Icon className="h-6 w-6 text-cyan-400" />
              <h3 className="mt-3 font-medium text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
