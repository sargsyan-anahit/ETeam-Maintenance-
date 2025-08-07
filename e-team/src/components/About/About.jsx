import './About.css';
import heroImg from '../../assets/about-hero.jpg';

export default function AboutUs() {
    return (
        <section className="about-page">
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Where Maintenance Meets Excellence</h1>
                    <p>Trusted by Families. Chosen by Businesses.</p>
                </div>
            </div>

            <div className="section intro">
                <h2>About Us</h2>
                <p>
                    E-Team is a forward-thinking maintenance services company, established in 2014 in the United Arab Emirates, to address the growing demand for high-quality, technology-driven facility management solutions.
                </p>
                <p>
                    We specialize in villa and community care in Nad Al Sheba, combining engineering expertise, smart tools, and a commitment to environmental responsibility.
                </p>
                <p>
                    Our multidisciplinary team enables us to offer comprehensive maintenance solutions tailored to the unique requirements of the UAE market.
                </p>
            </div>

            <div className="section vision-mission">
                <div className="card">
                    <h3>Vision</h3>
                    <p>
                        To be the UAE's most trusted and innovative maintenance services provider, setting new standards for service excellence, technological integration, and sustainable facility management.
                    </p>
                </div>
                <div className="card">
                    <h3>Mission</h3>
                    <p>
                        E-Team is committed to enhancing the functionality, safety, and sustainability of built environments across the UAE through exceptional maintenance services.
                    </p>
                </div>
            </div>

            <div className="section principles">
                <h2>Our Principles</h2>
                <ul>
                    <li><strong>Certified, Experienced Technicians:</strong> Trained, insured, and equipped to handle everything from electrical systems to pest control.</li>
                    <li><strong>Prompt Response & On-Time Service:</strong> Whether it's an AC emergency or scheduled garden care, we show up when we say we will.</li>
                    <li><strong>Eco-Friendly & Safe Solutions:</strong> We prioritize your family's health and the environment.</li>
                    <li><strong>All-in-One Property Care:</strong> AC, plumbing, window cleaning, garden — under one trusted name.</li>
                    <li><strong>24/7 Support & Emergency Service:</strong> Our team is on-call and ready anytime.</li>
                    <li><strong>Customer-Centric, Ethically Driven:</strong> Transparent pricing and strong governance you can trust.</li>
                    <li><strong>Permanent Solutions, Not Temporary Fixes:</strong> Done once. Done right.</li>
                    <li><strong>Backed by UAE International Contracting:</strong> Decades of experience and quality assurance.</li>
                </ul>
                <button className="learn-more">Learn More</button>
            </div>

            <div className="section trusted-stats">
                <h2>The Most Trusted Home Maintenance Company in Dubai</h2>
                <div className="stats-grid">
                    <div><strong>20,000+</strong> Happy Clients</div>
                    <div><strong>11+</strong> Years of Experience</div>
                    <div><strong>4.9/5</strong> Google Rating</div>
                    <div><strong>50+</strong> Expert Technicians</div>
                    <div><strong>150,000+</strong> Projects Completed</div>
                    <div><strong>10+</strong> Professional Certifications</div>
                </div>
            </div>

            <div className="section help">
                <h2>How We Can Help</h2>
                <p>
                    E-Team Maintenance delivers full-service property care across the UAE, including AC, plumbing, electrical, cleaning, landscaping, and pest control.
                </p>
                <p>
                    We integrate smart building systems, energy management, and sustainability solutions to ensure long-term value and safety. Backed by 24/7 emergency support, we’re always ready when you need us.
                </p>
                <button className="get-consultation">Get a Free Consultation →</button>
            </div>
        </section>
    );
}
