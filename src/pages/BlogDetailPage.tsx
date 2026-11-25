import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { articles } from '@/data/articles';
import { teamMembers } from '@/data/team';
import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { FinalCloudCTA } from '@/components/cta/FinalCloudCTA';
import './Pages.css';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = articles.find((a) => a.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const author = teamMembers.find((m) => m.slug === post.authorSlug);
  const related = articles.filter((a) => a.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SeoHead title={`${post.title} - Tidemark`} description={post.summary} />

      <SkyHero badge={`Blog / ${post.category}`} title={post.title}>
        <div className="tm-blog-hero-author">
          {author && <img src={author.portrait} alt={author.name} />}
          <span>
            {author?.name} · {post.date} · {post.readTime}
          </span>
        </div>
      </SkyHero>

      <section className="surface-page padding-global" style={{ paddingTop: '2.5rem' }}>
        <div className="container-large">
          <div className="tm-cs-cover-frame">
            <img src={post.coverImage} alt={post.title} className="tm-cs-cover-img" />
          </div>
        </div>
      </section>

      <section className="surface-page padding-section padding-global">
        <div className="container-large tm-article-grid">
          {/* Left Sticky TOC */}
          <aside className="tm-card tm-legal-toc">
            <div className="tm-legal-toc-title">In this article</div>
            <nav aria-label="Article table of contents">
              <ul>
                {post.toc.map((heading, idx) => (
                  <li key={heading}>
                    <a href={`#sec-${idx}`} className="tm-legal-toc-link">
                      {heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Center Rich Content */}
          <article className="tm-article-body">
            <p className="tm-article-lead">{post.lead[0]}</p>
            <p className="tm-body-p">{post.lead[1]}</p>

            <h2 id="sec-0" className="heading-h4" style={{ margin: '2.25rem 0 0.75rem' }}>
              {post.section1Title}
            </h2>
            <p className="tm-body-p">{post.section1Body}</p>

            <div className="tm-card tm-article-stats-strip">
              {post.stats.map((s) => (
                <div key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <h2 id="sec-1" className="heading-h4" style={{ margin: '2.25rem 0 0.75rem' }}>
              {post.section2Title}
            </h2>
            <p className="tm-body-p">{post.section2Body}</p>

            <blockquote className="tm-article-quote">{post.calloutQuote}</blockquote>

            <h2 id="sec-2" className="heading-h4" style={{ margin: '2.25rem 0 0.75rem' }}>
              {post.section3Title}
            </h2>
            <ul className="tm-article-list">
              {post.section3Items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <figure className="tm-article-figure">
              <img src={post.inlineImage} alt={post.inlineCaption} loading="lazy" />
              <figcaption>{post.inlineCaption}</figcaption>
            </figure>

            <h2 id="sec-3" className="heading-h4" style={{ margin: '2.25rem 0 0.75rem' }}>
              {post.section4Title}
            </h2>
            <p className="tm-body-p">{post.section4Body}</p>

            {author && (
              <Link to={`/team/${author.slug}`} className="tm-card tm-article-author-box">
                <img src={author.portrait} alt={author.name} />
                <div>
                  <strong>{author.name}</strong>
                  <p>{author.shortBio}</p>
                </div>
              </Link>
            )}
          </article>

          {/* Right Sticky Share Rail */}
          <aside className="tm-article-share">
            <span>Share</span>
            <button
              type="button"
              className="tm-share-btn"
              aria-label="Share on LinkedIn"
              onClick={() => window.open('https://www.linkedin.com', '_blank', 'noreferrer')}
            >
              in
            </button>
            <button
              type="button"
              className="tm-share-btn"
              aria-label="Share on X"
              onClick={() => window.open('https://x.com', '_blank', 'noreferrer')}
            >
              X
            </button>
            <button
              type="button"
              className="tm-share-btn"
              aria-label="Scroll to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUp size={14} />
            </button>
          </aside>
        </div>
      </section>

      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="tm-split-head" style={{ marginBottom: '2rem' }}>
            <h2 className="heading-h3" style={{ margin: 0 }}>
              Keep reading
            </h2>
            <Link to="/blog" className="tm-text-link">
              <span>View all articles</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="tm-three-col-grid">
            {related.map((r) => {
              const rAuthor = teamMembers.find((m) => m.slug === r.authorSlug);
              return (
                <Link key={r.id} to={`/blog/${r.slug}`} className="tm-card tm-card-interactive tm-blog-card">
                  <div className="tm-blog-card-img-wrap">
                    <img src={r.coverImage} alt={r.title} className="tm-img-zoom" loading="lazy" />
                  </div>
                  <div className="tm-blog-card-body">
                    <div className="tm-blog-card-meta">
                      <span className="tm-tag-chip is-blue">{r.category}</span>
                      <span>{r.readTime}</span>
                    </div>
                    <h3 className="heading-h6" style={{ margin: '0.75rem 0 1.25rem' }}>
                      {r.title}
                    </h3>
                    <div className="tm-blog-card-author">
                      {rAuthor && <img src={rAuthor.portrait} alt={rAuthor.name} loading="lazy" />}
                      <div>
                        <strong>{rAuthor?.name}</strong>
                        <span>{r.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCloudCTA />
    </>
  );
}
