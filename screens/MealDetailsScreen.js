import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';
import { useEffect } from 'react';

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const meal = MEALS.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      title: meal.title,
    });
  }, [meal, navigation]);
  let stepCount = 0;
  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.text}>Duration: {meal.duration} minutes</Text>
        <Text style={styles.text}>Complexity: {meal.complexity}</Text>
        <Text style={styles.text}>Cost: {meal.affordability}</Text>
      </View>
      <View>
        <Text style={styles.title}>Ingredients</Text>
        {meal.ingredients.map((ingredient) => (
          <Text key={ingredient} style={styles.text}>
            {ingredient}
          </Text>
        ))}
        <Text style={styles.title}>Steps</Text>
        {meal.steps.map((step) => {
          stepCount++;
          return (
            <Text key={step} style={styles.text}>
              {stepCount}: {step}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    padding: 8,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    padding: 8,
    color: 'white',
  },
  details: {
    borderBottomWidth: 2,
    borderColor: 'white',
    padding: 16,
  },
});
