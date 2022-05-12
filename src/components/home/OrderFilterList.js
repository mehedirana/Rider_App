import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/theme';

const data = [
  {id: 1, name: 'Open', order_status_id: 'NEW'},
  {id: 2, name: 'All Orders'},
  {id: 3, name: 'Accepted Order'},
  {id: 4, name: 'Cancelled', order_status_id: 'CANCELLED'},
  {id: 5, name: 'Delivered Order', order_status_id: 'PARTLY_DELIVERED'},
  {id: 6, name: 'Recent', order_status_id: 'PARTLY_DELIVERED'},
];

export const OrderFilterList = ({childToParent}) => {
  const [expandedKey, setExpandedKey] = useState(null);
  const handleItemPress = (item, index) => {
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
  const RenderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => handleItemPress(item, index)}>
        <Text
          style={{
            backgroundColor:
              expandedKey === index ? COLORS.primary : COLORS.lightGray,
            color: expandedKey === index ? COLORS.whitePure : COLORS.black,
            paddingHorizontal: 18,
            paddingVertical: 8,
            borderRadius: 9,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={RenderItem}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        key={(item, index) => item.id}
        contentContainerStyle={{paddingHorizontal:20}}
      />
    </View>
  );
};
