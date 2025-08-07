import './Benefits.css';

export default function BenefitsSection() {
    const packages = [
        {
            name: 'BASIC',
            price: '6,999',
            color: '#2E3A49',
            features: [
                '2 AC Check-ups',
                '2× Window Cleaning',
                'Plumbing Inspection',
                'Electric Inspection',
                '24/7 Emergency Call-out',
            ],
        },
        {
            name: 'PRO',
            price: '12,999',
            color: '#D93030',
            features: [
                '4 AC Check-ups',
                '1× Window Cleaning',
                '4× Plumbing Inspection',
                '24/7 Emergency Call-out',
                'Once a week Pool Cleaning',
                'Electric Inspection',
                '5% Discount on Add-ons',
            ],
        },
        {
            name: 'PREMIUM',
            price: '18,999',
            color: '#2E3A49',
            features: [
                'AC Check-ups - Monthly',
                'Window Cleaning - Monthly',
                'Plumbing Inspection - Monthly',
                '24/7 Emergency Call-out',
                'Electric Inspection',
                'Account Manager',
                'On-call Technician (1d/3wks)',
                '10% Discount on Add-ons',
            ],
        },
    ];

    return (
        <section className="packages-section">
            <h2 className="section-title">SERVICE PACKAGES</h2>
            <div className="packages-container">
                {packages.map((pkg, i) => (
                    <div className="package-card" key={i}>
                        <div className="package-header" style={{ backgroundColor: pkg.color }}>
                            <h3>{pkg.name}</h3>
                        </div>
                        <div className="package-price">
                            <span>{pkg.price}</span>
                            <small>AED / YEAR</small>
                        </div>
                        <ul className="package-features">
                            {pkg.features.map((f, index) => (
                                <li key={index}>✔ {f}</li>
                            ))}
                        </ul>
                        <button className="get-started-btn" style={{ backgroundColor: pkg.color }}>
                            GET STARTED
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
