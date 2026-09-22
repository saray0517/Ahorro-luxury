const { getDefaultConfig } = require('expo/metro-config');

// Forzar la desactivación de externals directamente en la variable de entorno de Node
process.env.EXPO_USE_METRO_EXTERNALS = '0';

const config = getDefaultConfig(__dirname);

module.exports = config;