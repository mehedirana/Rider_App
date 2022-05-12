import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/theme';

const data = [
  {id: 1, name: 'Open', filter: 'open'},
  {id: 2, name: 'All Orders',filter: 'all'},
  {id: 3, name: 'Accepted Order',filter: 'NEW'},
  {id: 4, name: 'Cancelled', filter: 'CANCELLED'},
  {id: 5, name: 'Delivered Order', filter: 'PARTLY_DELIVERED'},
  {id: 6, name: 'Recent', filter: 'recent'},
];

export const OrderFilterList = ({childToParent}) => {
  const [expandedKey, setExpandedKey] = useState(0);
  const handleItemPress = (item, index) => {
    childToParent(item ? item : data[0])
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
