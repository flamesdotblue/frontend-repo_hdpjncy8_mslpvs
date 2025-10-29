import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const snippets = {
  javascript: `import { Auth } from '@ghostauth/js'\n\nconst auth = new Auth({ projectId: 'gho_123' })\n\nawait auth.signIn({\n  biometric: true, // FaceID/TouchID/WebAuthn\n  redirectTo: '/dashboard'\n})\n`,
  curl: `curl -X POST https://api.ghostauth.dev/v1/attest \\\n  -H 'Authorization: Bearer GHO_XXXX' \\\n  -H 'Content-Type: application/json' \\\n  -d '{"challenge":"<webauthn-challenge>","user":"user_123"}'`
};

export default function CodeShowcase() {
  const [tab, setTab] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const code = snippets[tab];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="code" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Terminal className="h-3.5 w-3.5 text-cyan-400" />
              One line to production
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">Built for developers</h2>
            <p className="mt-3 text-white/70">
              Drop-in SDKs, simple REST primitives, and copy‑paste examples.
              Works on web, iOS, Android, and desktop. No passwords required.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70 list-disc list-inside">
              <li>WebAuthn, Passkeys, native biometrics</li>
              <li>Session management and device trust</li>
              <li>Audit trails, risk signals, and webhooks</li>
            </ul>
          </div>

          <div className="w-full lg:w-[56%]">
            <div className="rounded-xl border border-white/10 bg-[#0B0B0C]">
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setTab('javascript')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      tab === 'javascript' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    JavaScript
                  </button>
                  <button
                    onClick={() => setTab('curl')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      tab === 'curl' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    cURL
                  </button>
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white px-2 py-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 sm:p-6 text-sm overflow-auto">
                <code className="whitespace-pre text-white/90">
                  {code}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
