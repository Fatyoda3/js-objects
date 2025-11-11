const gameDetail = (field, value) => {
  const obj = {};
  console.log(field, value);

  return obj;
};

const fillEmptyObjects = (count) => {
  const filled = [];
  for (let index = 0; index < count; index++) {
    filled.push({});
  }

  return filled;
};

const group = (details) => {
  const gameDetails = fillEmptyObjects(Object.values(details)[0].length);
  console.log(gameDetails);
  for (const key in details) {
    // console.log(key, details[key]);
    for (const element of details[key]) {
      gameDetail(key, element);
    }
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
    'The Legend of Zelda: TOTK',
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
  ].slice(0, 2);
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
  ].slice(0, 2);

  const details = { games, genres };
  const grouped = group(details);


  console.log(grouped);
};

main();
