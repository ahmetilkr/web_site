import React, { useState } from 'react';

const styles = {
    portfolioGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '2rem 0',
    },
    portfolioItem: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    },
    portfolioImageContainer: {
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9 aspect ratio
        overflow: 'hidden',
        borderRadius: '8px',
    },
    portfolioImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    modalContent: {
        width: '90%',
        maxWidth: '1200px',
        maxHeight: '90vh',
        overflow: 'auto',
        '@media (max-width: 768px)': {
            width: '95%',
        },
    },
    modalBody: {
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
        },
    },
    modalImage: {
        flex: '1',
        '@media (max-width: 768px)': {
            width: '100%',
        },
    },
    modalDetails: {
        flex: '1',
        '@media (max-width: 768px)': {
            width: '100%',
        },
    },
};

const Portfolio = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Portfolyo verileri
    const portfolioItems = [
        {
            image: '/word4.png',
            title: 'Kelime İşlemci',
            description: 'Word uygulamasına benzer bir kelime işleme programı',
            period: '2025',
            link: 'https://github.com/ahmetilkr/kelime_islemcisi'
        },
        {
            image: '/soru_bankası.png',
            title: 'Soru Bankası',
            description: 'Soruların ve cevapların yazılıp aynı zamanda  kaydedildiği bir program',
            period: '2025',
            link: 'https://github.com/ahmetilkr/Soru_bankasi'
        },
        {
            image: '/sts.png',
            title: 'Stok Takip Sistemi',
            description: 'Yöneticilerin stok ekleyip çıkardığı,kullanıcıların bunların takip ettiği bir program ',
            period: '2025',
            link: 'https://github.com/ahmetilkr/stok_takip'
        },
        {
            image: '/portfolyo.jpeg',
            title: 'Portfolyo Web Sitesi',
            description: 'Kişisel portfolyo web sitesi',
            period: '2025',
            link: 'https://github.com/ahmetilkr/web_site'
        },
        {
            image: '/algoritma.png',
            title: 'Veri Yapıları Ve Algoritmalar',
            description: 'Veri yapıları ve algoritmalar çalışırken aldığım notlarım',
            period: '2024',
            link: 'https://github.com/ahmetilkr/veri_yapilari'
        },
        {
            image: '/görüntü.jpeg',
            title: 'Görüntü İşleme',
            description: 'Yarışma için kullandığım bilgiler aynı zamanda projeler',
            period: '2024',
            link: 'https://github.com/ahmetilkr/goruntu_isleme'
        }
    ];

    // Modal açma fonksiyonu
    const openModal = (index) => {
        setCurrentProjectIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Body scroll engelleme
    };

    // Modal kapatma fonksiyonu
    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto'; // Body scroll geri getirme
    };

    // Projeler arası gezinme
    const navigateProjects = (direction) => {
        if (direction === 'prev') {
            setCurrentProjectIndex((prevIndex) =>
                (prevIndex - 1 + portfolioItems.length) % portfolioItems.length
            );
        } else {
            setCurrentProjectIndex((prevIndex) =>
                (prevIndex + 1) % portfolioItems.length
            );
        }
    };

    // Dış link ikonu
    const ExternalLinkIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="portfolio-icon">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
    );

    // Chevron ikonu
    const ChevronRightIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="details-icon">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    );

    return (
        <section id="portfolio" className="portfolio page-transition">
            <div className="container">
                <div className="section-title section-transition">
                    <h2>Portfolyo</h2>
                    <div className="title-underline"></div>
                    <p className="portfolio-description">
                        Becerilerimi ve çalışmalarımı sergileyen son projelerimden bir seçki.
                    </p>
                </div>

                {/* Portfolyo Grid */}
                <div className="portfolio-grid" style={styles.portfolioGrid}>
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="portfolio-item fade-in-up"
                            style={{ ...styles.portfolioItem, transitionDelay: `${100 + index * 100}ms` }}
                            onClick={() => openModal(index)}
                        >
                            <div className="portfolio-image-container" style={styles.portfolioImageContainer}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="portfolio-image"
                                    style={styles.portfolioImage}
                                />
                                <div className="portfolio-image-overlay">
                                    <ExternalLinkIcon />
                                </div>
                            </div>

                            <div className="portfolio-content">
                                <h3 className="portfolio-title">{item.title}</h3>
                                <p className="portfolio-description">{item.description}</p>

                                <div className="portfolio-footer">
                                    <span className="portfolio-date">{item.period}</span>
                                    <span className="portfolio-details">
                                        Detaylar <ChevronRightIcon />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>&times;</button>

                            <div className="modal-body" style={styles.modalBody}>
                                <div className="modal-image" style={styles.modalImage}>
                                    <img
                                        src={portfolioItems[currentProjectIndex].image}
                                        alt={portfolioItems[currentProjectIndex].title}
                                    />
                                </div>

                                <div className="modal-details" style={styles.modalDetails}>
                                    <h3 className="modal-title">{portfolioItems[currentProjectIndex].title}</h3>
                                    <p className="modal-date">{portfolioItems[currentProjectIndex].period}</p>

                                    <div className="modal-section">
                                        <h4>Proje Açıklaması</h4>
                                        <p>
                                            {portfolioItems[currentProjectIndex].description}
                                        </p>
                                    </div>

                                    <div className="modal-actions">
                                        <button
                                            className="nav-button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigateProjects('prev');
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>{' '}
                                            Önceki
                                        </button>

                                        <a
                                            href={portfolioItems[currentProjectIndex].link}
                                            className="view-project"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Projeyi Görüntüle{' '}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="view-icon">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>

                                        <button
                                            className="nav-button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigateProjects('next');
                                            }}
                                        >
                                            Sonraki{' '}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;