/**
 * Component tests for CssToggle.astro (Stories 2.1 + 2.2 + 2.3)
 * Verifies toggle button structure, accessibility attributes, integration,
 * View Transitions radial animation logic, reduced motion support,
 * and keyboard activation.
 */

import { describe, it, expect } from 'bun:test';
import { readFile } from 'fs/promises';
import { join } from 'path';

const DIST_DIR = join(process.cwd(), 'dist');
const COMPONENT_PATH = join(process.cwd(), 'src/components/CssToggle.astro');

describe('CssToggle Component - Story 2.1', () => {
  describe('Source Structure', () => {
    it('should exist at src/components/CssToggle.astro', async () => {
      const exists = await Bun.file(COMPONENT_PATH).exists();
      expect(exists).toBe(true);
    });

    it('should define a Props interface', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('interface Props');
    });

    it('should use semantic <button> element (not <div>)', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('<button');
      expect(content).toContain('</button>');
      expect(content).not.toMatch(/<div[^>]*css-toggle/);
    });

    it('should have id="css-toggle"', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('id="css-toggle"');
    });

    it('should have class="css-toggle"', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('class="css-toggle"');
    });

    it('should have aria-pressed="false" initially', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('aria-pressed="false"');
    });

    it('should have disabled attribute initially', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toMatch(/<button[^>]*disabled/);
    });

    it('should have "CSS" as button label text', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('CSS');
    });

    it('should include a <script> tag for interactivity', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('<script>');
      expect(content).toContain('</script>');
    });
  });

  describe('Script Logic', () => {
    it('should reference styled-css link for gating', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('styled-css');
    });

    it('should listen for load event on styled CSS link', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain("addEventListener('load'");
    });

    it('should toggle data-styled attribute on <html>', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('data-styled');
      expect(content).toContain('documentElement');
    });

    it('should update aria-pressed on toggle', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain("setAttribute('aria-pressed'");
    });

    it('should handle both toggle directions (set and remove data-styled)', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('setAttribute(');
      expect(content).toContain('removeAttribute(');
    });

    it('should enable button by removing disabled attribute on CSS load', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain("removeAttribute('disabled')");
    });
  });

  describe('Build Integration', () => {
    it('should compile without errors (dist files exist)', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const exists = await Bun.file(frPath).exists();
      expect(exists).toBe(true);
    });

    it('should render on French page', async () => {
      const content = await readFile(join(DIST_DIR, 'index.html'), 'utf-8');
      expect(content).toContain('css-toggle');
    });

    it('should render on English page', async () => {
      const content = await readFile(join(DIST_DIR, 'en/index.html'), 'utf-8');
      expect(content).toContain('css-toggle');
    });

    it('should render with aria-pressed="false" in HTML output', async () => {
      const content = await readFile(join(DIST_DIR, 'index.html'), 'utf-8');
      expect(content).toContain('aria-pressed="false"');
    });

    it('should render as disabled button in HTML output', async () => {
      const content = await readFile(join(DIST_DIR, 'index.html'), 'utf-8');
      expect(content).toMatch(/css-toggle[^>]*disabled|disabled[^>]*css-toggle/);
    });

    it('should have id="styled-css" on the styled CSS link', async () => {
      const content = await readFile(join(DIST_DIR, 'index.html'), 'utf-8');
      expect(content).toContain('id="styled-css"');
    });

    it('should render inside header element', async () => {
      const content = await readFile(join(DIST_DIR, 'index.html'), 'utf-8');
      // css-toggle class should appear within header tag bounds
      const headerStart = content.indexOf('<header');
      const headerEnd = content.indexOf('</header>');
      const toggleIdx = content.indexOf('css-toggle');
      expect(headerStart).toBeGreaterThan(-1);
      expect(headerEnd).toBeGreaterThan(headerStart);
      expect(toggleIdx).toBeGreaterThan(headerStart);
      expect(toggleIdx).toBeLessThan(headerEnd);
    });
  });

  describe('Race Condition Guard', () => {
    it('should check if stylesheet already loaded before attaching listener', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      // Verify the race condition guard: checks .sheet or .media === 'all' before falling back to load listener
      expect(content).toMatch(/\.sheet|\.media\s*===\s*['"]all['"]/);
    });

    it('should have both immediate check and load event listener paths', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      // Must have an if/else pattern: immediate enable OR listen for load
      expect(content).toContain("removeAttribute('disabled')");
      expect(content).toContain("addEventListener('load'");
      // Ensure there are two separate removeAttribute('disabled') calls (immediate + listener)
      const matches = content.match(/removeAttribute\('disabled'\)/g);
      expect(matches).not.toBeNull();
      expect(matches!.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Progressive Enhancement', () => {
    it('should have noscript fallback to hide button when JS disabled', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('<noscript>');
      expect(content).toContain('.css-toggle');
    });

    it('should render noscript in build output', async () => {
      const content = await readFile(join(DIST_DIR, 'index.html'), 'utf-8');
      expect(content).toContain('<noscript>');
    });
  });

  describe('CSS Styling', () => {
    it('should have .css-toggle styles in base.css (raw state)', async () => {
      const content = await readFile(join(process.cwd(), 'public/styles/base.css'), 'utf-8');
      expect(content).toContain('.css-toggle');
      expect(content).toContain('#1a1a1a');
      expect(content).toContain('#ffffff');
    });

    it('should have 48px minimum height in base.css', async () => {
      const content = await readFile(join(process.cwd(), 'public/styles/base.css'), 'utf-8');
      expect(content).toContain('min-height: 48px');
    });

    it('should have styled state overrides in styled.css', async () => {
      const content = await readFile(join(process.cwd(), 'public/styles/styled.css'), 'utf-8');
      expect(content).toContain('html[data-styled] .css-toggle');
      expect(content).toContain('transparent');
      expect(content).toContain('monospace');
    });

    it('should have .header-actions flex layout in base.css', async () => {
      const content = await readFile(join(process.cwd(), 'public/styles/base.css'), 'utf-8');
      expect(content).toContain('.header-actions');
      expect(content).toContain('display: flex');
    });
  });
});

