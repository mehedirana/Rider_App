import React from 'react';
import {View, Text, StyleSheet, Platform, Dimensions} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import OpenOrderScreen from '../../screens/OpenOrderScreen';
import AccountScreen from '../../screens/AccountScreen';
import TabCustomIcon from './TabCustomIcon';
import {COLORS, FONTS} from '../../styles/theme';

const HEIGHT = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabCustomIcon
            route={route}
            focused={focused}
            color={color}
            size={size}
          />
        ),
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray50,
        headerShown: false,
        showLabel: true,
        showIcon: true,
        tabBarStyle:  styles.tabBarCustom,
        tabBarItemStyle: styles.tabBarItemCustom,
        tabBarLabelStyle: [FONTS.xxSmall, styles.tabBarLabelCustom],
      })}
      tabBar={props => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
        </View>
      )}
      >
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'NewOrder'} component={OpenOrderScreen} />
      <Tab.Screen name={'Account'} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 120,
    alignItems: 'center',
    bottom: 0.95,
  },

  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: COLORS.blackSolid,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation:10
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  tabBarCustom: {
    backgroundColor: COLORS.whitePure,
    borderTopWidth: 0,
    elevation: 6,
    height: Platform.OS == 'ios' ? HEIGHT * 0.1 : 63,
    borderRadius: 11,
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  tabBarLabelCustom: {
    marginBottom: Platform.OS == 'ios' ? 0 : 11,
    marginTop: Platform.OS == 'ios' ? 10 : 5,
  },
  tabBarItemCustom: {
    backgroundColor: COLORS.whitePure,
    paddingTop: 13,
  },
});
