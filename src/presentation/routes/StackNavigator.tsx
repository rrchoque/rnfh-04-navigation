import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProductScreen, ProductsScreen, SettingsScreen } from '../screens';
import { HamburgerMenu } from '../components';

export type RootStackParams = {
  Home: undefined,
  Product: { id: number, name: string },
  Products: undefined,
  Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Stack.Navigator screenOptions={ {
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </>

  );
}