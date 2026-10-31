import type { Metadata } from 'next';
import './globals.css';
import { SkipToContent } from '@/components/accessibility/SkipToContent';
import { GovernmentBar } from '@/components/layout/GovernmentBar';
import { AccessibilityToolbar } from '@/components/accessibility/AccessibilityToolbar';
import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { MobileNavigation } from '@/components/layout/MobileNavigation';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/accessibility/BackToTop';

export const metadata: Metadata = {
  title: 'Government Medical College & General Hospital, Baramati',
  description: 'Official institutional website of Government Medical College and General Hospital, Baramati, Maharashtra.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SkipToContent />
        <GovernmentBar />
        <AccessibilityToolbar />
        <Header />
        <Navigation />
        <MobileNavigation />
        
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}