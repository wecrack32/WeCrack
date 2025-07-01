import React, { useState, useEffect } from 'react';
import { Calendar, Target, BookOpen, BarChart3, Bell, FileText, Trophy, Users, Brain, RotateCcw, Download, TrendingUp, Timer, CheckCircle, Star, ArrowRight, Play, Menu, X } from 'lucide-react';

const GateTrackerLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Calendar, title: "Smart Daily Planner", description: "AI-powered daily schedules that adapt to your pace and automatically reschedule missed topics.", color: "linear-gradient(135deg, #3b82f6, #06b6d4)" },
    { icon: BookOpen, title: "Complete Syllabus Manager", description: "Track your progress through all 10 GATE CS sections with detailed topic-wise completion.", color: "linear-gradient(135deg, #8b5cf6, #ec4899)" },
    { icon: BarChart3, title: "Advanced Analytics", description: "Visualize your progress with interactive charts, streak meters, and performance insights.", color: "linear-gradient(135deg, #10b981, #14b8a6)" },
    { icon: Brain, title: "Smart Recommendations", description: "AI suggests optimal study paths based on your weak areas and previous GATE patterns.", color: "linear-gradient(135deg, #f59e0b, #ef4444)" },
    { icon: Trophy, title: "Mock Tests & PYQs", description: "Practice with real GATE questions, track mistakes, and simulate exam conditions.", color: "linear-gradient(135deg, #6366f1, #8b5cf6)" },
    { icon: Users, title: "Community & Leaderboards", description: "Connect with peers, share progress, and stay motivated through gamified learning.", color: "linear-gradient(135deg, #ec4899, #f43f5e)" }
  ];

  const stats = [
    { number: "10K+", label: "Students Enrolled" },
    { number: "95%", label: "Success Rate" },
    { number: "500+", label: "Practice Questions" },
    { number: "24/7", label: "Study Support" }
  ];

  const testimonials = [
    { name: "Priya Sharma", role: "GATE CS 2024 - AIR 45", content: "TrackToCrack helped me stay consistent and organized. The smart planner was a game-changer!", rating: 5 },
    { name: "Rahul Kumar", role: "GATE CS 2024 - AIR 78", content: "The analytics and weak area identification saved me months of inefficient studying.", rating: 5 },
    { name: "Ananya Patel", role: "GATE CS 2024 - AIR 120", content: "Best investment for GATE prep. The community support kept me motivated throughout.", rating: 5 }
  ];

  const progressData = [
    { subject: "Algorithms", progress: 60, color: "linear-gradient(135deg, #8b5cf6, #ec4899)" },
    { subject: "Computer Networks", progress: 45, color: "linear-gradient(135deg, #f59e0b, #ef4444)" },
    { subject: "Operating Systems", progress: 80, color: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }
  ];

  const detailedFeatures = [
    { title: "Authentication & User Management", desc: "Secure login with Google OAuth, personalized profiles, and progress tracking across devices.", color: "linear-gradient(135deg, #10b981, #3b82f6)" },
    { title: "Syllabus Weightage Analysis", desc: "Data-driven insights from previous GATE papers to prioritize high-impact topics.", color: "linear-gradient(135deg, #8b5cf6, #ec4899)" },
    { title: "Spaced Repetition System", desc: "Scientific revision scheduling with 1-day, 7-day, and 30-day intervals for optimal retention.", color: "linear-gradient(135deg, #f59e0b, #ef4444)" }
  ];

  return (
    <>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.4; } }
        @media (min-width: 768px) {
          .nav-links { display: flex !important; }
          .mobile-menu-button { display: none !important; }
          .hero-title { font-size: 4rem !important; }
          .hero-buttons { flex-direction: row !important; }
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .detailed-container { grid-template-columns: 1fr 1fr !important; }
          .testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .cta-buttons { flex-direction: row !important; }
          .footer-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .hero-title { font-size: 5rem !important; }
          .features-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .section-title-text { font-size: 3rem !important; }
        }
      `}</style>
      
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)', color: 'white', overflowX: 'hidden', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        
        {/* Animated Background */}
        <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-10rem', right: '-10rem', width: '20rem', height: '20rem', background: '#8b5cf6', borderRadius: '50%', mixBlendMode: 'multiply', filter: 'blur(4rem)', opacity: 0.2, animation: 'pulse 4s ease-in-out infinite' }}></div>
          <div style={{ position: 'absolute', bottom: '-10rem', left: '-10rem', width: '20rem', height: '20rem', background: '#06b6d4', borderRadius: '50%', mixBlendMode: 'multiply', filter: 'blur(4rem)', opacity: 0.2, animation: 'pulse 4s ease-in-out infinite', animationDelay: '1s' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '20rem', height: '20rem', background: '#ec4899', borderRadius: '50%', mixBlendMode: 'multiply', filter: 'blur(4rem)', opacity: 0.1, animation: 'pulse 4s ease-in-out infinite', animationDelay: '2s' }}></div>
        </div>

        {/* Navigation */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, background: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={24} color="white" />
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #a78bfa, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>TrackToCrack</span>
              </div>
              
              <div className="nav-links" style={{ display: 'none', alignItems: 'center', gap: '2rem' }}>
                {['Features', 'Analytics', 'Reviews', 'Pricing'].map(item => <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease', cursor: 'pointer' }}>{item}</a>)}
                <button style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600', border: 'none', color: 'white', cursor: 'pointer', transition: 'all 0.3s ease' }}>Get Started</button>
              </div>

              <button className="mobile-menu-button" style={{ display: 'block', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div style={{ background: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(16px)', padding: '1.5rem 1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Features', 'Analytics', 'Reviews', 'Pricing'].map(item => <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none' }}>{item}</a>)}
                <button style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600', border: 'none', color: 'white', cursor: 'pointer', width: '100%' }}>Get Started</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 1rem 5rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246, 0.2)', borderRadius: '9999px', border: '1px solid rgba(139, 92, 246, 0.3)', marginBottom: '2rem', animation: 'pulse 2s ease-in-out infinite' }}>
              <Star size={16} color="#fbbf24" style={{ marginRight: '0.5rem' }} />
              <span style={{ fontSize: '0.875rem' }}>Trusted by 10,000+ GATE Aspirants</span>
            </div>
            
            <h1 className="hero-title" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              <span style={{ background: 'linear-gradient(135deg, #a78bfa, #ec4899, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Master GATE CS</span>
              {' '}with Smart Tracking
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2.5rem', maxWidth: '48rem', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
              AI-powered study planner that adapts to your pace, tracks your progress, and ensures you're always on the path to GATE success.
            </p>
            
            <div className="hero-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <button style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', padding: '1rem 2rem', borderRadius: '0.75rem', fontWeight: '600', fontSize: '1.125rem', border: 'none', color: 'white', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0.75rem', fontWeight: '600', fontSize: '1.125rem', background: 'transparent', color: 'white', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                <Play size={20} /> Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {stats.map((stat, index) => (
                <div key={index} style={{ textAlign: 'center', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '1rem', padding: '1.5rem', transition: 'all 0.3s ease' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #a78bfa, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}>
                    {stat.number}
                  </div>
                  <div style={{ color: '#d1d5db', fontWeight: '500' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ padding: '5rem 1rem' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="section-title-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                <span style={{ background: 'linear-gradient(135deg, #a78bfa, #ec4899, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Everything You Need</span> to Crack GATE
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#d1d5db', maxWidth: '48rem', margin: '0 auto' }}>
                Comprehensive tools and features designed specifically for GATE CS preparation
              </p>
            </div>

            <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.5s ease' }} onMouseEnter={() => setActiveFeature(index)}>
                    <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', transition: 'transform 0.3s ease', background: feature.color }}>
                      <Icon size={28} color="white" />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{feature.title}</h3>
                    <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section style={{ padding: '5rem 1rem', background: 'rgba(255, 255, 255, 0.05)' }}>
          <div className="detailed-container" style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                <span style={{ background: 'linear-gradient(135deg, #a78bfa, #ec4899, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Smart Features</span> for Smart Students
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {detailedFeatures.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem', flexShrink: 0, background: item.color }}>
                      <CheckCircle size={16} color="white" />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                      <p style={{ color: '#d1d5db' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              {progressData.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontWeight: '500' }}>{item.subject}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8rem', height: '0.5rem', background: '#4b5563', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', borderRadius: '9999px', width: `${item.progress}%`, background: item.color }}></div>
                    </div>
                    <span style={{ fontSize: '0.875rem', color: '#d1d5db' }}>{item.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" style={{ padding: '5rem 1rem' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="section-title-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                <span style={{ background: 'linear-gradient(135deg, #a78bfa, #ec4899, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Success Stories</span> from Our Students
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#d1d5db', maxWidth: '48rem', margin: '0 auto' }}>
                See how TrackToCrack helped thousands crack GATE with better scores
              </p>
            </div>

            <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '1rem', padding: '1.5rem', transition: 'all 0.3s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{testimonial.content}"</p>
                  <div>
                    <div style={{ fontWeight: '600' }}>{testimonial.name}</div>
                    <div style={{ color: '#a78bfa', fontSize: '0.875rem' }}>{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '5rem 1rem', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5))' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Ready to <span style={{ background: 'linear-gradient(135deg, #a78bfa, #ec4899, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Transform</span> Your GATE Prep?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2.5rem' }}>
              Join thousands of successful GATE aspirants who chose the smart way to study
            </p>
            <div className="cta-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
              <button style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', fontSize: '1.25rem', padding: '1.25rem 2.5rem', borderRadius: '0.75rem', fontWeight: '600', border: 'none', color: 'white', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                Start Free Trial <ArrowRight size={24} />
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', padding: '1.25rem 2.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0.75rem', fontWeight: '600', background: 'transparent', color: 'white', cursor: 'pointer', transition: 'all 0.3s ease', justifyContent: 'center' }}>
                <Download size={24} /> Download Syllabus
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div style={{ width: '2rem', height: '2rem', background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Target size={20} color="white" />
                  </div>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>TrackToCrack</span>
                </div>
                <p style={{ color: '#9ca3af' }}>Empowering GATE aspirants with smart study tools and personalized learning paths.</p>
              </div>
              
              {[
                { title: 'Product', items: ['Features', 'Pricing', 'Analytics', 'Mobile App'] },
                { title: 'Resources', items: ['Study Guide', 'Previous Papers', 'Blog', 'Help Center'] },
                { title: 'Company', items: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'] }
              ].map((section, index) => (
                <div key={index} style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>{section.title}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {section.items.map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>
                        <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', color: '#9ca3af' }}>
              <p>&copy; 2025 TrackToCrack. All rights reserved. Built for GATE CS aspirants.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default GateTrackerLanding;