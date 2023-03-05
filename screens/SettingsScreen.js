import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import theme from '../theme';

const SettingsScreen = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Dark mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={toggleDarkMode}
          trackColor={{ true: theme.colors.primary }}
          thumbColor={darkModeEnabled ? theme.colors.background : theme.colors.text}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Font size</Text>
        <Text style={styles.fontSize}>Medium</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
  },
  fontSize: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.primary,
  },
});

export default SettingsScreen;
