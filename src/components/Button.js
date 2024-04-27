import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

const Answer = ({ title, onPress, disabled, loading }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(title)}
      activeOpacity={0.8}
      disabled={disabled}>
      <Text style={styles.title}>{title}</Text>

      {loading ? (
        <View style={styles.indicator}>
          <ActivityIndicator loading={loading} color={Colors.WHITE} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Answer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: getRH(45),
    marginHorizontal: getRW(30),
    marginTop: getRH(10),
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
  indicator: {
    marginLeft: getRW(15),
  },
});
