import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';

const FavoritesScreen = () => {
const [favorites, setFavorites] = useState([]);

const handleAddPress = () => {};

const handleRemovePress = (index) => {
  setFavorites((prevFavorites) =>
    prevFavorites.filter((_, i) => i !== index)
  );
};

return (
  <SafeAreaView style={styles.container}>
    <View style={styles.favoritesContainer}>
      <Text h4 style={styles.title}>
        Favorites
      </Text>
      {favorites.length > 0 ? (
        favorites.map((favorite, index) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{favorite}</ListItem.Title>
            </ListItem.Content>
            <Button
              title="Remove"
              onPress={() => handleRemovePress(index)}
              buttonStyle={styles.removeButton}
              containerStyle={styles.removeButtonContainer}
            />
          </ListItem>
        ))
      ) : (
        <Text h5 style={styles.emptyText}>
          No favorites added yet.
        </Text>
      )}
      <Button
        title="Add Favorite"
        onPress={handleAddPress}
        buttonStyle={styles.addButton}
        containerStyle={styles.addButtonContainer}
      />
    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
padding: 20,
},
favoritesContainer: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
title: {
marginBottom: 10,
},
emptyText: {
textAlign: 'center',
},
addButton: {
backgroundColor: '#FFDAB9',
borderRadius: 10,
},
addButtonContainer: {
marginTop: 20,
width: '50%',
},
removeButton: {
backgroundColor: '#DC143C',
borderRadius: 10,
},
removeButtonContainer: {
width: '30%',
},
});

export default FavoritesScreen;
