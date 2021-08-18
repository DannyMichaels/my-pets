import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import PetDetailsScreen from '../screens/PetDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const HomeScreenNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* doing this to exclude PetDetails from footer */}
    <Stack.Screen name="PetDetails" component={PetDetailsScreen} />
  </Stack.Navigator>
);
