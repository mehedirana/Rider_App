import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OpenOrderHeader from '../components/header/OpenOrderHeader';
import OrderLists from '../components/order/OrderLists';
import {ordersData} from '../dummy-data/rawData';
import {getDriverOrder} from '../services/sales-order/salesOrder';
import {COLORS} from '../styles/theme';
import {userLogIn} from '../store/auth/userAction';
import {OrderFilterList} from '../components/home/OrderFilterList';

const {height, width} = Dimensions.get('window');

const OpenOrderScreen = ({navigation}) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderFilter, setOrderFilter] = useState({id: 1, name: 'Open', filter: 'open'})

  const {user} = useSelector(e => e.userState);

  const dispatch = useDispatch();

  const updateLocalUser = data => {
    dispatch(userLogIn(data));
  };

  const childToParent = e => {
    setOrderFilter(e)
  };

  useEffect(() => {
    // setLoading(true);
    getDriverOrder(user, user?.access_token, updateLocalUser, orderFilter)
      .then(res => {
        if (res.success) {
          setdata(res?.data?.orders);
          setLoading(false);
        } else {
          setLoading(false);
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
  }, [orderFilter]);

  return (
    <SafeAreaView style={styles.conatainer}>
      <OpenOrderHeader navigation={navigation} />
      {
        <>
          {loading ? (
            <ActivityIndicator
              style={{marginTop: height * 0.35}}
              size={80}
              color={COLORS.primary}
            />
          ) : (
            <>
              <View style={{marginTop: 20}}>
                <OrderFilterList childToParent={childToParent} />
              </View>

              <View style={styles.orderList}>
                {data?.length > 0 && (
                  <OrderLists navigation={navigation} data={data} />
                )}
              </View>
            </>
          )}
        </>
      }
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
