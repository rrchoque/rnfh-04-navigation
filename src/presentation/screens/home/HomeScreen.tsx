import { Pressable, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components';

export const HomeScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer )  }>
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [])

  return (
    <View style={ globalStyles.container }>
      
      <PrimaryButton 
        onPress={ () => navigation.navigate('Products' as never)  }
        label="Productos"
      />

      <PrimaryButton 
        onPress={ () => navigation.navigate('Settings' as never)  }
        label="Settings"
      />


    </View>
  )
}