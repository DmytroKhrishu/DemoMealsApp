import { Image, StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';

export default function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;

  const meal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>Details {meal.title}</Text>
      <Text style={styles.text}>
        This meal takes {meal.duration} minutes to make
      </Text>
      <Text style={styles.text}>It is {meal.complexity} to make</Text>
      <Text style={styles.text}>This meal is {meal.affordability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    padding: 8,
    color: 'white',
  },
});
