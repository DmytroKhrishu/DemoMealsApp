import { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { StyleSheet, Text, View } from 'react-native';

export default function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.message}>
          No favorite meals yet.
          Add some!
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
   
  },
  message: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#8d644a',
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 8
  },
});