describe('CssToggle — View Transitions (Story 2.2)', () => {
  it('should call document.startViewTransition when available', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('document.startViewTransition');
  });

  it('should fall back to direct toggle when startViewTransition unavailable', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    // Feature detect: if (!document.startViewTransition) { doToggle(); return; }
    expect(content).toMatch(/!document\.startViewTransition/);
    expect(content).toContain('doToggle()');
  });

  it('should set --vt-x and --vt-y CSS properties before transition', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("setProperty('--vt-x'");
    expect(content).toContain("setProperty('--vt-y'");
  });

  it('should set --vt-x and --vt-y to px values (not percentages)', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    // Values must use px suffix via template literal
    expect(content).toContain('`${x}px`');
    expect(content).toContain('`${y}px`');
  });

  it('should update aria-pressed inside View Transition callback (doToggle)', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    // doToggle function must contain aria-pressed setAttribute
    const doToggleFn = content.slice(content.indexOf('function doToggle'), content.indexOf('toggleButton?.addEventListener'));
    expect(doToggleFn).toContain("setAttribute('aria-pressed'");
  });

  it('should toggle data-styled inside View Transition callback (doToggle)', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    const doToggleFn = content.slice(content.indexOf('function doToggle'), content.indexOf('toggleButton?.addEventListener'));
    expect(doToggleFn).toContain('data-styled');
  });

  it('should capture getBoundingClientRect before calling startViewTransition', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('getBoundingClientRect()');
    // getBoundingClientRect must appear before startViewTransition in the toggle logic
    const rectPos = content.indexOf('getBoundingClientRect');
    const vtPos = content.indexOf('startViewTransition');
    expect(rectPos).toBeGreaterThan(-1);
    expect(vtPos).toBeGreaterThan(-1);
    expect(rectPos).toBeLessThan(vtPos);
  });

  it('should have @keyframes radial-reveal in base.css', async () => {
    const content = await readFile(join(process.cwd(), 'public/styles/base.css'), 'utf-8');
    expect(content).toContain('@keyframes radial-reveal');
    expect(content).toContain('clip-path: circle(0%');
    expect(content).toContain('clip-path: circle(200%');
  });

  it('should have ::view-transition-old with no animation in base.css', async () => {
    const content = await readFile(join(process.cwd(), 'public/styles/base.css'), 'utf-8');
    expect(content).toContain('::view-transition-old(root)');
    expect(content).toMatch(/::view-transition-old\(root\)\s*\{[^}]*animation:\s*none/);
  });

  it('should have ::view-transition-new with radial-reveal animation in base.css', async () => {
    const content = await readFile(join(process.cwd(), 'public/styles/base.css'), 'utf-8');
    expect(content).toContain('::view-transition-new(root)');
    expect(content).toMatch(/::view-transition-new\(root\)\s*\{[^}]*radial-reveal/);
    expect(content).toContain('250ms ease-out');
  });

  it('should have --vt-x and --vt-y defaults in base.css :root', async () => {
    const content = await readFile(join(process.cwd(), 'public/styles/base.css'), 'utf-8');
    expect(content).toContain('--vt-x: 50%');
    expect(content).toContain('--vt-y: 50%');
  });
});

