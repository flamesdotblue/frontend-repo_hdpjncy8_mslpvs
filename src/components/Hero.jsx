import Spline from '@splinetool/react-spline';
import { ArrowRight, Fingerprint, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Fingerprint className="h-3.5 w-3.5 text-cyan-400" />
              Passwordless biometrics for modern apps
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Auth that disappears.
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-white/70">
              One line of code to ship secure, passwordless logins. Fingerprint, FaceID, WebAuthn — no passwords, no friction. Built for developers, trusted by security teams.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#code"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-medium text-black hover:bg-cyan-400 transition-colors"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                See features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xs text-white/60">
              <div className="inline-flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-emerald-400" />
                FIDO2/WebAuthn compliant
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-emerald-400" />
                End-to-end encrypted
              </div>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
