import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export default function SavingsScreen() {
  const [amount, setAmount] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.brandTitle}>Ahorro Luxury Goals</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Savings</Text>
        <Text style={styles.amount}>$150.00</Text>
      </View>

      <Text style={styles.label}>Enter deposit amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="$0.00"
        placeholderTextColor={COLORS.muted}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Deposit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.bgLight },
  brandTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary, marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: COLORS.white, padding: 20, borderRadius: 12, elevation: 3, marginBottom: 20, alignItems: 'center' },
  cardTitle: { fontSize: 14, color: COLORS.muted },
  amount: { fontSize: 32, fontWeight: 'bold', color: COLORS.secondary, marginTop: 5 },
  label: { fontSize: 16, color: COLORS.primary, marginBottom: 8 },
  input: { backgroundColor: COLORS.white, padding: 12, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: COLORS.muted },
  button: { backgroundColor: COLORS.secondary, padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 }
});