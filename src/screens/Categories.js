import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Colors from '../theme/Colors';

import Header from '../components/Header';
import Answer from '../components/Answer';
import Button from '../components/Button';

import { CATEGORIES } from '../utils.js/Constants';

import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategory = () => {
    navigation.navigate('Levels', { selectedCategory });
    setSelectedCategory(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Select Category" />

      <ScrollView>
        {CATEGORIES.map(item => (
          <Answer
            key={item}
            title={item}
            isSelected={selectedCategory == item}
            onPress={setSelectedCategory}
          />
        ))}

        <Button
          title="Next"
          onPress={handleCategory}
          disabled={!selectedCategory}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE,
  },
});
