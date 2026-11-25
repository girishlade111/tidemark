import { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { articles, ArticleCategory } from '@/data/articles';
import { teamMembers } from '@/data/team';
import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { submitDevelopmentForm } from '@/components/common/DevSubmissionAdapter';
import './Pages.css';

const BLOG_CATEGORIES: ('All' | ArticleCategory)[] = [
  'All',
  'Paid search',
  'Paid social',
  'SEO and content',
  'Lifecycle',
  'Reporting',
];

const newsletterSchema = z.string().trim().email('Check your email address and try again.');

export function BlogPage() {
  const [filter, setFilter] = useState<'All' | ArticleCategory>('All');
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [subMsg, setSubMsg] = useState('');

  const featured = articles.find((a) => a.featured) || articles[0];
  const featuredAuthor = teamMembers.find((m) => m.slug === featured.authorSlug);
  const latestPool = articles.filter((a) => !a.featured);
  const visibleLatest =
    filter === 'All' ? latestPool : latestPool.filter((a) => a.category === filter);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = newsletterSchema.safeParse(email);
    if (!parsed.success) {
      setSubStatus('error');
      setSubMsg(parsed.error.issues[0]?.message || 'That did not go through.');
      return;
    }
    setSubStatus('submitting');
    const res = await submitDevelopmentForm('Blog Newsletter', { email: parsed.data });
    if (res.ok) {
      setSubStatus('success');
      setSubMsg(`You are in. (${res.message})`);
      setEmail('');
    }
  };

  return (
    <>
      <SeoHead
        title="Blog - Tidemark"
        description="Playbooks, teardowns and benchmarks from real ad spend. One email a month, no fluff."
      />

      <SkyHero
        badge="The Monthly Tide"
        title={
          <>
            Notes from the
            <br />
            accounts we run.
          </>
        }
        subtitle="Playbooks, teardowns and benchmarks from real ad spend. One email a month, no fluff."
      />

      <section className="surface-page padding-section padding-global">
        <div className="container-large">
          {/* Featured Article */}
          <Link to={`/blog/${featured.slug}`} className="tm-card tm-card-interactive tm-blog-featured">
            <div className="tm-blog-featured-img-wrap">
              <img src={featured.coverImage} alt={featured.title} className="tm-img-zoom" />
            </div>

            <div className="tm-blog-featured-copy">
              <div className="tm-chip-list">
                <span className="tm-pill-solid-blue">Featured</span>
                <span className="tm-tag-chip is-blue">{featured.category}</span>
              </div>

              <h2 className="heading-h4" style={{ margin: '1rem 0 0.75rem' }}>
                {featured.title}
              </h2>
              <p className="tm-service-row-desc">{featured.summary}</p>

              <div className="tm-blog-author-row">
                {featuredAuthor && (
                  <img
                    src={featuredAuthor.portrait}
                    alt={featuredAuthor.name}
                    className="tm-blog-author-avatar"
                  />
                )}
                <div>
                  <strong>{featuredAuthor?.name}</strong>
                  <span>
                    {featuredAuthor?.role} · {featured.readTime}
                  </span>
                </div>
              </div>

              <span className="tm-btn tm-btn-primary tm-btn-sm" style={{ alignSelf: 'flex-start' }}>
                Read the article
              </span>
            </div>
          </Link>

          {/* Latest Articles + Filters */}
          <div className="tm-split-head" style={{ marginTop: '4.5rem' }}>
            <h2 className="heading-h3" style={{ margin: 0 }}>
              Latest articles
            </h2>

            <div className="tm-filter-bar" role="tablist" aria-label="Filter articles by topic">
              {BLOG_CATEGORIES.map((cat) => {
                const active = filter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(cat)}
                    className={`tm-filter-pill${active ? ' is-active' : ''}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="tm-three-col-grid">
            {visibleLatest.map((post) => {
              const author = teamMembers.find((m) => m.slug === post.authorSlug);
              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="tm-card tm-card-interactive tm-blog-card"
                >
                  <div className="tm-blog-card-img-wrap">
                    <img src={post.coverImage} alt={post.title} className="tm-img-zoom" loading="lazy" />
                  </div>
                  <div className="tm-blog-card-body">
                    <div className="tm-blog-card-meta">
                      <span className="tm-tag-chip is-blue">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="heading-h6" style={{ margin: '0.75rem 0 1.25rem' }}>
                      {post.title}
                    </h3>
                    <div className="tm-blog-card-author">
                      {author && <img src={author.portrait} alt={author.name} loading="lazy" />}
                      <div>
                        <strong>{author?.name}</strong>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Dark Navy Newsletter Panel */}
          <div className="tm-blog-newsletter-panel">
            <div className="tm-blog-nl-left">
              <h2 className="heading-h3" style={{ margin: '0 0 0.75rem', color: '#ffffff' }}>
                Get the Monthly Tide.
              </h2>
              <p>
                One email a month with what moved, what we changed and the numbers behind it. Read by 6,200 marketers.
              </p>
            </div>

            <div className="tm-blog-nl-right">
              <form className="tm-blog-nl-form" onSubmit={handleSubscribe} noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Work email for The Monthly Tide"
                />
                <button
                  type="submit"
                  className="tm-btn tm-btn-primary tm-btn-sm"
                  disabled={subStatus === 'submitting'}
                >
                  {subStatus === 'submitting' ? 'Saving...' : 'Subscribe'}
                </button>
              </form>
              <div className="tm-blog-nl-hint">No spam. Unsubscribe in one click.</div>
              {subStatus === 'success' && (
                <p className="tm-footer-form-msg is-success" role="status">
                  {subMsg}
                </p>
              )}
              {subStatus === 'error' && (
                <p className="tm-footer-form-msg is-error" role="alert">
                  {subMsg}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
