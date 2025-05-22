import React from 'react';
const About = () => {
    // Kart verileri
    const cardData = [
        {
            icon: 'graduation-cap',
            title: 'Eğitim',
            items: [
                '-Lise:Özel Emrah Salbacak Eğitim Kurumları',
                '-Lisans(devam):Balıkesir üniversitesi Bilgisayar Mühendisliği',
            ],
            delay: 100
        },
        {
            icon: 'award',
            title: 'Sertifikalar',
            items: [
                '-Henüz bulunmamaktadır'
            ],
            delay: 300
        },
        {
            icon: 'heart',
            title: 'Uzmanlıklar',
            items: [
                'Frontend Geliştirme',
                'Görüntü işleme',
                'Veritabanı tasarım ve yönetimi',
            ],
            delay: 500
        }
    ];

    // İkon render fonksiyonu
    const renderIcon = (iconName) => {
        switch(iconName) {
            case 'graduation-cap':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                );
            case 'award':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                    </svg>
                );
            case 'heart':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    // Kart bileşeni
    const Card = ({ icon, title, items, delay }) => (
        <div className="about-card fade-in-up" style={{ transitionDelay: `${delay}ms` }}>
            <div className="card-icon">
                {renderIcon(icon)}
            </div>
            <h3 className="card-title">{title}</h3>
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );

    return (
        <section id="about" className="about page-transition">
            <div className="container">
                <div className="section-title section-transition">
                    <h2>Ben Kimim?</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-image fade-in-right">
                        <img
                            src="/ben.jpg"
                            alt="Ahmet İlker profesyonel portresi"
                            className="about-img"
                        />
                    </div>

                    <div className="about-text fade-in-left">
                        <h3 className="about-name">Ahmet İlker Kahraman</h3>
                        <p className="about-description">
                            Lisans eğitimi hala sürmekte olan 2. sınıf bilgisayar mühendisliği öğrencisiyim.Meraklı istekli ve azimli bir kişiliğe sahip olmakla beraber takım çalışmasına uygun  bir kişiliğe sahibim.Analitik düşünme,problemlere hızlı çözüm bulma ve liderlik kabiliyetlerim ön plandadır.
                        </p>

                        <div className="about-buttons">
                            <a href="#services" className="btn btn-secondary">Neler Yapabilirim</a>
                        </div>
                    </div>
                </div>

                <div className="about-cards">
                    {cardData.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;