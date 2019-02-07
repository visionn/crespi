export const config = {
  info: {
    ita: {
      Title: 'Lorem ipsum',
      Subtitle: 'Sottotitolo',
      Body: require('../assets/text/ita/info/desc.md'),
    },
    eng: {
      Title: 'Lorem ipsum',
      Subtitle: 'Subtitle',
      Body: require('../assets/text/eng/info/desc.md'),
    },
  },
  chiesa: {
    position: {
      x: -100,
      y: 0,
      z: 0,
    },
    color: 'rgba(255, 60, 0, 0.3)',
    text: {
      ita: {
        Title: 'Mistero',
        Subtitle: 'Sottotitolo',
        Body: require('../assets/text/ita/chiesa/desc.md'),
      },
      eng: {
        Title: 'Mystery',
        Subtitle: 'Subtitle',
        Body: require('../assets/text/eng/chiesa/desc.md'),
      },
    },
  },
  fabbrica: {
    position: {
      x: 0,
      y: 0,
      z: 100,
    },
    color: 'rgba(255, 60, 0, 0.3)',
    text: {
      ita: {
        Title: 'Fabbrica',
        Subtitle: 'Fabbrica di Crespi',
        Body: require('../assets/text/ita/chiesa/desc.md'),
      },
      eng: {
        Title: 'Factory',
        Subtitle: "Crespi's Factory",
        Body: require('../assets/text/eng/chiesa/desc.md'),
      },
    },
  },
};
