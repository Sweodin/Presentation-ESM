export const presentationSlides = [
  // STEG 1 - MÅL
  {
    id: 'maal-1',
    step: 1,
    type: 'bullet-points',
    title: 'Vad kan ni ha för nytta av ESM?',
    subtitle: 'Målbild för kund',
    points: [
      { icon: '💰', text: 'Lägre driftkostnader och energiförbrukning' },
      { icon: '🎯', text: 'Färre överraskningar i projekt och kalkyler' },
      { icon: '⚡', text: 'Snabbare, tryggare beslutsprocesser' },
      { icon: '🏠', text: 'Högre trivsel och värde i era boenden' }
    ],
    animation: 'fade-in-sequence'
  },
  {
    id: 'maal-2',
    step: 1,
    type: 'before-after',
    title: 'Från energislukande fastighet till energismart tillgång',
    before: {
      title: 'Före',
      items: [
        'Höga energikostnader',
        'Ingen överblick',
        'Reaktivt underhåll',
        'Osäkra kalkyler'
      ],
      color: 'red'
    },
    after: {
      title: 'Efter med ESM',
      items: [
        'Kontrollerade kostnader',
        'Full överblick',
        'Proaktiv optimering',
        'Säkra beslutsunderlag'
      ],
      color: 'green'
    },
    animation: 'slide-in'
  },

  // STEG 2 - DAGENS PROBLEM
  {
    id: 'problem-1',
    step: 2,
    type: 'bullet-points',
    title: 'Dagens utmaningar i fastighetsprojekt',
    subtitle: 'Översikt',
    points: [
      { icon: '⏱️', text: 'Långsamma processer' },
      { icon: '📝', text: 'Många ÄTA – ändringar, nya arbeten' },
      { icon: '💸', text: 'Osäkra kalkyler och felräkningar' },
      { icon: '📊', text: 'Svårt att flytta information mellan aktörer' }
    ],
    theme: 'problem',
    animation: 'fade-in-sequence'
  },
  {
    id: 'problem-2',
    step: 2,
    type: 'timeline',
    title: 'Långsamma processer',
    timeline: [
      { label: 'Start', status: 'normal' },
      { label: 'Projektering', status: 'bottleneck' },
      { label: 'Bygg', status: 'bottleneck' },
      { label: 'Drift', status: 'normal' }
    ],
    issues: [
      'Beslut tar tid',
      'Information upprepas i flera led',
      'Risk för missförstånd'
    ],
    animation: 'timeline-reveal'
  },
  {
    id: 'problem-3',
    step: 2,
    type: 'cost-comparison',
    title: 'Många ÄTA och osäkra kalkyler',
    content: [
      'Ändringar från beställaren → nya arbeten → ökade kostnader',
      'Felräkningar i tidigt skede → dyra korrigeringar senare',
      'Svårt att se konsekvenserna av varje beslut'
    ],
    chart: {
      planned: 1000000,
      actual: 1450000,
      label: 'Planerad vs Slutlig kostnad'
    }
  },
  {
    id: 'problem-4',
    step: 2,
    type: 'information-flow',
    title: 'Svårt att flytta information',
    flow: [
      { role: 'Beställare', status: 'broken' },
      { role: 'Konsult', status: 'broken' },
      { role: 'Entreprenör', status: 'broken' },
      { role: 'Drift', status: 'broken' }
    ],
    issue: 'Informationsluckor',
    subtitle: 'Excel-filer, PDF:er, mail'
  },

  // STEG 3 - KONCEPT
  {
    id: 'koncept-1',
    step: 3,
    type: 'concept-intro',
    title: 'Vårt koncept: AI för energismarta boenden',
    content: 'ESM kombinerar fastighetsförädling med AI-stöd',
    subtitle: 'Fokus på olika typer av boenden',
    concepts: ['TrivselBo', 'SocialBo', 'KulturBo', 'ServiceBo']
  },
  {
    id: 'koncept-2',
    step: 3,
    type: 'bo-concept',
    concept: 'TrivselBo',
    icon: '🏠',
    color: 'green',
    title: 'TrivselBo',
    points: [
      'Fokus på boendekvalitet och komfort',
      'Optimerad energi utan att kompromissa med trivsel',
      'AI-stöd för att balansera inomhusklimat, kostnad och miljö'
    ],
    image: '/TrivselBo.png'
  },
  {
    id: 'koncept-3',
    step: 3,
    type: 'bo-concept',
    concept: 'SocialBo',
    icon: '🤝',
    color: 'blue',
    title: 'SocialBo',
    points: [
      'Skapar mötesplatser och gemenskap',
      'Energieffektiva gemensamma utrymmen',
      'AI-optimering för flexibla användningsområden'
    ],
    image: '/SocialBo.png'
  },
  {
    id: 'koncept-4',
    step: 3,
    type: 'bo-concept',
    concept: 'KulturBo',
    icon: '🏛️',
    color: 'purple',
    title: 'KulturBo',
    points: [
      'Bevarar kulturvärden med modern teknik',
      'Varsam energieffektivisering',
      'AI-analys för kulturhistoriskt känsliga åtgärder'
    ],
    image: '/KulturBo.png'
  },
  {
    id: 'koncept-5',
    step: 3,
    type: 'bo-concept',
    concept: 'ServiceBo',
    icon: '🏥',
    color: 'teal',
    title: 'ServiceBo',
    points: [
      'Anpassat för vård och omsorg',
      'Hög tillgänglighet och komfort',
      'AI-styrning för optimalt inomhusklimat dygnet runt'
    ],
    image: '/ServiceBo.png'
  },

  // STEG 4 - PROCESSEN
  {
    id: 'process-1',
    step: 4,
    type: 'process-flow',
    title: 'Så här gör vi – från nuläge till färdig lösning',
    subtitle: 'Processöversikt',
    steps: [
      { number: 1, title: 'Analys & datainsamling', icon: '🔍' },
      { number: 2, title: 'LCC-kalkyler & scenarier', icon: '📊' },
      { number: 3, title: 'Projektering av energieffektiva lösningar', icon: '📐' },
      { number: 4, title: 'Genomförande & uppföljning', icon: '🔨' },
      { number: 5, title: 'Löpande optimering', icon: '🔄' }
    ]
  },

  // STEG 5 - AI
  {
    id: 'ai-1',
    step: 5,
    type: 'ai-overview',
    title: 'Vår AI – hjärnan bakom besluten',
    points: [
      { icon: '📡', text: 'Samlar och analyserar data från fastigheten' },
      { icon: '⚖️', text: 'Jämför olika åtgärdsscenarier i LCC-kalkyler' },
      { icon: '🎯', text: 'Identifierar risker, avvikelser och besparingsmöjligheter' },
      { icon: '✅', text: 'Gör det enkelt att välja rätt investering i rätt tid' }
    ]
  },
  {
    id: 'ai-2',
    step: 5,
    type: 'workflow-comparison',
    title: 'Så förenklar vi ert arbete med AI',
    without: {
      title: 'Utan AI',
      items: [
        'Många manuella beräkningar',
        'Tunga Excel-ark',
        'Lång tid till beslut'
      ]
    },
    with: {
      title: 'Med ESM AI',
      items: [
        'Automatiserad kalkyl och analys',
        'Tydliga beslutsunderlag',
        'Kortare ledtider'
      ]
    }
  },

  // STEG 6 - FÖRDELAR
  {
    id: 'fordelar-1',
    step: 6,
    type: 'benefit-slide',
    title: 'Mindre administration',
    subtitle: 'Vad innebär det för er – i vardagen?',
    icon: '📋',
    content: 'Färre manuella beräkningar, mindre dubbelarbete',
    image: 'administration'
  },
  {
    id: 'fordelar-2',
    step: 6,
    type: 'benefit-slide',
    title: 'Tryggare kalkyler',
    subtitle: 'Vad innebär det för er – i vardagen?',
    icon: '🔒',
    content: 'Allt spårbart, scenarier jämförs visuellt',
    image: 'kalkyler'
  },
  {
    id: 'fordelar-3',
    step: 6,
    type: 'benefit-slide',
    title: 'Snabbare beslut',
    subtitle: 'Vad innebär det för er – i vardagen?',
    icon: '⚡',
    content: 'Tydliga beslutsunderlag, enklare att få med alla intressenter',
    image: 'beslut'
  },
  {
    id: 'fordelar-4',
    step: 6,
    type: 'benefit-slide',
    title: 'Bättre uppföljning',
    subtitle: 'Vad innebär det för er – i vardagen?',
    icon: '📈',
    content: 'Ser utfallet mot plan, lär av varje projekt',
    image: 'uppfoljning'
  },

  // STEG 7 - ESMA (här kan vi integrera den interaktiva demon)
  {
    id: 'esma-1',
    step: 7,
    type: 'esma-intro',
    title: 'ESMA – vårt verktyg för kontroll och insikt',
    points: [
      'Samlar projektdata, kostnader och energiförbrukning',
      'Visualiserar LCC och besparingspotential',
      'Stöd för beslut under hela projektets livscykel'
    ]
  },
  {
    id: 'esma-2',
    step: 7,
    type: 'interactive-demo',
    title: 'ESMA Demo',
    subtitle: 'Interaktiv demonstration',
    demoType: 'full' // Detta triggar den interaktiva demon vi redan byggt
  },

  // STEG 8 - ROI
  {
    id: 'roi-1',
    step: 8,
    type: 'roi-benefits',
    title: 'Vad vinner ni på att arbeta med ESM?',
    subtitle: 'Er investering & er vinst',
    benefits: [
      { icon: '💰', text: 'Sänkta energi- och driftkostnader' },
      { icon: '📊', text: 'Bättre beslutsunderlag och färre ÄTA-överraskningar' },
      { icon: '📈', text: 'Högre värde och attraktivitet i fastigheten' },
      { icon: '🛡️', text: 'Tryggare resa från idé till genomförande' }
    ]
  },
  {
    id: 'roi-2',
    step: 8,
    type: 'scenario-comparison',
    title: 'Med rätt investeringar – och utan',
    scenarioA: {
      title: 'Scenario A – Med ESM & investeringar',
      investment: 2450000,
      annualSavings: 245000,
      payback: 10,
      color: 'green'
    },
    scenarioB: {
      title: 'Scenario B – Utan investeringar',
      status: 'Oförändrade eller ökande kostnader',
      lost: 'Förlorad besparingspotential',
      color: 'red'
    }
  },

  // STEG 9 - FRÅGOR
  {
    id: 'qa',
    step: 9,
    type: 'qa',
    title: 'Frågor?',
    contact: {
      company: 'Energy Service Management',
      person: 'Daniel Svensson',
      email: 'daniel.svensson@esmanagement.se',
      phone: '+46 (0)769 81 19 75'
    }
  }
];
