import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';

import Colors from '../theme/Colors';

import Header from '../components/Header';
import Answer from '../components/Answer';
import Button from '../components/Button';

import { CATEGORIES } from '../utils.js/Constants';

import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();

  const scrollViewRef = useRef();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategory = () => {
    navigation.navigate('Types', { selectedCategory });
    setSelectedCategory(null);
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Select Category" />

      <ScrollView ref={scrollViewRef}>
        {CATEGORIES.map(item => (
          <Answer
            key={item.title}
            item={item}
            isSelected={selectedCategory?.id == item.id}
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
