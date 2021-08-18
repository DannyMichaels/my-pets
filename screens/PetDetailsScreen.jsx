import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PetDetailsScreen({ navigation, route }) {
  const { pet } = route.params;

  return (
    <View style={styles.container} id="PET_DETAILS">
      <Text>name: {pet?.name}</Text>
      <Text>type: {pet?.type}</Text>
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
