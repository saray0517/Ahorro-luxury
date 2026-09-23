import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '../types/navigation';
import { COLORS } from '../theme';

import CountScreen from '../screens/Count';
import CardScreen from '../screens/Card';
import CalendarScreen from '../screens/Calendar';
import InteractionScreen from '../screens/interaction';
import ExampleScreen from '../screens/ExampleScreen';
import ProfileScreen from '../screens/Profile';

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Count"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleAlign: 'center',
        contentStyle: { backgroundColor: COLORS.bgLight },
      }}
    >
      <Stack.Screen name="Count" component={CountScreen} options={{ title: 'Mi Ahorro' }} />
      <Stack.Screen name="Card" component={CardScreen} options={{ title: 'Mis Tarjetas' }} />
      <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Historial y Fechas' }} />
      <Stack.Screen name="Interaction" component={InteractionScreen} options={{ title: 'Movimientos' }} />
      <Stack.Screen name="ExampleScreen" component={ExampleScreen} options={{ title: 'Detalles Extra' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Mi Perfil' }} />
    </Stack.Navigator>
  );
}