describe('CssToggle — Reduced Motion & Keyboard (Story 2.3)', () => {
  it('should check prefers-reduced-motion before calling startViewTransition', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("window.matchMedia('(prefers-reduced-motion: reduce)').matches");
  });

  it('should skip View Transition when prefers-reduced-motion is set', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    // The condition must include both feature-detect and reduced motion checks
    expect(content).toMatch(/!document\.startViewTransition\s*\|\|\s*prefersReducedMotion/);
  });

  it('should call doToggle() directly when reduced motion is preferred', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    // prefersReducedMotion condition must lead to direct doToggle() call
    expect(content).toContain('prefersReducedMotion');
    expect(content).toContain('doToggle()');
  });

  it('should activate on Enter key', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("event.key !== 'Enter'");
    expect(content).toContain("addEventListener('keydown'");
  });

  it('should activate on Space key', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("event.key !== ' '");
  });

  it('should prevent default only for keyboard events', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('instanceof KeyboardEvent');
    expect(content).toContain('event.preventDefault()');
  });

  it('should have handleToggle function that accepts optional Event parameter', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('function handleToggle');
    expect(content).toMatch(/handleToggle\(event\?/);
  });

  it('should call handleToggle from click listener', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("addEventListener('click', handleToggle)");
  });

  it('should call handleToggle from keydown listener', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('handleToggle(event)');
  });

  it('should have @media prefers-reduced-motion rule in base.css', async () => {
    const content = await readFile(join(process.cwd(), 'public/styles/base.css'), 'utf-8');
    expect(content).toContain('@media (prefers-reduced-motion: reduce)');
  });

  it('should override ::view-transition-new animation to none in reduced motion media query', async () => {
    const content = await readFile(join(process.cwd(), 'public/styles/base.css'), 'utf-8');
    expect(content).toMatch(/@media \(prefers-reduced-motion: reduce\)\s*\{[^}]*::view-transition-new\(root\)\s*\{[^}]*animation:\s*none/);
  });

  it('should have aria-label="Toggle CSS" for screen reader clarity', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('aria-label="Toggle CSS"');
  });

  it('should restore focus after View Transition completes', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('.finished.then(');
    expect(content).toContain('toggleButton?.focus()');
  });

  it('should disable button hover transition for reduced motion users', async () => {
    const content = await readFile(join(process.cwd(), 'public/styles/base.css'), 'utf-8');
    expect(content).toMatch(/@media \(prefers-reduced-motion: reduce\)\s*\{[^}]*\}[^}]*\.css-toggle\s*\{[^}]*transition:\s*none/);
  });

  it('should preserve aria-pressed management in doToggle', async () => {
    const content = await readFile(COMPONENT_PATH, 'utf-8');
    const doToggleFn = content.slice(content.indexOf('function doToggle'), content.indexOf('function handleToggle'));
    expect(doToggleFn).toContain("setAttribute('aria-pressed'");
    expect(doToggleFn).toContain('data-styled');
  });
});
