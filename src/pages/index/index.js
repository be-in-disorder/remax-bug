import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.css';
import Tag from '../../components/tag';

require('./c')

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Tag />
      </View>
    </View>
  );
};
