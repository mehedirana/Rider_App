import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  Dimensions,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OpenOrderHeader from '../components/header/OpenOrderHeader';
import OrderLists from '../components/order/OrderLists';
import {ordersData} from '../dummy-data/rawData';
import {getDriverOrder} from '../services/sales-order/salesOrder';
import {COLORS} from '../styles/theme';
import {userLogIn} from '../store/auth/userAction';
import {OrderFilterList} from '../components/home/OrderFilterList';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const {height, width} = Dimensions.get('window');

const OpenOrderScreen = ({navigation}) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderFilter, setOrderFilter] = useState({
    id: 1,
    name: 'Open',
    filter: 'open',
  });
  const [refreshing, setRefreshing] = useState(false);

  const {user} = useSelector(e => e.userState);

  const dispatch = useDispatch();

  const updateLocalUser = data => {
    dispatch(userLogIn(data));
  };

  const childToParent = e => {
    setOrderFilter(e);
  };

  useEffect(() => {
    // setLoading(true);
    getOrder();
  }, [orderFilter]);

  const getOrder = () => {
    getDriverOrder(user, user?.access_token, updateLocalUser, orderFilter)
      .then(res => {
        if (res.success) {
          setdata(res?.data?.orders);
          setLoading(false);
          setRefreshing(false)
        } else {
          setLoading(false);
          setRefreshing(false)
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
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    getOrder()
    // if (listData.length < 10) {
    //   try {
    //     let response = await fetch(
    //       'http://www.mocky.io/v2/5e3315753200008abe94d3d8?mocky-delay=2000ms',
    //     );
    //     let responseJson = await response.json();
    //     console.log(responseJson);
    //     setListData(responseJson.result.concat(initialData));
    //     setRefreshing(false);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // } else {
    //   setRefreshing(false);
    // }
  }, [refreshing]);

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
                  <OrderLists
                    navigation={navigation}
                    data={data}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
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
