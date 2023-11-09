import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Lead Generation Setup',
    Svg: require('@site/static/img/homepage/lead-capture-200.svg').default,
    tut_url: '/docs/tutorial-lead/quick-start-guide',
  },
  {
    title: 'Participants Setup',
    Svg: require('@site/static/img/homepage/participant-200.svg').default,
    tut_url:'/docs/tutorial-participants/quick-start-guide'
  },
  {
    title: 'Email Domain Setup',
    Svg: require('@site/static/img/homepage/domain-200.svg').default,
    tut_url: '/docs/tutorial-domain/quick-start-guide',
  },
  {
    title: 'Single Sign On',
    Svg: require('@site/static/img/homepage/sso-200.svg').default,
    tut_url: '/docs/tutorial-sso/quick-start-guide',
  },
  {
    title: 'DSM (Down Stage Monitor)',
    Svg: require('@site/static/img/homepage/dsm-service.svg').default,
    tut_url: '/docs/tutorial-dsm/quick-start-guide',
    
  },
  {
    title: 'Video Page',
    Svg: require('@site/static/img/homepage/video-page-200.svg').default,
    tut_url: '/docs/tutorial-templates/watch/overview',
  },
];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Link to={tut_url} ><Svg className={styles.featureSvg} role="img" /></Link>
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

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
