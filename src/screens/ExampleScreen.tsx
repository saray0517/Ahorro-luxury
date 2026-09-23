import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '../theme';

export default function ExampleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pantalla de ejemplo lista para extender módulos adicionales.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  texto: {
    color: COLORS.muted,
    fontSize: FONT_SIZES.sm,
    textAlign: 'center',
  },
});