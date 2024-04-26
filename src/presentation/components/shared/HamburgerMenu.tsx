import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable, Text } from 'react-native';


export const HamburgerMenu = () => {


  const navigation = useNavigation();


  useEffect( () => {
    navigation.setOptions( {
      headerLeft: () => (
        <Pressable 
          style={{ marginLeft: 5 }}
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
          <Text>Menú</Text>
        </Pressable>
      )
    } );
  }, [] );


  return (<></>);
}