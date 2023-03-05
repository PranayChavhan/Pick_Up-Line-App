import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text, Button } from "react-native-elements";
import pickupLines from "../pickupLines.json";

const RandomPickupLineScreen = () => {
  const [randomLine, setRandomLine] = useState("");

  const handleGeneratePress = () => {
    const randomIndex = Math.floor(Math.random() * pickupLines.length);
    setRandomLine(pickupLines[randomIndex]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.randomLineContainer}>
        {randomLine ? (
          <>
            <Text h4 style={styles.title}>
              Your Random Pick-Up Line:
            </Text>
            <Text h3 style={styles.lineText}>
              {randomLine}
            </Text>
          </>
        ) : (
          <Text h4 style={styles.title}>
            Press the button to generate a random pick-up line.
          </Text>
        )}
        <Button
          title="Generate"
          onPress={handleGeneratePress}
          buttonStyle={styles.generateButton}
          containerStyle={styles.generateButtonContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  randomLineContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
  },
  lineText: {
    textAlign: "center",
    marginTop: 20,
  },
  generateButton: {
    backgroundColor: "#FFDAB9",
    borderRadius: 10,
  },
  generateButtonContainer: {
    marginTop: 20,
    width: "50%",
  },
});

export default RandomPickupLineScreen;
