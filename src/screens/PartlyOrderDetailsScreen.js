import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderText from '../components/header/HeaderText';
import {COLORS, FONTS} from '../styles/theme';

const PartlyOrderDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 10}}>
        <HeaderText
          headerText="Order Details"
          headerRight="Rejected"
          navigation={navigation}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 22,
        }}>
        <Text style={[{color: COLORS.black}, FONTS.bodyMedium]}>
          Order # GM2D36-51
        </Text>
        <Text style={[{color: COLORS.gray}, FONTS.small]}>3 items</Text>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderColor: COLORS.gray,
          marginTop: 18,
          marginHorizontal: 20,
        }}
      />
      <Text
        style={{
          marginTop: 12,
          marginLeft: 20,
          color: COLORS.black,
          ...FONTS.bodyBold,
        }}>
        Items ordered
      </Text>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>Maggi Fried Rice Seasoning 6 gm</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Maggi Fried Rice Seasoning 6 gm</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: COLORS.gray,
          marginTop: 18,
          marginHorizontal: 20,
        }}
      />
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{...FONTS.body, color: COLORS.black}}>Sub Total</Text>
        <Text style={{color: COLORS.black, ...FONTS.bodyBold}}>৳ 234</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{...FONTS.body, color: COLORS.black}}>
          Delivery charge
        </Text>
        <Text style={{color: COLORS.black, ...FONTS.bodyBold}}>৳ 29</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: COLORS.lightGray50,
          marginTop: 18,
          marginHorizontal: 20,
        }}
      />
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{...FONTS.bodyBold, color: COLORS.black}}>Total Bill</Text>
        <Text style={{...FONTS.buttonLarge, color: COLORS.black}}>৳5,50</Text>
      </View>
      <View
        style={{
          marginTop: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{...FONTS.bodyBold, color: COLORS.black}}>
          New Total Bill
        </Text>
        <Text style={{...FONTS.buttonLarge, color: COLORS.black}}>৳4,50</Text>
      </View>
      <Text
        style={{
          marginLeft: 20,
          color: COLORS.primary,
          ...FONTS.xtraSmall,
          marginTop: 3,
        }}>
        Return 100 Tk to customer
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 25,
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <View>
          <Text style={{color: COLORS.black, ...FONTS.bodyBold}}>
            Payment Information
          </Text>
          <Text
            style={{color: COLORS.primary, marginTop: 2, ...FONTS.xtraSmall}}>
            Collect TRXID from the customer
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: 'center',
            paddingHorizontal: 5,
            borderColor: COLORS.lightGray,
          }}>
          <Text style={{...FONTS.bodyMedium, color: COLORS.black}}>
            Online Payment
          </Text>
        </View>
      </View>

      <View style={[styles.bottomModal, styles.showProps]}>
        <Text style={{marginTop:20, color:COLORS.black10, ...FONTS.small, marginLeft:29}}>Write Special Note / Reason for returns</Text>
        <Text style={{marginTop:10, color:COLORS.black, ...FONTS.bodyBold,marginLeft:29}}>1 pack of biscuit is damaged inside _</Text>

        <View
        style={{
          borderBottomWidth: 1,
          borderColor: COLORS.gray10,
          marginTop: 11,
          marginHorizontal: 10,
          marginBottom:29
        }}
      />
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
              backgroundColor: '#FFF8B9',
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
    </View>
  );
};

export default PartlyOrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.whitePure,
    flex: 1,
  },
  bottomModal: {
    // alignItems: 'center',
    backgroundColor: COLORS.whitePure,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    paddingHorizontal: 15,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  showProps: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
