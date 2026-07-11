/**
 * ============================================
 * MEEMO PLAY - Configuração Central
 * ============================================
 * 
 * ALTERE AQUI PARA MUDAR O SITE INTEIRO
 * 
 * Todas as alterações neste arquivo serão refletidas
 * automaticamente em todo o site.
 */

const MeemoConfig = {
    // ============================================
    // IDENTIDADE DA MARCA
    // ============================================
    
    /**
     * Nome da marca
     * Altere aqui para mudar o nome em todo o site
     */
    brandName: 'Meemo Play',
    
    /**
     * Slogan principal
     * Aparece no hero section e footer
     */
    slogan: 'Aprender a Palavra de Deus brincando',
    
    /**
     * Descrição curta
     * Usada em meta tags e descrições
     */
    description: 'Músicas cristãs educativas e animadas para crianças aprenderem sobre Deus de forma divertida e memorável',
    
    /**
     * Logo oficial (PNG)
     * Usado no header e footer
     */
    logo: {
        src: 'assets/images/logo.png',
        alt: 'Meemo Play',
        width: 1536,
        height: 1024
    },

    /**
     * Assets de marca
     */
    assets: {
        mascot: 'assets/images/meemo.png',
        characters: 'assets/images/personagens.png'
    },
    
    // ============================================
    // CORES PRINCIPAIS
    // ============================================
    // Alinhadas ao logo oficial Meemo Play
    
    colors: {
        primary: '#2B6DE0',      // Azul Meemo
        blueLight: '#5BA3F5',    // Azul céu
        yellow: '#FFD24A',       // Amarelo estrela
        green: '#3ECF5A',        // Verde logo
        red: '#FF4D5A',          // Vermelho logo
        orange: '#FF8A3D',       // Laranja logo
        purple: '#7B5CFF',       // Roxo Play
        white: '#FFFFFF',
        dark: '#3A4DB8'          // Azul-roxo footer
    },
    
    // ============================================
    // LINKS E PLATAFORMAS
    // ============================================
    // Altere aqui para mudar os links em todo o site
    
    /**
     * Links por idioma (YouTube + Instagram)
     * Atualizados automaticamente em init / setLanguage
     */
    linksByLang: {
        youtube: {
            pt: 'https://www.youtube.com/@meemoplaybr',
            en: 'https://www.youtube.com/@MeemoPlay',
            es: 'https://www.youtube.com/@MeemoPlayEspa%C3%B1ol'
        },
        instagram: {
            pt: 'https://www.instagram.com/meemoplaybrasil/',
            en: 'https://www.instagram.com/meemoplayus/',
            es: 'https://www.instagram.com/meemoplayes/'
        }
    },

    links: {
        youtube: 'https://www.youtube.com/@meemoplaybr', // fallback / default PT
        youtubeKids: 'https://www.youtube.com/@meemoplaybr',
        spotify: 'https://open.spotify.com/intl-pt/artist/1PZm5jJFOwCYdkht5tzA0x',
        appleMusic: 'https://music.apple.com/us/album/genesis-em-portugues-br/6777862038',
        youtubeMusic: 'https://music.youtube.com/channel/UCJ6vRJGf9xrIBMwuHaxFTcg',
        instagram: 'https://www.instagram.com/meemoplaybrasil/' // fallback / default PT
    },
    
    // ============================================
    // CONTEÚDO
    // ============================================
    
    /**
     * Texto sobre o projeto
     */
    about: {
        intro: '"Meemo" vem de memorizar! 🧠✨',
        text1: 'O Meemo Play é um projeto dedicado a ensinar a Palavra de Deus para crianças de forma alegre, educativa e musical. Acreditamos que a melhor forma de aprender é através da música e da diversão!',
        text2: 'Nosso conteúdo é especialmente desenvolvido para crianças de 0 a 5 anos, com músicas cativantes, animações coloridas e mensagens bíblicas que ficam na memória.'
    },
    
    /**
     * Cards de conteúdo
     */
    contentCards: [
        {
            icon: '📜',
            title: 'Versículos Cantados',
            text: 'Versículos bíblicos transformados em músicas fáceis de memorizar. Cada canção ajuda as crianças a guardarem a Palavra de Deus no coração.'
        },
        {
            icon: '🎼',
            title: 'Músicas Bíblicas',
            text: 'Histórias bíblicas contadas através de músicas animadas e educativas. De Noé até Jesus, todas as histórias ganham vida!'
        },
        {
            icon: '🎬',
            title: 'Animações Educativas',
            text: 'Vídeos coloridos e interativos que ensinam valores cristãos, números, cores e muito mais de forma divertida.'
        }
    ],
    
    /**
     * Cards "Para os Pais"
     */
    parentsCards: [
        {
            icon: '🛡️',
            title: 'Conteúdo Seguro',
            text: 'Todo o conteúdo do Meemo Play é cuidadosamente desenvolvido para ser seguro e apropriado para crianças. Sem violência, sem conteúdo inadequado, apenas diversão e aprendizado saudável.'
        },
        {
            icon: '📚',
            title: 'Base Bíblica Sólida',
            text: 'Todas as músicas e histórias são baseadas na Bíblia Sagrada, ensinando valores cristãos e princípios que ajudarão seus filhos a crescerem com uma base sólida na fé.'
        },
        {
            icon: '💚',
            title: 'Sem Estímulos Agressivos',
            text: 'Nossas animações são suaves e coloridas, sem cortes rápidos ou estímulos excessivos. O ritmo é pensado para acalmar e educar, não para superestimular.'
        },
        {
            icon: '⏰',
            title: 'Ideal para Rotina',
            text: 'Perfeito para momentos de aprendizado, antes de dormir, ou durante brincadeiras. O conteúdo pode ser facilmente incorporado na rotina diária da família.'
        }
    ],
    
    /**
     * Plataformas
     */
    platforms: [
        {
            name: 'YouTube',
            icon: 'youtube',
            text: 'Assistir nossos vídeos e animações',
            link: 'youtube',
            color: '#FF5252'
        },
        {
            name: 'YouTube Kids',
            icon: 'youtube',
            text: 'Versão segura para crianças',
            link: 'youtubeKids',
            color: '#FF5252'
        },
        {
            name: 'Spotify',
            icon: 'spotify',
            text: 'Ouça nossas músicas',
            link: 'spotify',
            color: '#00C853'
        },
        {
            name: 'Apple Music',
            icon: 'appleMusic',
            text: 'Ouça no Apple Music',
            link: 'appleMusic',
            color: '#FC3C44'
        },
        {
            name: 'YouTube Music',
            icon: 'youtubeMusic',
            text: 'Ouça no YouTube Music',
            link: 'youtubeMusic',
            color: '#FF0000'
        },
        {
            name: 'Instagram',
            icon: 'instagram',
            text: 'Siga-nos no Instagram',
            link: 'instagram',
            color: '#DD2A7B'
        }
    ],
    
    /**
     * Footer
     */
    footer: {
        copyright: '© Meemo Play — Educação cristã infantil',
        madeWith: 'Feito com amor 💛'
    },
    
    // ============================================
    // MENU DE NAVEGAÇÃO
    // ============================================
    
    menu: [
        { text: 'Sobre', href: '#sobre' },
        { text: 'Músicas', href: '#conteudo' },
        { text: 'Para os Pais', href: '#pais' },
        { text: 'YouTube', href: '#plataformas' },
        { text: 'Spotify', href: '#plataformas' }
    ]
};

// Exportar configuração
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MeemoConfig;
}

