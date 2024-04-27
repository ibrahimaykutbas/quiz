import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

import Colors from '../theme/Colors';

import Header from '../components/Header';
import Answer from '../components/Answer';
import Button from '../components/Button';

import { LEVELS } from '../utils.js/Constants';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Levels = ({ route }) => {
  const navigation = useNavigation();

  const { selectedCategory } = route.params; // Servis kategori bilgisini string değil id olarak istiyor. O yüzden CATEGORIES arrayi güncellenmeli.

  const [selectedLevel, setSelectedLevel] = useState(null);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = `https://opentdb.com/api.php?amount=10&category=${
    selectedCategory?.id
  }&difficulty=${selectedLevel?.toLowerCase()}&type=multiple`;

  const getQuestions = async () => {
    try {
      setLoading(true);
      const result = await axios.get(URL);

      setData(result?.data?.results || []);
      setLoading(false);

      if (result?.data?.results.length === 0) {
        return Alert.alert('Error', 'No questions found!');
      }

      navigation.navigate('Questions', { data: result?.data?.results });
      setSelectedLevel(null);
    } catch (error) {
      console.log('Error', error);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Select Level" onPressBack={() => navigation.goBack()} />

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
          title="Start Playing"
          onPress={getQuestions}
          disabled={!selectedLevel || loading}
          loading={loading}
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
