export interface Model {
  id: string;
  brand: string;
  img: string;
  title: string;
  desc: string;
  gallery?: string[];
  year?: string;
  price?: string;
  features?: string[];
}



export const models: Model[] = [
  {
    id: 'bmw-x5-g05',
    brand: 'BMW',
    img: 'images/gallery3.jpg',
    title: 'Доводчики двурей на BMW X5 G05',
    desc: 'Установка по штатным местам креплений — сохраняется заводская гарантия.',
    gallery: [
      'images/gallery3.jpg',
      'images/gallery2.jpg',
      'images/gallery1.jpg'
    ],
    year: '2021-2024',
    price: 'от 120 000 ₽',
    features: [
      'Штатная установка',
      'Сохранение гарантии',
      'Интеграция с электроникой',
      'Гарантия 2 года'
    ]
  },
  {
    id: 'bmw-x6-g06',
    brand: 'BMW',
    img: 'images/cards/x6.jfif',
    title: 'Электропороги ATS на BMW X6 G06 (рестайлинг)',
    desc: 'Плавное срабатывание и управление — совместимость с электроникой автомобиля.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'bmw-x7-g07',
    brand: 'BMW',
    img: 'images/cards/x7.jfif',
    title: 'Электропороги ATS на BMW X7 G07',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Mercedes
  {
    id: 'mercedes-gle-w167',
    brand: 'Mercedes',
    img: 'images/cards/Выдвижные электропороги MAYBACH на Mercedes-Benz GLE W167.jfif',
    title: 'Электропороги MAYBACH на Mercedes-Benz GLE W167',
    desc: 'Надежные механизмы, защита от грязи и воды.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'mercedes-gls-x167',
    brand: 'Mercedes',
    img: 'images/cards/Выдвижные электрические пороги ATS на Mercedes-Benz GLS X167.jfif',
    title: 'Электропороги ATS на Mercedes-Benz GLS X167',
    desc: 'Официальная гарантия, штатная установка, интеграция с электроникой.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'mercedes-g-class',
    brand: 'Mercedes',
    img: 'images/cards/Выдвижные электрические пороги ATS на Mercedes-Benz G-class 4x4 G63 — копия.jfif',
    title: 'Электропороги ATS на Mercedes-Benz G-class',
    desc: 'Премиальная комплектация, надежность и долговечность.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Land Rover
  {
    id: 'defender',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/land.jfif',
    title: 'Электропороги ATS под оригинал на Land Rover Defender',
    desc: 'Кодирование в InControl, датчик Холла для безопасной работы.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'defender-130',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/land130.jfif',
    title: 'Электропороги ATS на Land Rover Defender 130 II',
    desc: 'С кодированием в InControl и датчиком Холла.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Range Rover
  {
    id: 'range-rover-l461',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/RoverL461.jfif',
    title: 'Оригинальные выдвижные электрические пороги на Range Rover Sport L461',
    desc: 'Алгоритм работы как у оригинальных порогов.',
    gallery: [
      'images/cards/RoverL461.jfif',
      'images/cards/RoverL4612.jfif',
    ],
    year: '2021-2024',
    price: 'от 120 000 ₽',
    features: [
      'Штатная установка',
      'Сохранение гарантии',
      'Интеграция с электроникой',
      'Гарантия 2 года'
    ]
  },
  {
    id: 'range-rover-l460',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/RoverL460461.jfjf.jfif',
    title: 'Электропороги ATS на Range Rover L460/L461',
    desc: 'Алгоритм работы как у оригинала — задержка захода при закрытии двери.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Toyota
  {
    id: 'toyota-prado-250',
    brand: 'Toyota',
    img: 'images/cards/Prad250.jfif',
    title: 'Электропороги ATS на Land Cruiser Prado 250',
    desc: 'Удобство в эксплуатации и надежность.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'toyota-hilux',
    brand: 'Toyota',
    img: 'images/cards/Toyota Hilux VIII.jfif',
    title: 'Электропороги ATS на Toyota Hilux VIII',
    desc: 'Удобство в эксплуатации и надежность.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'toyota-highlander',
    brand: 'Toyota',
    img: 'images/cards/Toyota Highlander.jfif',
    title: 'Электропороги ATS на Toyota Highlander',
    desc: 'Удобство в эксплуатации и надежность.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'toyota-land-cruiser-300',
    brand: 'Toyota',
    img: 'images/cards/Система электропривода багажника на Toyota LC300.jfif',
    title: 'Электропороги ATS на Toyota Land Cruiser 300',
    desc: 'Совместимость с заводской электроникой, гарантия 2 года.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Kia
  {
    id: 'kia-sportage',
    brand: 'Kia',
    img: 'images/cards/Система электропривода багажника на Kia Sportage.jfif',
    title: 'Система электропривода багажника на Kia Sportage',
    desc: 'Современные технологии и адаптация под авто.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Hyundai
  {
    id: 'hyundai-staria',
    brand: 'Hyundai',
    img: 'images/cards/Выдвижные электропороги ATS на Hyundai Staria.jfif',
    title: 'Электропороги ATS на Hyundai Staria',
    desc: 'Штатная установка, гарантия 2 года.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'hyundai-santa-fe-v',
    brand: 'Hyundai',
    img: 'images/cards/Выдвижные электрические пороги ATS на Hyundai Santa Fe V.jfif',
    title: 'Электропороги ATS на Hyundai Santa Fe V',
    desc: 'Штатная установка, гарантия 2 года.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'hyundai-tucson',
    brand: 'Hyundai',
    img: 'images/cards/Система электропривода багажника на Hyundai Tucson.jfif',
    title: 'Система электропривода багажника на Hyundai Tucson',
    desc: 'Штатная установка, гарантия 2 года.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'hyundai-custin',
    brand: 'Hyundai',
    img: 'images/cards/Электропривод боковой двери Hyundai CUSTIN.jfif',
    title: 'Электропривод боковой двери Hyundai CUSTIN',
    desc: 'Штатная установка, гарантия 2 года.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Lexus
  {
    id: 'lexus-lx500',
    brand: 'Lexus',
    img: 'images/cards/Выдвижные электрические пороги ATS на Lexus LX500.jfif',
    title: 'Электропороги ATS на Lexus LX500',
    desc: 'Штатная интеграция, надежность, гарантия.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Rox
  {
    id: 'rox-01',
    brand: 'Rox',
    img: 'images/cards/Система электропривода багажника на Rox 01.jfif',
    title: 'Система электропривода багажника на Rox 01',
    desc: 'Установка на любые автомобили, индивидуальные решения.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Genesis
  {
    id: 'genesis-gv80',
    brand: 'Genesis',
    img: 'images/cards/Выдвижные электрические пороги ATS на Genesis GV80.jfif',
    title: 'Электропороги для Genesis GV80',
    desc: 'Совместимость с электроникой, гарантия 2 года.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Lixiang
  {
    id: 'lixiang-l9',
    brand: 'Lixiang',
    img: 'images/cards/Lixiang.jfif',
    title: 'Электропороги ATS на Lixiang (Li Auto) L9',
    desc: 'Штатная установка, премиальное качество.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'lixiang-l7',
    brand: 'Lixiang',
    img: 'images/cards/(Li Auto)L7.jfif',
    title: 'Электропороги ATS на Lixiang (Li Auto) L7',
    desc: 'Максимальный комфорт и надежность.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Other

];
