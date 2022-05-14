import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LeftArrow from '../../assets/images/svg/LeftArrow';
import {NotificationIcon} from '../../assets/images/svg/NotificationIcon';
import {COLORS, FONTS} from '../../styles/theme';

const HeaderText = ({headerText, headerRight, navigation, onPress, transparent,subHeadColor}) => {
  return (
    <View style={[styles.container,{backgroundColor: transparent ? 'transparent' :  COLORS.whitePure,}]}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow color={COLORS.blackSolid} />
        </TouchableOpacity>
        <Text
          style={[{color: COLORS.blackSolid, marginLeft: 10}, FONTS.header4]}>
          {headerText}
        </Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text style={[FONTS.inter, {color: subHeadColor ? subHeadColor : COLORS.red}]}>
          {headerRight ? headerRight : ''}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    justifyContent: 'space-between',
    marginTop: 30,
    // paddingHorizontal: 22,
    padding: 10,
    paddingLeft: 0,
    flexDirection: 'row',
   
    alignItems: 'center',
    zIndex: 999,
  },
});
