import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

import Colors from '../theme/Colors';

import Header from '../components/Header';
import Answer from '../components/Answer';
import Button from '../components/Button';

import { useNavigation } from '@react-navigation/native';
import { getRH } from '../theme/Units';
import Fonts from '../theme/Fonts';

const Questions = ({ route }) => {
  const navigation = useNavigation();
  const scrollViewRef = useRef();

  const { data } = route.params;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [report, setReport] = useState({
    correct: 0,
    incorrect: 0,
  }); // Henüz kullanılmadı. Sorular bittikten sonra raporlama için kullanılacak.

  useEffect(() => {
    const answerList = [
      data[questionIndex]?.correct_answer,
      ...data[questionIndex]?.incorrect_answers,
    ];
    answerList.sort(() => Math.random() - 0.5);

    setAnswers(answerList);
    console.log('CORRECT ANSWER', data[questionIndex]?.correct_answer);
  }, [questionIndex]);

  const nextQuestion = () => {
    if (questionIndex < data.length - 1) {
      if (selectedAnswer == data[questionIndex]?.correct_answer) {
        setReport({
          ...report,
          correct: report.correct + 1,
        });
      } else {
        setReport({
          ...report,
          incorrect: report.incorrect + 1,
        });
      }

      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null);

      // Bir sonraki soruya geçildiği zaman ekranın başına gitmek için.
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    } else {
      Alert.alert('Game Over', 'You have completed the game');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={data[questionIndex]?.question}
        onPressBack={() => navigation.goBack()}
        currentIndex={questionIndex + 1}
        totalIndex={data?.length}
      />

      <ScrollView ref={scrollViewRef}>
        {answers.map(item => (
          <Answer
            key={item}
            title={item}
            isSelected={selectedAnswer == item}
            onPress={setSelectedAnswer}
          />
        ))}

        <Button title="Submit Anwswer" onPress={nextQuestion} />

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
    fontWeight: '600',
  },
});
