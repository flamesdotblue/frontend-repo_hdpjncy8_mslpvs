import { ShieldCheck, Lock, Server, Globe } from 'lucide-react';

export default function Trust() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Built for trust from day one</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-400" /> SOC 2 Type II ready controls</li>
                <li className="flex items-start gap-3"><Lock className="mt-0.5 h-5 w-5 text-emerald-400" /> End-to-end encryption and key isolation</li>
                <li className="flex items-start gap-3"><Server className="mt-0.5 h-5 w-5 text-emerald-400" /> Regional data residency options</li>
                <li className="flex items-start gap-3"><Globe className="mt-0.5 h-5 w-5 text-emerald-400" /> Privacy-first, GDPR compliant by design</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <LogoCard label="FIDO Alliance" />
              <LogoCard label="WebAuthn" />
              <LogoCard label="Passkeys" />
              <LogoCard label="OpenID" />
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          "Auth that disappears" — reduce login time by up to 80% while increasing security posture.
        </p>
      </div>
    </section>
  );
}

function LogoCard({ label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 text-center">
      <div className="mx-auto h-10 w-10 rounded-lg bg-white/10" />
      <div className="mt-3 text-sm text-white/70">{label}</div>
    </div>
  );
}
