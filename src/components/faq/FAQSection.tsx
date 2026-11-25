import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { sharedFaqs } from '@/data/faqs';
import './FAQSection.css';

export function FAQSection() {
  const [openId, setOpenId] = useState<string>(sharedFaqs[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="surface-white padding-section padding-global">
      <div className="container-large">
        <div className="tm-faq-grid">
          {/* Left Sticky Column */}
          <div className="tm-faq-left">
            <div className="section-badge">
              <span className="section-badge-dot" aria-hidden="true" />
              <span>FAQ</span>
            </div>
            <h2 className="heading-h2 tm-faq-title">
              Questions?
              <br />
              We’ve got answers.
            </h2>
            <p className="tm-faq-sub">
              Everything brands usually ask before working with us.
            </p>

            <div className="tm-faq-contact-card">
              <img
                src="/assets/images/sky/sky-card.webp"
                alt=""
                className="tm-faq-card-bg"
                loading="lazy"
              />
              <div className="tm-faq-card-inner">
                <div className="tm-faq-avatars" aria-hidden="true">
                  <img src="/assets/images/testimonials/avatar-1.webp" alt="" />
                  <img src="/assets/images/testimonials/avatar-2.webp" alt="" />
                  <img src="/assets/images/testimonials/avatar-3.webp" alt="" />
                </div>
                <h3 className="heading-h6">Still have questions?</h3>
                <p>Talk to a growth lead. Replies within a day.</p>
                <Link to="/contact" className="tm-btn tm-btn-primary tm-btn-sm">
                  Book a 20-min call
                </Link>
              </div>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="tm-faq-list">
            {sharedFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className={`tm-faq-item${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="tm-faq-trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.question}</span>
                    <span className={`tm-faq-icon${isOpen ? ' is-open' : ''}`} aria-hidden="true">
                      {isOpen ? <Minus size={15} strokeWidth={2.2} /> : <Plus size={15} strokeWidth={2} />}
                    </span>
                  </button>
                  <div className="tm-accordion-body" data-open={isOpen}>
                    <div className="tm-accordion-inner">
                      <p className="tm-faq-answer">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
