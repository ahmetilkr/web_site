import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const typingTextRef = useRef(null);

    useEffect(() => {
        if (!typingTextRef.current) return;

        const words = ['Frontend', 'Masaüstü uygulamaları', 'Otonom Hava Aracı'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isWaiting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (isWaiting) {
                setTimeout(typeEffect, 2000); // 2 saniye bekle
                isWaiting = false;
                return;
            }

            if (isDeleting) {
                // Silme efekti
                if (typingTextRef.current) {
                    typingTextRef.current.textContent = currentWord.substring(0, charIndex - 1);
                }
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            } else {
                // Yazma efekti
                if (typingTextRef.current) {
                    typingTextRef.current.textContent = currentWord.substring(0, charIndex + 1);
                }
                charIndex++;

                if (charIndex === currentWord.length) {
                    isDeleting = true;
                    isWaiting = true;
                }
            }

            const typingSpeed = isDeleting ? 80 : 150; // Yazma ve silme hızları
            setTimeout(typeEffect, typingSpeed);
        }

        // Animasyonu başlat
        setTimeout(() => {
            typeEffect();
        }, 1000);
    }, []);

    return (
        <section id="home" className="hero page-transition">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text section-transition">
                        <h1 className="hero-heading">
                            Güncel Teknolojilerden<br></br>
                            {' '}
                            <span className="typing-container hero-accent">
                <span id="typing-text" ref={typingTextRef}></span>
                <span className="cursor"></span>
              </span>
                        </h1>
                        <p className="hero-description">
                            Bilgisayar mühendisliği öğrencisi olarak her gün yeni şeyler öğrenmeye<br></br> öğrendiklerimi projelerde kullanarak kendimi geliştirmeye çalışıyorum
                        </p>
                        <div className="hero-buttons">
                            <a href="#contact" className="btn btn-primary">
                                İletişime Geç
                            </a>
                            <a href="#about" className="btn btn-secondary">
                                Detaylı Bilgi
                            </a>
                        </div>
                    </div>
                    <div className="hero-image fade-in-left">
                        <div className="blob blob-top"></div>
                        <div className="blob blob-bottom"></div>
                        <img
                            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=900"
                            alt="Profesyonel web geliştirici ofis ortamında"
                            className="hero-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;