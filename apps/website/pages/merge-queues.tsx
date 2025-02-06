import { Footer } from '@monorepo-tools/website/ui-commons';
import {
  Introduction,
  KeyFeatures,
  Challenges,
  KeyFeaturesCallout,
  MergeQueueApps,
} from '@monorepo-tools/website/ui-merge-queues';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Monorepo Explained | Merge Queues"
        description="Everything you need to know about merge queue tools for monorepos."
        openGraph={{
          url: `https://monorepo.tools${router.asPath}`,
          title: 'Monorepo Explained',
          description:
            'Everything you need to know about merge queue tools for monorepos.',
          images: [
            {
              url: 'https://monorepo.tools/images/og-monorepotools.jpg',
              width: 1200,
              height: 630,
              alt: 'Everything you need to know about merge queue tools for monorepos.',
              type: 'image/jpg',
            },
          ],
          site_name: 'monorepo.tools',
        }}
        twitter={{
          handle: '@NxDevTools',
          site: '@monorepotools',
          cardType: 'summary_large_image',
        }}
      />

      <main>
        <Introduction />
        <Challenges />
        <KeyFeatures />
        <KeyFeaturesCallout />
        <MergeQueueApps />
      </main>

      <Footer />
    </>
  );
}

export default Index;
