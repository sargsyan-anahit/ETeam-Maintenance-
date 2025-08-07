import './Services.css';

export default function OurServices() {
    const services = [
        {
            title: 'AC Repair & Maintenance',
            description: [
                'Routine inspection and performance checks of HVAC systems',
                'Cleaning of filters, coils, and drainage systems',
                'Refrigerant level monitoring and refilling',
                'Identification and resolution of minor faults to prevent major breakdowns',
                'Thermostat calibration and system optimization',
                'Preventive maintenance contracts for year-round comfort',
                'Emergency repair support for urgent AC issues',
                'Detailed reporting and maintenance logs for client records'
            ]
        },
        {
            title: 'Window Cleaning',
            description: [
                'Thorough cleaning of interior and exterior windows',
                'Removal of dust, grime, and water stains',
                'Use of eco-friendly, streak-free cleaning agents',
                'High-reach window access using professional-grade equipment',
                'Frame and sill cleaning for a complete finish',
                'Scheduled maintenance plans for ongoing cleanliness',
                'Post-construction or renovation glass cleaning',
                'Safety-compliant operations by trained technicians'
            ]
        },
        {
            title: 'Plumbing & Water System Cleaning',
            description: [
                'Comprehensive inspection and maintenance of water supply systems',
                'Leak detection and repair using advanced technologies',
                'Drainage system cleaning and maintenance',
                'Water tank cleaning and disinfection in compliance with UAE health regulations',
                'Water quality testing and treatment',
                'Installation and maintenance of water-saving fixtures and technologies',
                'Greywater recycling system maintenance',
                'Swimming pool maintenance and water treatment'
            ]
        },
        {
            title: 'Landscape & Garden Maintenance',
            description: [
                'Landscape design and implementation',
                'Regular garden maintenance and plant care',
                'Irrigation system installation and maintenance',
                'Desert-adapted and native plant selection and care',
                'Pest and disease management for plants',
                'Hardscape maintenance (pathways, features, structures)',
                'Seasonal color rotation and enhancement',
                'Water conservation strategies and xeriscaping'
            ]
        },
        {
            title: 'Electrical Systems Maintenance',
            description: [
                'Regular inspection and testing of electrical systems and components',
                'Preventive maintenance of switchgear, distribution boards, and transformers',
                'Lighting system maintenance and energy-efficient upgrades',
                'Power quality analysis and improvement solutions',
                'Thermal imaging inspections to identify potential issues',
                'Emergency power system testing and maintenance',
                'Compliance verification with UAE electrical safety standards',
                'Implementation and maintenance of smart lighting control systems'
            ]
        },
        {
            title: 'Pest Control',
            description: [
                'Integrated pest management (IPM) programs',
                'Regular inspection and monitoring',
                'Preventive treatments and barrier applications',
                'Targeted interventions for specific pest issues',
                'Post-treatment monitoring and follow-up',
                'Documentation and reporting for compliance purposes',
                'Eco-friendly and low-toxicity treatment options',
                'Emergency response for urgent pest situations'
            ]
        }
    ];

    return (
        <section className="services">
            <h2>Our Services</h2>
            {services.map((service, idx) => (
                <div key={idx} className="service-block">
                    <h3>➤ {service.title}</h3>
                    <ul>
                        {service.description.map((item, i) => (
                            <li key={i}>● {item}</li>
                        ))}
                    </ul>
                    <button className="cta">Book a Visit</button>
                </div>
            ))}

            <div className="testimonials">
                <h3>Client Testimonials</h3>
                <div className="testimonial-rotator">
                    <blockquote>"Excellent service and professionalism!"</blockquote>
                    <blockquote>"Quick response and thorough work."</blockquote>
                    <blockquote>"Highly recommend E-Team for maintenance."</blockquote>
                </div>
            </div>

            <div className="certifications">
                <h3>Certifications</h3>
                <ul>
                    <li>Qualification Certification</li>
                    <li>ISO (Details TBD)</li>
                </ul>
            </div>

            <div className="sustainability">
                <h3>Sustainability Practices</h3>
                <p>
                    We implement eco-friendly and sustainable practices especially in pest control and landscaping,
                    ensuring compliance with environmental standards.
                </p>
            </div>
        </section>
    );
}
