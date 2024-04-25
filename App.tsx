import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
//import { StackNavigator } from './src/presentation/routes/StackNavigator';
import { SideMenuNavigator } from './src/presentation/routes/SideMenuNavigator';

function App(): React.JSX.Element {
    return (
      <NavigationContainer>
        <SideMenuNavigator />
      </NavigationContainer>
    )
}

export default App;
