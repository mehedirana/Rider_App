import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CommonBtn from '../common/CommonBtn';
import { driverLogin } from '../services/admin';
import {COLORS, FONTS} from '../styles/theme';

const LoginScreen = () => {
  const [value, setValue] = useState(null);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState('');
  const [isPhoneUnfocus, setIsPhoneUnfocus] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);

  const handleUserLogin = ()=>{
    const data ={
       username:phone,
       password: password
    }
    driverLogin(data)
    .then(res => {
      console.log('------>', res);

    })
    .catch(e => {
      console.log(e);
    });
   
  }

  return (
    <View style={styles.container}>
      <Text
        style={{color: COLORS.black50, marginTop: 162, ...FONTS.header3Bold}}>
        Enter your username & {'\n'}password to login
      </Text>

      <Text
        style={[
          {
            color: COLORS.black10,
            marginTop: 32,
          },
          FONTS.small,
        ]}>
        Username
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input2,
            {
              borderBottomColor: isPhoneUnfocus
                ? '#C6C6C6'
                : isAvailable
                ? COLORS.primary
                : COLORS.red,
            },
          ]}
          onChangeText={phone => setPhone(phone)}
          onFocus={() => {
            setIsPhoneUnfocus(false);
          }}
          onBlur={() => {
            setIsPhoneUnfocus(true);
          }}
          // ref={phoneRef}
          value={phone}
          maxLength={11}
          // placeholder="01XXXXXXXXX"
          placeholder="Ex. kashem"
          placeholderTextColor={COLORS.gray}
          // keyboardType="numeric"
        />
      </View>

      <View>
        <Text
          style={[
            {
              color: COLORS.black10,
              marginTop: 32,
            },
            FONTS.smallTitle,
          ]}>
          Password
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input2,
              FONTS.body,
              {
                borderBottomColor: isPhoneUnfocus
                  ? '#C6C6C6'
                  : isAvailable
                  ? COLORS.primary
                  : COLORS.red,
              },
            ]}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="*********"
            maxLength={6}
            placeholderTextColor={COLORS.gray}
          />
        </View>

        <View style={{marginTop:22}}>
          <CommonBtn
          onPress={handleUserLogin}
            title={'Log in'}
            backgroundColor={COLORS.primary}
            color={COLORS.whitePure}
            middle={true}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    // marginTop: 8,
  },
  input2: {
    width: '100%',
    height: 50,
    // padding: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#C6C6C6',
    color: COLORS.black,
  },
});
