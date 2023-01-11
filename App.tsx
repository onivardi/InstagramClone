/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import FeedPost from './src/components/FeedPost';

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }

})

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost />
      <FeedPost />
    </ScrollView>
  )
};

export default App;
