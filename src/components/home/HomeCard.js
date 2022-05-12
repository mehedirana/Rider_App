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
          paddingBottom: 20,
          borderRadius: 9,
          width: '45%',
          zIndex: 9999,
          
        },
      ]}>
      <Text style={{color: COLORS.blackSolid, ...FONTS.header1, 
        marginTop: 20
        // marginVertical:20
        }}>
        {title}
      </Text>
      <Text style={{marginTop: 6, color: subTitleColor}}>{subTitle}</Text>
    </View>
  );
};

export default HomeCard;
