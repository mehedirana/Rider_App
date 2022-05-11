import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OpenOrderHeader from '../components/header/OpenOrderHeader';
import OrderLists from '../components/order/OrderLists';
import {ordersData} from '../dummy-data/rawData';
import {getDriverOrder} from '../services/sales-order/salesOrder';
import {COLORS} from '../styles/theme';
import {userLogIn} from '../store/auth/userAction';

const OpenOrderScreen = ({navigation}) => {
  const [data, setdata] = useState([]);

  const {user} = useSelector(e => e.userState);

  const dispatch = useDispatch();

  const updateLocalUser = data => {
    console.log('--------', data);
    dispatch(userLogIn(data));
  };

  useEffect(() => {
    getDriverOrder(user, user?.access_token, updateLocalUser)
      .then(res => {
        if (res.success) {
          setdata(res?.data?.orders);
          console.log(res?.data?.orders, '---------->   res...........');
        } else {
        }
      })
      .catch(e => {
        console.log('error API', e);
      });
  }, []);

  return (
    <SafeAreaView style={styles.conatainer}>
      <OpenOrderHeader />

      <View style={styles.orderList}>
        {data?.length > 0 && <OrderLists navigation={navigation} data={data} />}
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
