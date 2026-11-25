import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  noIndex?: boolean;
}

export function SeoHead({ title, description, noIndex }: SeoHeadProps) {
  useEffect(() => {
    document.title = title.includes('Tidemark') ? title : `${title} - Tidemark`;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', description);

    let robots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex');
    } else if (robots) {
      robots.remove();
    }
  }, [title, description, noIndex]);

  return null;
}
