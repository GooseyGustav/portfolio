import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Theme picker (persisted across page swaps)
document.querySelectorAll<HTMLButtonElement>('.sw').forEach((b) =>
  b.addEventListener('click', () => {
    try { localStorage.setItem('pal', b.dataset.pal!); } catch (e) {}
    (window as any).__applyPal();
  }),
);
(window as any).__applyPal();

// Remember an explicit language choice so the root redirect respects it
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-lang]');
  if (a) try { localStorage.setItem('lang', a.dataset.lang!); } catch (err) {}
});

function setup() {
  ScrollTrigger.getAll().forEach((s) => s.kill());
  if (lenis) {
    const hash = location.hash;
    lenis.scrollTo(hash && document.querySelector(hash) ? hash : 0, { immediate: true, offset: -70 });
  }
  if (reduce) return;

  document.querySelectorAll<HTMLElement>('[data-depth]').forEach((el) => {
    const d = parseFloat(el.dataset.depth!);
    gsap.fromTo(el, { yPercent: 0 }, { yPercent: -100 * d, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });
  });
  document.querySelectorAll<HTMLElement>('.card').forEach((c) => {
    gsap.fromTo(c, { rotateX: 10, y: 60, scale: 0.96 }, { rotateX: 0, y: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: c, start: 'top bottom', end: 'top 60%', scrub: true } });
    c.addEventListener('pointermove', (e) => {
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(10px)`;
    });
    c.addEventListener('pointerleave', () => { c.style.transform = ''; });
  });
  document.querySelectorAll<HTMLElement>('.step').forEach((s) =>
    gsap.fromTo(s, { x: -24 }, { x: 0, ease: 'none', scrollTrigger: { trigger: s, start: 'top bottom', end: 'top 70%', scrub: true } }),
  );
  document.querySelectorAll<HTMLElement>('.points li').forEach((li, i) =>
    gsap.fromTo(li, { y: 24 }, { y: 0, duration: 0.6, delay: 0.1 + i * 0.06, ease: 'power3.out' }),
  );
}

document.addEventListener('astro:page-load', setup);
// In-page anchor links scroll smoothly through Lenis
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]');
  if (!a || !lenis) return;
  const url = new URL(a.href);
  if (url.pathname === location.pathname && url.hash && document.querySelector(url.hash)) {
    e.preventDefault();
    lenis.scrollTo(url.hash, { offset: -70 });
    history.replaceState(history.state, '', url.hash);
  }
}, true);
