import React from 'react';

const Services = () => {
    // Hizmetler veri
    const servicesData = [
        {
            icon: 'code',
            title: 'Frontend',
            description: 'web sayfalarının kullanıcıya görünen kısmını oluşturuyorum. Kullanıcıyla etkileşimi artıran hızlı ve modern arayüzler geliştiriyorum.',
            features: [
                'HTML',
                'CSS',
                'React'
            ],
            delay: 100
        },
        {
            icon: 'layout',
            title: 'Otonom hava aracı',
            description: 'Savaşan iha teknofest yarışması için simülastonlar ile uğraşıp aynı zamanda nesne tespitleri için modeller eğitip algoritmalar yazıyorum',
            features: [
                'PX4 & GAZEBO',
                'YOLO',
                'OpenCV'
            ],
            delay: 200
        },
        {
            icon: 'shopping-cart',
            title: 'Masaüstü Uygulamaları ve Projeler',
            description: 'Kullanıcı dostu arayüzü ile iş süreçlerini kolaylaştıran masaüstü uygulamaları tasarlıyorum',
            features: [
                
                'C#',
                'Java',
                'Python'
            ],
            delay: 300
        }
    ];

    // İkon render fonksiyonu
    const renderIcon = (iconName) => {
        switch(iconName) {
            case 'code':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                );
            case 'layout':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                );
            case 'shopping-cart':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                );
            case 'database':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                );
            case 'monitor':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                );
            case 'settings':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    // Check ikonu için
    const CheckIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );

    // Hizmet kartı bileşeni
    const ServiceCard = ({ icon, title, description, features, delay }) => (
        <div className="service-card fade-in-up" style={{ transitionDelay: `${delay}ms` }}>
            <div className="service-blob"></div>

            <div className="service-icon">
                {renderIcon(icon)}
            </div>

            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>

            <ul className="service-features">
                {features.map((feature, index) => (
                    <li key={index} className="feature-item">
                        <CheckIcon />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="service-underline"></div>
        </div>
    );

    return (
        <section id="services" className="services page-transition">
            <div className="container">
                <div className="section-title section-transition">
                    <h2>Neler Yapabilirim?</h2>
                    <div className="title-underline"></div>
                    <p className="services-description">
                    
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;