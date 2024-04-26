import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

const Answer = ({ title, onPress, disabled }) => {
  console.log(disabled);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(title)}
      activeOpacity={0.8}
      disabled={!disabled}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Answer;

const styles = StyleSheet.create({
  container: {
    height: getRH(45),
    marginHorizontal: getRW(40),
    marginTop: getRH(25),
    backgroundColor: Colors.PINK,
    borderRadius: getRH(90),
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Fonts.size(22),
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});
