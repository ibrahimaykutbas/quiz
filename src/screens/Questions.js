import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, { useState } from 'react';

import Colors from '../theme/Colors';

import Header from '../components/Header';
import Answer from '../components/Answer';
import Button from '../components/Button';

import { LEVELS } from '../utils.js/Constants';
import { useNavigation } from '@react-navigation/native';
import { getRH } from '../theme/Units';
import Fonts from '../theme/Fonts';

const Questions = () => {
  const navigation = useNavigation();
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Question abbaababab"
        onPressBack={() => navigation.goBack()}
      />

      <ScrollView>
        {['asdada', 'asdasdasdad', 'nbnbnb', 'ggggggg'].map(item => (
          <Answer
            key={item}
            title={item}
            isSelected={selectedLevel == item}
            onPress={setSelectedLevel}
          />
        ))}

        <Button
          title="Submit Anwswer"
          onPress={() => navigation.navigate('Questions')}
          disabled={selectedLevel}
        />
        <TouchableOpacity
          style={styles.exitContainer}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.exitText}>EXIT GAME</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE,
  },
  exitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getRH(20),
  },
  exitText: {
    color: Colors.GREY,
    fontSize: Fonts.size(18),
    fontWeight:'600'
  },
});
