const root = document.documentElement;
if (root.classList.contains('intro')) {
  await new Promise(done => new MutationObserver((_, observer) => {
    if (root.classList.contains('intro')) return;
    observer.disconnect();
    done();
  }).observe(root, { attributeFilter: ['class'] }));
}

const { ShaderMount, godRaysFragmentShader, getShaderColorFromString, getShaderNoiseTexture, ShaderFitOptions } = await import('https://cdn.jsdelivr.net/npm/@paper-design/shaders@0.0.81/dist/index.js');

await window.revealed;

const bg = document.querySelector('.rays');
const accent = getComputedStyle(root).getPropertyValue('--accent').trim();
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
const noise = getShaderNoiseTexture();
await noise.decode();

const rays = new ShaderMount(bg, godRaysFragmentShader, {
  u_colors: [accent, '#c6ff94', '#ffffff'].map(getShaderColorFromString),
  u_colorsCount: 3,
  u_colorBack: getShaderColorFromString('#000000'),
  u_colorBloom: getShaderColorFromString(accent),
  u_bloom: 0.37,
  u_density: 0.16,
  u_spotty: 0.3,
  u_midIntensity: 0.39,
  u_noiseTexture: noise,
  u_fit: ShaderFitOptions.contain,
  u_scale: 0.88,
  u_offsetY: -1,
  u_originX: 0.5,
  u_originY: 0.5,
}, undefined, still ? 0 : 0.75, Number(sessionStorage.raysFrame) || 0, 1, 1280 * 720);

addEventListener('pageswap', () => sessionStorage.raysFrame = rays.getCurrentFrame());
requestAnimationFrame(() => requestAnimationFrame(() => bg.classList.add('ready')));
