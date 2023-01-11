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

const post = {
  id: '1',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus porro est dolores asperiores ad similique tenetur, quibusdam tempore. Praesentium accusantium porro labore asperiores vel sed quo dolore at veritatis illo!',
  user: {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    username: 'vadimnotjustdev',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      user: {
        username: 'anotheruser',
      },
    },
  ],
}

const post2 = {
  id: '1',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus porro est dolores asperiores ad similique tenetur, quibusdam tempore. Praesentium accusantium porro labore asperiores vel sed quo dolore at veritatis illo!',
  user: {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    username: 'vadimnotjustdev',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {
        username: 'setadoido',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      user: {
        username: 'compensoue',
      },
    },
  ],
}

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost  post={post}/>
      <FeedPost  post={post2}/>
    </ScrollView>
  )
};

export default App;
