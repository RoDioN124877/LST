export interface Model {
  id: string;
  brand: string;
  img: string;
  title: string;
  desc: string;
  gallery: string[];
  year?: string;
  price?: string;
  features?: string[];
  video?: string; // <--- добавили
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
    ],
    year: '2021-2024',
    price: 'от 120 000 ₽',
    features: [
      "Выдвижные кронштейны электропорогов ATS с большим вылетом по отношению к кузову, что делает посадку в автомобиль и выход из салона максимально удобным, комфортным и лёгким. Складные механизмы выдвижных электрических порогов ATS имеют смазочные капсулы, т.е. смазка постоянно находится в кронштейне, не вымывается на автомойках, не выбивается пескоструем с дороги. Мы позаботились о защите подвижных кронштейнов - штифты с торцов закрыты пластиковыми заглушками, которые предотвращают попадание грязи, пыли, снега, воды внутрь механизма. Благодаря этому электропороги ATS продолжают работать при низких температурах зимой. Выдвижными подножками можно управлять с приложения на мобильном телефоне - через приложение электропороги можно отключить и открыть электропороги при закрытых дверях (функция доступ к люку крыши) Пороги выдерживают более 200 кг."
    ]
  },
  {
    id: 'bmw-x6-g06',
    brand: 'BMW',
    img: 'images/cards/x6.jfif',
    title: 'Электропороги ATS на BMW X6 G06 (рестайлинг)',
    desc: 'Плавное срабатывание и управление — совместимость с электроникой автомобиля.',
    gallery: ['images/cards/x6.jfif'],
    year: '',
    price: '',
    features: ["Выдвижные кронштейны электропорогов ATS с большим вылетом по отношению к кузову, что делает посадку в автомобиль и выход из салона максимально удобным, комфортным и лёгким. Складные механизмы выдвижных электрических порогов ATS имеют смазочные капсулы, т.е. смазка постоянно находится в кронштейне, не вымывается на автомойках, не выбивается пескоструем с дороги. Мы позаботились о защите подвижных кронштейнов - штифты с торцов закрыты пластиковыми заглушками, которые предотвращают попадание грязи, пыли, снега, воды внутрь механизма. Благодаря этому электропороги ATS продолжают работать при низких температурах зимой. Выдвижными подножками можно управлять с приложения на мобильном телефоне - через приложение электропороги можно отключить и открыть электропороги при закрытых дверях (функция доступ к люку крыши) Пороги выдерживают более 200 кг."]
  },
  {
    id: 'брызговики',
    brand: 'BMW',
    img: 'images/cards/брызговики.jfif',
    title: 'Брызговики BMW X7 G07/X6 G06/X5 G05',
    desc: 'Плавное срабатывание и управление — совместимость с электроникой автомобиля.',
    gallery: ['images/cards/брызговики.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'Хрустальнаяручка',
    brand: 'BMW',
    img: 'images/cards/Хрустальнаяручка.jfif',
    title: 'Хрустальная ручка АКПП, кнопка старт-стоп, контролер шайба BMW комплект (M style/X style))',
    desc: 'Плавное срабатывание и управление — совместимость с электроникой автомобиля.',
    gallery: ['images/cards/Хрустальнаяручка.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'насадкиглушителя',
    brand: 'BMW',
    img: 'images/cards/насадкиглушителя.jfif',
    title: 'Чёрные насадки глушителя BMW X5(G05) /X7(G07)',
    desc: 'Плавное срабатывание и управление — совместимость с электроникой автомобиля.',
    gallery: ['images/cards/насадкиглушителя.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'Решеткарадиатора',
    brand: 'BMW',
    img: 'images/cards/Решеткарадиатора.jfif',
    title: 'Решетка радиатора для BMW X5/Х7 черная',
    desc: 'Плавное срабатывание и управление — совместимость с электроникой автомобиля.',
    gallery: ['images/cards/Решеткарадиатора.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'X5G05пороги',
    brand: 'BMW',
    img: 'images/cards/Выдвижные электрические пороги ATS на BMW X5 G05.jfif',
    title: 'Выдвижные электрические пороги ATS на BMW X5 G05  ',
    desc: 'Плавное срабатывание и управление — совместимость с электроникой автомобиля.',
    gallery: ['images/cards/Выдвижные электрические пороги ATS на BMW X5 G05.jfif'],
    year: '',
    price: '',
    features: ["Выдвижные кронштейны электропорогов ATS с большим вылетом по отношению к кузову, что делает посадку в автомобиль и выход из салона максимально удобным, комфортным и лёгким. Складные механизмы выдвижных электрических порогов ATS имеют смазочные капсулы, т.е. смазка постоянно находится в кронштейне, не вымывается на автомойках, не выбивается пескоструем с дороги. Мы позаботились о защите подвижных кронштейнов - штифты с торцов закрыты пластиковыми заглушками, которые предотвращают попадание грязи, пыли, снега, воды внутрь механизма. Благодаря этому электропороги ATS продолжают работать при низких температурах зимой. Выдвижными подножками можно управлять с приложения на мобильном телефоне - через приложение электропороги можно отключить и открыть электропороги при закрытых дверях (функция доступ к люку крыши) Пороги выдерживают более 200 кг."]
    , video: 'https://www.youtube.com/embed/4IDBrF9nJwY', // <--- видео добавлено сюда  
  },
  {
    id: 'bmw-x7-g07',
    brand: 'BMW',
    img: 'images/cards/x7.jfif',
    title: 'Электропороги ATS на BMW X7 G07',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/x7.jfif'],
    year: '',
    price: '',
    features: [],
    video: 'https://www.youtube.com/embed/6Cdj0EzvhTk', // <--- видео добавлено сюда
  },


  {
    id: 'x6F16',
    brand: 'BMW',
    img: 'images/cards/x6F16.jfif',
    title: 'Выдвижные электрические пороги ATS на BMW X6 F16',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/x6F16.jfif'],
    year: '',
    price: '',
    features: []
  },

  // Mercedes
  {
    id: 'mercedes-gle-w1672',
    brand: 'Mercedes',
    img: 'images/cards/Выдвижные электропороги MAYBACH на Mercedes-Benz GLE W167.jfif',
    title: 'Электропороги MAYBACH на Mercedes-Benz GLE W167',
    desc: 'Надежные механизмы, защита от грязи и воды.',
    gallery: ['images/cards/Выдвижные электропороги MAYBACH на Mercedes-Benz GLE W167.jfif'],
    year: '',
    price: '',
    features: []
    , video: 'https://www.youtube.com/embed/AVwOXDDdQs8', // <--- видео добавлено сюда
  },
  {
    id: 'mercedes-gls-x167',
    brand: 'Mercedes',
    img: 'images/cards/Выдвижные электрические пороги ATS на Mercedes-Benz GLS X167.jfif',
    title: 'Электропороги ATS на Mercedes-Benz GLS X167',
    desc: 'Официальная гарантия, штатная установка, интеграция с электроникой.',
    gallery: ['images/cards/Выдвижные электрические пороги ATS на Mercedes-Benz GLS X167.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'Mercedes-BenzGLSII',
    brand: 'Mercedes',
    img: 'images/cards/Mercedes-BenzGLSII.jfif',
    title: 'Выдвижные электропороги MAYBACH на Mercedes-Benz GLS II (X167)',
    desc: 'Официальная гарантия, штатная установка, интеграция с электроникой.',
    gallery: ['images/cards/Mercedes-BenzGLSII.jfif'],
    year: '',
    price: '',
    features: []
    , video: 'https://www.youtube.com/embed/QN7cpU5AaT4', // <--- видео добавлено сюда

  },
  {
    id: 'V-class(Short)',
    brand: 'Mercedes',
    img: 'images/cards/V-class(Short).jfif',
    title: 'Выдвижные электрические пороги ATS на Mercedes-Benz V-class (Short)',
    desc: 'Официальная гарантия, штатная установка, интеграция с электроникой.',
    gallery: ['images/cards/V-class(Short).jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'V-classLongExtraLong',
    brand: 'Mercedes',
    img: 'images/cards/V-classLongExtraLong.jfif',
    title: 'Выдвижные электрические пороги ATS на Mercedes-Benz V-class Long / Extra Long',
    desc: 'Официальная гарантия, штатная установка, интеграция с электроникой.',
    gallery: ['images/cards/V-classLongExtraLong.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'BenzW463G-class',
    brand: 'Mercedes',
    img: 'images/cards/BenzW463G-class.jfif',
    title: 'Бесключевой доступ Mercedes Benz W463 G-class',
    desc: 'Официальная гарантия, штатная установка, интеграция с электроникой.',
    gallery: ['images/cards/BenzW463G-class.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'mercedes-g-class23',
    brand: 'Mercedes',
    img: 'images/cards/Выдвижные электрические пороги ATS на Mercedes-Benz G-class 4x4 G63 — копия.jfif',
    title: 'Электропороги ATS на Mercedes-Benz G-class',
    desc: 'Премиальная комплектация, надежность и долговечность.',
    gallery: ['images/cards/Выдвижные электрические пороги ATS на Mercedes-Benz G-class 4x4 G63 — копия.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'mercedes-g-class',
    brand: 'Mercedes',
    img: 'images/cards/ддм.jfif',
    title: 'Доводчиков дверей на Мерседес Mercedes G class G63, G500, AMG (Gelandewagen) (2021+)',
    desc: 'Премиальная комплектация, надежность и долговечность.',
    gallery: ['images/cards/ддм.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'Mercedes-BenzG-class4х4',
    brand: 'Mercedes',
    img: 'images/cards/Mercedes-BenzG-class4х4.jfif',
    title: 'Выдвижные электропороги ATS на Mercedes-Benz G-class 4х4',
    desc: 'Премиальная комплектация, надежность и долговечность.',
    gallery: ['images/cards/Mercedes-BenzG-class4х4.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'свMercedesV-class',
    brand: 'Mercedes',
    img: 'images/cards/свMercedesV-class.jfif',
    title: 'Накладки на пороги с подсветкой и проекцией на Mercedes V-class',
    desc: 'Премиальная комплектация, надежность и долговечность.',
    gallery: ['images/cards/свMercedesV-class.jfif'],
    year: '',
    price: '',
    features: []
  },
  // Audi
  {
    id: 'audi-q7-4m',
    brand: 'Audi',
    img: 'images/cards/AudiQ7.jfif',
    title: 'Выдвижные электрические пороги ATS на Audi Q7 2019 - 2025 г.в',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/AudiQ7.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'audi-Q8-4m',
    brand: 'Audi',
    img: 'images/cards/AudiQ8.jfif',
    title: 'Выдвижные электрические пороги ATS на Audi Q8',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/AudiQ8.jfif'],
    year: '',
    price: '',
    features: []
  },

  //Cadillac
  {
    id: 'cadillac-escalade-v',
    brand: 'Cadillac',
    img: 'images/cards/CadillacEscaladeV.jfif',
    title: 'Выдвижные электрические пороги ATS на Cadillac Escalade V',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/CadillacEscaladeV.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'cadillac-escalade-vlong',
    brand: 'Cadillac',
    img: 'images/cards/CadillacEscaladeVLong.jfif',
    title: 'Выдвижные электропороги ATS на Cadillac Escalade V Long',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/CadillacEscaladeVLong.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'cadillac-escalade-v2',
    brand: 'Cadillac',
    img: 'images/cards/CadillacEscaladeVL2.jfif',
    title: 'Доводчики дверей на Cadillac Escalade (2022+г.в)',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/CadillacEscaladeV2.jfif'],
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
    gallery: ['images/cards/land.jfif'],
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
    gallery: ['images/cards/land130.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'Лестницаdefender-130',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/ЛестницаLand.jfif',
    title: 'Лестница на автомобиль Land Rover Defender',
    desc: 'С кодированием в InControl и датчиком Холла.',
    gallery: ['images/cards/ЛестницаLand.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'багажныйdefender-130',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/багажныйLand.jfif',
    title: 'Боковой багажный бокс на автомобиль Land Rover Defender',
    desc: 'С кодированием в InControl и датчиком Холла.',
    gallery: ['images/cards/ЛестницаLand.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'КрышкаLand-130',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/КрышкаLand.jfif',
    title: 'Крышка запасного колеса на автомобиль Land Rover Defender',
    desc: 'С кодированием в InControl и датчиком Холла.',
    gallery: ['images/cards/КрышкаLand.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'БрызговикиLand-130',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/БрызговикиLand.jfif',
    title: 'Брызговики на автомобиль Land Rover Defender 2020 (бол/мал)',
    desc: 'С кодированием в InControl и датчиком Холла.',
    gallery: ['images/cards/БрызговикиLand.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'LandRoverDiscoveryV-130',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/LandRoverDiscoveryV.jfif',
    title: 'Выдвижные электропороги ATS на Land Rover Discovery V',
    desc: 'С кодированием в InControl и датчиком Холла.',
    gallery: ['images/cards/LandRoverDiscoveryV.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'LandVelar',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/LandVelar.jfif',
    title: 'Выдвижные электропороги ATS на Land Rover Range Rover Velar',
    desc: 'Установку выполняем по оригинальным заводским местам.',
    gallery: ['images/cards/LandVelar.jfif'],
    year: '',
    price: '',
    features: ["Установку выполняем по оригинальным заводским местам. Прописываем наши пороги в InControl. Выдвижные подножки делают заход в атомобиль очень удобным, так же удобнее будет выходить из автомобиля. Выдерживают до 200 кг, одновременно на них может вставать и водитель, и пассажир. Пороги оборудованы датчиком Холла,т.е пороги автоматически останавливаются если во что-то упираются или если что-то мешает им закрыться"]
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
    gallery: ['images/cards/RoverL460461.jfjf.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'двериRangeRoverVogue',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/двериRangeRoverVogue.jfif',
    title: 'Ручки внешние для двери Range Rover Vogue 2013-2020 (белые)',
    desc: 'Алгоритм работы как у оригинала — задержка захода при закрытии двери.',
    gallery: ['images/cards/двериRangeRoverVogue.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'двериRangeRoverVogueчерные',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/двериRangeRoverVogueчерные.jfif',
    title: 'Ручки внешние для двери Range Rover Vogue 2013-2020 (черные)',
    desc: 'Алгоритм работы как у оригинала — задержка захода при закрытии двери.',
    gallery: ['images/cards/двериRangeRoverVogueчерные.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'RoverVogue',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/RoverVogue.jfif',
    title: 'Выдвижные электропороги ATS на Range Rover Vogue',
    desc: 'Установку выполняем по оригинальным заводским местам.',
    gallery: ['images/cards/RoverVogue.jfif'],
    year: '',
    price: '',
    features: ["Установку выполняем по оригинальным заводским местам. Прописываем наши пороги в InControl. Выдвижные подножки делают заход в атомобиль очень удобным, так же удобнее будет выходить из автомобиля. Выдерживают до 200 кг, одновременно на них может вставать и водитель, и пассажир. Пороги оборудованы датчиком Холла,т.е пороги автоматически останавливаются если во что-то упираются или если что-то мешает им закрыться"]
  },
  {
    id: 'Обвесrange-rover-l460',
    brand: 'Range Rover / Land Rover',
    img: 'images/cards/ОбвесRover.jfif',
    title: 'Обвес на Range Rover L405 2017 - 2022 г. под Range Rover L460',
    desc: 'Алгоритм работы как у оригинала — задержка захода при закрытии двери.',
    gallery: ['images/cards/ОбвесRover.jfif'],
    year: '',
    price: '',
    features: []
  },
  //Tank 
  {

    id: 'tank-300',
    brand: 'Tank',
    img: 'images/cards/Tank300.jfif',
    title: 'Выдвижные электропороги ATS на Tank 300',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/Tank300.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'сtank-300',
    brand: 'Tank',
    img: 'images/cards/сTank300.jfif',
    title: 'Система электропривода багажника на TANK 300',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/сTank300.jfif'],
    year: '',
    price: '',
    features: [],
    video: 'https://www.youtube.com/embed/2XcEE5k5PAc', // <--- видео добавлено сюда

  },
  {
    id: 'сtank-500',
    brand: 'Tank',
    img: 'images/cards/Tank500.jfif',
    title: 'Система электропривода багажника на TANK 500',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/Tank500.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'сtank-Tank35700',
    brand: 'Tank',
    img: 'images/cards/Tank35700.jfif',
    title: 'Доводчики дверей на модельный ряд TANK 300/500/700',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/Tank35700.jfif'],
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
    gallery: ['images/cards/Prad250.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'toyota-Cruiser-300',
    brand: 'Toyota',
    img: 'images/cards/toyota232323233.jfif',
    title: 'Выдвижные электрические пороги ATS на Toyota Land Cruiser 300',
    desc: 'Удобство в эксплуатации и надежность.',
    gallery: ['images/cards/toyota232323233.jfif'],
    year: '',
    price: '',
    features: [],
    video: 'https://www.youtube.com/embed/9GAhHcPAnNw', // <--- видео добавлено сюда
  },


  {
    id: 'ДоводчикиToyota',
    brand: 'Toyota',
    img: 'images/cards/ДоводчикиToyota.jfif',
    title: 'Доводчики дверей на Toyota',
    desc: 'Доводчики дверей на Toyota LC300, Prada 150,200, 250, camry 75  и многие модели Toyota',
    gallery: ['images/cards/ДоводчикиToyota.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'ToyotaCamry2',
    brand: 'Toyota',
    img: 'images/cards/ToyotaCamry2.jfif',
    title: 'Система электропривода багажника на Toyota Camry (2021+г.в)',
    desc: '',
    gallery: ['images/cards/ToyotaCamry2.jfif'],
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
    gallery: ['images/cards/Toyota Hilux VIII.jfif'],
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
    gallery: ['images/cards/Toyota Highlander.jfif'],
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
    gallery: ['images/cards/Система электропривода багажника на Toyota LC300.jfif'],
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
    gallery: ['images/cards/Система электропривода багажника на Kia Sportage.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'KiaCarnivalIV33',
    brand: 'Kia',
    img: 'images/cards/KiaCarnivalIV.jfif',
    title: 'Выдвижные электрические пороги ATS на Kia Carnival IV',
    desc: 'Современные технологии и адаптация под авто.',
    gallery: ['images/cards/KiaCarnivalIV.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'KiaCarnivalIV',
    brand: 'Kia',
    img: 'images/cards/KiaSorento.jfif',
    title: 'Выдвижные электрические пороги ATS на Kia Sorento',
    desc: 'Современные технологии и адаптация под авто.',
    gallery: ['images/cards/KiaSorento.jfif'],
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
    gallery: ['images/cards/Выдвижные электропороги ATS на Hyundai Staria.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'HyundaiPalisade',
    brand: 'Hyundai',
    img: 'images/cards/HyundaiPalisade.jfif',
    title: 'Система электропривода багажника на Hyundai Palisade (2022+г.в)',
    desc: 'Штатная установка, гарантия 2 года.',
    gallery: ['images/cards/HyundaiPalisade.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'HyundaiPalisade2',
    brand: 'Hyundai',
    img: 'images/cards/HyundaiPalisade2.jfif',
    title: 'Выдвижные электрические пороги ATS на Hyundai Palisade (2022 +г.в)',
    desc: 'Штатная установка, гарантия 2 года.',
    gallery: ['images/cards/HyundaiPalisade2.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'HyundaiPalisade25',
    brand: 'Hyundai',
    img: 'images/cards/HyundaiPalisade25.jfif',
    title: 'Выдвижные электрические пороги ATS на  НОВЫЙ Hyundai Palisade (2025г.в)',
    desc: 'Штатная установка, гарантия 2 года.',
    gallery: ['images/cards/HyundaiPalisade25.jfif'],
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
    gallery: ['images/cards/Выдвижные электрические пороги ATS на Hyundai Santa Fe V.jfif'],
    year: '',
    price: '',
    features: [],
    video: 'https://www.youtube.com/embed/B5oIXuei2FI', // <--- видео добавлено сюда

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
  //Volkswagen

  {
    id: 'volkswagen-Multivan',
    brand: 'Volkswagen',
    img: 'images/cards/VolkswagenMultivan.jfif',
    title: 'Брызговики для автомобиля Volkswagen Multivan T5, T6, T6.1',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/VolkswagenMultivan.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'volkswagen-Multivan6',
    brand: 'Volkswagen',
    img: 'images/cards/VolkswagenMultivan6.jfif',
    title: 'Накладки на пороги Volkswagen Multivan T6',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/VolkswagenMultivan6.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'volkswagen-Teramont',
    brand: 'Volkswagen',
    img: 'images/cards/VolkswagenTeramont.jfif',
    title: 'Выдвижные электрические пороги ATS на Volkswagen Teramont',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/VolkswagenTeramont.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'volkswagen-Teramont2',
    brand: 'Volkswagen',
    img: 'images/cards/VolkswagenTeramont2.jfif',
    title: 'Доводчики дверей для Volkswagen Teramont (2022+г.в)',
    desc: 'Штатная установка, интеграция с электроникой, гарантия 2 года.',
    gallery: ['images/cards/VolkswagenTeramont2.jfif'],
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
  {
    id: 'lexus-LexusLX600',
    brand: 'Lexus',
    img: 'images/cards/LexusLX600.jfif',
    title: 'Выдвижные электрические пороги ATS на Lexus LX600',
    desc: 'Штатная интеграция, надежность, гарантия.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'LexusRXIV',
    brand: 'Lexus',
    img: 'images/cards/LexusRXIV.jfif',
    title: 'Выдвижные электрические пороги ATS на Lexus RX IV',
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
  {
    id: 'rox-Pe01',
    brand: 'Rox',
    img: 'images/cards/ROXPolestone01.jfif',
    title: 'Выдвижные электрические пороги ATS на ROX Polestone 01',
    desc: 'Установка на любые автомобили, индивидуальные решения.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'rox-Po01',
    brand: 'Rox',
    img: 'images/cards/Polarstone01.jfif',
    title: 'Доводчики для дверей для Rox Polarstone 01',
    desc: 'Установка на любые автомобили, индивидуальные решения.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  //infiniti
  {
    id: 'Infiniti',
    brand: 'Infiniti',
    img: 'images/cards/Infiniti.jfif',
    title: 'Доводчики дверей на Infiniti Qx80',
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
  {
    id: 'дgenesis-gv80',
    brand: 'Genesis',
    img: 'images/cards/дверейGenesisGv80.jfif',
    title: 'Доводчики дверей Genesis Gv80',
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
  {
    id: 'lixiang-l679',
    brand: 'Lixiang',
    img: 'images/cards/(Li Auto)L670.jfif',
    title: 'Доводчики дверей на модельный ряд Lixiang L6/ L7/L9',
    desc: 'Максимальный комфорт и надежность.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'зlixiang-l679',
    brand: 'Lixiang',
    img: 'images/cards/з(Li Auto)L670.jfif',
    title: 'Защита днища Lixiang L6 /L7 L8/ L9 (Ккоплект) (сталь)',
    desc: 'Максимальный комфорт и надежность.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  //Jetur
  {
    id: 'jetur-T2',
    brand: 'Jetur',
    img: 'images/cards/JeturT2.jfif',
    title: 'Доводчики дверей Jetour T2',
    desc: 'Штатная установка, гарантия 2 года.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'дjetur-T2',
    brand: 'Jetur',
    img: 'images/cards/дJeturT2.jfif',
    title: 'Электропривод Задней Двери Jetour T2',
    desc: 'Штатная установка, гарантия 2 года.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'эjetur-T2',
    brand: 'Jetur',
    img: 'images/cards/эJeturT2.jfif',
    title: 'Выдвижные электрические пороги ATS на Jetour T2',
    desc: 'Штатная установка, гарантия 2 года.',
    gallery: [],
    year: '',
    price: '',
    features: []
  },

  // Universal
  {
    id: 'DVR',
    brand: 'Universal',
    img: 'images/cards/DVR.jfif',
    title: 'Видеорегистраторы стационарной DVR-B.',
    desc: 'Автоматическое  включение/выключение.',
    gallery: ['images/cards/DVR.jfif'],
    year: '',
    price: '',
    features: ["Автоматическое  включение/выключение.Элементы питания скрыты за обшивкой салона автомобиля и не занимают гнездо прикуривателя.Стационарная установка позволяет оставлять устройство в салоне автомобиля без риска хищения.Видеорегистратор выполнен в виде штатного устройства.При установке на ветровое стекло используется декоративная пленка, маскирующая устройство снаружи.DVR - B может быть использован в качестве элемента охранного комплекса автомобиля.Циклическая запись(Когда на SD карте заканчивается место, видеорегистратор автоматически перезаписывает видеофайлы начиная с устаревших)Бесшовная запись(Видеорегистратор постоянно записывает видеоролики без пауз и задержек между ними)Напряжение питания: 9 – 16 В"
      , "Карта памяти: SD от 4 до 128 гб (в комплекте карта памяти SD 16 гб)",
      "Формат видеофайлов: mov",
      "Разрешение видео: 1920х1080 (Full HD)30 кадров/сек",
      "Угол обзора: 123°",
      "Линза: F/2,8",
      "Макс. разрешение фото: 4000х2250, 9 Мп",
      "Камера: OmniVision CMOS Low-light Full HD",
      "G-сенсор: Встроенный, трехосевой",
      "Micro USB-разъем: ДА | Индикатор состояния устройства:ДА"]
  },
  {
    id: 'слепых',
    brand: 'Universal',
    img: 'images/cards/слепых.jfif',
    title: 'Система контроля слепых зон.',
    desc: 'радары миллиметрового диапазона 24ГГц.',
    gallery: ['images/cards/слепых.jfif'],
    year: '',
    price: '',
    features: ["В системе AVILINE SmartASSIST используются  радары миллиметрового диапазона 24ГГц.  Радары не портят внешний вид автомобиля, так как  устанавливаются непосредственно на кузов автомобиля за задним бампером. Зона сканирования радаров  составляет 20 метров от заднего бампера назад и 3,5 метра от боковых стоек автомобиля вправо и влево соответственно. SmartASSIST - помощник при перестроении.",

      "Система активируется  при собственной скорости автомобиля выше 20 км/ч, и выключается при скорости менее 20 км/",
      "Интеллектуальная обработка сигнала позволяет исключить ложные срабатывания на тихоходы и стационарные объекты (деревья, столбы и т.д.). Система сообщает об автомобилях, скорость которых выше 20 км/ч, двигающихся в попутном направлении в соседних полосах.",
      "SmartASSIST оповещает водителя о приближении автомобиля включением соответствующего светодиодного индикатора. Если водитель игнорирует свечение индикатора  и включает  указатель  поворота,  система активирует звуковое  предупреждение**. ",
      "Система SmartASSIST  рекомендована для установки на легковые автомобили.",
      "*- Система осуществляет контроль  слепых зон, образующихся  в ходе перестроения в соседнюю полосу  (зона, не попадающая в поле зрения боковых зеркал и зеркало заднего вида).",
      "** - Звуковое предупреждение может быть выключено в процессе установки оборудования.",
      "Комплектация",
      "- Радар системы контроля слепых зон -2шт.",
      "- Индикатор -2 шт.",
      "- Звуковой модуль- 1 шт.",
      "- Жгут подключения-1шт.",
      "- Набор крепежа -1шт.",
      "- Инструкция по эксплуатации-1 экз."]
  },
  {
    id: 'ск',
    brand: 'Universal',
    img: 'images/cards/ск.jfif',
    title: 'Интерактивный смарт ключ (универсальный)',
    desc: 'Управление замками дверей, багажника, запуск двигателя.',
    gallery: ['images/cards/ск.jfif'],
    year: '',
    price: '',
    features: []
  },
  {
    id: 'заднего',
    brand: 'Universal',
    img: 'images/cards/заднего.jfif',
    title: 'Камера заднего вида',
    desc: 'Универсальная цветная камера.',
    gallery: ['images/cards/заднего.jfif'],
    year: '',
    price: '',
    features: ["Универсальная цветная камера - обеспечивает визуальное информирование водителя об обстановке позади автомобиля во время маневрирования. Благодаря наличию режима питания от 6 вольт, параметрам видеосигнала и универсальному способу крепления, камеру возможно установить на автомобиль оснащённый штатным монитором*. При этом нет необходимости использовать дополнительные устройства согласования. При отсутствии штатного монитора, камеру возможно подключить к дополнительному монитору. Функция зеркального отображения картинки обеспечивает расположение объектов на мониторе так, как они располагаются в реальности. Функция отображения парковочных линии помогает скорректировать траекторию движения автомобиля, учитывая его габариты. Во время установки устройства, отображение парковочных линий возможно отключить. Чувствительность камеры 0.2 LUX** гарантирует изображение высокого качества даже при недостаточном освещении. Камера включается автоматически при включении задней передачи. Устройство имеет простое и надежное крепление - резьбовая фиксация. Камера выполнена в герметичном корпусе - класс защиты IP69K, что гарантирует надежную работу устройства при любых погодных условиях. Версия камеры AHD имеет увеличенное разрешение до 1280x720 пикселей, что позволяет улучшить отображение камеры на поддерживающих высокое разрешение мониторах автомобиля."]
  },
  {
    id: 'цветная',
    brand: 'Universal',
    img: 'images/cards/цветная.jfif',
    title: 'Универсальная цветная камера',
    desc: 'Универсальная цветная камера.',
    gallery: ['images/cards/цветная.jfif'],
    year: '',
    price: '',
    features: ["Универсальная цветная камера - обеспечивает визуальное информирование водителя об обстановке позади автомобиля во время маневрирования. Благодаря наличию режима питания от 6 вольт, параметрам видеосигнала и универсальному способу крепления, камеру возможно установить на автомобиль оснащённый штатным монитором*. При этом нет необходимости использовать дополнительные устройства согласования. При отсутствии штатного монитора, камеру возможно подключить к дополнительному монитору. Функция зеркального отображения картинки обеспечивает расположение объектов на мониторе так, как они располагаются в реальности. Функция отображения парковочных линии помогает скорректировать траекторию движения автомобиля, учитывая его габариты. Во время установки устройства, отображение парковочных линий возможно отключить. Чувствительность камеры 0.2 LUX** гарантирует изображение высокого качества даже при недостаточном освещении. Камера включается автоматически при включении задней передачи. Устройство имеет простое и надежное крепление - резьбовая фиксация. Камера выполнена в герметичном корпусе - класс защиты IP69K, что гарантирует надежную работу устройства при любых погодных условиях."]
  }
];
