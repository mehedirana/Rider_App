import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderText from '../components/header/HeaderText';
import {COLORS, FONTS} from '../styles/theme';

const PartlyOrderDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal:10}}>
        <HeaderText
          headerText="Order Details"
          headerRight="Rejected"
          navigation={navigation}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 22,
        }}>
        <Text style={[{color: COLORS.black}, FONTS.bodyMedium]}>
          Order # GM2D36-51
        </Text>
        <Text style={[{color: COLORS.gray}, FONTS.small]}>5 mins ago</Text>
      </View>

      <View style={{borderBottomWidth:1, borderColor: COLORS.gray, marginTop:18, marginHorizontal:20}}/>
      <Text style={{marginTop:12, marginLeft:20}}>Items ordered</Text>
    </View>
  );
};

export default PartlyOrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.whitePure,
    flex: 1,
  },
});
