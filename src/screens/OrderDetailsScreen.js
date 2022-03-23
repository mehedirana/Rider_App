import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS } from '../styles/theme';
import HeaderText from '../components/header/HeaderText';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Clock from '../assets/images/svg/Clock';
import MapLocator from '../assets/images/svg/MapLocator';
import Phone from '../assets/Phone';
import DirectionArrow from '../assets/images/DirectionArrow';
import HorizontalLine from '../assets/images/svg/HorizontalLine';
import VerticalLine from '../assets/images/svg/VerticalLine';
import CustomMarkerSVG from '../assets/images/svg/CustomMarkerSVG';

const OrderDetailsScreen = ({ navigation }) => {
  const [latLong, setLatLong] = useState({
    latitude: 23.781634584964543,
    longitude: 90.3752835692889,
    latitudeDelta: 0.006,
    longitudeDelta: 0.006,
  });

  const dialCall = () => {
    let phoneNumber = ''
    if (Platform.OS === 'android')
      phoneNumber = `tel:${'01677577123'}`
    else {
      phoneNumber = `telprompt:${'01677577123'}`
    }
    Linking.openURL(phoneNumber)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.topModal]}>
        <HeaderText headerText='Order Details' />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[{ color: COLORS.black }, FONTS.bodyMedium]}>
            Order # GM2D36-51
          </Text>
          <Text style={[{ color: COLORS.gray }, FONTS.small]}>
            5 mins ago
          </Text>
        </View>
        <View style={{
          backgroundColor: '#d1ffe180',
          width: '100%',
          height: 32,
          marginTop: 14,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 11,
          paddingHorizontal: 10
        }}>
          <Clock />
          <Text style={[{
            color: COLORS.black10, marginRight: 30
          }, FONTS.small]}>
            Estimated Delivery Time:
          </Text>
          <Text style={[{ color: COLORS.black }, FONTS.bodyMedium]}>
            {`Today`}
          </Text>
          <Text style={[{ color: COLORS.black }, FONTS.bodyMedium]}>
            {`|`}
          </Text>
          <Text style={[{ color: COLORS.black }, FONTS.bodyBold]}>
            {`06:30PM`}
          </Text>
        </View>
        <TouchableOpacity
          onPress={dialCall}
          style={{
            width: '100%',
            height: 100,
            marginTop: 8,
            backgroundColor: '#FAFAFA',
            paddingHorizontal: 9,
            paddingHorizontal: 8,
            borderRadius: 6,
            justifyContent: 'space-evenly'
          }}>
          <Text style={[{ color: COLORS.black }, FONTS.bodyMedium]}>
            Mohammad Saifuddin
          </Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <MapLocator />
            <Text style={[{ color: COLORS.gray, paddingLeft: 6 }, FONTS.small]}>
              Harvest Group, DITF Bangladesh 14 Pavilion Golen, Dhaka-1212
            </Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Phone />
            <Text style={[{ color: COLORS.black50, paddingLeft: 6 }, FONTS.small]}>
              01756 236 365
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <MapView
        style={styles.mapStyle}
        provider='google'
        initialRegion={latLong}
        showsMyLocationButton={true}
        showsUserLocation={true}
      >
        <Marker
          coordinate={latLong}
          image={require('../assets/images/LocationMarker.png')}
        />
      </MapView>

      <View style={[styles.bottomModal]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DirectionScreen')}
          style={{
            width: '100%',
            height: 45,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={
            [{ color: COLORS.gray, paddingLeft: 6, marginRight: 15 }, FONTS.small]}>
            full screen map with direction
          </Text>
          <DirectionArrow />
        </TouchableOpacity>
        <HorizontalLine />
        <View style={{
          width: '100%',
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: COLORS.lightGray10
        }}>
          <View style={styles.cards}>
            <Text style={[{ color: COLORS.gray }, FONTS.small]}>
              Sub-Total
            </Text>
            <Text style={[{ color: COLORS.black }, FONTS.header1

            ]}>
              ৳ 630
            </Text>
          </View>
          <VerticalLine />
          <View style={styles.cards}>
            <Text style={[{ color: COLORS.gray }, FONTS.small]}>
              Delivery Charge
            </Text>
            <Text style={[{ color: COLORS.black }, FONTS.header1]}>
              ৳ 30
            </Text>
          </View>
          <VerticalLine />
          <View style={styles.cards}>
            <Text style={[{ color: COLORS.gray }, FONTS.small]}>
              Receivable
            </Text>
            <Text style={[{ color: COLORS.primary }, FONTS.header1

            ]}>
              ৳ 660
            </Text>
          </View>
        </View>
        <HorizontalLine />
        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',

          alignItems: 'center',
          padding: 10,
        }}>
          <View style={{
            justifyContent: 'space-between',
          }}>
            <Text style={[{ color: COLORS.black }, FONTS.bodyMedium]}>
              Payment Information
            </Text>
            <Text style={[{ color: COLORS.primary, marginRight: 5 }, FONTS.xtraSmall]}>
              Collect Cash from customer
            </Text>
          </View>
          <View style={{
            height: 40,
            width: 130,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: COLORS.lightGray,
            justifyContent: 'center',
            alignItems: 'center'
          }} >
            <Text style={[{ color: COLORS.black }, FONTS.bodyBold]}>
              Cash On Delivery
            </Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          width: '100%',
          height: 50,
          justifyContent: 'space-evenly',
          marginBottom: 25
        }}>
          <TouchableOpacity style={{
            height: 58,
            width: '55%',
            borderRadius: 9,
            borderWidth: 2,
            borderColor: COLORS.lightGray,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF8B9'
          }} >
            <Text style={[{ color: '#795700' }, FONTS.buttonLarge]}>
              Partly Delivered
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            height: 58,
            width: '35%',
            borderRadius: 9,
            borderWidth: 2,
            borderColor: COLORS.lightGray,
            justifyContent: 'center',
            alignItems: 'center'
          }} >
            <Text style={[{ color: COLORS.black10 }, FONTS.buttonLarge]}>
              Delivered
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray50,
  },
  mapStyle: {
    flex: 1
  },
  cards: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topModal: {
    flex: 1,
    // width: '100%',
    // height: 290,
    paddingHorizontal: 20,
    backgroundColor: COLORS.whitePure,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // zIndex: 10
  },
  bottomModal: {
    flex: 1,
    // width: '100%',
    // height: 275,
    alignItems: 'center',
    backgroundColor: COLORS.whitePure,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
  }
})