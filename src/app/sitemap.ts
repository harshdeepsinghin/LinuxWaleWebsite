import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://linuxwale.in';
  const now = new Date().toISOString();
  return [
    { url: `${base}/`, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/about/`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/services/`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/contact/`, lastModified: now, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/welcome/`, lastModified: now, priority: 0.3, changeFrequency: 'yearly' }
  ];
}
