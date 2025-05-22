import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import PortfolioBanner from './PortfolioBanner';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import '../../App.css';

const App = () => {
    // Sayfa yüklendikten sonra animasyonları başlat
    useEffect(() => {
        // IntersectionObserver ile elemanları görünür kılma
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-visible");

                        // Özel animasyon sınıfları için kontrol
                        if (entry.target.classList.contains("fade-in-right") ||
                            entry.target.classList.contains("fade-in-left") ||
                            entry.target.classList.contains("fade-in-up") ||
                            entry.target.classList.contains("fade-in-down") ||
                            entry.target.classList.contains("fade-in-scale")) {
                            entry.target.classList.add("slide-visible");
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Tüm animasyon elemanlarını observer'a ekle
        const animatedElements = document.querySelectorAll(
            ".section-transition, .fade-in-right, .fade-in-left, .fade-in-up, .fade-in-down, .fade-in-scale"
        );

        animatedElements.forEach((el) => {
            observer.observe(el);
        });

        // Smooth scrolling için tüm anchor linklerini ayarla
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Aktif bölüm sınıflarını kaldır
                    document.querySelectorAll('section').forEach(section => {
                        section.classList.remove('page-active');
                    });

                    // Hedef bölüme aktif sınıfını ekle
                    targetElement.classList.add('page-active');

                    // Sayfayı kaydır
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Navigating class ekleme
                    document.body.classList.add('navigating');

                    // Sayfaya gelince animasyon tekrar başlat
                    setTimeout(() => {
                        // Bölüm içindeki tüm animasyon elemanlarını sıfırla ve tekrar animasyonu başlat
                        targetElement.querySelectorAll('.section-transition, .fade-in-right, .fade-in-left, .fade-in-up, .fade-in-down, .fade-in-scale').forEach(el => {
                            // Önce görünürlük sınıfını kaldır
                            el.classList.remove('section-visible');
                            el.classList.remove('slide-visible');

                            // Timeout kullandıktan sonra tekrar görünür yap
                            setTimeout(() => {
                                if (el.classList.contains('section-transition')) {
                                    el.classList.add('section-visible');
                                } else {
                                    el.classList.add('slide-visible');
                                }
                            }, 50);
                        });

                        // Navigating class kaldır
                        setTimeout(() => {
                            document.body.classList.remove('navigating');
                        }, 800);
                    }, 400);
                }
            });
        });

        // Sayfa scroll olduğunda aktif bölümü tespit et
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Aktif olmayan bölümleri bul
                    document.querySelectorAll('section').forEach(s => {
                        s.classList.remove('page-active');
                    });

                    // Aktif bölümü işaretle
                    section.classList.add('page-active');

                    // Menüde aktif olan bölümü güncelle
                    document.querySelectorAll('.nav-item').forEach(item => {
                        const href = item.getAttribute('href');
                        if (href === `#${sectionId}`) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Component unmount olduğunda event listener'ları temizle
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', () => {});
            });
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main>
                <Hero />
                <PortfolioBanner />
                <About />
                <Services />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;