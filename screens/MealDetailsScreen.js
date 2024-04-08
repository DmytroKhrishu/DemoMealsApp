import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';
import { useEffect } from 'react';
import List from '../components/MealDetail/List';

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
        <Text style={styles.subtitle}>Ingredients</Text>
        <List data={meal.ingredients} />
        <Text style={styles.subtitle}>Steps</Text>
        <List data={meal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    padding: 10,
    color: 'white',
    borderBottomWidth: 4,
    borderColor: 'white',
  },
  subtitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    padding: 8,
    marginHorizontal: 30,
    color: 'white',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    padding: 6,
    color: 'white',
  },
  details: {
    padding: 16,
  },
  
});
