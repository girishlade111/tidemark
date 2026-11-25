import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ResultsPage } from '@/pages/ResultsPage';
import { CaseStudyDetailPage } from '@/pages/CaseStudyDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { TeamDetailPage } from '@/pages/TeamDetailPage';
import { PricingPage } from '@/pages/PricingPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogDetailPage } from '@/pages/BlogDetailPage';
import { CareersPage } from '@/pages/CareersPage';
import { JobDetailPage } from '@/pages/JobDetailPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { StyleGuidePage } from '@/pages/StyleGuidePage';
import { LicensesPage } from '@/pages/LicensesPage';
import { ChangelogPage } from '@/pages/ChangelogPage';
import { InstructionsPage } from '@/pages/InstructionsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team/:slug" element={<TeamDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:slug" element={<JobDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/style-guide" element={<StyleGuidePage />} />
          <Route path="/licenses" element={<LicensesPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/instructions" element={<InstructionsPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}

export default App;
