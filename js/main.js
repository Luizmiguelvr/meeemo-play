/**
 * MEEMO PLAY - JavaScript Principal
 * Interatividade e Animações
 *
 * Consome config.js para aplicar configurações dinamicamente
 */

(function() {
    'use strict';

    // ============================================
    // APLICAR CONFIGURAÇÕES DO CONFIG.JS
    // ============================================

    function getLangLink(platform, lang) {
        if (typeof MeemoConfig === 'undefined') {
            return '#';
        }

        const code = lang || (typeof i18n !== 'undefined' ? i18n.currentLang : 'pt');
        const byLang = MeemoConfig.linksByLang || {};
        const platformMap = byLang[platform] || {};
        const links = MeemoConfig.links || {};

        return platformMap[code] || links[platform] || '#';
    }

    function getYouTubeUrl(lang) {
        return getLangLink('youtube', lang);
    }

    function getInstagramUrl(lang) {
        return getLangLink('instagram', lang);
    }

    /**
     * Atualiza todos os links YouTube e Instagram
     * conforme o idioma atual. Chamado no init e em setLanguage.
     */
    function updateLangLinks(lang) {
        if (typeof MeemoConfig === 'undefined' || !MeemoConfig.links) {
            return;
        }

        const youtubeUrl = getYouTubeUrl(lang);
        const instagramUrl = getInstagramUrl(lang);
        const links = MeemoConfig.links;

        // Manter links sincronizados com o idioma ativo
        links.youtube = youtubeUrl;
        links.youtubeKids = youtubeUrl;
        links.instagram = instagramUrl;

        // Botões / CTAs YouTube (hero, CTA final, etc.)
        document.querySelectorAll('.btn-youtube, [data-youtube-link]').forEach(el => {
            if (el.tagName === 'A') {
                el.href = youtubeUrl;
                el.target = '_blank';
                el.rel = 'noopener noreferrer';
            }
        });

        // Cards de plataforma YouTube / YouTube Kids
        document.querySelectorAll('[data-platform="youtube"], [data-platform="youtubeKids"]').forEach(el => {
            el.href = youtubeUrl;
        });

        // Card YouTube (classe) — fallback se data-platform não existir
        document.querySelectorAll('.plataforma-youtube, .plataforma-youtube-kids').forEach(el => {
            el.href = youtubeUrl;
        });

        // Instagram: cards, footer e qualquer data-instagram-link
        document.querySelectorAll(
            '[data-platform="instagram"], .plataforma-instagram, [data-instagram-link]'
        ).forEach(el => {
            if (el.tagName === 'A') {
                el.href = instagramUrl;
                el.target = '_blank';
                el.rel = 'noopener noreferrer';
            }
        });
    }

    // Alias legado + exposição global
    const updateYouTubeLinks = updateLangLinks;
    window.updateLangLinks = updateLangLinks;
    window.updateYouTubeLinks = updateYouTubeLinks;

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
            if (config.colors.orange) root.style.setProperty('--color-orange', config.colors.orange);
            if (config.colors.purple) root.style.setProperty('--color-purple', config.colors.purple);
        }

        // Logo em imagem (não substituir por SVG antigo)
        if (config.logo && config.logo.src) {
            document.querySelectorAll('.logo-img, .footer-logo-img').forEach(img => {
                img.src = config.logo.src;
                if (config.logo.alt) img.alt = config.logo.alt;
            });
        }

        // Nome da marca (quando ainda houver texto)
        const brandNames = document.querySelectorAll('.logo-text, .footer-logo-text');
        brandNames.forEach(el => {
            if (el) el.textContent = config.brandName;
        });

        // Links estáticos (Spotify, Apple Music, YouTube Music)
        document.querySelectorAll('.btn-spotify').forEach(btn => {
            if (config.links.spotify) {
                btn.href = config.links.spotify;
                btn.target = '_blank';
                btn.rel = 'noopener noreferrer';
            }
        });

        document.querySelectorAll('[data-platform="spotify"]').forEach(el => {
            if (config.links.spotify) el.href = config.links.spotify;
        });

        document.querySelectorAll('[data-platform="appleMusic"]').forEach(el => {
            if (config.links.appleMusic) el.href = config.links.appleMusic;
        });

        document.querySelectorAll('[data-platform="youtubeMusic"]').forEach(el => {
            if (config.links.youtubeMusic) el.href = config.links.youtubeMusic;
        });

        // Fallbacks por classe
        document.querySelectorAll('.plataforma-spotify').forEach(el => {
            if (config.links.spotify) el.href = config.links.spotify;
        });
        document.querySelectorAll('.plataforma-apple-music').forEach(el => {
            if (config.links.appleMusic) el.href = config.links.appleMusic;
        });
        document.querySelectorAll('.plataforma-youtube-music').forEach(el => {
            if (config.links.youtubeMusic) el.href = config.links.youtubeMusic;
        });

        // YouTube + Instagram por idioma (também no init)
        const lang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'pt';
        updateLangLinks(lang);

        // Título da página
        if (config.brandName) {
            document.title = `${config.brandName} - Educação Cristã Infantil`;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            applyConfig();
            initI18n();
            initHeaderScroll();
            initHeroScrollHint();
            initReveal();
        });
    } else {
        applyConfig();
        initI18n();
        initHeaderScroll();
        initHeroScrollHint();
        initReveal();
    }

    // ============================================
    // INTERNACIONALIZAÇÃO (i18n)
    // ============================================

    function initI18n() {
        if (typeof i18n === 'undefined') {
            console.warn('i18n não encontrado. Certifique-se de que i18n.js está carregado.');
            return;
        }

        i18n.init();

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
    const header = document.getElementById('header');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 968) {
                nav.classList.remove('active');
            }
        });
    });

    if (btnAssistir) {
        btnAssistir.addEventListener('click', function() {
            const lang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'pt';
            const youtubeUrl = getYouTubeUrl(lang);
            if (youtubeUrl && youtubeUrl !== '#') {
                window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
            }
        });
    }

    // ============================================
    // HEADER — só sombra/fundo no scroll (NÃO padding)
    // ============================================
    function initHeaderScroll() {
        if (!header) return;

        const onScroll = () => {
            if (window.scrollY > 16) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // ============================================
    // INDICADOR DE SCROLL DO HERO
    // ============================================
    function initHeroScrollHint() {
        const hint = document.getElementById('heroScrollHint');
        if (!hint) return;

        const SCROLL_HIDE_AT = 56;
        const labels = {
            pt: 'Ver mais',
            en: 'See more',
            es: 'Ver más'
        };

        const updateLabel = () => {
            const lang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'pt';
            hint.setAttribute('aria-label', labels[lang] || labels.pt);
        };

        const syncVisibility = () => {
            if (window.scrollY > SCROLL_HIDE_AT) {
                hint.classList.add('hidden');
            } else {
                hint.classList.remove('hidden');
            }
        };

        updateLabel();
        syncVisibility();
        window.addEventListener('scroll', syncVisibility, { passive: true });

        // Atualizar aria-label ao trocar idioma
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                setTimeout(updateLabel, 0);
            });
        });
    }

    // ============================================
    // SCROLL REVEAL
    // ============================================
    function initReveal() {
        const revealEls = document.querySelectorAll('.reveal');
        if (!revealEls.length) return;

        if (!('IntersectionObserver' in window)) {
            revealEls.forEach(el => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealEls.forEach(el => observer.observe(el));
    }

    // ============================================
    // SCROLL SUAVE PARA LINKS DE NAVEGAÇÃO
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Só âncoras internas; links externos (YouTube, Spotify, etc.) passam direto
            if (!href || href === '#' || !href.startsWith('#')) {
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 88;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // PARALLAX LEVE NOS DECORATIVOS DO HERO
    // ============================================
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-background');

    if (hero && heroBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;

            if (scrolled < heroHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.18}px)`;
            }
        }, { passive: true });
    }

    // ============================================
    // FEEDBACK VISUAL NOS CARDS DE PLATAFORMA
    // ============================================
    document.querySelectorAll('.plataforma-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.96)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ============================================
    // LAZY LOADING (imagens com data-src)
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

    document.addEventListener('DOMContentLoaded', function() {
        document.body.classList.add('loaded');
    });

})();
