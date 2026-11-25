import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';
import './CaseStudyCard.css';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link to={`/case-studies/${study.slug}`} className="tm-card tm-card-interactive tm-cs-card">
      <div className="tm-cs-sky-box">
        <img
          src={study.cardImage}
          alt=""
          className="tm-cs-sky-bg tm-img-zoom"
          loading="lazy"
        />
        <span className="tm-cs-service-pill">{study.serviceLabel}</span>

        <div className="tm-cs-metric-panel">
          <div className="tm-cs-metric-num">{study.primaryStat}</div>
          <div className="tm-cs-metric-phrase">{study.primaryStatPhrase}</div>
        </div>
      </div>

      <div className="tm-cs-body">
        <p className="tm-cs-short">{study.shortDesc}</p>

        <div className="tm-cs-client-row">
          <span className="tm-cs-initial">{study.initial}</span>
          <div>
            <strong>{study.client}</strong>
            <span>{study.industry}</span>
          </div>
        </div>

        <div className="tm-cs-link-row">
          <span>Read the case study</span>
          <ArrowRight size={14} strokeWidth={2} />
        </div>
      </div>
    </Link>
  );
}
