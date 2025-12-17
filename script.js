// i18n
const translations = {
  'pt': {
    // Navegação
    'nav.team': 'Equipe',
    'nav.games': 'Jogos',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title': 'Bush Dog Games',
    'hero.subtitle': 'Brasileiros, desenvolvedores, artistas, designers de jogos, apaixonados e entusiastas.<br>Somos tudo isso e muito mais.',
    'hero.button': 'Conheça a Equipe',
    
    // Equipe
    'team.title': 'Equipe',
    'team.member1.role': 'Desenvolvedor Full-stack',
    'team.member2.role': 'Desenvolvedora Back-end',
    'team.member3.role': 'Desenvolvedor Back-end',
    'team.member4.role': 'Ilustrador',
    'team.member5.role': 'Desenvolvedor Full-stack',
    
    // Jogos
    'games.title': 'Jogos',
    'games.game1.genre': 'Plataforma',
    'games.game1.release': 'Lançamento: 2025',
    'games.game1.details.platforms': 'Plataformas:',
    'games.game1.details.genre': 'Gênero:',
    'games.game1.details.genreValue': 'Plataforma',
    'games.game1.details.release': 'Lançamento:',
    'games.game1.details.releaseValue': '2025',
    'games.game1.playButton': 'Jogar',
    'games.game1.teamTitle': 'Equipe',
    'games.game1.team.member1': 'Desenvolvedor líder',
    'games.game1.team.member2': 'Desenvolvedor',
    'games.game1.team.member3': 'Desenvolvedora',
    'games.game1.team.member4': 'Designer de Produção',
    
    // Contato
    'contact.title': 'Contato',
    'contact.email': 'Email:',
    
    // Rodapé
    'footer.copyright': '© 2025 Bush Dog Games. Todos os direitos reservados.'
  },
  'en': {
    // Navigation
    'nav.team': 'Team',
    'nav.games': 'Games',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Bush Dog Games',
    'hero.subtitle': 'Brazilians, developers, artists, game designers, passionate and enthusiasts.<br>We are all that and much more.',
    'hero.button': 'Meet the Team',
    
    // Team
    'team.title': 'Team',
    'team.member1.role': 'Full-stack Developer',
    'team.member2.role': 'Back-end Developer',
    'team.member3.role': 'Back-end Developer',
    'team.member4.role': 'Illustrator',
    'team.member5.role': 'Full-stack Developer',
    
    // Games
    'games.title': 'Games',
    'games.game1.genre': 'Platformer',
    'games.game1.release': 'Release: 2025',
    'games.game1.details.platforms': 'Platforms:',
    'games.game1.details.genre': 'Genre:',
    'games.game1.details.genreValue': 'Platformer',
    'games.game1.details.release': 'Release:',
    'games.game1.details.releaseValue': '2025',
    'games.game1.playButton': 'Play',
    'games.game1.teamTitle': 'Team',
    'games.game1.team.member1': 'Lead Developer',
    'games.game1.team.member2': 'Developer',
    'games.game1.team.member3': 'Developer',
    'games.game1.team.member4': 'Production Designer',
    
    // Contact
    'contact.title': 'Contact',
    'contact.email': 'Email:',
    
    // Footer
    'footer.copyright': '© 2025 Bush Dog Games. All rights reserved.'
  }
};

class Localization {
  constructor() {
    this.currentLang = 'pt';
    this.supportedLangs = ['pt', 'en'];
    
    this.init();
  }
  
  init() {
    this.detectBrowserLanguage();
  }
  
  detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (browserLang.startsWith('pt')) {
      this.setLanguage('pt');
    } else {
      this.setLanguage('en');
    }
  }
  
  setLanguage(lang) {
    if (!this.supportedLangs.includes(lang)) return;
    
    this.currentLang = lang;
    
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    
    this.translatePage();
  }
  
  translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      
      if (translations[this.currentLang] && translations[this.currentLang][key]) {
        if (translations[this.currentLang][key].includes('<br>')) {
          element.innerHTML = translations[this.currentLang][key];
        } else {
          element.textContent = translations[this.currentLang][key];
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.localization = new Localization();

});
