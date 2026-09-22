import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.brandTitle}>Ahorro Luxury</Text>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        placeholderTextColor={COLORS.muted}
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor={COLORS.muted}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={COLORS.muted}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: COLORS.bgLight },
  brandTitle: { fontSize: 28, fontWeight: 'bold', color: COLORS.secondary, textAlign: 'center', marginBottom: 5 },
  title: { fontSize: 18, color: COLORS.primary, marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: COLORS.white, padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: COLORS.muted },
  button: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 },
  linkText: { color: COLORS.secondary, textAlign: 'center', marginTop: 15 }
});