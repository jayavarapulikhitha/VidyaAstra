import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import appLogo from '../assets/app-logo.png';
import './LandingPage.css';

const FAQSection = () => {
    const faqs = [
        {
            question: "How is VidyaAstra different from other prep apps?",
            answer:
                "VidyaAstra focuses on gamification to make learning engaging rather than a chore. Our unique features like the Dead Manager, AI Study Buddy, and Boss Battle mock tests create an immersive experience that keeps you motivated."
        },
        {
            question: "Can I use VidyaAstra for multiple exams?",
            answer:
                "Yes! You can switch between exam preparation tracks or prepare for multiple exams simultaneously. Our system will create separate roadmaps and track progress for each exam."
        },
        {
            question: "Is the content updated with latest syllabus?",
            answer:
                "Absolutely. Our content team constantly updates questions and study materials based on changing exam patterns and syllabi. You'll also receive notifications about important updates."
        },
        {
            question: "How does the coin system work?",
            answer:
                "You earn coins by completing daily tasks, winning contests, helping other students, and maintaining streaks. These coins can be used to unlock premium features, get expert doubt solutions, or access special content."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <span className={`toggle-icon ${openIndex === index ? 'open' : ''}`}>+</span>
                        </div>
                        <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const LandingPage = () => {
    return (
        <div className="landing-container">
            {/* --- Dynamic Background Elements --- */}
            <div className="star-field"></div>
            <div className="gradient-overlay"></div>
            <div className="abstract-pattern-overlay"></div>

            {/* Header with Navigation & CTA */}
            <header className="landing-header">
                <div className="header-left">
                    <img src={appLogo} alt="VidyaAstra Logo" className="app-logo" />
                    <span className="header-name">VidyaAstra</span>
                </div>
                <nav className="header-nav">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#about" className="nav-link">About Us</a>
                    <a href="#testimonials" className="nav-link">Testimonials</a>
                    <a href="#faq" className="nav-link">FAQ</a>
                    <NavLink to="/login" className="nav-cta-button">
                        Get Started
                    </NavLink>
                </nav>
            </header>

            <main className="landing-main">
                {/* Hero Section */}
                <section className="hero-section">
                    <h1 className="hero-headline">VidyaAstra: Your Path to UPSC Excellence</h1>
                    <p className="hero-subheading">Forge your knowledge. Sharpen your skills. Achieve your dreams.</p>
                    <NavLink to="/login" className="start-button pulsate-glow">
                        Begin Your Grand Expedition!
                        <span className="arrow-icon">→</span>
                    </NavLink>
                </section>

                {/* Features Section */}
                <section id="features" className="features-section">
                    <h2 className="section-title">Key Features</h2>
                    <div className="feature-highlight">
                        <div className="feature-card animated-card">
                            <span className="icon">🏆</span>
                            <h3>Gamified Quests</h3>
                            <p>Embark on daily challenges to conquer your syllabus and earn rewards.</p>
                        </div>
                        <div className="feature-card animated-card">
                            <span className="icon">🗺</span>
                            <h3>Strategic Roadmap</h3>
                            <p>Navigate a personalized study path designed for your ultimate success.</p>
                        </div>
                        <div className="feature-card animated-card">
                            <span className="icon">🤖</span>
                            <h3>AI Mentor</h3>
                            <p>Your intelligent companion for instant doubts and tailored motivation.</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="testimonials-section">
                    <h2 className="section-title">What Our Scholars Say</h2>
                    <div className="testimonials-container">
                        <div className="testimonial-card">
                            <p>"VidyaAstra transformed my study routine. The gamified quests kept me motivated and on track. Highly recommend!"</p>
                            <cite>— Arjun K., UPSC Aspirant</cite>
                        </div>
                        <div className="testimonial-card">
                            <p>"The AI mentor is a game-changer. It answered my questions instantly and helped me understand complex topics."</p>
                            <cite>— Priya S., Civil Services Exam Taker</cite>
                        </div>
                        <div className="testimonial-card">
                            <p>"The strategic roadmap helped me focus my efforts and feel confident about my preparation."</p>
                            <cite>— Rajesh M., Topper 2023</cite>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="about-us-section">
                    <h2 className="section-title">Our Mission</h2>
                    <div className="about-content">
                        <p>VidyaAstra was created to revolutionize UPSC preparation. We believe that learning should be engaging, personalized, and effective. Our platform combines cutting-edge AI with a powerful gamified approach to make your journey to success not just possible, but enjoyable.</p>
                    </div>
                </section>

                {/* FAQ Section (New) */}
                <FAQSection />

                {/* Final Call to Action */}
                <section className="cta-final-section">
                    <h2 className="cta-title">Ready to Conquer Your Exam?</h2>
                    <p className="cta-subtitle">Join thousands of successful aspirants and begin your journey to excellence.</p>
                    <NavLink to="/login" className="start-button pulsate-glow">
                        Begin Your Expedition!
                        <span className="arrow-icon">→</span>
                    </NavLink>
                </section>
            </main>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-links-container">
                    <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                    <a href="/terms" className="footer-link">Terms & Conditions</a>
                    <a href="/contact" className="footer-link">Contact Us</a>
                </div>
                <div className="footer-social-container">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
                </div>
                <p>&copy; 2023 VidyaAstra. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;