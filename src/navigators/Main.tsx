import React from 'react';
import { FlowerLangList } from '../screens/';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={FlowerLangList} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
