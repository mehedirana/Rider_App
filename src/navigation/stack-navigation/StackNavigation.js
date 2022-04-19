import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OpenOrderScreen from '../../screens/OpenOrderScreen';
import OrderDetailsScreen from '../../screens/OrderDetailsScreen';
import DirectionScreen from '../../screens/DirectionScreen';
import TabNavigation from '../tab-navigation/TabNavigation';
import PartlyOrderDetailsScreen from '../../screens/PartlyOrderDetailsScreen';
import FinishScreen from '../../screens/FinishScreen';
import LoginScreen from '../../screens/LoginScreen';
const Stack = createNativeStackNavigator();

// const user = {name:'mehedi'};
const user = null;

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Tab" component={TabNavigation} />
            <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
            <Stack.Screen name="DirectionScreen" component={DirectionScreen} />
            <Stack.Screen
              name="PartyOrderScreen"
              component={PartlyOrderDetailsScreen}
            />
            <Stack.Screen name="FinishScreen" component={FinishScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
