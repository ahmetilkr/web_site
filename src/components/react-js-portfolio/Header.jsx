import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Scroll olayını dinle
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Aktif bölümü belirle
            const scrollPosition = window.scrollY + 100;
            const sections = document.querySelectorAll('section[id]');

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id') || '';

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Mobil menüyü aç/kapat
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Navigasyon linkleri
    const navLinks = [
        { href: '#home', label: 'Ana Sayfa' },
        { href: '#about', label: 'Ben Kimim?' },
        { href: '#services', label: 'Neler Yapabilirim?' },
        { href: '#portfolio', label: 'Portfolyo' },
        { href: '#contact', label: 'İletişim' }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
            <div className="container header-container">
                <div className="logo">
                    <a href="#home">Ahmet İlker Kahraman</a>
                </div>

                {/* Desktop Navigasyon */}
                <nav className="nav-desktop">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`nav-item ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobil Menü Butonu */}
                <button
                    className="nav-mobile-button"
                    aria-label="Toggle menu"
                    onClick={toggleMobileMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>

            {/* Mobil Navigasyon */}
            <nav className={`nav-mobile ${mobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className={`nav-item ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;