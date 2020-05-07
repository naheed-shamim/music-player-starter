import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Theme } from '../CommonStyles';

export const LoadingSpinner = (props) => {
  const { visible } = props;

  return visible ? (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={Theme.PRIMARY_ACCENT} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(242,242,242,0.4)',
  },
});
