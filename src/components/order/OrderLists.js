import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from '../../styles/theme';

const {height, width} = Dimensions.get('window');

const OrderLists = ({navigation, data}) => {
  const handleAcceptOrder = item => {
    // console.log('============>', item)
    navigation.navigate('OrderDetails');
  };

  const handleCancelOrder = item => {};

  const RenderAllOrdersList = ({item, index}) => {
    // console.log(item);
    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.headerContainer}>
          <Text style={[{color: COLORS.gray}, FONTS.xtraSmall]}>
            {item?.delivered_at}
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
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style={{color: COLORS.black, marginTop: 6}}>
            {item?.delivery_phone_number}
          </Text>
          <Text style={{color: COLORS.gray, marginTop: 6}}>{item?.payment_method_id}</Text>
        </View>

        <View style={styles.placeHolderContainer} />
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => handleCancelOrder(item)}>
            <Text style={[FONTS.bodyParagraphBold, {color: COLORS.red}]}>
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
    marginVertical: 17,
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
