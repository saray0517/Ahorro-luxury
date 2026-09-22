import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.brandTitle}>Ahorro Luxury</Text>
      <Text style={styles.welcome}>Welcome Back!</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Balance</Text>
        <Text style={styles.amount}>$150.00</Text>
      </View>

      <TouchableOpacity style={[styles.navButton, { backgroundColor: COLORS.primary }]} onPress={() => navigation.navigate('Raffle')}>
        <Text style={styles.btnText}>View Raffles</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.navButton, { backgroundColor: COLORS.secondary }]} onPress={() => navigation.navigate('Savings')}>
        <Text style={styles.btnText}>Manage Savings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.bgLight },
  brandTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.secondary, textAlign: 'center', marginTop: 20 },
  welcome: { fontSize: 18, fontWeight: 'bold', marginBottom: 20, color: COLORS.primary, textAlign: 'center' },
  card: { backgroundColor: COLORS.white, padding: 20, borderRadius: 12, elevation: 3, marginBottom: 20, alignItems: 'center' },
  cardTitle: { fontSize: 14, color: COLORS.muted },
  amount: { fontSize: 32, fontWeight: 'bold', color: COLORS.secondary, marginTop: 5 },
  navButton: { padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  btnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 }
});