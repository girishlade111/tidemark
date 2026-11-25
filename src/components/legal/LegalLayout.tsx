import { useEffect, useState } from 'react';
import { SkyHero } from '@/components/heroes/SkyHero';
import { SeoHead } from '@/components/common/SeoHead';
import './LegalLayout.css';

export interface LegalSectionItem {
  number: string;
  id: string;
  title: string;
  paragraphs: string[];
}

interface LegalLayoutProps {
  title: string;
  description: string;
  badge: string;
  subtitle: string;
  introNote: string;
  sections: LegalSectionItem[];
  noIndex?: boolean;
}

export function LegalLayout({
  title,
  description,
  badge,
  subtitle,
  introNote,
  sections,
  noIndex,
}: LegalLayoutProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-18% 0px -65% 0px' },
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <SeoHead title={title} description={description} noIndex={noIndex} />
      <SkyHero badge={badge} title={title} subtitle={subtitle} compact />

      <section className="surface-page padding-section padding-global">
        <div className="container-large tm-legal-grid">
          <aside className="tm-card tm-legal-toc" aria-label="On this page">
            <div className="tm-legal-toc-title">On this page</div>
            <nav>
              <ul>
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className={`tm-legal-toc-link${activeId === sec.id ? ' is-active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById(sec.id);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          setActiveId(sec.id);
                        }
                      }}
                    >
                      <span className="tm-legal-toc-num">{sec.number}</span>
                      <span>{sec.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="tm-legal-content">
            <div className="tm-card tm-legal-intro-card">{introNote}</div>

            <div className="tm-legal-sections">
              {sections.map((sec) => (
                <article key={sec.id} id={sec.id} className="tm-legal-section">
                  <div className="tm-legal-sec-head">
                    <span className="tm-legal-sec-num">{sec.number}</span>
                    <h2 className="heading-h4">{sec.title}</h2>
                  </div>
                  {sec.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
