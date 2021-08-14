import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// the navigation prop is passed to every screen component
export default function HomeScreen({ navigation }) {
  const PETS = [
    {
      name: 'jeffrey',
      type: 'cat',
    },
    { name: 'doggy', type: 'dog' },
  ];

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate('Details')}
      />
      {PETS.map((pet) => (
        <Button
          title={`Go To ${pet.name} PAGE`}
          onPress={() => navigation.navigate('PetDetails', { pet: pet })}
        />
      ))}
      <StatusBar style="auto" />
    </View>
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
