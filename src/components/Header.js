import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

const Header = ({ onPressBack, title }) => {
  return (
    <View style={styles.container}>
      {onPressBack ? (
        <TouchableOpacity onPress={onPressBack}>
          <Text style={styles.back}>{' <'}</Text>
        </TouchableOpacity>
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
  back: {
    fontSize: Fonts.size(30),
    color: Colors.WHITE,
    marginTop: getRH(5),
    fontWeight: 'bold',
    marginBottom: getRH(5),
  },
  title: {
    fontSize: Fonts.size(30),
    color: Colors.WHITE,
    fontWeight: '600',
  },
});
