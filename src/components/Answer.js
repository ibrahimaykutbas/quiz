import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

const Answer = ({ title, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selectedAnswer : null]}
      onPress={() => onPress(title)}
      activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>X</Text>
    </TouchableOpacity>
  );
};

export default Answer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: getRH(65),
    marginHorizontal: getRW(40),
    marginBottom: getRH(25),
    backgroundColor: Colors.WHITE,
    borderRadius: getRH(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: getRH(15),
  },
  selectedAnswer: {
    borderWidth: getRH(3),
    borderColor: Colors.PINK,
  },
  title: {
    fontSize: Fonts.size(20),
    color: Colors.BLUE,
    fontWeight: 'bold',
  },
});
