import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../styles/theme';
import {CardIcon1} from '../../assets/images/svg/home-card/CardIcon1';
import {CardIcon2} from '../../assets/images/svg/home-card/CardIcon2';
import {CardIcon3} from '../../assets/images/svg/home-card/CardIcon3';
import {CardIcon4} from '../../assets/images/svg/home-card/CardIcon4';

const HomeCard = ({title, subTitle, subTitleColor, style, type}) => {
  return (
    <View
      style={[
        style,
        {
          paddingHorizontal: 20,
          paddingBottom: 16,
          borderRadius: 9,
          width: '45%',
          zIndex: 9999,
        },
      ]}>
      <View style={{ alignItems:'flex-end', marginTop:11}}>
        {type === 1 ? (
          <CardIcon1 />
        ) : type === 2 ? (
          <CardIcon2 />
        ) : type === 3 ? (
          <CardIcon3 />
        ) : (
          <CardIcon4 />
        )}
      </View>
      <Text style={{color: COLORS.blackSolid, ...FONTS.header1, marginTop: 29}}>
        {title}
      </Text>
      <Text style={{marginTop: 6, color: subTitleColor}}>{subTitle}</Text>
    </View>
  );
};

export default HomeCard;
