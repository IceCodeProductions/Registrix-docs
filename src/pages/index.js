import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { DocSearch } from '@docsearch/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import QuickStartHeader from '@site/src/components/QuickStartHeader';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import '@docsearch/css';

function Search() {
  return (
    <DocSearch
      appId="YOUR_APP_ID"
      indexName="YOUR_INDEX_NAME"
      apiKey="YOUR_SEARCH_API_KEY"
    />
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            All Tutorials
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation, quick start guides for live streaming platform of Registrix">
      <HomepageHeader />
      <main>
        <QuickStartHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
