import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OpenOrderScreen from '../../screens/OpenOrderScreen';
import OrderDetailsScreen from '../../screens/OrderDetailsScreen';
import DirectionScreen from '../../screens/DirectionScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='OpenOrders' component={OpenOrderScreen} />
        <Stack.Screen name='OrderDetails' component={OrderDetailsScreen} />
        <Stack.Screen name='DirectionScreen' component={DirectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;