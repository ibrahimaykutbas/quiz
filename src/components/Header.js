import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

import BackIcon from '../assets/svgs/back.svg';

const Header = ({
  onPressBack,
  title,
  currentIndex = false,
  totalIndex = false,
}) => {
  return (
    <View style={styles.container}>
      {onPressBack ? (
        <TouchableOpacity style={styles.backContainer} onPress={onPressBack}>
          <BackIcon width={getRW(50)} height={getRW(50)} />
        </TouchableOpacity>
      ) : null}

      {currentIndex && totalIndex ? (
        <Text style={styles.questionText}>
          Question {currentIndex}
          <Text style={{ fontSize: Fonts.size(15) }}> / {totalIndex}</Text>
        </Text>
      ) : null}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    //height: getRH(60),
    marginHorizontal: getRW(20),
    marginBottom: getRH(40),
  },
  backContainer: {
    marginBottom: getRH(5),
  },
  questionText: {
    fontSize: Fonts.size(20),
    color: Colors.WHITE,
    fontWeight: 'bold',
    marginBottom: getRH(10),
  },
  title: {
    fontSize: Fonts.size(30),
    color: Colors.WHITE,
    fontWeight: '600',
    marginRight: getRW(40),
  },
});
