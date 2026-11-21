const projects = {
  mosaic: {
    name: 'MOSAIC',
    logo: 'projects/mosaic/logo.png',
    repo: 'https://github.com/FIREXDF/MOSAIC',
    images: [1, 2, 3, 4, 5, 6, 7].map(n => `projects/mosaic/images/${n}.webp`),
    changelog: [
      { slug: 'v4.2.0', title: 'MOSAIC 4.2.0', summary: 'November 2026', cover: 'projects/mosaic/changelog/v4.2.0/cover.webp', tags: ['Stable'] },
      { slug: 'v4.2.0-beta.3', title: '4.2.0-beta.3', summary: 'November 15, 2026', tags: ['Beta'] },
      { slug: 'v4.2.0-beta.2', title: '4.2.0-beta.2', summary: 'November 11, 2026', tags: ['Beta'] },
      { slug: 'v4.2.0-beta.1', title: '4.2.0-beta.1', summary: 'November 4, 2026', tags: ['Beta'] },
      { slug: 'v4.1.3', title: '4.1.3', summary: 'October 28, 2026', tags: ['Stable'] },
      { slug: 'v4.1.2', title: '4.1.2', summary: 'October 22, 2026', tags: ['Stable'] },
      { slug: 'v4.1.2-beta.1', title: '4.1.2-beta.1', summary: 'October 21, 2026', tags: ['Beta'] },
      { slug: 'v4.1.1', title: '4.1.1', summary: 'October 9, 2026', tags: ['Stable'] },
      { slug: 'v4.1.0', title: '4.1.0', summary: 'October 6, 2026', tags: ['Stable'] },
      { slug: 'v4.0.0', title: '4.0.0', summary: 'October 3, 2026', tags: ['Stable'] },
    ],
    posts: [
      { slug: 'one-click-install', title: 'How 1-click install works', summary: 'How MOSAIC turns any GameBanana archive into a clean mod folder the game understands.', cover: 'projects/mosaic/images/5.webp', tags: ['Explanation'] },
      { slug: 'slot-changer', title: 'How the slot changer works', summary: 'Moving skins between costume slots, and adding new ones up to c255.', cover: 'projects/mosaic/images/3.webp', tags: ['Explanation'] },
      { slug: 'css-editor', title: 'How the CSS editor works', summary: 'Rearranging the character select screen without touching game files.', cover: 'projects/mosaic/images/2.webp', tags: ['Explanation'] },
      { slug: 'diagnostics', title: 'The Diagnostics page', summary: 'Conflicts, the .nro limit, batch testing and the diagnostic report.', cover: 'projects/mosaic/images/10.webp', tags: ['Explanation'] },
      { slug: 'plugins-and-hardware', title: 'Plugins, emulators and your Switch', summary: 'Plugin updates, launching the emulator and sending mods to your console.', cover: 'projects/mosaic/images/6.webp', tags: ['Explanation'] },
      { slug: 'electron', title: 'How MOSAIC is built', summary: 'The two halves of the app, and what happens between a click and a folder moving on your disk.', cover: 'projects/mosaic/images/9.webp', tags: ['Explanation'] },
      { slug: 'what-mosaic-sends', title: 'What MOSAIC sends', summary: 'Crash reports, Discord status, update checks, and what stays on your PC.', cover: 'projects/mosaic/images/8.webp', tags: ['Explanation'] },
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
