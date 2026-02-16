/**
 * Configuration tests for Astro i18n setup (Story 1.1)
 */

import { describe, it, expect } from 'bun:test';

describe('Astro Configuration', () => {
  it('should have correct i18n settings', async () => {
    // Dynamic import to avoid build-time issues
    const config = await import('../../astro.config.mjs');
    const astroConfig = config.default;

    expect(astroConfig.i18n).toBeDefined();
    expect(astroConfig.i18n.defaultLocale).toBe('fr');
    expect(astroConfig.i18n.locales).toEqual(['fr', 'en']);
    expect(astroConfig.i18n.prefixDefaultLocale).toBe(false);
  });

  it('should have site URL configured', async () => {
    const config = await import('../../astro.config.mjs');
    const astroConfig = config.default;

    expect(astroConfig.site).toBeDefined();
    expect(astroConfig.site).toContain('github.io');
  });

  it('should not have base path (root domain deployment)', async () => {
    const config = await import('../../astro.config.mjs');
    const astroConfig = config.default;

    expect(astroConfig.base).toBeUndefined();
  });
});
