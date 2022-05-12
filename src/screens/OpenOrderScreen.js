import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OpenOrderHeader from '../components/header/OpenOrderHeader';
import OrderLists from '../components/order/OrderLists';
import {ordersData} from '../dummy-data/rawData';
import {getDriverOrder} from '../services/sales-order/salesOrder';
import {COLORS} from '../styles/theme';
import {userLogIn} from '../store/auth/userAction';
import {OrderFilterList} from '../components/home/OrderFilterList';

const OpenOrderScreen = ({navigation}) => {
  const [data, setdata] = useState([]);

  const {user} = useSelector(e => e.userState);

  const dispatch = useDispatch();

  const updateLocalUser = data => {
    dispatch(userLogIn(data));
  };

  const childToParent =(e)=>{

  }

  useEffect(() => {
    getDriverOrder(user, user?.access_token, updateLocalUser)
      .then(res => {
        if (res.success) {
          setdata(res?.data?.orders);
        } else {
          Alert.alert('Error', res?.error_message, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
      })
      .catch(e => {
        console.log('error API', e);
      });
  }, []);

  return (
    <SafeAreaView style={styles.conatainer}>
      <OpenOrderHeader navigation={navigation} />
      <View style={{ marginTop:20}}>
        <OrderFilterList childToParent={childToParent} />
      </View>

      <View style={styles.orderList}>
        {data?.length > 0 && <OrderLists navigation={navigation} data={data}  />}
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
