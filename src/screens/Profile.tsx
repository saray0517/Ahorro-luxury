import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '../theme';

export default function ProfileScreen() {
  const usuario = {
    nombre: 'Brayan Arenas Jaramillo',
    email: 'brayanarenasjaramillo461@gmail.com',
    ciudad: 'Medellín, Antioquia',
    ocupacion: 'Desarrollador de Software',
    nivelCuenta: 'Socio',
    estadoCuenta: 'Activa'
  };

  const manejarEditar = () => {
    Alert.alert('Información', 'La edición de perfil estará disponible próximamente.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>BA</Text>
        </View>
        <Text style={styles.nombrePrincipal}>{usuario.nombre}</Text>
        <Text style={styles.etiquetaNivel}>{usuario.nivelCuenta}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.seccionTitulo}>Datos Personales</Text>

        <View style={styles.filaInfo}>
          <Text style={styles.label}>Correo electrónico</Text>
          <Text style={styles.valor}>{usuario.email}</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.filaInfo}>
          <Text style={styles.label}>Ubicación</Text>
          <Text style={styles.valor}>{usuario.ciudad}</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.filaInfo}>
          <Text style={styles.label}>Ocupación</Text>
          <Text style={styles.valor}>{usuario.ocupacion}</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.filaInfo}>
          <Text style={styles.label}>Estado de la cuenta</Text>
          <Text style={[styles.valor, styles.valorActivo]}>{usuario.estadoCuenta}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botonEditar} onPress={manejarEditar}>
        <Text style={styles.textoBotonEditar}>Editar Información</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.xl,
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: SPACING.lg,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  avatarTexto: {
    color: COLORS.white,
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
  },
  nombrePrincipal: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
  },
  etiquetaNivel: {
    color: COLORS.secondary,
    fontSize: FONT_SIZES.xs,
    marginTop: SPACING.xs,
    fontWeight: '600',
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: SPACING.md,
    borderColor: COLORS.muted,
    borderWidth: 0.5,
  },
  cardInfo: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: SPACING.lg,
    padding: SPACING.xl,
    marginTop: SPACING.sm,
    borderColor: COLORS.muted,
    borderWidth: 0.5,
  },
  seccionTitulo: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.md,
    fontWeight: 'bold',
    marginBottom: SPACING.lg,
  },
  filaInfo: {
    marginVertical: SPACING.xs,
  },
  label: {
    color: COLORS.muted,
    fontSize: FONT_SIZES.xs,
    marginBottom: SPACING.xs,
  },
  valor: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.sm,
    fontWeight: '500',
  },
  valorActivo: {
    color: COLORS.success,
    fontWeight: 'bold',
  },
  divisor: {
    height: 1,
    backgroundColor: COLORS.bgLight,
    marginVertical: SPACING.sm,
  },
  botonEditar: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderColor: COLORS.secondary,
    borderWidth: 1.5,
    padding: SPACING.lg,
    borderRadius: SPACING.md,
    alignItems: 'center',
    marginTop: SPACING.xl,
  },
  textoBotonEditar: {
    color: COLORS.secondary,
    fontWeight: '600',
    fontSize: FONT_SIZES.md,
  },
});