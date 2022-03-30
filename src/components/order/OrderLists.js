import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../styles/theme';


const OrderLists = ({ navigation, data }) => {

  const handleAcceptOrder = (item) => {
    // console.log('============>', item)
    navigation.navigate('OrderDetails')
  }

  const handleCancelOrder =(item)=>{

  }

  const RenderAllOrdersList = ({ item, index }) => {
    // console.log(item);
    return (
      <View
        style={styles.card}>
        <View style={styles.headerContainer}>
          <Text style={[{ color: COLORS.gray }, FONTS.xtraSmall]}>
            {item?.deliveryTime}
          </Text>
          <Text
            style={[

              FONTS.small,
              styles.orderStatusTxt,
            ]}>
            Open
          </Text>
        </View>
        <Text style={[FONTS.bodyMedium, { color: COLORS.black }]}>
          Order # {item?.orderId}
        </Text>
        <Text style={{ color: '#555555', marginTop: 6 }}>{item?.deliveryLocation}</Text>
        <Text style={{ color: COLORS.black, marginTop: 6 }}>017XX XXX XXX</Text>
        <View style={styles.placeHolderContainer} />
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => handleCancelOrder(item)}>
            <Text style={[FONTS.bodyParagraphBold, { color: COLORS.red }]}>
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
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderAllOrdersList}
        key={({ item, index }) => item.orderId + index}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#B76300'
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
    marginTop: 10
  },

  grandTotalCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grandTotalTxt: { color: COLORS.black, marginLeft: 2 },
  trackOrderTxt: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 11,
    backgroundColor: '#B7FFD0'

  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
});

export default OrderLists;
