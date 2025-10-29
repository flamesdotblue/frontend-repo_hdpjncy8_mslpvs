import Hero from './components/Hero';
import CodeShowcase from './components/CodeShowcase';
import Features from './components/Features';
import Trust from './components/Trust';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <CodeShowcase />
      <Features />
      <Trust />
      <SiteFooter />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500" />
          <span className="text-sm font-medium tracking-tight">GhostAuth</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#code" className="hover:text-white">Docs</a>
          <a href="#" className="rounded-md bg-white/10 px-3 py-1.5 hover:bg-white/20">Join waitlist</a>
        </nav>
        <a href="#" className="sm:hidden rounded-md bg-white/10 px-3 py-1.5 text-sm">Join</a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 text-xs text-white/60 flex items-center justify-between">
        <p>© {new Date().getFullYear()} GhostAuth, Inc.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Security</a>
          <a href="#" className="hover:text-white">Status</a>
        </div>
      </div>
    </footer>
  );
}
