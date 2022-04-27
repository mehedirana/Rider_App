import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../styles/theme';

const FinishScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: COLORS.blackSolid,
          marginTop: 129,
          textAlign: 'center',
          ...FONTS.header5,
        }}>
        Thank You for{'\n'}your successfull{'\n'}delivery
      </Text>
      <Text
        style={{color: COLORS.blackSolid, marginTop: 50, textAlign: 'center',...FONTS.bodyLarge}}>
        It was your
      </Text>
      <Text
        style={{color: COLORS.blackSolid, textAlign: 'center', fontSize: 48}}>
        10th
      </Text>
      <Text style={{color: COLORS.blackSolid, textAlign: 'center',...FONTS.bodyLarge}}>
        delivery today
      </Text>
      <Text
        style={{
          color: COLORS.blackSolid,
          textAlign: 'center',
          marginTop: 120,
          ...FONTS.header1,
        }}>
        Please grab your next{'\n'}order
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 30,
        }}>
        {/* <TouchableOpacity
          // onPress={() => navigation.navigate('FinishScreen')}
          style={{
            width: '55%',
            borderRadius: 9,
            borderWidth: 2,
            borderColor: COLORS.lightGray,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.whitePure,
          }}>
          <Text style={[{color: COLORS.black10}, FONTS.buttonLarge]}>
            Keep me on hold
          </Text>
        </TouchableOpacity> */}
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
            I'm Ready
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinishScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whitePure,
  },
});
