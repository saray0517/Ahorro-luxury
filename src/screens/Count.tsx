import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/navigation';
import { COLORS, SPACING, FONT_SIZES } from '../theme';

export default function CountScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [balance] = useState<number>(150000);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardBalance}>
        <Text style={styles.subtitulo}>Ahorro Total Disponible</Text>
        <Text style={styles.monto}>${balance.toLocaleString('es-CO')}</Text>
      </View>

      <View style={styles.menuNavegacion}>
        <TouchableOpacity 
          style={styles.botonNavegar} 
          onPress={() => navigation.navigate('Card')}
        >
          <Text style={styles.textoBoton}>Boleta</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botonNavegar} 
          onPress={() => navigation.navigate('Calendar')}
        >
          <Text style={styles.textoBoton}>Movimientos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botonNavegar} 
          onPress={() => navigation.navigate('Interaction')}
        >
          <Text style={styles.textoBoton}>Gestionar Movimientos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botonNavegar} 
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.textoBoton}>Mi Información Personal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.xl,
    alignItems: 'center',
  },
  cardBalance: {
    width: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: SPACING.lg,
    padding: SPACING.xxl,
    alignItems: 'center',
    marginVertical: SPACING.lg,
  },
  subtitulo: {
    color: COLORS.muted,
    fontSize: FONT_SIZES.sm,
    marginBottom: SPACING.sm,
  },
  monto: {
    color: COLORS.white,
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
  },
  accionesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: SPACING.md,
    gap: SPACING.sm,
  },
  botonAccion: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.md,
    borderRadius: SPACING.sm,
    alignItems: 'center',
  },
  botonReset: {
    backgroundColor: COLORS.error,
  },
  textoBotonAccion: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: FONT_SIZES.xs,
  },
  menuNavegacion: {
    width: '100%',
    marginTop: SPACING.xl,
    gap: SPACING.md,
  },
  botonNavegar: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.muted,
    borderWidth: 1,
    padding: SPACING.lg,
    borderRadius: SPACING.md,
    alignItems: 'center',
  },
  textoBoton: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: FONT_SIZES.md,
  },
});