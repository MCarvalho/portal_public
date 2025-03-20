import React from 'react';
import OmbudsOfficeMessages from '../../components/OmbudsOfficeMessages';
import ExternalLinksVertical from '../../components/ExternalLinksVertical';
import styles from './styles.module.css';

const OmbudsOfficeMessagesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.postWrapper}>
        <OmbudsOfficeMessages />
      </div>
      <div className={styles.sidebar}>
        <ExternalLinksVertical />
      </div>
    </div>
  );
};
export default OmbudsOfficeMessagesPage;
