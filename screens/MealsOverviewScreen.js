import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  
  return <MealsList items={displayedMeals} />;
}
