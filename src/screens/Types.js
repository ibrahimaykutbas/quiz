import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Colors from '../theme/Colors';

import Header from '../components/Header';
import Answer from '../components/Answer';
import Button from '../components/Button';

import { TYPES } from '../utils.js/Constants';
import { useNavigation } from '@react-navigation/native';

const Types = ({ route }) => {
  const navigation = useNavigation();

  const { selectedCategory } = route.params;

  const [selectedType, setSelectedType] = useState(null);

  const handleType = () => {
    navigation.navigate('Levels', { selectedCategory, selectedType });
    setSelectedType(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Select Type" onPressBack={() => navigation.goBack()} />

      <ScrollView>
        {TYPES.map(item => (
          <Answer
            key={item.title}
            item={item}
            isSelected={selectedType?.type == item.type}
            onPress={setSelectedType}
          />
        ))}

        <Button title="Next" onPress={handleType} disabled={!selectedType} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Types;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE,
  },
});
