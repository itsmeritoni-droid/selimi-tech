import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Terminal, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Github, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    title: 'Intelligent AI Architecture',
    description: 'Autonomous agents, custom LLM orchestration, and smart cognitive workflows built for high velocity.',
    icon: <Cpu size={20} />
  },
  {
    title: 'Modern Cloud Infrastructure',
    description: 'Serverless deployments, distributed edge computing, and ultra-resilient cloud architectures.',
    icon: <Layers size={20} />
  },
  {
    title: 'Full-Stack Engineering',
    description: 'Crafting performant web, mobile, and API systems engineered with precision and simplicity.',
    icon: <Terminal size={20} />
  }
];

export const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    // Simulate lightweight async registration
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      try {
        const stored = JSON.parse(localStorage.getItem('selimi_subscribers') || '[]');
        stored.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem('selimi_subscribers', JSON.stringify(stored));
      } catch {
        // Safe fallback
      }
    }, 700);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('meritonmk1@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="bg-ambient" />
      <div className="bg-grid" />

      <div className="container">
        {/* Header */}
        <header className="header">
          <a href="/" className="brand">
            <div className="brand-logo">
              <Sparkles size={18} />
            </div>
            <div className="brand-text">
              SELIMI<span>TECH</span>
            </div>
          </a>

          <div className="status-pill">
            <span className="status-dot"></span>
            <span>Systems Engineering in Progress</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <div className="hero-badge">
            <ShieldCheck size={14} />
            <span>Platform Initializing &bull; Coming Soon</span>
          </div>

          <h1 className="hero-title">
            Architecting the future of software and intelligence.
          </h1>

          <p className="hero-description">
            We are engineering a minimalist, high-performance ecosystem for modern intelligent solutions. Our new digital headquarters will launch shortly.
          </p>

          {/* Launch Progress Meter */}
          <div className="progress-container">
            <div className="progress-header">
              <span>SYSTEM BUILD PROGRESS</span>
              <span>85% COMPLETED</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" />
            </div>
          </div>

          {/* Subscription / Notification Form */}
          <div className="form-wrapper">
            {isSubmitted ? (
              <div className="form-success">
                <CheckCircle2 size={18} />
                <span>You're on the early access list. We'll notify you on launch!</span>
              </div>
            ) : (
              <form className="notify-form" onSubmit={handleSubmit}>
                <div className="input-icon">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Enter your email for private beta access"
                  className="notify-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
                <button type="submit" className="notify-btn" disabled={isLoading}>
                  {isLoading ? 'Connecting...' : (
                    <>
                      <span>Notify Me</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Pillars Grid */}
          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="card-icon">
                  {pillar.icon}
                </div>
                <h3 className="card-title">{pillar.title}</h3>
                <p className="card-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div>
            &copy; {new Date().getFullYear()} Selimi Tech. All rights reserved.
          </div>

          <div className="footer-links">
            <button 
              type="button" 
              onClick={copyEmail}
              className="footer-link" 
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
            >
              <Mail size={15} />
              <span>{copied ? 'Copied to clipboard!' : 'contact@selimi.tech'}</span>
            </button>

            <a 
              href="https://github.com/itsmeritoni-droid/selimi-tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Github size={15} />
              <span>GitHub</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
