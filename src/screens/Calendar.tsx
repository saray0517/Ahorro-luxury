import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '../theme';

interface HistorialItem {
  id: string;
  fecha: string;
  descripcion: string;
  monto: number;
}

const HISTORIAL: HistorialItem[] = [
  { id: '1', fecha: '2026-09-20', descripcion: 'Ahorro programado', monto: 150000 },
  { id: '2', fecha: '2026-09-15', descripcion: 'Pago de Boletas', monto: 55000 },
];

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Movimientos</Text>
      <FlatList
        data={HISTORIAL}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
              <Text style={styles.fecha}>{item.fecha}</Text>
            </View>
            <Text style={styles.monto}>+${item.monto.toLocaleString('es-CO')}</Text>
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: SPACING.lg,
    borderRadius: SPACING.sm,
    marginBottom: SPACING.sm,
    borderColor: COLORS.muted,
    borderWidth: 0.5,
  },
  descripcion: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.sm,
    fontWeight: '500',
  },
  fecha: {
    color: COLORS.muted,
    fontSize: FONT_SIZES.xs,
    marginTop: SPACING.xs,
  },
  monto: {
    color: COLORS.success,
    fontSize: FONT_SIZES.md,
    fontWeight: 'bold',
  },
});