import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { COLORS, FONTS } from '../styles/theme';

const CommonBtn = ({
  title,
  onPress,
  backgroundColor,
  color,
  borderRadius,
  fonts,
  middle,
  disabled,
  arrowDisable = true
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : COLORS.lightGray10,
          borderRadius: borderRadius ? borderRadius : 9,
          paddingVertical: 12
        },
      ]}>
        {middle && <View></View>}
      <Text
        style={[
          styles.btnTxt,
          {color: color ? color : '#00D24A'},
          FONTS.buttonLarge,
        ]}>
        {title}
      </Text>
     <View style={{ marginLeft:10}}>
     {arrowDisable &&
        <Svg
          width={12}
          height={22}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="m1 1 10 10L1 21"
            stroke={color ? color : '#00D24A'}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        } 
      </View>   
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter',
    lineHeight: 19,
  },
});

export default CommonBtn;