import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {CartMinusIcon} from '../../assets/images/svg/CatMinusIcon';
import {CartPlusIcon} from '../../assets/images/svg/CatPlusIcon';
import {DownArrow} from '../../assets/images/svg/DownArrow';
import {EditButton} from '../../assets/images/svg/order-details/EditButton';
import {COLORS} from '../../styles/theme';
// let temp
const PartReturnList = ({data}) => {
    // const temp = data.map((e)=>({...e, preQty : e.qty}))
  const [expandedKey, setExpandedKey] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const [productQty, setProductQty] = useState(0);


    


  const handleItemPress = (item, index) => {
    setProductQty(item?.qty)
    if (expandedKey === null) {
      setExpandedKey(index);
    } else {
      if (expandedKey === index) {
        setExpandedKey(null);
      } else {
        setExpandedKey(index);
      }
    }
  };

  const handleQtyUp =(item, index)=>{
      setActiveKey(index)
    setProductQty(item.qty = productQty + 1)
  }

  const handleQtyDown =(item, index)=>{
    setProductQty(productQty > 0 ? item.qty = productQty - 1 : 0)
  }

  const RenderItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          paddingVertical: 8,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Text>{item?.id}.</Text>
          <Text numberOfLines={2}> {item?.name}.</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10, paddingLeft: 10}}>
          <TouchableOpacity
            disabled={expandedKey === index ? false : true}
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              borderRadius: 6,
              borderColor:
                expandedKey === index ? COLORS.primary : COLORS.lightGray,
              alignItems: 'center',
            }}>
            {expandedKey === index && (
              <TouchableOpacity
                disabled={expandedKey === index ? false : true}
                activeOpacity={0.8}
                  onPress={() => handleQtyDown(item)}
                style={{...styles.qtyUpDownCard, marginRight: 10}}>
                <CartMinusIcon color="#00C042" />
              </TouchableOpacity>
            )}
            {
                item?.qty !== item?.preQty && <Text style={{color: COLORS.gray, textDecorationLine:'line-through', marginRight:3}} >{item?.preQty}</Text>
            }
            <Text style={{color: COLORS.red}}>{item?.qty}</Text>
            {expandedKey === index && (
              <TouchableOpacity
                disabled={expandedKey === index ? false : true}
                activeOpacity={0.8}
                  onPress={() => handleQtyUp(item)}
                style={{...styles.qtyUpDownCard, marginLeft: 10}}>
                <CartPlusIcon color="#00C042" />
              </TouchableOpacity>
            )}

            {/* <View style={{marginLeft:9}}>
              <DownArrow />
            </View> */}
          </TouchableOpacity>

          {/* <Text style={{marginHorizontal: 8, marginTop: 5}}>{item?.umo}</Text> */}
          <TouchableOpacity onPress={() => handleItemPress(item, index)}>
            <EditButton />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{marginTop: 10}}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={(item, i) => item + i}
      />
    </View>
  );
};

export default PartReturnList;

const styles = StyleSheet.create({
  container: {},
  qtyUpDownCard: {
    // backgroundColor: '#B7FFD0',
    paddingTop: 3,
    paddingHorizontal: 2,
    paddingBottom: 1,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: COLORS.gray10,
  },
});
