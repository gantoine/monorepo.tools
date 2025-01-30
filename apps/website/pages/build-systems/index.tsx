import { Footer } from '@monorepo-tools/website/ui-commons';
import { WhatIsAMonorepoBuildSystem,
  MonorepoFeatures,
  MonorepoFeaturesOverview,
  ToolsSupportCallout,
 } from '@monorepo-tools/website/ui-build-systems';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export function BuildSystems() {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Monorepo Build Systems"
        description="Exploring build systems for monorepos"
        openGraph={{
          url: `https://monorepo.tools${router.asPath}`,
          title: 'Monorepo Build Systems',
          description: "Exploring build systems for monorepos",
          images: [
            {
              url: 'https://monorepo.tools/images/og-monorepotools.jpg',
              width: 1200,
              height: 630,
              alt: 'Exploring build systems for monorepos',
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
        <WhatIsAMonorepoBuildSystem />

        <MonorepoFeaturesOverview />

        <ToolsSupportCallout />

        <MonorepoFeatures />
      </main>

      <Footer />
    </>
  );
}

export default BuildSystems;
