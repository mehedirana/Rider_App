import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../styles/theme';

const FinishScreen = () => {
  return (
    <View>
      <Text
        style={{
          color: COLORS.blackSolid,
          marginTop: 129,
          textAlign: 'center',
          ...FONTS.header2,
        }}>
        Thank You for{'\n'}your successfull{'\n'}delivery
      </Text>
      <Text
        style={{color: COLORS.blackSolid, marginTop: 56, textAlign: 'center'}}>
        It was your
      </Text>
      <Text
        style={{color: COLORS.blackSolid, textAlign: 'center', fontSize: 48}}>
        10th
      </Text>
      <Text style={{color: COLORS.blackSolid, textAlign: 'center'}}>
        delivery today
      </Text>
      <Text
        style={{color: COLORS.blackSolid, textAlign: 'center', marginTop: 133}}>
        Please grab your next{'\n'}order
      </Text>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          // height: 50,
          justifyContent: 'space-evenly',
  
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('FinishScreen')}
          style={{
            // height: 58,
            width: '55%',
            borderRadius: 9,
            borderWidth: 2,
            borderColor: COLORS.lightGray,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.whitePure,
          }}>
          <Text style={[{color: '#795700'}, FONTS.buttonLarge]}>
            Partly Delivered
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 58,
            width: '35%',
            borderRadius: 9,
            borderWidth: 2,
            borderColor: COLORS.lightGray,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.primary,
          }}>
          <Text style={[{color: COLORS.whitePure}, FONTS.buttonLarge]}>
            Delivered
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinishScreen;
