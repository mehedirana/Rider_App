import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
  ActivityIndicator,
  Dimensions,
  Alert,
} from 'react-native';
import {COLORS, FONTS} from '../styles/theme';
import HeaderText from '../components/header/HeaderText';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Clock from '../assets/images/svg/Clock';
import MapLocator from '../assets/images/svg/MapLocator';
import Phone from '../assets/Phone';
import DirectionArrow from '../assets/images/DirectionArrow';
import HorizontalLine from '../assets/images/svg/HorizontalLine';
import VerticalLine from '../assets/images/svg/VerticalLine';
import RNLocation from 'react-native-location';
import CircularProgress from 'react-native-circular-progress-indicator';
import {driverUpdateStatus} from '../services/sales-order/salesOrder';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import { formatedTime } from '../utils/timeFormate';

const {height, width} = Dimensions.get('window');

const OrderDetailsScreen = ({navigation, route}) => {
  const refMap = useRef(null);

  const {data} = route.params;

  const {user} = useSelector(e => e.userState);

  const dispatch = useDispatch();

  const [latLong, setLatLong] = useState({
    latitude: data?.delivery_address_lat
      ? Number(data?.delivery_address_lat)
      : 23.781634584964543,
    longitude: data?.delivery_address_lng
      ? Number(data?.delivery_address_lng)
      : 90.3752835692889,
    latitudeDelta: 0.006,
    longitudeDelta: 0.006,
  });

  const [crntlatLong, setCrntlatLong] = useState(null);

  console.log(crntlatLong, latLong);

  useEffect(() => {
    // handlePermission();

    // handleCurrentLocation();
    // return () => {
    //   setCrntlatLong(null)
    // }

    RNLocation.configure({
      distanceFilter: 100, // Meters
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
      // Android only
      // androidProvider: 'auto',
      androidProvider: 'standard',
      interval: 5000, // Milliseconds
      fastestInterval: 10000, // Milliseconds
      maxWaitTime: 5000, // Milliseconds
    });

    RNLocation.requestPermission({
      // ios: 'whenInUse',
      ios: 'always',
      android: {
        detail: 'fine',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    }).then(granted => {
      if (granted) {
        handleCurrentLocation();
      } else {
        ToastAndroid.showWithGravity(
          'Loction permission is not provided!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    });

    setCrntlatLong(
      crntlatLong == null
        ? {
            latitude: 23.783783291592798,
            latitudeDelta: 0.007412653159978078,
            longitude: 90.41755339130759,
            longitudeDelta: 0.004000179469585419,
          }
        : crntlatLong,
    );
  }, []);

  const handleDirection = () => {
    // handleCurrentLocation()
    // navigation.navigate('DirectionScreen', {
    //   latitude: crntlatLong[0].latitude,
    //   longitude: crntlatLong[0].longitude,
    // });
    // navigation.navigate('Playground', {
    //   latitude: crntlatLong[0].latitude,
    //   longitude: crntlatLong[0].longitude,
    // });

    const desLat = 23.8075846;
    const desLong = 90.4279273;
    const url =
      `https://www.google.com/maps/dir/?api=1&origin=` +
      crntlatLong?.latitude +
      `,` +
      crntlatLong?.longitude +
      `&destination=` +
      desLat +
      `,` +
      desLong +
      `&travelmode=driving`;
    if ((crntlatLong?.latitude, crntlatLong?.longitude)) Linking.openURL(url);
  };

  const dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') phoneNumber = `tel:${'01677577123'}`;
    else {
      phoneNumber = `telprompt:${'01677577123'}`;
    }
    Linking.openURL(phoneNumber);
  };

  const handleCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setCrntlatLong(position?.coords);
        console.log(position?.coords);
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        // enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        // forceRequestLocation: true,
        // forceLocationManager: true
      },
    );
    // location = RNLocation.subscribeToLocationUpdates(location => {
    //   setCrntlatLong(location);
    // });
    // setCurrentLocation(location)
    // return location
  };

  const handlePermission = () => {
    RNLocation.configure({
      distanceFilter: 100, // Meters
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
      // Android only
      // androidProvider: 'auto',
      androidProvider: 'standard',
      interval: 5000, // Milliseconds
      fastestInterval: 10000, // Milliseconds
      maxWaitTime: 5000, // Milliseconds
    });

    RNLocation.requestPermission({
      // ios: 'whenInUse',
      ios: 'always',
      android: {
        detail: 'fine',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    }).then(granted => {
      if (granted) {
        handleCurrentLocation();
      } else {
        ToastAndroid.showWithGravity(
          'Loction permission is not provided!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    });
  };

  const updateLocalUser = data => {
    dispatch(userLogIn(data));
  };

  const handleCancelOrder = () => {
    const req = {};
    req.id = data?.id;
    req.order_status_id = 'CANCELLED';

    driverUpdateStatus(req, user, user?.access_token, updateLocalUser)
      .then(res => {
        if (res?.success) {
          alert('Cancel Order Successfully!');
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
  };

  const handleDeliveredOrder = () => {
    const req = {};
    req.id = data?.id;
    req.order_status_id = 'DELIVERED';

    driverUpdateStatus(req, user, user?.access_token, updateLocalUser)
      .then(res => {
        if (res?.success) {
          alert('Order Delivered Successfully!');
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
  };

  return (
    <View style={styles.container}>
      <View style={[styles.topModal]}>
        <HeaderText
          headerText="Order Details"
          headerRight="Cancel Delivery"
          navigation={navigation}
          onPress={handleCancelOrder}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[{color: COLORS.black}, FONTS.bodyMedium]}>
            Order # {data?.id}
          </Text>
          <Text style={[{color: COLORS.gray}, FONTS.small]}>
            {formatedTime(data?.created_at)}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#d1ffe180',
            width: '100%',
            // height: 32,
            marginTop: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 11,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Clock />
          <Text
            style={[
              {
                color: COLORS.black10,
                marginRight: 30,
              },
              FONTS.small,
            ]}>
            Estimated Delivery Time:
          </Text>
          <Text style={[{color: COLORS.black}, FONTS.bodyMedium]}>
            {`Today`}
          </Text>
          <Text style={[{color: COLORS.black}, FONTS.bodyMedium]}>{`|`}</Text>
          <Text style={[{color: COLORS.black}, FONTS.bodyBold]}>
            {/* {`06:30PM`} */}
            {formatedTime(data?.estimated_delivery_at)}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            // onPress={dialCall}
            style={{
              // width: '100%',
              // height: 100,
              marginTop: 8,
              // backgroundColor: '#FAFAFA',
              paddingHorizontal: 9,
              paddingHorizontal: 8,
              borderRadius: 6,
              justifyContent: 'space-evenly',
              flex: 1,
            }}>
            <Text
              style={[{color: COLORS.black, marginTop: 10}, FONTS.bodyMedium]}>
              {data?.delivery_name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* <MapLocator /> */}
              <Text style={[{color: COLORS.gray, marginTop: 10}, FONTS.small]}>
                {/* Harvest Group, DITF Bangladesh 14 Pavilion Golen, Dhaka-1212 */}
                {data?.delivery_apartment +
                  data?.delivery_floor +
                  data?.delivery_address1 +
                  data?.delivery_address2 +
                  data?.delivery_postal_code}
              </Text>
            </View>
            <TouchableOpacity
              onPress={dialCall}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.primary,
                marginTop: 12,
                borderRadius: 9,
                paddingHorizontal: 10,
                width: width * 0.35,
                paddingVertical: 8,
              }}>
              <Phone color={COLORS.whitePure} />
              <Text
                style={[
                  {
                    color: COLORS.whitePure,
                    marginLeft: 3,
                  },
                  FONTS.smallBold,
                ]}>
                {data?.delivery_phone_number}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <CircularProgress
              value={60}
              radius={width * 0.18}
              progressValueColor={'#4F4F4F'}
              activeStrokeColor={'#00EE4A'}
              inActiveStrokeColor={'#7AFBA8'}
              inActiveStrokeOpacity={0.1}
              inActiveStrokeWidth={30}
              activeStrokeWidth={10}
              titleStyle={{
                fontSize: 10,
                top: Platform.OS == 'ios' ? -5 : -15,
                color: '#4F4F4F',
              }}
              title={'TIME LEFT'}
              progressValueStyle={{fontSize: 18}}
              progressFormatter={value => {
                'worklet';

                return value.toFixed(2); // 2 decimal places
              }}
            />
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: COLORS.gray,
            marginTop: 17,
          }}
        />

        {data?.delivery_instruction && (
          <>
            <Text style={{marginTop: 10, ...FONTS.small, color: COLORS.gray}}>
              Special Instruction
            </Text>
            <Text style={{marginTop: 3, ...FONTS.body, color: COLORS.black50}}>
              {/* Ask the security guard for Mr. Naim */}
              {data?.delivery_instruction}
            </Text>
          </>
        )}
      </View>

      <MapView
        style={styles.mapStyle}
        ref={refMap}
        provider="google"
        initialRegion={latLong}
        // initialRegion={{
        //   latitude: 23.781634584964543,
        //   longitude: 90.3752835692889,
        //   latitudeDelta: 0.006,
        //   longitudeDelta: 0.006,
        // }}
        loadingEnabled={false}
        showsMyLocationButton={true}
        showsUserLocation={true}>
        <Marker
          coordinate={latLong}
          image={require('../assets/images/LocationMarker.png')}
        />
      </MapView>

      <View style={[styles.bottomModal]}>
        <TouchableOpacity
          onPress={() => handleDirection()}
          style={{
            width: '100%',
            height: 45,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {crntlatLong ? (
            <>
              <Text
                style={[
                  {color: COLORS.gray, paddingLeft: 6, marginRight: 15},
                  FONTS.small,
                ]}>
                full screen map with direction
              </Text>
              <DirectionArrow />
            </>
          ) : (
            <ActivityIndicator size="small" color="#00ff00" />
          )}
        </TouchableOpacity>
        <HorizontalLine />
        <View
          style={{
            width: '100%',
            // padding: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: COLORS.lightGray10,
            paddingHorizontal: 10,
          }}>
          <View style={styles.cards}>
            <Text style={[{color: COLORS.gray}, FONTS.small]}>Sub-Total</Text>
            <Text style={[{color: COLORS.black}, FONTS.header3]}>
              ৳ {data?.sub_total}
            </Text>
          </View>
          <VerticalLine />
          <View style={styles.cards}>
            <Text style={[{color: COLORS.gray}, FONTS.small]}>Shipping</Text>
            <Text style={[{color: COLORS.black}, FONTS.header3]}>
              ৳ {data?.shipping_total}
            </Text>
          </View>
          <VerticalLine />
          <View style={styles.cards}>
            <Text
              style={[{color: COLORS.gray, textAlign: 'right'}, FONTS.small]}>
              Receivable
            </Text>
            <Text
              style={[
                {color: COLORS.primary, textAlign: 'right'},
                FONTS.header3,
              ]}>
              ৳ {Number(data?.sub_total) + Number(data?.shipping_total)}
            </Text>
          </View>
        </View>
        <HorizontalLine />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',

            alignItems: 'center',
            padding: 10,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
            }}>
            <Text style={[{color: COLORS.black}, FONTS.bodyMedium]}>
              Payment Information
            </Text>
            <Text
              style={[
                {color: COLORS.primary, marginRight: 5, marginTop: 2},
                FONTS.small,
              ]}>
              Collect Cash from customer
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: 130,
              borderRadius: 9,
              borderWidth: 1,
              borderColor: COLORS.lightGray50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[{color: COLORS.black}, FONTS.small]}>
              Cash On Delivery
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            // height: 50,
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PartyOrderScreen', {data: data})
            }
            style={{
              // height: 58,
              width: '55%',
              borderRadius: 9,
              borderWidth: 2,
              borderColor: COLORS.lightGray,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF8B9',
            }}>
            <Text style={[{color: '#795700'}, FONTS.buttonLarge]}>
              Partly Delivered
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDeliveredOrder()}
            style={{
              height: 58,
              width: '35%',
              borderRadius: 9,
              borderWidth: 2,
              borderColor: COLORS.lightGray,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[{color: COLORS.black10}, FONTS.buttonLarge]}>
              Delivered
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray50,
  },
  mapStyle: {
    flex: 1,
  },
  cards: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  topModal: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.whitePure,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
  },
  bottomModal: {
    alignItems: 'center',
    backgroundColor: COLORS.whitePure,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
});
