/**
 * ============================================
 * MEEEMO PLAY - Configuração Central
 * ============================================
 * 
 * ALTERE AQUI PARA MUDAR O SITE INTEIRO
 * 
 * Todas as alterações neste arquivo serão refletidas
 * automaticamente em todo o site.
 */

const MeeemoConfig = {
    // ============================================
    // IDENTIDADE DA MARCA
    // ============================================
    
    /**
     * Nome da marca
     * Altere aqui para mudar o nome em todo o site
     */
    brandName: 'Meeemo Play',
    
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
     * Logo SVG
     * Altere o SVG aqui para mudar o logo em todo o site
     */
    logo: {
        svg: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="23" fill="#FFD600" stroke="#FFFFFF" stroke-width="2"/>
            <text x="25" y="32" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#1E88E5">M</text>
            <circle cx="15" cy="15" r="3" fill="#1E88E5"/>
            <circle cx="35" cy="15" r="3" fill="#1E88E5"/>
        </svg>`,
        width: 50,
        height: 50
    },
    
    // ============================================
    // CORES PRINCIPAIS
    // ============================================
    // Altere aqui para mudar as cores em todo o site
    // As cores são aplicadas via CSS variables em variables.css
    
    colors: {
        primary: '#1E88E5',      // Azul principal - identidade da marca
        blueLight: '#64B5F6',    // Azul claro
        yellow: '#FFD600',       // Amarelo vibrante
        green: '#00C853',        // Verde vibrante
        red: '#FF5252',          // Vermelho vibrante (detalhes)
        white: '#FFFFFF',        // Branco
        dark: '#1565C0'          // Azul escuro (footer)
    },
    
    // ============================================
    // LINKS E PLATAFORMAS
    // ============================================
    // Altere aqui para mudar os links em todo o site
    
    links: {
        youtube: '#',                    // Link do canal YouTube
        youtubeKids: '#',                // Link do YouTube Kids
        spotify: '#',                    // Link do Spotify
        // Adicione mais links conforme necessário
    },
    
    // ============================================
    // CONTEÚDO
    // ============================================
    
    /**
     * Texto sobre o projeto
     */
    about: {
        intro: '"Meeemo" vem de memorizar! 🧠✨',
        text1: 'O Meeemo Play é um projeto dedicado a ensinar a Palavra de Deus para crianças de forma alegre, educativa e musical. Acreditamos que a melhor forma de aprender é através da música e da diversão!',
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
            text: 'Todo o conteúdo do Meeemo Play é cuidadosamente desenvolvido para ser seguro e apropriado para crianças. Sem violência, sem conteúdo inadequado, apenas diversão e aprendizado saudável.'
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
        }
    ],
    
    /**
     * Footer
     */
    footer: {
        copyright: '© Meeemo Play — Educação cristã infantil',
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
    module.exports = MeeemoConfig;
}

