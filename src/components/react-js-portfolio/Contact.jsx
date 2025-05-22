import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: false,
        error: false
    });

    // Form değişikliklerini izle
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Form gönderimi
    const handleSubmit = (e) => {
        e.preventDefault();

        // Form doğrulama
        if (!formData.name || !formData.email || !formData.message) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }

        // Form gönderme başlangıcı
        setFormStatus({ submitting: true, success: false, error: false });

        // Form gönderimi simülasyonu
        setTimeout(() => {
            setFormStatus({ submitting: false, success: true, error: false });

            // Formu sıfırla
            setFormData({ name: '', email: '', message: '' });

            // 5 saniye sonra başarı durumunu sıfırla
            setTimeout(() => {
                setFormStatus({ submitting: false, success: false, error: false });
            }, 5000);
        }, 2000);
    };

    // Sosyal medya ikonları
    const renderSocialIcon = (icon) => {
        switch(icon) {
            case 'github':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                );
            case 'twitter':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                );
            case 'linkedin':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                );
            case 'instagram':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                );
            default:
                return null;
        }
    };

    // İletişim ikonları
    const renderContactIcon = (icon) => {
        switch(icon) {
            case 'map-pin':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                );
            case 'mail':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                );
            case 'phone':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section id="contact" className="contact page-transition">
            <div className="contact-blob-top"></div>
            <div className="contact-blob-bottom"></div>

            <div className="container">
                <div className="section-title section-transition">
                    <h2>İletişime Geç</h2>
                    <div className="title-underline"></div>
                    <p className="services-description">
                        Bir projeniz mi var? Veya sadece merhaba mı demek istiyorsunuz? Bana bir mesaj göndermekten çekinmeyin.
                    </p>
                </div>

                <div className="contact-content">
                    {/* İletişim Bilgileri */}
                    <div className="contact-info fade-in-right">
                        <div className="info-card">
                            <h3 className="info-title">İletişim Bilgileri</h3>

                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon-container">
                                        {renderContactIcon('map-pin')}
                                    </div>
                                    <div className="info-content">
                                        <h4>Adres</h4>
                                        <p>Balıkesir,Türkiye</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon-container">
                                        {renderContactIcon('mail')}
                                    </div>
                                    <div className="info-content">
                                        <h4>Email</h4>
                                        <p>ahmetilker4141@gmail.com</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon-container">
                                        {renderContactIcon('phone')}
                                    </div>
                                    <div className="info-content">
                                        <h4>Telefon</h4>
                                        <p>+90 531 *** ****</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-media">
                                <h4>Sosyal Medya</h4>
                                <div className="social-icons">
                                    <a href="https://github.com/ahmetilkr" className="social-icon" target="_blank" rel="noopener noreferrer">
                                        {renderSocialIcon('github')}
                                    </a>
                                    <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                                        {renderSocialIcon('twitter')}
                                    </a>
                                    <a href="https://www.linkedin.com/in/ahmet-ilker-kahraman-332982342/" className="social-icon" target="_blank" rel="noopener noreferrer">
                                        {renderSocialIcon('linkedin')}
                                    </a>
                                    <a href="https://www.instagram.com/ahmetilkr?igsh=ZHlha3Ywdm1xN3E4" className="social-icon" target="_blank" rel="noopener noreferrer">
                                        {renderSocialIcon('instagram')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* İletişim Formu */}
                    <div className="contact-form-container fade-in-left">
                        <div className="contact-form">
                            <div className="form-blob"></div>
                            <h3 className="form-title">Bana Mesaj Gönder</h3>

                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">İsim</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="İsminizi girin"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="Email adresinizi girin"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Mesaj</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        placeholder="Mesajınızı girin"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="form-footer">
                                    <button
                                        type="submit"
                                        className={`form-button ${formStatus.success ? 'success-button' : 'submit-button'}`}
                                        disabled={formStatus.submitting}
                                    >
                                        {formStatus.submitting ? 'Gönderiliyor...' : formStatus.success ? 'Gönderildi!' : 'Mesaj Gönder'}
                                    </button>
                                </div>

                                <div className={`form-progress ${formStatus.submitting ? 'submitting' : formStatus.success ? 'success' : ''}`}></div>

                                {formStatus.success && (
                                    <p className="success-message" style={{ display: 'block' }}>
                                        Mesajınız başarıyla gönderildi. Teşekkürler!
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;