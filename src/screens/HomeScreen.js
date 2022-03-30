import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {COLORS} from '../styles/theme'
const backgroundImg = require('../assets/images/cityBackground.png');

const {height, width} = Dimensions.get('window');
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop:29, marginHorizontal:23}}>
      <View style={{backgroundColor:COLORS.gray, height:65, width:65, borderRadius:40}}></View>
      </View>
      <ImageBackground
        style={{
          height: height / 2,
          width: width,
          position: 'absolute',
          bottom: 0,
          right:0,
          left:0,
        }}
        source={backgroundImg}></ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whitePure
  },
});
