import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../Screens/HomeScreen'
import DetailScreen from '../Screens/DetailScreen'
import ListDetailScreen from '../Screens/ListDetailScreen'

export type RootStackParamList = {
  Indicadores: undefined
  DetailScreen: { title: string, convertUnit: string }
  ListDetailScreen: { title: string, convertUnit: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Stacks: React.FC = () => (
  <Stack.Navigator initialRouteName="Indicadores">
    <Stack.Screen
      name="Indicadores"
      component={HomeScreen}
      options={{ headerTitleAlign: 'center' }}
    />
    <Stack.Screen
      name="DetailScreen"
      component={DetailScreen}
      options={{ headerTitleAlign: 'center' }}
      initialParams={{title: '', convertUnit: ''}}
    />
    <Stack.Screen
      name="ListDetailScreen"
      component={ListDetailScreen}
      options={{ headerTitleAlign: 'center' }}
      initialParams={{title: '', convertUnit: ''}}
    />
  </Stack.Navigator>
)

export default Stacks