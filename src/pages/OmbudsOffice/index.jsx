import React from 'react';
import OmbudsOffice from '../../components/OmbudsOffice';
import ExternalLinksVertical from '../../components/ExternalLinksVertical';
import styles from './styles.module.css';

const OmbudsOfficePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.postWrapper}>
        <OmbudsOffice />
      </div>
      <div className={styles.sidebar}>
        <ExternalLinksVertical />
      </div>
    </div>
  );
};
export default OmbudsOfficePage;
