/**
 * ============================================
 * MEEMO PLAY - Internacionalização (i18n)
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
            'hero.title': 'Transforme o tempo de tela em tempo com a Palavra de Deus.',
            'hero.subtitle': 'Músicas, histórias e versículos para ajudar crianças a guardarem a Palavra de Deus desde os primeiros anos de vida.',
            'btn.youtube': 'Assistir no YouTube',
            'btn.spotify': 'Ouvir no Spotify',

            // O Que É (Value Proposition)
            'value.title': 'Mais que diversão, uma ferramenta de amor.',
            'value.text': 'Em um mundo de telas frenéticas, o Meemo Play oferece a "Calma que Ensina". Unimos animação de alta qualidade, ritmos suaves e a neurociência da repetição para ensinar valores bíblicos e morais. Sem ansiedade, apenas aprendizado.',

            // Quem é o Meemo
            'meemo.title': 'Por que um Elefante?',
            'meemo.text': 'Dizem que elefantes nunca esquecem. O Meemo é o nosso mascote da memória! Ele e a turma da Bubu existem para garantir que as primeiras palavras que seu filho guarde sejam palavras de vida, amor e do Criador. O que se aprende cantando, não se esquece jamais.',

            // Metodologia (Safe Zone)
            'method.title': 'A "Zona Segura" para 0 a 5 anos.',
            'method.bullet1': 'Ritmo Saudável: Edição pensada para não sobrecarregar a mente da criança.',
            'method.bullet2': 'Repetição Inteligente: Canções simples (Nursery Rhymes) que constroem vocabulário.',
            'method.bullet3': 'Fundamento Sólido: Histórias que conectam a criança à voz de Deus antes mesmo de saber ler.',

            // CTA Final
            'cta.text': 'Junte-se a milhares de famílias que escolheram o propósito. Aperte o play na arquinha.',
            'cta.button': 'Inscreva-se no YouTube',
            
            // Sobre
            'about.title': 'Meemo vem de memorizar.',
            'about.subtitle': 'E memorizar a Palavra de Deus desde cedo transforma vidas.',
            'about.text1': 'O Meemo Play nasceu com um propósito claro: ajudar crianças a guardarem a Palavra de Deus no coração desde os primeiros anos de vida.',
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
            'parents.safe.text': 'Todo o conteúdo do Meemo Play é cuidadosamente desenvolvido para ser seguro e apropriado para crianças. Sem violência, sem conteúdo inadequado, apenas diversão e aprendizado saudável.',
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
            'platform.appleMusic': 'Apple Music',
            'platform.appleMusic.desc': 'Ouça no Apple Music',
            'platform.youtubeMusic': 'YouTube Music',
            'platform.youtubeMusic.desc': 'Ouça no YouTube Music',
            'platform.instagram': 'Instagram',
            'platform.instagram.desc': 'Siga-nos no Instagram',
            
            // Footer
            'footer.copyright': '© Meemo Play — Educação cristã infantil',
            'footer.madeWith': 'Feito com amor',
            'footer.tagline': 'Aprender a Palavra de Deus brincando',
            'footer.youtube': 'YouTube',
            'footer.instagram': 'Instagram'
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
            'hero.title': 'Turn screen time into time with God\'s Word.',
            'hero.subtitle': 'Songs, stories, and verses to help children keep God\'s Word in their hearts from their earliest years.',
            'btn.youtube': 'Watch on YouTube',
            'btn.spotify': 'Listen on Spotify',

            // O Que É (Value Proposition)
            'value.title': 'More than fun, a tool of love.',
            'value.text': 'In a world of chaotic screens, Meemo Play offers "Calm that Teaches." We combine high-quality animation, gentle rhythms, and the neuroscience of repetition to teach biblical and moral values. No anxiety, just learning.',

            // Quem é o Meemo
            'meemo.title': 'Why an Elephant?',
            'meemo.text': 'They say elephants never forget. Meemo is our memory mascot! He and the Bubu squad exist to ensure the first words your child keeps are words of life, love, and the Creator. What is learned through song is never forgotten.',

            // Metodologia (Safe Zone)
            'method.title': 'The "Safe Zone" for ages 0–5.',
            'method.bullet1': 'Healthy Pacing: Editing designed not to overstimulate the child\'s mind.',
            'method.bullet2': 'Smart Repetition: Simple songs (Nursery Rhymes) that build vocabulary.',
            'method.bullet3': 'Solid Foundation: Stories that connect the child to God\'s voice before they can even read.',

            // CTA Final
            'cta.text': 'Join thousands of families who chose purpose. Press play on the little ark.',
            'cta.button': 'Subscribe on YouTube',
            
            // Sobre
            'about.title': 'Meemo comes from memorize.',
            'about.subtitle': 'And memorizing God\'s Word from an early age transforms lives.',
            'about.text1': 'Meemo Play was born with a clear purpose: to help children keep God\'s Word in their hearts from their earliest years.',
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
            'parents.safe.text': 'All Meemo Play content is carefully developed to be safe and appropriate for children. No violence, no inappropriate content, just fun and healthy learning.',
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
            'platform.appleMusic': 'Apple Music',
            'platform.appleMusic.desc': 'Listen on Apple Music',
            'platform.youtubeMusic': 'YouTube Music',
            'platform.youtubeMusic.desc': 'Listen on YouTube Music',
            'platform.instagram': 'Instagram',
            'platform.instagram.desc': 'Follow us on Instagram',
            
            // Footer
            'footer.copyright': '© Meemo Play — Christian children\'s education',
            'footer.madeWith': 'Made with love',
            'footer.tagline': 'Learning God\'s Word through play',
            'footer.youtube': 'YouTube',
            'footer.instagram': 'Instagram'
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
            'hero.title': 'Transforma el tiempo de pantalla en tiempo con la Palabra de Dios.',
            'hero.subtitle': 'Canciones, historias y versículos para ayudar a los niños a guardar la Palabra de Dios desde los primeros años de vida.',
            'btn.youtube': 'Ver en YouTube',
            'btn.spotify': 'Escuchar en Spotify',

            // O Que É (Value Proposition)
            'value.title': 'Más que diversión, una herramienta de amor.',
            'value.text': 'En un mundo de pantallas frenéticas, Meemo Play ofrece la "Calma que Enseña". Unimos animación de alta calidad, ritmos suaves y la neurociencia de la repetición para enseñar valores bíblicos y morales. Sin ansiedad, solo aprendizaje.',

            // Quem é o Meemo
            'meemo.title': '¿Por qué un Elefante?',
            'meemo.text': 'Dicen que los elefantes nunca olvidan. ¡Meemo es nuestra mascota de la memoria! Él y la pandilla de Bubu existen para asegurar que las primeras palabras que tu hijo guarde sean palabras de vida, amor y del Creador. Lo que se aprende cantando, no se olvida jamás.',

            // Metodologia (Safe Zone)
            'method.title': 'La "Zona Segura" para 0 a 5 años.',
            'method.bullet1': 'Ritmo Saludable: Edición pensada para no sobrecargar la mente del niño.',
            'method.bullet2': 'Repetición Inteligente: Canciones simples que construyen vocabulario.',
            'method.bullet3': 'Fundamento Sólido: Historias que conectan al niño con la voz de Dios antes incluso de saber leer.',

            // CTA Final
            'cta.text': 'Únete a miles de familias que eligieron el propósito. Dale play al arca.',
            'cta.button': 'Suscríbete en YouTube',
            
            // Sobre
            'about.title': 'Meemo viene de memorizar.',
            'about.subtitle': 'Y memorizar la Palabra de Dios desde temprano transforma vidas.',
            'about.text1': 'Meemo Play nació con un propósito claro: ayudar a los niños a guardar la Palabra de Dios en sus corazones desde los primeros años de vida.',
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
            'parents.safe.text': 'Todo el contenido de Meemo Play está cuidadosamente desarrollado para ser seguro y apropiado para niños. Sin violencia, sin contenido inapropiado, solo diversión y aprendizaje saludable.',
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
            'platform.appleMusic': 'Apple Music',
            'platform.appleMusic.desc': 'Escucha en Apple Music',
            'platform.youtubeMusic': 'YouTube Music',
            'platform.youtubeMusic.desc': 'Escucha en YouTube Music',
            'platform.instagram': 'Instagram',
            'platform.instagram.desc': 'Síguenos en Instagram',
            
            // Footer
            'footer.copyright': '© Meemo Play — Educación cristiana infantil',
            'footer.madeWith': 'Hecho con amor',
            'footer.tagline': 'Aprender la Palabra de Dios jugando',
            'footer.youtube': 'YouTube',
            'footer.instagram': 'Instagram'
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
        document.title = `${this.t('about.title')} - ${this.t('footer.copyright').split('—')[1] || 'Meemo Play'}`;
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

        // Atualizar links YouTube + Instagram conforme o idioma
        if (typeof window.updateLangLinks === 'function') {
            window.updateLangLinks(lang);
        } else if (typeof window.updateYouTubeLinks === 'function') {
            window.updateYouTubeLinks(lang);
        }
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

        if (typeof window.updateLangLinks === 'function') {
            window.updateLangLinks(this.currentLang);
        } else if (typeof window.updateYouTubeLinks === 'function') {
            window.updateYouTubeLinks(this.currentLang);
        }
    }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.i18n = i18n;
}

