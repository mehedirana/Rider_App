import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { COLORS, FONTS } from '../../styles/theme';
import {DollerIcon} from '../../assets/images/svg/DollerIcon';
import Svg, {Path} from 'react-native-svg';

const OrderLists = ({navigation, data}) => {
  const RenderAllOrdersList = ({item, index}) => {
      console.log(item);
    return (
      <TouchableOpacity
        onPress={() => handleCardPress(item)}
        style={styles.card}>
        <View style={styles.headerContainer}>
          <Text style={[{color: COLORS.gray}, FONTS.xtraSmall]}>
            {item?.deliveryTime}
          </Text>
          <Text
            style={[
              {
                backgroundColor:
                  item?.status === 'PENDING'
                    ? '#FFF1CE'
                    : item?.status === 'CANCELED'
                    ? '#FED4D1'
                    : '#F4F4F4',
                color:
                  item?.status === 'PENDING'
                    ? '#B76300'
                    : item?.status === 'CANCELED'
                    ? '#C81509'
                    : '#848484',
              },
              FONTS.small,
              styles.orderStatusTxt,
            ]}>
            {item?.status}
          </Text>
        </View>
        <Text style={[FONTS.bodyMedium, {color: COLORS.black}]}>
          Order # {item?.orderId}
        </Text>
        <Text style={{color:'#555555', marginTop:6}}>{item?.deliveryLocation}</Text>
        <Text style={{color:COLORS.black, marginTop:6}}>017XX XXX XXX</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[{color: COLORS.gray}]}>{item.totallItems} Items</Text>
          <View style={styles.dotIconContainer}>
            <Svg
              width={5}
              height={5}
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M2.753 4.264a1.97 1.97 0 0 1-1.02-.272 2.122 2.122 0 0 1-.738-.739 1.97 1.97 0 0 1-.273-1.02c0-.376.091-.716.273-1.02.184-.308.43-.553.738-.734a1.945 1.945 0 0 1 1.02-.277c.376 0 .716.092 1.02.277.308.181.553.426.735.734.184.304.277.644.277 1.02 0 .372-.093.712-.277 1.02a2.083 2.083 0 0 1-.734.739 1.955 1.955 0 0 1-1.02.272Z"
                fill="#242823"
              />
            </Svg>
          </View>
          <View style={styles.grandTotalCard}>
            <View>
              <DollerIcon height={11} width={11} color={COLORS.black} />
            </View>
            <Text style={[styles.grandTotalTxt, FONTS.smallBold]}>
              {item?.grandTotall}
            </Text>
          </View>
        </View>
        <View style={styles.placeHolderContainer} />
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => handleCancelOrder(item)}>
            <Text style={[FONTS.bodyParagraphBold, {color: COLORS.red}]}>
            DECLINE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTrackOrder(item)}
            disabled={item.status === 'Cancelled' ? true : false}>
            <Text
              style={[
                FONTS.bodyParagraphBold,
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
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderAllOrdersList}
        key={({item, index}) => item.orderId + index}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
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
    paddingVertical: 2,
    borderRadius: 9,
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
    marginTop:10
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
    borderWidth: 0.3,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor:'#B7FFD0'
    
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
});

export default OrderLists;
