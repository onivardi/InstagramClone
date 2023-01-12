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
import { StyleSheet, ScrollView, FlatList, View } from 'react-native';
import FeedPost from './src/components/FeedPost';
import posts from './src/assets/data/posts.json';

const App = () => {
  return (
    <View style={styles.app}>
      <FlatList 
        data={posts} 
        renderItem={({item}) => <FeedPost post={item}/>}
        showsVerticalScrollIndicator={false}
        />

    </View>
  )
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }

});

export default App;
