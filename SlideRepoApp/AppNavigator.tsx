import { createStackNavigator } from '@react-navigation/stack';
import Index from './app/(tabs)/index';  // Import the main screen
import Category from './screens/CategoryPage'; // Import the Category screen
import Travel from './screens/Travel'; // Import the Travel screen

// Define the type RootStackParamList for type safety
export type RootStackParamList = {
  Index: undefined;  // No params for Index screen
  Category: {
    name: string;
    subcategories: string[];
  };  // Params for Category screen
  Travel: undefined;  // No params for Travel screen
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index" component={Index} />  {/* Main screen */}
      <Stack.Screen name="Category" component={Category} />  {/* Category screen */}
      <Stack.Screen name="Travel" component={Travel} />  {/* Travel screen */}
    </Stack.Navigator>
  );
}
