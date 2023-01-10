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
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/themes/colors';
import fonts from './src/themes/fonts';

import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";


const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
    flexGrow: 1
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center'
  }

})


const App = () => {

  return (
    <View style={styles.post}>

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg' }}
          style={styles.userAvatar} />
        <Text style={styles.userName}>vadimnotjustdev</Text>

        <Entypo name='dots-three-horizontal' size={16} />
      </View>

      {/* Content */}
      <Image source={{
        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
      }}
        style={styles.image}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign name='heart' size={24} style={styles.icon} color={colors.black} />
          <Ionicons name='chatbubble-outline' size={24} style={styles.icon} color={colors.black} />
          <Feather name='send' size={24} style={[styles.icon, { flexGrow: 1 }]} color={colors.black} />
          <Feather name='bookmark' size={24} color={colors.black} />
        </View>

        {/* Likes */}
        <Text>Liked by <Text style={styles.bold}>
          lgrinevicius</Text> and <Text style={styles.bold}>66 other</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>vadimnotjustdef </Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Vero voluptatibus voluptates, aliquam deleniti inventore nulla ducimus,
          corporis consectetur ullam molestiae necessitatibus voluptatum porro
          dolor aliquid nam? Illum aliquid sint beatae.
        </Text>

        {/* Comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.text}>
            <Text style={styles.bold}>vadimnotjustdev</Text> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <AntDesign name='hearto' style={styles.icon} color={colors.black} />
        </View>

         {/* Posted date */}
          <Text>10 January, 2023</Text>
      </View>
    </View>
  )
};



export default App;
