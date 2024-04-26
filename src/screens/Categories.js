import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Colors from '../theme/Colors';

import Header from '../components/Header';
import Answer from '../components/Answer';
import Button from '../components/Button';

import { CATEGORIES } from '../utils.js/Constants';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

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
          onPress={() => console.log('Next')}
          disabled={selectedCategory}
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
