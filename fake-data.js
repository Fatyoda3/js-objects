const fillValue = (obj, field, value) => {
  obj[field] = value;
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
  const detailCount = Object.values(details)[0].length;
  const gameDetails = fillEmptyObjects(detailCount);

  for (const key in details) {
    let index = 0;

    for (const element of details[key]) {
      const game = gameDetails[index++];
      fillValue(game, key, element);
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

  const details = { name: games, genres, publishers };
  const grouped = group(details);


  console.log('grouped', grouped);
};

main();
