import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '../theme';

export default function InteractionScreen() {
  const [concepto, setConcepto] = useState<string>('');
  const [valor, setValor] = useState<string>('');

  const guardarMovimiento = () => {
    if (!concepto.trim() || !valor.trim()) {
      Alert.alert('Atención', 'Por favor llena todos los campos.');
      return;
    }
    Alert.alert('Éxito', `Movimiento registrado: ${concepto} por $${valor}`);
    setConcepto('');
    setValor('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nuevo Movimiento</Text>

      <Text style={styles.label}>Concepto</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Depósito semanal"
        placeholderTextColor={COLORS.muted}
        value={concepto}
        onChangeText={setConcepto}
      />

      <Text style={styles.label}>Monto</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. 50000"
        placeholderTextColor={COLORS.muted}
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <TouchableOpacity style={styles.boton} onPress={guardarMovimiento}>
        <Text style={styles.textoBoton}>Guardar Movimiento</Text>
      </TouchableOpacity>
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
    marginBottom: SPACING.xl,
  },
  label: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.xs,
    marginBottom: SPACING.xs,
    fontWeight: '600',
  },
  input: {
    backgroundColor: COLORS.white,
    color: COLORS.primary,
    borderRadius: SPACING.sm,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.muted,
    marginBottom: SPACING.lg,
  },
  boton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.md,
    borderRadius: SPACING.sm,
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  textoBoton: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.md,
  },
});