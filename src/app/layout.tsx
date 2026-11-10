import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/app/globals.css';

export const metadata = {
  title: 'PAH GMC Baramati',
  description: 'Official Portal of Punyashlok Ahilyadevi Holkar Government Medical College & Hospital, Baramati',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />   {/* <--- Ensure Header is only rendered ONCE here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}