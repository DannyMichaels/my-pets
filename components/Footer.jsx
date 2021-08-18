import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PetDetailsScreen from '../screens/PetDetailsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreenNavigator } from '../navigation/CustomNavigation';

const Tab = createBottomTabNavigator();

export default function Footer() {
  return (
    <>
      <Tab.Navigator
        style={styles.footer}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const ICONS = {
              Home: focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline',
              Details: focused ? 'ios-list' : 'ios-list-outline',
            };

            let iconName = ICONS[route.name];
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerShown: route.name === 'PetDetails' ? false : true,
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff', // title
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreenNavigator} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    // this does nothing
    // can I just go back to normal React?
    backgroundColor: '#e039',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
