import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Colors from '../theme/Colors';

import Header from '../components/Header';
import Answer from '../components/Answer';
import Button from '../components/Button';

import { LEVELS } from '../utils.js/Constants';
import { useNavigation } from '@react-navigation/native';


const Levels = () => {
  const navigation = useNavigation()
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Select Level" />

      <ScrollView>
        {LEVELS.map(item => (
          <Answer
            key={item}
            title={item}
            isSelected={selectedLevel == item}
            onPress={setSelectedLevel}
          />
        ))}

        <Button
          title="Next"
          onPress={() => navigation.navigate('Questions')}
          disabled={selectedLevel}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Levels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE,
  },
});
