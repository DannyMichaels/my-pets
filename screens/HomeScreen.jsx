import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { PetsContext } from '../context/petsContext';

// the navigation prop is passed to every screen component
export default function HomeScreen({ navigation }) {
  const [pets] = useContext(PetsContext);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate('Details')}
      />
      {pets.map((pet, key) => (
        <React.Fragment key={key}>
          <Button
            title={`Go To ${pet.name} PAGE`}
            onPress={() => navigation.navigate('PetDetails', { pet: pet })}
          />
        </React.Fragment>
      ))}
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
