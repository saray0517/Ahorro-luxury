import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '../theme';

interface Tarjeta {
  id: string;
  banco: string;
  numero: string;
  tipo: string;
}

const TARJETAS_DATA: Tarjeta[] = [
  { id: '1', banco: 'Rifa #1', numero: '89', tipo: 'Al día' },
  { id: '2', banco: 'Rifa #2', numero: '21', tipo: 'En Mora' },
];

export default function CardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Boletas Adquiridas</Text>
      <FlatList
        data={TARJETAS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <Text style={[styles.banco,
              {color: COLORS.muted}
            ]}>{item.banco}</Text>
            <Text style={styles.numero}>{item.numero}</Text>
            <Text style={[
              styles.tipo,
              { color: item.tipo === "En Mora" ? COLORS.error : COLORS.success }
            ]}>
              {item.tipo}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.xl,
  },
  titulo: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    marginBottom: SPACING.lg,
  },
  tarjeta: {
    backgroundColor: COLORS.primary,
    padding: SPACING.xl,
    borderRadius: SPACING.md,
    marginBottom: SPACING.md,
  },
  banco: {
    color: COLORS.secondary,
    fontSize: FONT_SIZES.md,
    fontWeight: 'bold',
  },
  numero: {
    color: COLORS.white,
    fontSize: FONT_SIZES.lg,
    letterSpacing: 2,
    marginVertical: SPACING.sm,
  },
  tipo: {
    color: COLORS.muted,
    fontSize: FONT_SIZES.xs,
  },
});