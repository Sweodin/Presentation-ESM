export const propertyData = {
  trivsel: {
    name: 'Rosengården',
    location: 'Malmö',
    icon: '🏠',
    color: 'bg-green-500',
    current: {
      energyCost: 450000,
      co2: 85,
      maintenance: 320000
    },
    actions: [
      {
        id: 'windows',
        name: 'Byta fönster',
        investment: 850000,
        savingsPerYear: 85000,
        co2Reduction: 12,
        description: 'Byte till energieffektiva 3-glas fönster'
      },
      {
        id: 'insulation',
        name: 'Tilläggsisolera vind',
        investment: 320000,
        savingsPerYear: 45000,
        co2Reduction: 8,
        description: 'Tilläggsisolering 300mm mineralull'
      },
      {
        id: 'ventilation',
        name: 'Uppgradera ventilation',
        investment: 1200000,
        savingsPerYear: 95000,
        co2Reduction: 18,
        description: 'FTX-system med värmeåtervinning'
      },
      {
        id: 'smart',
        name: 'Smart styrning',
        investment: 80000,
        savingsPerYear: 20000,
        co2Reduction: 3,
        description: 'AI-baserad styrning av värme och ventilation'
      },
      {
        id: 'solar',
        name: 'Solceller på tak',
        investment: 650000,
        savingsPerYear: 75000,
        co2Reduction: 15,
        description: '100 kWp solcellsanläggning'
      }
    ]
  },
  social: {
    name: 'Björkhagen',
    location: 'Stockholm',
    icon: '🤝',
    color: 'bg-blue-500',
    current: {
      energyCost: 520000,
      co2: 92,
      maintenance: 380000
    },
    actions: [
      {
        id: 'windows',
        name: 'Byta fönster',
        investment: 920000,
        savingsPerYear: 92000,
        co2Reduction: 14,
        description: 'Byte till energieffektiva 3-glas fönster'
      },
      {
        id: 'insulation',
        name: 'Tilläggsisolera fasad',
        investment: 480000,
        savingsPerYear: 58000,
        co2Reduction: 11,
        description: 'Fasadisolering med puts'
      },
      {
        id: 'heating',
        name: 'Bergvärme',
        investment: 850000,
        savingsPerYear: 105000,
        co2Reduction: 22,
        description: 'Installation av bergvärmepump'
      },
      {
        id: 'smart',
        name: 'Smart styrning',
        investment: 95000,
        savingsPerYear: 24000,
        co2Reduction: 4,
        description: 'AI-baserad energioptimering'
      },
      {
        id: 'lighting',
        name: 'LED-belysning',
        investment: 120000,
        savingsPerYear: 28000,
        co2Reduction: 5,
        description: 'Byte till LED i alla utrymmen'
      }
    ]
  },
  kultur: {
    name: 'Gamla Stadshuset',
    location: 'Göteborg',
    icon: '🏛️',
    color: 'bg-purple-500',
    current: {
      energyCost: 680000,
      co2: 115,
      maintenance: 450000
    },
    actions: [
      {
        id: 'windows',
        name: 'Renovera fönster',
        investment: 1200000,
        savingsPerYear: 95000,
        co2Reduction: 16,
        description: 'Kulturvänlig fönsterrenovering'
      },
      {
        id: 'insulation',
        name: 'Vind- och källarisolering',
        investment: 580000,
        savingsPerYear: 72000,
        co2Reduction: 13,
        description: 'Isolering med hänsyn till kulturvärden'
      },
      {
        id: 'ventilation',
        name: 'Balanserad ventilation',
        investment: 950000,
        savingsPerYear: 88000,
        co2Reduction: 18,
        description: 'FTX med värmeåtervinning'
      },
      {
        id: 'heating',
        name: 'Fjärrvärme',
        investment: 420000,
        savingsPerYear: 65000,
        co2Reduction: 25,
        description: 'Anslutning till grön fjärrvärme'
      },
      {
        id: 'smart',
        name: 'Zonindelad styrning',
        investment: 150000,
        savingsPerYear: 35000,
        co2Reduction: 6,
        description: 'Smart styrning per zon'
      }
    ]
  },
  service: {
    name: 'Ekbacken',
    location: 'Uppsala',
    icon: '🏥',
    color: 'bg-teal-500',
    current: {
      energyCost: 580000,
      co2: 98,
      maintenance: 420000
    },
    actions: [
      {
        id: 'windows',
        name: 'Byta fönster',
        investment: 980000,
        savingsPerYear: 98000,
        co2Reduction: 15,
        description: 'Energieffektiva fönster'
      },
      {
        id: 'insulation',
        name: 'Fasadisolering',
        investment: 620000,
        savingsPerYear: 68000,
        co2Reduction: 12,
        description: 'Komplett fasadisolering'
      },
      {
        id: 'ventilation',
        name: 'Ventilation med återvinning',
        investment: 1100000,
        savingsPerYear: 115000,
        co2Reduction: 20,
        description: 'Modernt FTX-system'
      },
      {
        id: 'solar',
        name: 'Solceller',
        investment: 720000,
        savingsPerYear: 82000,
        co2Reduction: 17,
        description: '120 kWp solcellsanläggning'
      },
      {
        id: 'smart',
        name: 'AI-styrning',
        investment: 110000,
        savingsPerYear: 28000,
        co2Reduction: 5,
        description: 'Intelligent energistyrning'
      }
    ]
  }
};

export const concepts = [
  { id: 'trivsel', name: 'TrivselBo', icon: '🏠', color: 'bg-green-500' },
  { id: 'social', name: 'SocialBo', icon: '🤝', color: 'bg-blue-500' },
  { id: 'kultur', name: 'KulturBo', icon: '🏛️', color: 'bg-purple-500' },
  { id: 'service', name: 'ServiceBo', icon: '🏥', color: 'bg-teal-500' }
];
