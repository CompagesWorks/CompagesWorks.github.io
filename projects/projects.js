const projects = {
  mosaic: {
    name: 'MOSAIC',
    logo: 'projects/mosaic/logo.png',
    repo: 'https://github.com/FIREXDF/MOSAIC',
    images: [1, 2, 3, 4, 5, 6, 7].map(n => `projects/mosaic/images/${n}.webp`),
    posts: [
      { slug: 'one-click-install', title: 'How 1-click install works', summary: 'How MOSAIC turns any GameBanana archive into a clean mod folder the game understands.', cover: 'projects/mosaic/images/5.webp', tags: ['Explanation'] },
      { slug: 'slot-changer', title: 'How the slot changer works', summary: 'Moving skins between costume slots, and adding new ones up to c255.', cover: 'projects/mosaic/images/3.webp', tags: ['Explanation'] },
      { slug: 'css-editor', title: 'How the CSS editor works', summary: 'Rearranging the character select screen without touching game files.', cover: 'projects/mosaic/images/2.webp', tags: ['Explanation'] },
      { slug: 'diagnostics', title: 'The Diagnostics page', summary: 'Conflicts, the .nro limit, batch testing and the diagnostic report.', tags: ['Explanation'] },
      { slug: 'plugins-and-hardware', title: 'Plugins, emulators and your Switch', summary: 'Plugin updates, launching the emulator and sending mods to your console.', cover: 'projects/mosaic/images/6.webp', tags: ['Explanation'] },
    ],
  },
  tessera: {
    name: 'Tessera',
    logo: 'projects/tessera/logo.svg',
    repo: 'https://github.com/CompagesWorks/Tessera',
    images: [],
    posts: [],
  },
  'mosaic-debug': {
    name: 'MOSAIC Debug',
    logo: 'projects/mosaic-debug/logo.png',
    repo: 'https://github.com/CompagesWorks/MOSAICDebug',
    images: [],
    posts: [],
  },
  'atrium-ui': {
    name: 'Atrium-UI',
    logo: 'projects/atrium-ui/logo.png',
    repo: 'https://github.com/CompagesWorks/Atrium-UI',
    images: [],
    posts: [],
  },
};

const blog = {
  name: 'Compages Works',
  logo: 'logo.webp',
  posts: [],
};
