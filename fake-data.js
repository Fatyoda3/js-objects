const gameNames = [
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
const platforms = [
  ['PS5', 'Xbox Series X/S', 'PC'],
  ['Xbox Series X/S', 'PC'],
  ['PS5', 'PC'],
  ['Xbox Series X/S', 'PC'],
  ['PS4', 'Xbox One', 'PC'],
  ['PS5', 'Xbox Series X/S', 'PC'],
  ['Nintendo Switch'],
  ['PS5'],
  ['PS5', 'Xbox Series X/S', 'PC'],
  ['PS4', 'Xbox One', 'PC'],
  ['PS4', 'Xbox One', 'Switch', 'PC'],
  ['PS5', 'PS4'],
  ['PS5'],
  ['PS5', 'Xbox Series X/S', 'PC'],
  ['PS5', 'Xbox Series X/S', 'PC'],
  ['PS5', 'PC'],
  ['PS5', 'Xbox Series X/S', 'PC'],
  ['PS4', 'Xbox One', 'PC'],
  ['PS5', 'PC'],
  ['PS5', 'Xbox Series X/S', 'PC']
];

const gameDetail = (detailFields, details, current) => {
  const gameDetail = {};
  let i = 0;

  for (const key of detailFields) {
    gameDetail[key] = details[i++][current];
  }
  return gameDetail;
};

const genDetailOfGames = (...details) => {
  const gameDetails = [];
  const detailFields = ['name', 'genre', 'released', 'publisher', 'platforms'];

  for (let current = 0; current < details[0].length; current++) {
    const gameDetail = gameDetail(detailFields, details, current);
    gameDetails.push(gameDetail);
  }



  return gameDetails;
};

const main = () => {
  const details = [gameNames, genres, publishers, releaseYears, platforms];
  const groupedDetails = genDetailOfGames(...details);

  console.log();

  console.log(groupedDetails);
};

main();
