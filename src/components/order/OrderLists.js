import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  Alert,
  RefreshControl
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {driverAcceptOrRejectOrder} from '../../services/sales-order/salesOrder';
import {COLORS, FONTS} from '../../styles/theme';
import MonthLists from '../../utils/constants/month.json';
import { formatedTime } from '../../utils/timeFormate';

const {height, width} = Dimensions.get('window');

const OrderLists = ({navigation, data,refreshing,onRefresh}) => {
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const {user} = useSelector(e => e.userState);

  const dispatch = useDispatch();

  const updateLocalUser = data => {
    dispatch(userLogIn(data));
  };

  const handleAcceptOrder = item => {
    setSelectedId(item?.id);
    setLoading(true);

    const req = {};
    req.id = item?.id;
    req.driver_accepted = true;

    driverAcceptOrRejectOrder(req, user, user?.access_token, updateLocalUser)
      .then(res => {
        if (res?.success) {
          setLoading(false);
          navigation.navigate('OrderDetails',{data: item});
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
        console.log('error API', e, req);
      });
    // navigation.navigate('OrderDetails');
  };

  const handleCancelOrder = item => {
    const req = {};
    req.id = item?.id;
    req.driver_accepted = false;
    driverAcceptOrRejectOrder(req, user, user?.access_token, updateLocalUser).then(res => {
      console.log(res);
      if (res?.success) {
        Alert.alert('Error', res?.error_message, [
          {
            text: 'Cancel',
            onPress: () => console.log('You successfully decline this order'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
   
  
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
      console.log('error API', e, req);
    });

  };

  const RenderAllOrdersList = ({item, index}) => {
    // console.log(item);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('OrderDetails',{data: item})}
        style={styles.card}>
        <View style={styles.headerContainer}>
          <Text style={[{color: COLORS.gray}, FONTS.xtraSmall]}>
            {formatedTime(item?.delivered_at)}
          </Text>
          <Text style={[FONTS.small, styles.orderStatusTxt]}>
            {item?.order_status_id}
          </Text>
        </View>
        <Text style={[FONTS.bodyMedium, {color: COLORS.black}]}>
          Order # {item?.id}
        </Text>
        <View style={styles.placeHolderContainer} />
        <Text>{item?.delivery_name}</Text>
        <Text style={{color: '#555555', marginTop: 6}}>
          {item?.delivery_apartment +
            item?.delivery_floor +
            item?.delivery_address1 +
            item?.delivery_address2 +
            item?.delivery_postal_code}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: COLORS.black, marginTop: 6}}>
            {item?.delivery_phone_number}
          </Text>
          <Text style={{color: COLORS.gray, marginTop: 6}}>
            {item?.payment_method_id}
          </Text>
        </View>

        <View style={styles.placeHolderContainer} />
        <View style={styles.footerContainer}>
          <TouchableOpacity style={{justifyContent:'center'}} onPress={() => handleCancelOrder(item)}>
            <Text style={[FONTS.bodyParagraphBold, {color: COLORS.red,}]}>
              DECLINE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleAcceptOrder(item)}
            disabled={item.status === 'Cancelled' ? true : false}>
            <Text
              style={[
                FONTS.button,
                {
                  color: COLORS.primary,
                },
                styles.trackOrderTxt,
              ]}>
              {loading && item?.id === selectedId ? (
                <ActivityIndicator color={COLORS.whitePure} />
              ) : null}{' '}
              ACCEPT
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderAllOrdersList}
        key={({item, index}) => item.orderId + index}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: height * 0.055,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.whitePure,
    marginLeft: 22,
    marginRight: 18,
    borderRadius: 11,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderStatusTxt: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 9,
    backgroundColor: '#FFF1CE',
    color: '#B76300',
  },
  dotIconContainer: {
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeHolderContainer: {
    borderBottomColor: COLORS.lightGray50,
    borderBottomWidth: 1,
    marginVertical: 10,
    // marginTop: 10,
  },

  grandTotalCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grandTotalTxt: {color: COLORS.black, marginLeft: 2},
  trackOrderTxt: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 11,
    backgroundColor: '#B7FFD0',
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
});

export default OrderLists;
