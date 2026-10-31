import { Hero } from '@/components/home/Hero';
import { QuickLinks } from '@/components/home/QuickLinks';
import { LatestNotices } from '@/components/home/LatestNotices';
import { PrincipalMessage } from '@/components/home/PrincipalMessage';
import { Statistics } from '@/components/home/Statistics';

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <LatestNotices />
      <PrincipalMessage />
      <Statistics />
    </>
  );
}