import React from 'react';
import {View, Text, StyleSheet,SafeAreaView} from 'react-native';
import OpenOrderHeader from '../components/header/OpenOrderHeader';
import OrderLists from '../components/order/OrderLists';
import { ordersData } from '../dummy-data/rawData';
import { COLORS } from '../styles/theme';

const OpenOrderScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.conatainer}>
      <OpenOrderHeader />
      
      <View style={styles.orderList}>
        <OrderLists navigation={navigation} data={ordersData} />
      </View>
    </SafeAreaView>
  );
};

export default OpenOrderScreen;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: COLORS.lightGray50,
  },
  orderList: {flex: 1, marginTop: 20},
});
