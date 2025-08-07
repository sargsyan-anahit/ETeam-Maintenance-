import './Homepage.css';
import CleanHouseImage from '../../assets/clean-home.png';

export default function Homepage() {
    return (
        <section className="homepage-hero">
            <div className="hero-text">
                <h1 className="hero-title">ETeam Maintenance</h1>
                <h2 className="hero-subtitle">Your One-Call Solution for Property Care</h2>
                <p>
                    E-Team is a Dubai-based maintenance company, established in 2014 to meet the growing demand for reliable,
                    tech-enabled facility services. We specialize in villa and community care in Nad Al Sheba.
                </p>
                <p>
                    With a multidisciplinary team and deep local knowledge, we deliver tailored maintenance solutions built
                    for the UAE’s fast-growing, high-standard properties.
                </p>
                <button className="hero-button">Get a Free Consultation →</button>
            </div>

            <div className="hero-image">
                <img src={CleanHouseImage} alt="Clean home or office" />
            </div>
        </section>
    );
}
