export const presentationSlides = [
  // STEG 1 - MÅL
  {
    id: 'maal-1',
    step: 1,
    type: 'bullet-points',
    title: 'Vad kan ni ha för nytta av ESM?',
    subtitle: 'Målbild för kund',
    points: [
      { icon: '/img/lönsamhet.png', text: 'Lägre driftkostnader och högre driftnetto' },
      { icon: '/img/projektering.png', text: 'Färre överraskningar i kalkyler och projekt' },
      { icon: '/img/Legosortering.png', text: 'Snabbare, tryggare beslutsprocesser' },
      { icon: '/img/Fast-Villa-Vide.png', text: 'Högre trivsel och värde i era boenden' }
    ],
    animation: 'fade-in-sequence'
  },
  {
    id: 'maal-2',
    step: 1,
    type: 'before-after',
    title: 'Från energislukande fastighet till lönsam och trivsam tillgång',
    before: {
      title: 'Före',
      items: [
        'Hög energi',
        'Ingen överblick',
        'Reaktivt underhåll',
        'Osäkra kalkyler'
      ],
      color: 'red'
    },
    after: {
      title: 'Efter med ESM',
      items: [
        'högt driftnetto & värde',
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
      { icon: '/img/Legosortering.png', text: 'Långsamma processer' },
      { icon: '/img/projektering.png',  text: 'Många ÄTA – ändringar, nya arbeten' },
      { icon: '/img/lönsamhet.png',     text: 'Höga energikostander & stigande priser.' },
      { icon: '/img/usb minne.png',     text: 'Svårt att flytta information mellan aktörer' }
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
      'Information försvinner mellan leden.',
      'Risk för missförstånd',
      'Kallkyler med många antaganden'
    ],
    animation: 'timeline-reveal'
  },
  {
    id: 'problem-3',
    step: 2,
    type: 'cost-comparison',
    title: 'Många ÄTA och osäkra kalkyler',
    content: [
      'Informationen försvinner',
      'Ändringar från beställaren → nya arbeten → ökade kostnader',
      'Felräkningar i tidigt skede → dyra korrigeringar senare',
      'Ökning på ca 15,3 Mkr (+23%) jämfört med planerad investering'
    ],
    chart: {
      planned: 66042287,
      actual: 81297936,
      label: 'Planerad vs slutlig investering (Mkr)'
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
    issue: 'Data försvinner',
    subtitle: 'Excel-filer, PDF:er, mail'
  },

  // STEG 3 - KONCEPT
  {
    id: 'koncept-1',
    step: 3,
    type: 'concept-intro',
    title: 'Vårt koncept: AI för energismarta fastigheter',
    content: 'ESM kombinerar fastighetsförädling med AI-stöd',
    subtitle: 'Fokus på olika typer av byggnader',
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
      'AI-stöd för att balansera inomhusklimat, kostnad och miljö',
      'Ökar driftnettot & värde',
      'Säkerställer'
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
      'AI-optimering för flexibla användningsområden',
      'Möter dagens nya Sociallagens krav på utrymme'
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
      'Bevarar kulturvärden med varsam renovering',
      'Energieffektivisering med modern teknik',
      'AI-analys för kulturhistoriskt känsliga åtgärder',
      'Ekonomiskt hållbart '
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
      'AI-styrning för optimalt inomhusklimat dygnet runt',
      'Möter krav på dagens krav på tillgänglighet & arbetsmiljö'
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
      { number: 1, title: 'Insamling av data', icon: '🔍' },
      { number: 2, title: 'Analy & strukturering av data', icon: '📊' },
      { number: 3, title: 'Investerings & drift - kalkyler samt optimering för att nå ägardirektivet.', icon: '📐' },
      { number: 4, title: 'Projektering av smarta lösningar', icon: '🔨' },
      { number: 5, title: 'Genomförande & uppföljning', icon: '🔄' },
      { number: 6, title: 'Löpande optimering & förbättringar', icon: '🔄' }
    ]
  },

  // STEG 5 - AI
  {
    id: 'ai-1',
    step: 5,
    type: 'ai-overview',
    title: 'ELSA – hjärnan bakom besluten',
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
        'Lång tid till beslut',
        'Svårt att integrera'
      ]
    },
    with: {
      title: 'Med ELSA',
      items: [
        'Automatiserad kalkyl och analys',
        'Tydliga beslutsunderlag',
        'Kortare ledtider',
        'Tydliga kravspecifikationer'
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
    content: [
      'Färre manuella beräkningar, mindre dubbelarbete.',
      'Automatgenererade rapporter.',
      'Dashboard för olika yrkesroller.',
      'Inläsning & strukturering av data.'
    ],
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
    content: 'Tydliga beslutsunderlag, enklare att skapa engagemang med alla intressenter',
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

  // STEG 7 - ESMA
  {
    id: 'esma-1',
    step: 7,
    type: 'esma-intro',
    title: 'ESMA – vårt verktyg för kontroll och insikt',
    points: [
      'Strukturerar datan, kostnader och energiförbrukning',
      'Visualiserar LCC och besparingspotential, investeringstakt, kassaflöde',
      'Stöd för beslut under hela projektets livscykel'
    ]
  },
  {
    id: 'esma-2',
    step: 7,
    type: 'interactive-demo',
    title: 'ESMA Demo',
    subtitle: 'Interaktiv demonstration',
    demoType: 'full'
  },

  // STEG 8 - ROI
  {
    id: 'roi-1',
    step: 8,
    type: 'roi-benefits',
    title: 'Vad vinner ni på att arbeta med ESM?',
    subtitle: 'Er investering & er vinst',
    benefits: [
      { icon: '💸', text: 'Sänkta energi- och driftkostnader', image: 'savings' },
      { icon: '📊', text: 'Bättre beslutsunderlag och färre överraskningar', image: 'insights' },
      { icon: '🏢', text: 'Högre värde och attraktivitet i fastigheten', image: 'value' },
      { icon: '🛡️', text: 'Tryggare resa från idé till genomförande', image: 'safety' }
    ]
  },
  {
    id: 'roi-2',
    step: 8,
    type: 'scenario-comparison',
    title: 'Med rätt investeringar – och utan',
    scenarioA: {
      title: 'Scenario A – Med ESM & investeringar',
      investment: 75967362,
      annualSavings: 3300000,
      increasedValue: 150630000,
      color: 'green'
    },
    scenarioB: {
      title: 'Scenario B – Utan investeringar',
      status: 'Oförändrade eller ökande kostnader',
      lost: 'Förlorad driftnettoökning',
      note: 'Lågt värde på drift',
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
