import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { fonts } from '../font';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';


const PickupLineGeneratorScreen = ({ lines }) => {
  let [fontsLoaded] = useFonts(fonts);
  const [category, setCategory] = useState("romantic");
  const [line, setLine] = useState("");

  const generateRandomLine = () => {
    const filteredLines = lines.filter((line) => {
      return line.category === category;
    });
    const randomIndex = Math.floor(Math.random() * filteredLines.length);
    setLine(filteredLines[randomIndex].text);
  };

  return (
    <LinearGradient
      colors={["#FFB6C1", "#FF69B4", "#FF00FF"]}
      style={styles.container}
    >
        <Text style={styles.title}>Pick-Up Line Generator</Text>
      <View style={styles.form}>
      <Picker
          style={styles.picker}
          selectedValue={category}
          onValueChange={(value) => setCategory(value)}>
          <Picker.Item label="Romantic" value="romantic" />
          <Picker.Item label="Funny" value="funny" />
          <Picker.Item label="Cheesy" value="cheesy" />
        </Picker>
        <TouchableOpacity style={styles.button} onPress={generateRandomLine}>
          <Text style={styles.buttonText}>Generate Line</Text>
        </TouchableOpacity>
      </View>
      {/* { */}
      {line !== '' && (
        
        <View style={styles.lineContainer}>
          <Text style={styles.line}>{line}</Text>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  picker: {
    flex: 1,
    marginRight: 10,
  },
  lineContainer: {
    marginTop: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    fontSize: 20,
    // fontFamily: !fonts.Courgette,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
});

export default PickupLineGeneratorScreen;


