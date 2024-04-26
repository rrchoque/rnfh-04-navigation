import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { globalColors } from '../theme/theme';
import { Tab1Screen, Tab3Screen } from '../screens';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen 
        name="Tab1" 
        options={{ title:'Tab 1', tabBarIcon: ({color}) => (<IonIcon name="accessibility-outline" color={ color } />) }}
        component={ Tab1Screen } />

      <Tab.Screen 
        name="Tab2" 
        options={{ title:'Tab 2', tabBarIcon: ({color}) => (<IonIcon name="airplane-outline" color={ color } />) }}
        component={ TopTabsNavigator } />

<Tab.Screen 
        name="Tab3" 
        options={{ title:'Tab3', tabBarIcon: ({ color }) => ( <IonIcon name="bar-chart-outline" color={ color } /> ) }} 
        component={ StackNavigator } />

    </Tab.Navigator>
  );
};