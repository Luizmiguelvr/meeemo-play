/**
 * MEEEMO PLAY - JavaScript Principal
 * Interatividade e Animações
 * 
 * Consome config.js para aplicar configurações dinamicamente
 */

(function() {
    'use strict';

    // ============================================
    // APLICAR CONFIGURAÇÕES DO CONFIG.JS
    // ============================================
    
    function applyConfig() {
        if (typeof MeemoConfig === 'undefined') {
            console.warn('MeemoConfig não encontrado. Certifique-se de que config.js está carregado antes de main.js');
            return;
        }

        const config = MeemoConfig;

        // Aplicar cores via CSS variables
        if (config.colors) {
            const root = document.documentElement;
            root.style.setProperty('--color-primary', config.colors.primary);
            root.style.setProperty('--color-blue-light', config.colors.blueLight);
            root.style.setProperty('--color-yellow', config.colors.yellow);
            root.style.setProperty('--color-green', config.colors.green);
            root.style.setProperty('--color-red', config.colors.red);
            root.style.setProperty('--color-white', config.colors.white);
            root.style.setProperty('--color-dark', config.colors.dark);
        }

        // Atualizar logo
        const logos = document.querySelectorAll('.logo svg, .footer-logo svg');
        if (config.logo && logos.length > 0) {
            logos.forEach(logo => {
                logo.outerHTML = config.logo.svg;
            });
        }

        // Atualizar nome da marca
        const brandNames = document.querySelectorAll('.logo-text, .footer-logo-text');
        brandNames.forEach(el => {
            if (el) el.textContent = config.brandName;
        });

        // Título e subtítulo do hero são gerenciados pelo i18n
        // Não sobrescrever aqui para manter compatibilidade com traduções

        // Atualizar links dos botões
        const btnYouTube = document.querySelectorAll('.btn-youtube');
        if (btnYouTube.length > 0 && config.links.youtube) {
            btnYouTube.forEach(btn => {
                btn.href = config.links.youtube;
            });
        }

        const btnSpotify = document.querySelectorAll('.btn-spotify');
        if (btnSpotify.length > 0 && config.links.spotify) {
            btnSpotify.forEach(btn => {
                btn.href = config.links.spotify;
            });
        }

        // Atualizar links das plataformas
        const platformCards = document.querySelectorAll('.plataforma-card');
        if (config.platforms && platformCards.length > 0) {
            platformCards.forEach((card, index) => {
                if (config.platforms[index] && config.links[config.platforms[index].link]) {
                    card.href = config.links[config.platforms[index].link];
                }
            });
        }

        // Atualizar footer
        const footerText = document.querySelector('.footer-text');
        if (footerText && config.footer) {
            footerText.innerHTML = `${config.footer.copyright}<br>${config.footer.madeWith}`;
        }

        // Atualizar título da página
        if (config.brandName) {
            document.title = `${config.brandName} - Educação Cristã Infantil`;
        }
    }

    // Aplicar configurações quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            applyConfig();
            initI18n();
        });
    } else {
        applyConfig();
        initI18n();
    }

    // ============================================
    // INTERNACIONALIZAÇÃO (i18n)
    // ============================================
    
    function initI18n() {
        // Verificar se i18n está disponível
        if (typeof i18n === 'undefined') {
            console.warn('i18n não encontrado. Certifique-se de que i18n.js está carregado.');
            return;
        }

        // Inicializar i18n
        i18n.init();

        // Event listeners para seletor de idioma
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                if (lang) {
                    i18n.setLanguage(lang);
                }
            });
        });
    }

    // ============================================
    // MENU MOBILE
    // ============================================
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const btnAssistir = document.getElementById('btnAssistir');

    // Toggle menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 968) {
                nav.classList.remove('active');
            }
        });
    });

    // Botão "Assistir Agora" - scroll para plataformas
    if (btnAssistir) {
        btnAssistir.addEventListener('click', function() {
            const plataformasSection = document.getElementById('plataformas');
            if (plataformasSection) {
                plataformasSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(30, 136, 229, 0.4)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(30, 136, 229, 0.3)';
            header.style.padding = '1rem 0';
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // ANIMAÇÕES AO SCROLL (Intersection Observer)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animateElements = document.querySelectorAll('.card, .pais-card, .plataforma-card, .sobre-content, .section-header');
    
    animateElements.forEach((el, index) => {
        // Garantir que o elemento seja visível primeiro
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        
        // Adiciona delay progressivo apenas para animação
        if (index % 2 === 0) {
            el.classList.add('fade-in-delay-1');
        } else {
            el.classList.add('fade-in-delay-2');
        }
        observer.observe(el);
    });

    // ============================================
    // SCROLL SUAVE PARA LINKS DE NAVEGAÇÃO
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignora links vazios ou apenas #
            if (href === '#' || href === '') {
                return;
            }

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // ANIMAÇÃO DE NOTAS MUSICAIS
    // ============================================
    const floatingNotes = document.querySelectorAll('.floating-note');
    
    floatingNotes.forEach((note, index) => {
        // Adiciona movimento aleatório
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            note.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 20 - 10}deg)`;
        }, 3000 + index * 500);
    });

    // ============================================
    // EFEITO PARALLAX SUAVE NO HERO
    // ============================================
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroOffset = hero.offsetTop;
            const heroHeight = hero.offsetHeight;

            if (scrolled < heroOffset + heroHeight) {
                const parallax = scrolled * 0.5;
                heroContent.style.transform = `translateY(${parallax}px)`;
                heroContent.style.opacity = 1 - (scrolled / heroHeight) * 0.5;
            }
        });
    }

    // ============================================
    // HOVER EFFECTS NOS CARDS
    // ============================================
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ============================================
    // BOTÕES DE PLATAFORMA - FEEDBACK VISUAL
    // ============================================
    const plataformaCards = document.querySelectorAll('.plataforma-card');
    
    plataformaCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Adiciona efeito de "pulse" ao clicar
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ============================================
    // LAZY LOADING DE IMAGENS (se houver)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // PREVENIR FLASH DE CONTEÚDO NÃO ESTILIZADO
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        document.body.classList.add('loaded');
    });

    // ============================================
    // CONSOLE MESSAGE (Opcional - remover em produção)
    // ============================================
    console.log('%c🎵 Meemo Play 🎵', 'color: #FF6B6B; font-size: 20px; font-weight: bold;');
    console.log('%cAprender a Palavra de Deus brincando!', 'color: #4ECDC4; font-size: 14px;');

})();

