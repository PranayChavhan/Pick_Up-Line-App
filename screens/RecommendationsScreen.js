import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text, Button } from "react-native-elements";
import pickupLines from "../pickupLines.json";

const RecommendationsScreen = () => {
  const [recommendedLine, setRecommendedLine] = useState("");

  const handleFeedbackPress = (liked) => {
    // Filter out the pickup lines the user has already seen
    const filteredLines = pickupLines.filter(
      (line) => line !== recommendedLine
    );
    // If the user liked the previous recommendation, add it to favorites
    if (liked) {
      setRecommendedLine((prevLine) => {
        return prevLine && prevLine.length > 0 ? prevLine : "";
      });
    }

    // If there are still lines left, generate a new recommendation
    if (filteredLines.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredLines.length);
      setRecommendedLine(filteredLines[randomIndex]);
    } else {
      setRecommendedLine("No more recommendations.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.recommendationContainer}>
        {recommendedLine ? (
          <>
            <Text h4 style={styles.title}>
              Our Recommendation:
            </Text>
            <Text h3 style={styles.lineText}>
              {recommendedLine}
            </Text>
            <View style={styles.feedbackButtonsContainer}>
              <Button
                title="Like"
                onPress={() => handleFeedbackPress(true)}
                buttonStyle={styles.likeButton}
                containerStyle={styles.feedbackButtonContainer}
              />
              <Button
                title="Dislike"
                onPress={() => handleFeedbackPress(false)}
                buttonStyle={styles.dislikeButton}
                containerStyle={styles.feedbackButtonContainer}
              />
            </View>
          </>
        ) : (
          <Text h4 style={styles.title}>
            Press the button to get a recommendation.
          </Text>
        )}
        <Button
          title="Get Recommendation"
          onPress={() => handleFeedbackPress(false)}
          buttonStyle={styles.recommendButton}
          containerStyle={styles.recommendButtonContainer}
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
  recommendationContainer: {
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
  feedbackButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "60%",
  },
  feedbackButtonContainer: {
    width: "40%",
  },
  likeButton: {
    backgroundColor: "#00BFFF",
    borderRadius: 10,
  },
  dislikeButton: {
    backgroundColor: "#DC143C",
    borderRadius: 10,
  },
  recommendButton: {
    backgroundColor: "#FFDAB9",
    borderRadius: 10,
  },
  recommendButtonContainer: {
    marginTop: 20,
    width: "50%",
  },
});

export default RecommendationsScreen;
