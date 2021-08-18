import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer as Router } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PetDetailsScreen from './screens/PetDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import PetsProvider from './context/petsContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Router>
        <PetsProvider>
          <StatusBar />
          <Footer />
        </PetsProvider>
      </Router>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
