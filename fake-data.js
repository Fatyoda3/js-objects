const gameDetail = (detailFields, details, current) => {
  const information = {};
  let i = 0;

  for (const key of detailFields) {
    information[key] = details[i++][current];
  }
  return information;
};

const group = (...details) => {
  const gameDetails = [];
  const detailFields = ['name', 'genre',/*  'released', 'publisher' */];
  for (let current = 0; current < details[0].length; current++) {
    gameDetails.push(gameDetail(detailFields, details, current));
  }

  return gameDetails;
};

const main = () => {
  const games = [
    'Resident Evil 4 Remake',
    'Starfield',
    'Silent Hill 2 Remake',
    'Halo Infinite',
    'BioShock Infinite',
    'Elden Ring',
    'The Legend of Zelda: Tears of the Kingdom',
    'God of War: Ragnarök',
    'Cyberpunk 2077',
    'Red Dead Redemption 2',
    'The Witcher 3: Wild Hunt',
    'Horizon Forbidden West',
    'Final Fantasy VII Rebirth',
    'Assassin’s Creed Mirage',
    'Call of Duty: Modern Warfare III',
    'Baldur’s Gate 3',
    'Diablo IV',
    'Mass Effect Legendary Edition',
    'Ghost of Tsushima',
    'Alan Wake 2'
  ];
  const publishers = [
    'Capcom',
    'Bethesda Softworks',
    'Konami',
    'Xbox Game Studios',
    '2K Games',
    'Bandai Namco',
    'Nintendo',
    'Sony Interactive Entertainment',
    'CD Projekt Red',
    'Rockstar Games',
    'CD Projekt Red',
    'Sony Interactive Entertainment',
    'Square Enix',
    'Ubisoft',
    'Activision',
    'Larian Studios',
    'Blizzard Entertainment',
    'Electronic Arts',
    'Sony Interactive Entertainment',
    'Epic Games / Remedy Entertainment'
  ];
  const releaseYears = [
    2023,
    2023,
    2024,
    2021,
    2013,
    2022,
    2023,
    2022,
    2020,
    2018,
    2015,
    2022,
    2024,
    2023,
    2023,
    2023,
    2023,
    2021,
    2020,
    2023
  ];
  const genres = [
    'Survival Horror',
    'Sci-Fi RPG',
    'Psychological Horror',
    'FPS / Sci-Fi',
    'Action FPS',
    'Action RPG',
    'Adventure / Action',
    'Action / Adventure',
    'RPG / Open World',
    'Action / Western',
    'RPG / Fantasy',
    'Action / Sci-Fi',
    'RPG / Fantasy',
    'Action / Stealth',
    'FPS / Shooter',
    'RPG / Fantasy',
    'Action RPG',
    'RPG / Sci-Fi',
    'Action / Samurai',
    'Horror / Thriller'
  ];

  const details = [games, genres, publishers, releaseYears];
  const grouped = group(...details);


  console.log(grouped);
};

main();
