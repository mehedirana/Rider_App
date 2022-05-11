import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LeftArrow from '../../assets/images/svg/LeftArrow';
import { NotificationIcon } from '../../assets/images/svg/NotificationIcon';
import { COLORS, FONTS } from '../../styles/theme';

const OpenOrderHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <LeftArrow color={COLORS.blackSolid} />
        </TouchableOpacity>
        
        <Text style={[{ color: COLORS.blackSolid, marginLeft: 24 }, FONTS.header4]}>Open Orders</Text>
      </View>
      <NotificationIcon />
    </View>
  );
};

export default OpenOrderHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginTop: 46,
    marginHorizontal: 22,
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray50
  },
});
