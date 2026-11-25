import { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface SiteLayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export function SiteLayout({ children, hideHeader, hideFooter }: SiteLayoutProps) {
  return (
    <div className="page-wrapper">
      {hideHeader && <Header />}
      <main className="main-wrapper">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
