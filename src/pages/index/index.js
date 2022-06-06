import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.css';
import Tag from '../../components/tag';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Tag />
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          开始
        </View>
      </View>
    </View>
  );
};
