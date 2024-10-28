import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../AppNavigator'; // Import the RootStackParamList

type CategoryRouteProp = RouteProp<RootStackParamList, 'Category'>;

const CategoryPage = () => {
  const route = useRoute<CategoryRouteProp>();
  const { name, subcategories } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <View style={styles.gridContainer}>
        {subcategories.map((subcategory: string) => (
          <TouchableOpacity key={subcategory} style={styles.box}>
            <Text style={styles.boxText}>{subcategory}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    width: '45%',
    height: 100,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  boxText: {
    fontSize: 16,
  },
});

export default CategoryPage;
