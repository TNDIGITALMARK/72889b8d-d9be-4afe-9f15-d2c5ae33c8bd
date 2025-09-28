export interface RaceCar {
  id: string;
  name: string;
  model: string;
  year: number;
  manufacturer: string;
  category: 'Formula 1' | 'Le Mans' | 'Rally' | 'GT' | 'Prototype';
  topSpeed: number;
  power: number;
  weight: number;
  description: string;
  achievements: string[];
  specifications: {
    engine: string;
    transmission: string;
    suspension: string;
    brakes: string;
    tires: string;
  };
  racingHistory: {
    year: number;
    event: string;
    result: string;
    driver?: string;
  }[];
  images: {
    hero: string;
    gallery: string[];
  };
  featured: boolean;
}

export const featuredCars: RaceCar[] = [
  {
    id: 'ferrari-250-gto',
    name: 'Ferrari 250 GTO',
    model: '250 GTO',
    year: 1962,
    manufacturer: 'Ferrari',
    category: 'GT',
    topSpeed: 280,
    power: 300,
    weight: 880,
    description: 'The most coveted and valuable classic racing car ever built. A masterpiece of Italian engineering and design that dominated GT racing in the 1960s.',
    achievements: [
      'Winner of multiple GT Championships',
      'Most expensive car ever sold at auction',
      'Only 36 examples ever produced',
      'Legendary status among collectors'
    ],
    specifications: {
      engine: '3.0L V12',
      transmission: '5-speed manual',
      suspension: 'Independent front, live rear axle',
      brakes: 'Disc brakes all around',
      tires: 'Dunlop racing compounds'
    },
    racingHistory: [
      {
        year: 1962,
        event: 'Targa Florio',
        result: '1st Place',
        driver: 'Lorenzo Bandini'
      },
      {
        year: 1963,
        event: 'Le Mans 24 Hours',
        result: '2nd Place',
        driver: 'Mike Parkes'
      },
      {
        year: 1964,
        event: 'Tour de France Automobile',
        result: '1st Place',
        driver: 'Jean Guichet'
      }
    ],
    images: {
      hero: '/images/cars/ferrari-250-gto-hero.jpg',
      gallery: [
        '/images/cars/ferrari-250-gto-1.jpg',
        '/images/cars/ferrari-250-gto-2.jpg',
        '/images/cars/ferrari-250-gto-3.jpg'
      ]
    },
    featured: true
  },
  {
    id: 'porsche-917k',
    name: 'Porsche 917K',
    model: '917K',
    year: 1970,
    manufacturer: 'Porsche',
    category: 'Prototype',
    topSpeed: 360,
    power: 630,
    weight: 800,
    description: 'The legendary Le Mans winner that brought Porsche its first overall victory. An icon of endurance racing with its distinctive Gulf livery.',
    achievements: [
      'Winner Le Mans 1970 & 1971',
      'World Championship for Makes 1970',
      'Fastest lap records at multiple circuits',
      'Cultural icon from Steve McQueen\'s "Le Mans"'
    ],
    specifications: {
      engine: '4.5L Flat-12',
      transmission: '5-speed manual',
      suspension: 'Independent all around',
      brakes: 'Ventilated discs',
      tires: 'Firestone racing slicks'
    },
    racingHistory: [
      {
        year: 1970,
        event: 'Le Mans 24 Hours',
        result: '1st Place',
        driver: 'Hans Herrmann / Richard Attwood'
      },
      {
        year: 1971,
        event: 'Le Mans 24 Hours',
        result: '1st Place',
        driver: 'Helmut Marko / Gijs van Lennep'
      },
      {
        year: 1970,
        event: 'Daytona 24 Hours',
        result: '1st Place',
        driver: 'Pedro Rodriguez / Leo Kinnunen'
      }
    ],
    images: {
      hero: '/images/cars/porsche-917k-hero.jpg',
      gallery: [
        '/images/cars/porsche-917k-1.jpg',
        '/images/cars/porsche-917k-2.jpg',
        '/images/cars/porsche-917k-3.jpg'
      ]
    },
    featured: true
  },
  {
    id: 'mclaren-f1-gtr',
    name: 'McLaren F1 GTR',
    model: 'F1 GTR',
    year: 1995,
    manufacturer: 'McLaren',
    category: 'GT',
    topSpeed: 320,
    power: 600,
    weight: 1020,
    description: 'The racing version of the legendary McLaren F1, engineered to dominate GT racing with its central driving position and naturally aspirated V12.',
    achievements: [
      'Winner Le Mans 1995',
      'BPR Global GT Series Champion',
      'Multiple international GT victories',
      'Based on the world\'s fastest production car'
    ],
    specifications: {
      engine: '6.1L BMW V12',
      transmission: '6-speed manual',
      suspension: 'Fully adjustable racing setup',
      brakes: 'Carbon fiber discs',
      tires: 'Michelin racing compounds'
    },
    racingHistory: [
      {
        year: 1995,
        event: 'Le Mans 24 Hours',
        result: '1st Place',
        driver: 'Yannick Dalmas / JJ Lehto / Masanori Sekiya'
      },
      {
        year: 1995,
        event: 'BPR Global GT Silverstone',
        result: '1st Place',
        driver: 'Andy Wallace / Derek Bell'
      },
      {
        year: 1996,
        event: 'Suzuka 1000km',
        result: '2nd Place',
        driver: 'Ray Bellm / Maurizio Sandro Sala'
      }
    ],
    images: {
      hero: '/images/cars/mclaren-f1-gtr-hero.jpg',
      gallery: [
        '/images/cars/mclaren-f1-gtr-1.jpg',
        '/images/cars/mclaren-f1-gtr-2.jpg',
        '/images/cars/mclaren-f1-gtr-3.jpg'
      ]
    },
    featured: true
  },
  {
    id: 'ford-gt40',
    name: 'Ford GT40',
    model: 'GT40 Mk IV',
    year: 1967,
    manufacturer: 'Ford',
    category: 'Prototype',
    topSpeed: 330,
    power: 485,
    weight: 850,
    description: 'The American challenger that broke Ferrari\'s dominance at Le Mans. Built to win at all costs with revolutionary aerodynamics.',
    achievements: [
      'Four consecutive Le Mans victories (1966-1969)',
      'Broke Ferrari\'s Le Mans winning streak',
      'First American constructor to win Le Mans',
      'Cultural icon of American motorsport'
    ],
    specifications: {
      engine: '7.0L Ford V8',
      transmission: '4-speed manual',
      suspension: 'Independent all around',
      brakes: 'Girling disc brakes',
      tires: 'Firestone racing tires'
    },
    racingHistory: [
      {
        year: 1966,
        event: 'Le Mans 24 Hours',
        result: '1st Place',
        driver: 'Bruce McLaren / Chris Amon'
      },
      {
        year: 1967,
        event: 'Le Mans 24 Hours',
        result: '1st Place',
        driver: 'Dan Gurney / A.J. Foyt'
      },
      {
        year: 1968,
        event: 'Le Mans 24 Hours',
        result: '1st Place',
        driver: 'Pedro Rodriguez / Lucien Bianchi'
      }
    ],
    images: {
      hero: '/images/cars/ford-gt40-hero.jpg',
      gallery: [
        '/images/cars/ford-gt40-1.jpg',
        '/images/cars/ford-gt40-2.jpg',
        '/images/cars/ford-gt40-3.jpg'
      ]
    },
    featured: true
  },
  {
    id: 'audi-quattro-s1',
    name: 'Audi Quattro S1',
    model: 'Sport Quattro S1',
    year: 1985,
    manufacturer: 'Audi',
    category: 'Rally',
    topSpeed: 250,
    power: 550,
    weight: 1090,
    description: 'The ultimate evolution of Audi\'s Group B rally monster. Revolutionary all-wheel drive technology that changed rallying forever.',
    achievements: [
      'World Rally Championship winner',
      'Pikes Peak Hill Climb records',
      'Pioneer of all-wheel drive in rallying',
      'Group B rally legend'
    ],
    specifications: {
      engine: '2.1L Turbocharged I5',
      transmission: 'Quattro AWD system',
      suspension: 'Fully adjustable rally setup',
      brakes: 'Brembo racing discs',
      tires: 'Pirelli rally compounds'
    },
    racingHistory: [
      {
        year: 1985,
        event: 'Rally Argentina',
        result: '1st Place',
        driver: 'Walter Röhrl'
      },
      {
        year: 1987,
        event: 'Pikes Peak Hill Climb',
        result: '1st Place',
        driver: 'Walter Röhrl'
      },
      {
        year: 1985,
        event: 'Rally Monte Carlo',
        result: '2nd Place',
        driver: 'Hannu Mikkola'
      }
    ],
    images: {
      hero: '/images/cars/audi-quattro-s1-hero.jpg',
      gallery: [
        '/images/cars/audi-quattro-s1-1.jpg',
        '/images/cars/audi-quattro-s1-2.jpg',
        '/images/cars/audi-quattro-s1-3.jpg'
      ]
    },
    featured: true
  },
  {
    id: 'lamborghini-countach-lp500',
    name: 'Lamborghini Countach LP500',
    model: 'Countach LP500',
    year: 1974,
    manufacturer: 'Lamborghini',
    category: 'GT',
    topSpeed: 295,
    power: 375,
    weight: 1065,
    description: 'The radical wedge-shaped supercar that redefined automotive design. An angular masterpiece that became the poster car of the 1970s.',
    achievements: [
      'Revolutionary wedge design language',
      'First production car with scissor doors',
      'Automotive design icon',
      'Influenced a generation of supercars'
    ],
    specifications: {
      engine: '4.0L V12',
      transmission: '5-speed manual',
      suspension: 'Independent all around',
      brakes: 'Disc brakes',
      tires: 'Pirelli P7 performance tires'
    },
    racingHistory: [
      {
        year: 1975,
        event: 'Monza Exhibition Race',
        result: 'Exhibition',
        driver: 'Test Driver'
      },
      {
        year: 1976,
        event: 'Paul Ricard Test',
        result: 'Speed Record',
        driver: 'Bob Wallace'
      },
      {
        year: 1977,
        event: 'Nürburgring Demonstration',
        result: 'Demonstration',
        driver: 'Valentino Balboni'
      }
    ],
    images: {
      hero: '/images/cars/lamborghini-countach-hero.jpg',
      gallery: [
        '/images/cars/lamborghini-countach-1.jpg',
        '/images/cars/lamborghini-countach-2.jpg',
        '/images/cars/lamborghini-countach-3.jpg'
      ]
    },
    featured: true
  }
];

export const allCars: RaceCar[] = [...featuredCars];

export const getCarById = (id: string): RaceCar | undefined => {
  return allCars.find(car => car.id === id);
};

export const getCarsByCategory = (category: RaceCar['category']): RaceCar[] => {
  return allCars.filter(car => car.category === category);
};

export const getFeaturedCars = (): RaceCar[] => {
  return allCars.filter(car => car.featured);
};