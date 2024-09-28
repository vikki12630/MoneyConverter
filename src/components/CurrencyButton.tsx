import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {


  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    height: 'auto'
  },
  flag: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  country: {
    fontSize: 14,
    color: '#2d3436',
  },
});

export default CurrencyButton