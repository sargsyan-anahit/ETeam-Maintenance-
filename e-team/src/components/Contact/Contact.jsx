import './Contact.css';

export default function ContactUs() {
    return (
        <section className="contact">
            <h2>Contact Us</h2>

            <form className="contact-form">
                <label>
                    Name
                    <input type="text" placeholder="Your full name" required />
                </label>

                <label>
                    Email
                    <input type="email" placeholder="Your email address" required />
                </label>

                <label>
                    Service Inquiry
                    <textarea placeholder="Describe your inquiry..." required></textarea>
                </label>

                <button type="submit" className="cta">Send Inquiry</button>
            </form>

            <div className="emergency-hotline">
                <h3>Emergency Hotline</h3>
                <p>📞 +971-50-123-4567 (24/7 support)</p>
            </div>

            <div className="social-icons">
                <h3>Follow Us</h3>
                <div className="icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </section>
    );
}
