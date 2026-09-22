import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme';

export default function RaffleScreen() {
  const raffleNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.brandTitle}>Ahorro Luxury Raffles</Text>
      <Text style={styles.subtitle}>Select your lucky number:</Text>

      <View style={styles.grid}>
        {raffleNumbers.map((num) => (
          <TouchableOpacity key={num} style={styles.numberBox}>
            <Text style={styles.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.bgLight },
  brandTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary, textAlign: 'center' },
  subtitle: { fontSize: 14, color: COLORS.muted, textAlign: 'center', marginVertical: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  numberBox: { backgroundColor: COLORS.secondary, width: '18%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginBottom: 15 },
  numberText: { color: COLORS.white, fontWeight: 'bold', fontSize: 18 }
});