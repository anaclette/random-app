import React, {useEffect, useState} from 'react';
import {useGetRecipesQuery} from '@/state/spoonacular';
import {Ent} from '@/types/interfaces';
import {removeTags} from '@/utils/helpers/helperFunctions';
import colors from '@/utils/themes/colors';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {baseUrl} from '@/utils/constants';

export const Recipe = () => {
  const {data} = useGetRecipesQuery(baseUrl);
  const [ingredients, setIngredients] = useState<Ent[]>();

  useEffect(() => {
    data?.recipes.forEach(recipe => {
      recipe.analyzedInstructions.forEach(instructions => {
        instructions.steps.forEach(steps => {
          setIngredients(steps.ingredients);
        });
      });
    });
  }, [data?.recipes]);

  const unavailableIngredients = ingredients?.length === 0;

  return (
    <ScrollView style={styles.container}>
      {data?.recipes.map(recipe => {
        return (
          <View style={styles.wrapper} key={recipe.id.toString()}>
            <Text style={[styles.title, styles.recipeTitle]}>
              {recipe.title}
            </Text>
            <Image source={{uri: recipe.image}} style={styles.image} />
            <Text style={[styles.title, styles.ingredientsTitle]}>
              Ingredients:
            </Text>
            <View style={styles.ingredientsContainer}>
              {!unavailableIngredients ? (
                ingredients?.map(ingredient => (
                  <Text
                    key={ingredient.id.toString()}
                    style={styles.ingredientItem}>
                    - {ingredient.name}
                  </Text>
                ))
              ) : (
                <Text style={styles.title}>No ingredients available</Text>
              )}
            </View>
            <Text style={[styles.title, styles.instructionsTitle]}>
              Instructions:
            </Text>
            <Text style={styles.title}>{removeTags(recipe.instructions)}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.midnightGreen,
  },
  wrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  recipeTitle: {
    fontWeight: '900',
    fontSize: 17,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.alabster,
  },
  ingredientsTitle: {
    fontSize: 15,
  },
  instructionsTitle: {
    fontSize: 15,
  },
  ingredientsContainer: {
    alignItems: 'center',
  },
  ingredientItem: {
    color: colors.alabster,
  },
  title: {
    color: colors.alabster,
    marginBottom: 10,
  },
});
