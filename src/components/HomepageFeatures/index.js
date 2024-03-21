import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Lead Generation Mode Setup',
    Svg: require('@site/static/img/homepage/lead-capture-200.svg').default,
    tut_url: '/docs/tutorial-lead-capture-mode/quick-start-guide',
  },
  {
    title: 'Authorized Mode Setup',
    Svg: require('@site/static/img/homepage/participant-200.svg').default,
    tut_url:'/docs/tutorial-authorized-mode/quick-start-guide'
  },
  {
    title: 'DSM (Down Stage Monitor)',
    Svg: require('@site/static/img/homepage/dsm-service.svg').default,
    tut_url: '/docs/tutorial-dsm/quick-start-guide',
    
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
