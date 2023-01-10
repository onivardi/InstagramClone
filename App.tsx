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
import { Text, View } from 'react-native';
import { colors } from './src/themes/colors';
import { size } from './src/themes/fonts';

import  AntDesign  from "react-native-vector-icons/AntDesign";


const App = () => {
  
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text style={{color: colors.primary, fontSize: size.xlg}}>Vardii <AntDesign name='stepforward' size={25}/></Text>
      
    </View>
  )
};



export default App;
