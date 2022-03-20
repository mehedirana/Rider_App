import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OpenOrderHeader from '../components/header/OpenOrderHeader';
import OrderLists from '../components/order/OrderLists';
import { ordersData } from '../dummy-data/rawData';

const OpenOrderScreen = ({navigation}) => {
  return (
    <View style={styles.conatainer}>
      <OpenOrderHeader />

      <View style={styles.orderList}>
        <OrderLists navigation={navigation} data={ordersData} />
      </View>
    </View>
  );
};

export default OpenOrderScreen;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: '#E2E2E2',
  },
  orderList: {flex: 1, marginTop: 20},
});
