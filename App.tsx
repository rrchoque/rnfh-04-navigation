import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from './src/presentation/routes/StackNavigator';

function App(): React.JSX.Element {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    )
}

export default App;
