import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';
import {NotificationIcon} from '../assets/images/svg/NotificationIcon';
import HomeCard from '../components/home/HomeCard';
import {COLORS, FONTS} from '../styles/theme';
import {getStats} from '../services/sales-order/salesOrder';
import {useDispatch, useSelector} from 'react-redux';

const backgroundImg = require('../assets/images/cityBackground.png');

const {height, width} = Dimensions.get('window');
const HomeScreen = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const {user} = useSelector(e => e.userState);

  const dispatch = useDispatch();

  const updateLocalUser = data => {
    dispatch(userLogIn(data));
  };

  useEffect(() => {
    getStats(user, user?.access_token, updateLocalUser)
      .then(res => {
        setLoading(true);

        if (res.success) {
          setdata(res?.data);
          setLoading(false);
        } else {
          Alert.alert('Error', res?.error_message, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);

          setLoading(false);
        }
      })
      .catch(e => {
        console.log('error API', e);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 29,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: COLORS.gray,
            height: 65,
            width: 65,
            borderRadius: 40,
          }}></View>
        <View style={{marginTop: 10}}>
          <NotificationIcon />
        </View>
      </View>

      <Text style={{marginTop: 14, ...FONTS.header1, color: COLORS.blackSolid}}>
        Hi, {user?.user_data?.fullname}
      </Text>
      <Text style={{marginTop: 4, color: COLORS.black, ...FONTS.bodyMedium}}>
        Let’s deliver the best today!
      </Text>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 42}}>
        <HomeCard
          title={'Open'}
          subTitle={`${data?.open_today} orders waiting to be delivered `}
          subTitleColor={'#009E36'}
          style={{backgroundColor: '#E2FFED', width: '40%'}}
          type={1}
        />
        <HomeCard
          title={'Recent'}
          subTitle={`${data?.delivered_today} recently delivered`}
          subTitleColor={'#0050B8'}
          style={{backgroundColor: '#E2F5FF', marginLeft: 20}}
          type={2}
        />
      </View>
      <View
        style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
        <HomeCard
          title={'All Orders'}
          subTitle={`${data?.delivered_total} orders are delivered`}
          subTitleColor={'#935800'}
          style={{backgroundColor: '#FFF6E9'}}
          type={3}
        />
        <HomeCard
          title={'Canceled'}
          subTitle={`${data?.cancelled_today} orders were cancelled`}
          subTitleColor={'#CC1B16'}
          style={{backgroundColor: '#FFEAEA', marginLeft: 20}}
          type={4}
        />
      </View>
      <ImageBackground
        style={{
          height: height / 2.2,
          width: width,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
        }}
        source={backgroundImg}></ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whitePure,
    paddingHorizontal: 23,
  },
});
