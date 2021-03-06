import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Lead Generation Setup',
    Svg: require('@site/static/img/homepage/lead-capture-200.svg').default,
    tut_url: '/tutorial-lead/quick-start-guide',
  },
  {
    title: 'Participants Setup',
    Svg: require('@site/static/img/homepage/participant-200.svg').default,
    tut_url:'/tutorial-participants/quick-start-guide'
  },
  {
    title: 'Email Domain Setup',
    Svg: require('@site/static/img/homepage/domain-200.svg').default,
    tut_url: '/tutorial-domain/quick-start-guide',
  },
  {
    title: 'NFT Login',
    Svg: require('@site/static/img/homepage/nft-200.svg').default,
    tut_url: '/tutorial-nft/quick-start-guide',
    
  },
  {
    title: 'Single Sign On',
    Svg: require('@site/static/img/homepage/sso-200.svg').default,
    tut_url: '/tutorial-sso/quick-start-guide',
  },
  {
    title: 'Video Page',
    Svg: require('@site/static/img/homepage/video-page-200.svg').default,
    tut_url: '/tutorial-templates/watch/overview',
  },
];


function Feature({Svg, title, tut_url}) {
  return (
    <div className={clsx('col col--4 mb-2')}>
      <div className="text--center">
        <Link to={tut_url} ><Svg className={styles.featureSvg} role="img" /></Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>  
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
