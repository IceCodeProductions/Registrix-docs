import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


function QuickStartHeader(){
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <h2>Quick Start Guides</h2>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.start}>  
      <div className="container">
        <div className="row">
          <QuickStartHeader></QuickStartHeader>
        </div>
      </div>
    </section>
  );
}
