import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderText from '../components/header/HeaderText';
import {getStats} from '../services/sales-order/salesOrder';
import {userLogOut} from '../store/auth/userAction';
import {COLORS, FONTS} from '../styles/theme';

const {height, width} = Dimensions.get('window');

const AccountScreen = ({navigation}) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const {user} = useSelector(e => e.userState);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogOut());
  };

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
      <ImageBackground
        resizeMode="cover"
        source={{uri: user?.user_data?.image_url}}
        style={{width: '100%', height: height * 0.57}}>
        <HeaderText
          headerText="Account"
          headerRight="Edit profile"
          transparent={true}
          navigation={navigation}
          subHeadColor={COLORS.whitePure}
          // onPress={handleCancelOrder}
        />
      </ImageBackground>

      <View style={styles.infoCard}>
        <Text
          style={{
            marginTop: 28,
            ...FONTS.header1,
            color: COLORS.blackSolid,
            textAlign: 'center',
          }}>
          {user?.user_data?.fullname}
        </Text>
        <Text
          style={{
            ...FONTS.bodyMedium,
            color: COLORS.black,
            textAlign: 'center',
            marginTop: 3,
          }}>
          {user?.user_data?.phone_number}
        </Text>
        <Text
          style={{
            ...FONTS.small,
            color: COLORS.black,
            textAlign: 'center',
            marginTop: 3,
          }}>
          {user?.user_data?.email}
        </Text>
        <View style={{marginTop: 20, ...styles.placeHolder}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 16,
          }}>
          <Text style={styles.bodyTxt}>Delivered today</Text>
          <Text style={styles.bodyTxt}>Total order</Text>
          <Text style={styles.bodyTxt}>Canceled today</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
          }}>
          <Text style={styles.valueTxt}>{data?.delivered_today}</Text>
          <Text style={styles.valueTxt}>{data?.delivered_total}</Text>
          <Text style={styles.valueTxt}>{data?.cancelled_today}</Text>
        </View>
        <View
          style={{
            marginTop: 14,
            ...styles.placeHolder,
          }}
        />
        <TouchableOpacity onPress={handleLogout} style={styles.logoutCard}>
          <Text style={{...FONTS.buttonLarge, color: '#950000'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoCard: {
    backgroundColor: COLORS.whitePure,
    flex: 1,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    top: -height * 0.026,
    elevation: 10,
  },
  bodyTxt: {
    color: COLORS.gray,
    ...FONTS.small,
  },
  valueTxt: {
    color: COLORS.black,
    ...FONTS.header4,
  },
  placeHolder: {
    borderBottomWidth: 1,
    borderColor: '#ECECEC',
    marginHorizontal: 20,
    opacity: 0.5,
  },
  logoutCard: {
    paddingHorizontal: 24,
    backgroundColor: '#FFCDCD',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.3,
    marginTop: 16,
    borderRadius: 9,
    paddingVertical: 8,
  },
});
