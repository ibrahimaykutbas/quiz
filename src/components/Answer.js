import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

import TickIcon from '../assets/svgs/tick.svg';

const Answer = ({ item, title, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selectedAnswer : null]}
      onPress={() => onPress(item || title)}
      activeOpacity={0.8}>
      <Text style={styles.title}>{item?.title || title}</Text>
      {isSelected ? (
        <View style={styles.tickContainer}>
          <TickIcon width={getRW(20)} height={getRW(20)} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Answer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: getRH(65),
    marginHorizontal: getRW(30),
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
  tickContainer: {
    width: getRW(40),
    height: getRW(40),
    backgroundColor: Colors.PINK,
    borderRadius: getRW(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
