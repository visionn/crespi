export const config = {
  info: {
    ita: {
      title: 'Lorem ipsum',
      subtitle: 'Sottotitolo',
      description: require('../assets/text/ita/info/desc.md'),
    },
    eng: {
      title: 'Lorem ipsum',
      subtitle: 'Subtitle',
      description: require('../assets/text/eng/info/desc.md'),
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
        title: 'Mistero',
        subtitle: 'Sottotitolo',
        description: require('../assets/text/ita/chiesa/desc.md'),
      },
      eng: {
        title: 'Mystery',
        subtitle: 'Subtitle',
        description: require('../assets/text/eng/chiesa/desc.md'),
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
        title: 'Fabbrica',
        subtitle: 'Fabbrica di Crespi',
        description: require('../assets/text/ita/chiesa/desc.md'),
      },
      eng: {
        title: 'Factory',
        subtitle: "Crespi's Factory",
        description: require('../assets/text/eng/chiesa/desc.md'),
      },
    },
  },
};
