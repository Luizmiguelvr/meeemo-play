/**
 * ============================================
 * MEEEMO PLAY - Internacionalização (i18n)
 * ============================================
 * 
 * Suporte a múltiplos idiomas: Português, Inglês, Espanhol
 * 
 * Para adicionar novos textos:
 * 1. Adicione a chave em todos os idiomas
 * 2. Use data-i18n="chave" no HTML
 */

const i18n = {
    // Idiomas suportados
    languages: {
        pt: 'Português',
        en: 'English',
        es: 'Español'
    },

    // Textos traduzidos
    translations: {
        pt: {
            // Header
            'nav.about': 'Sobre',
            'nav.music': 'Músicas',
            'nav.parents': 'Para os Pais',
            'nav.youtube': 'YouTube',
            'nav.spotify': 'Spotify',
            'btn.watch': 'Assistir Agora',
            
            // Hero
            'hero.title': 'Meeemo Play existe para ajudar crianças a memorizarem a Palavra de Deus desde cedo.',
            'hero.subtitle': 'Conteúdo cristão infantil focado em memorização bíblica, valores e repetição intencional por meio da música.',
            'btn.youtube': 'Assistir no YouTube',
            'btn.spotify': 'Ouvir no Spotify',
            
            // Sobre
            'about.title': 'Meeemo vem de memorizar.',
            'about.subtitle': 'E memorizar a Palavra de Deus desde cedo transforma vidas.',
            'about.text1': 'O Meeemo Play nasceu com um propósito claro: ajudar crianças a guardarem a Palavra de Deus no coração desde os primeiros anos de vida.',
            'about.text2': 'Usamos a música e a animação como ferramentas, mas nosso foco é formação espiritual, memorização bíblica e fundamentos cristãos sólidos para a infância.',
            'about.text3': 'Todo o nosso conteúdo é cuidadosamente desenvolvido para crianças de 0 a 5 anos, respeitando o tempo, a linguagem e a capacidade de aprendizado dessa fase tão importante.',
            'about.text4': 'As canções são simples, repetitivas e intencionais — pensadas para que a Palavra seja lembrada, cantada e vivida no dia a dia da criança.',
            'about.quote': 'Aqui, a diversão é o caminho.\nA Palavra de Deus é o destino.',
            'feature.music': 'Músicas Catantes',
            'feature.bible': 'Base Bíblica',
            'feature.animation': 'Animações Coloridas',
            'feature.kids': 'Para Crianças',
            
            // Conteúdo
            'content.title': 'Nosso Conteúdo',
            'card.verses.title': 'Versículos Cantados',
            'card.verses.text': 'Versículos bíblicos transformados em músicas fáceis de memorizar. Cada canção ajuda as crianças a guardarem a Palavra de Deus no coração.',
            'card.songs.title': 'Músicas Bíblicas',
            'card.songs.text': 'Histórias bíblicas contadas através de músicas animadas e educativas. De Noé até Jesus, todas as histórias ganham vida!',
            'card.animations.title': 'Animações Educativas',
            'card.animations.text': 'Vídeos coloridos e interativos que ensinam valores cristãos, números, cores e muito mais de forma divertida.',
            
            // Para os Pais
            'parents.title': 'Para os Pais',
            'parents.safe.title': 'Conteúdo Seguro',
            'parents.safe.text': 'Todo o conteúdo do Meeemo Play é cuidadosamente desenvolvido para ser seguro e apropriado para crianças. Sem violência, sem conteúdo inadequado, apenas diversão e aprendizado saudável.',
            'parents.bible.title': 'Base Bíblica Sólida',
            'parents.bible.text': 'Todas as músicas e histórias são baseadas na Bíblia Sagrada, ensinando valores cristãos e princípios que ajudarão seus filhos a crescerem com uma base sólida na fé.',
            'parents.gentle.title': 'Sem Estímulos Agressivos',
            'parents.gentle.text': 'Nossas animações são suaves e coloridas, sem cortes rápidos ou estímulos excessivos. O ritmo é pensado para acalmar e educar, não para superestimular.',
            'parents.routine.title': 'Ideal para Rotina',
            'parents.routine.text': 'Perfeito para momentos de aprendizado, antes de dormir, ou durante brincadeiras. O conteúdo pode ser facilmente incorporado na rotina diária da família.',
            
            // Plataformas
            'platforms.title': 'Onde Nos Encontrar',
            'platform.youtube': 'YouTube',
            'platform.youtube.desc': 'Assistir nossos vídeos e animações',
            'platform.youtubeKids': 'YouTube Kids',
            'platform.youtubeKids.desc': 'Versão segura para crianças',
            'platform.spotify': 'Spotify',
            'platform.spotify.desc': 'Ouça nossas músicas',
            
            // Footer
            'footer.copyright': '© Meeemo Play — Educação cristã infantil',
            'footer.madeWith': 'Feito com amor 💛'
        },
        
        en: {
            // Header
            'nav.about': 'About',
            'nav.music': 'Music',
            'nav.parents': 'For Parents',
            'nav.youtube': 'YouTube',
            'nav.spotify': 'Spotify',
            'btn.watch': 'Watch Now',
            
            // Hero
            'hero.title': 'Meeemo Play exists to help children memorize God\'s Word from an early age.',
            'hero.subtitle': 'Christian children\'s content focused on biblical memorization, values, and intentional repetition through music.',
            'btn.youtube': 'Watch on YouTube',
            'btn.spotify': 'Listen on Spotify',
            
            // Sobre
            'about.title': 'Meeemo comes from memorize.',
            'about.subtitle': 'And memorizing God\'s Word from an early age transforms lives.',
            'about.text1': 'Meeemo Play was born with a clear purpose: to help children keep God\'s Word in their hearts from their earliest years.',
            'about.text2': 'We use music and animation as tools, but our focus is spiritual formation, biblical memorization, and solid Christian foundations for childhood.',
            'about.text3': 'All our content is carefully developed for children aged 0 to 5 years, respecting the time, language, and learning capacity of this very important phase.',
            'about.text4': 'The songs are simple, repetitive, and intentional — designed so that the Word is remembered, sung, and lived in the child\'s daily life.',
            'about.quote': 'Here, fun is the path.\nGod\'s Word is the destination.',
            'feature.music': 'Catchy Songs',
            'feature.bible': 'Biblical Foundation',
            'feature.animation': 'Colorful Animations',
            'feature.kids': 'For Kids',
            
            // Conteúdo
            'content.title': 'Our Content',
            'card.verses.title': 'Sung Verses',
            'card.verses.text': 'Bible verses transformed into easy-to-memorize songs. Each song helps children keep God\'s Word in their hearts.',
            'card.songs.title': 'Biblical Songs',
            'card.songs.text': 'Bible stories told through animated and educational songs. From Noah to Jesus, all stories come to life!',
            'card.animations.title': 'Educational Animations',
            'card.animations.text': 'Colorful and interactive videos that teach Christian values, numbers, colors, and much more in a fun way.',
            
            // Para os Pais
            'parents.title': 'For Parents',
            'parents.safe.title': 'Safe Content',
            'parents.safe.text': 'All Meeemo Play content is carefully developed to be safe and appropriate for children. No violence, no inappropriate content, just fun and healthy learning.',
            'parents.bible.title': 'Solid Biblical Foundation',
            'parents.bible.text': 'All songs and stories are based on the Holy Bible, teaching Christian values and principles that will help your children grow with a solid foundation in faith.',
            'parents.gentle.title': 'No Aggressive Stimuli',
            'parents.gentle.text': 'Our animations are smooth and colorful, without quick cuts or excessive stimuli. The pace is designed to calm and educate, not to overstimulate.',
            'parents.routine.title': 'Ideal for Routine',
            'parents.routine.text': 'Perfect for learning moments, before bedtime, or during playtime. The content can be easily incorporated into the family\'s daily routine.',
            
            // Plataformas
            'platforms.title': 'Where to Find Us',
            'platform.youtube': 'YouTube',
            'platform.youtube.desc': 'Watch our videos and animations',
            'platform.youtubeKids': 'YouTube Kids',
            'platform.youtubeKids.desc': 'Safe version for children',
            'platform.spotify': 'Spotify',
            'platform.spotify.desc': 'Listen to our music',
            
            // Footer
            'footer.copyright': '© Meeemo Play — Christian children\'s education',
            'footer.madeWith': 'Made with love 💛'
        },
        
        es: {
            // Header
            'nav.about': 'Acerca de',
            'nav.music': 'Música',
            'nav.parents': 'Para Padres',
            'nav.youtube': 'YouTube',
            'nav.spotify': 'Spotify',
            'btn.watch': 'Ver Ahora',
            
            // Hero
            'hero.title': 'Meeemo Play existe para ayudar a los niños a memorizar la Palabra de Dios desde temprano.',
            'hero.subtitle': 'Contenido cristiano infantil enfocado en memorización bíblica, valores y repetición intencional a través de la música.',
            'btn.youtube': 'Ver en YouTube',
            'btn.spotify': 'Escuchar en Spotify',
            
            // Sobre
            'about.title': 'Meeemo viene de memorizar.',
            'about.subtitle': 'Y memorizar la Palabra de Dios desde temprano transforma vidas.',
            'about.text1': 'Meeemo Play nació con un propósito claro: ayudar a los niños a guardar la Palabra de Dios en sus corazones desde los primeros años de vida.',
            'about.text2': 'Usamos la música y la animación como herramientas, pero nuestro enfoque es la formación espiritual, la memorización bíblica y los fundamentos cristianos sólidos para la infancia.',
            'about.text3': 'Todo nuestro contenido está cuidadosamente desarrollado para niños de 0 a 5 años, respetando el tiempo, el lenguaje y la capacidad de aprendizaje de esta fase tan importante.',
            'about.text4': 'Las canciones son simples, repetitivas e intencionales — pensadas para que la Palabra sea recordada, cantada y vivida en el día a día del niño.',
            'about.quote': 'Aquí, la diversión es el camino.\nLa Palabra de Dios es el destino.',
            'feature.music': 'Canciones Pegajosas',
            'feature.bible': 'Base Bíblica',
            'feature.animation': 'Animaciones Coloridas',
            'feature.kids': 'Para Niños',
            
            // Conteúdo
            'content.title': 'Nuestro Contenido',
            'card.verses.title': 'Versículos Cantados',
            'card.verses.text': 'Versículos bíblicos transformados en canciones fáciles de memorizar. Cada canción ayuda a los niños a guardar la Palabra de Dios en sus corazones.',
            'card.songs.title': 'Canciones Bíblicas',
            'card.songs.text': 'Historias bíblicas contadas a través de canciones animadas y educativas. ¡Desde Noé hasta Jesús, todas las historias cobran vida!',
            'card.animations.title': 'Animaciones Educativas',
            'card.animations.text': 'Videos coloridos e interactivos que enseñan valores cristianos, números, colores y mucho más de forma divertida.',
            
            // Para os Pais
            'parents.title': 'Para Padres',
            'parents.safe.title': 'Contenido Seguro',
            'parents.safe.text': 'Todo el contenido de Meeemo Play está cuidadosamente desarrollado para ser seguro y apropiado para niños. Sin violencia, sin contenido inapropiado, solo diversión y aprendizaje saludable.',
            'parents.bible.title': 'Base Bíblica Sólida',
            'parents.bible.text': 'Todas las canciones e historias están basadas en la Santa Biblia, enseñando valores cristianos y principios que ayudarán a sus hijos a crecer con una base sólida en la fe.',
            'parents.gentle.title': 'Sin Estímulos Agresivos',
            'parents.gentle.text': 'Nuestras animaciones son suaves y coloridas, sin cortes rápidos o estímulos excesivos. El ritmo está pensado para calmar y educar, no para sobreestimular.',
            'parents.routine.title': 'Ideal para Rutina',
            'parents.routine.text': 'Perfecto para momentos de aprendizaje, antes de dormir, o durante juegos. El contenido puede incorporarse fácilmente en la rutina diaria de la familia.',
            
            // Plataformas
            'platforms.title': 'Dónde Encontrarnos',
            'platform.youtube': 'YouTube',
            'platform.youtube.desc': 'Ver nuestros videos y animaciones',
            'platform.youtubeKids': 'YouTube Kids',
            'platform.youtubeKids.desc': 'Versión segura para niños',
            'platform.spotify': 'Spotify',
            'platform.spotify.desc': 'Escucha nuestra música',
            
            // Footer
            'footer.copyright': '© Meeemo Play — Educación cristiana infantil',
            'footer.madeWith': 'Hecho con amor 💛'
        }
    },

    // Idioma atual
    currentLang: 'pt',

    /**
     * Detectar idioma do navegador
     */
    detectLanguage() {
        // Verificar localStorage primeiro
        const savedLang = localStorage.getItem('meemoplay_lang');
        if (savedLang && this.translations[savedLang]) {
            return savedLang;
        }

        // Detectar do navegador
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();

        // Verificar se o idioma é suportado
        if (this.translations[langCode]) {
            return langCode;
        }

        // Fallback para português
        return 'pt';
    },

    /**
     * Obter tradução
     */
    t(key) {
        const translation = this.translations[this.currentLang];
        if (!translation) {
            console.warn(`Language "${this.currentLang}" not found`);
            return key;
        }
        
        const text = translation[key];
        if (!text) {
            console.warn(`Translation key "${key}" not found for language "${this.currentLang}"`);
            return key;
        }
        
        return text;
    },

    /**
     * Aplicar traduções no HTML
     */
    applyTranslations() {
        // Atualizar atributo lang do HTML
        document.documentElement.lang = this.currentLang;

        // Aplicar todas as traduções com data-i18n
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            // Verificar se é um atributo específico (ex: data-i18n-placeholder)
            if (element.hasAttribute('data-i18n-placeholder')) {
                element.placeholder = translation;
            } else if (element.hasAttribute('data-i18n-title')) {
                element.title = translation;
            } else if (element.hasAttribute('data-i18n-aria-label')) {
                element.setAttribute('aria-label', translation);
            } else {
                // Texto normal - substituir conteúdo mantendo estrutura
                // Se o elemento é um span dentro de outro elemento (como hero-title)
                // apenas atualizar o texto do span
                if (element.tagName === 'SPAN' && element.parentElement) {
                    element.textContent = translation;
                } else if (element.classList && element.classList.contains('quote-text')) {
                    // Para quote-text, preservar quebras de linha
                    element.innerHTML = translation.replace(/\n/g, '<br>');
                } else {
                    // Para outros elementos, verificar se tem filhos sem data-i18n
                    const childrenWithoutI18n = Array.from(element.children).filter(
                        child => !child.hasAttribute('data-i18n')
                    );
                    
                    if (childrenWithoutI18n.length > 0) {
                        // Preservar filhos e atualizar apenas texto
                        const firstTextNode = Array.from(element.childNodes).find(
                            node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
                        );
                        if (firstTextNode) {
                            firstTextNode.textContent = translation;
                            // Remover outros text nodes vazios
                            Array.from(element.childNodes)
                                .filter(node => node.nodeType === Node.TEXT_NODE && node !== firstTextNode)
                                .forEach(node => {
                                    if (!node.textContent.trim()) node.remove();
                                });
                        } else {
                            element.insertBefore(document.createTextNode(translation), element.firstChild);
                        }
                    } else {
                        // Sem filhos especiais, substituir todo o conteúdo
                        element.textContent = translation;
                    }
                }
            }
        });

        // Atualizar meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = this.t('hero.subtitle');
        }

        // Atualizar título da página
        document.title = `${this.t('about.title')} - ${this.t('footer.copyright').split('—')[1] || 'Meeemo Play'}`;
    },

    /**
     * Trocar idioma
     */
    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.warn(`Language "${lang}" not supported`);
            return;
        }

        this.currentLang = lang;
        localStorage.setItem('meemoplay_lang', lang);
        this.applyTranslations();
        
        // Atualizar seletor de idioma
        this.updateLanguageSelector();
    },

    /**
     * Atualizar seletor de idioma visual
     */
    updateLanguageSelector() {
        const selector = document.getElementById('languageSelector');
        if (!selector) return;

        const buttons = selector.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    },

    /**
     * Inicializar i18n
     */
    init() {
        this.currentLang = this.detectLanguage();
        this.applyTranslations();
        this.updateLanguageSelector();
    }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.i18n = i18n;
}

