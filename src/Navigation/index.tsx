import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { NavigationContainer } from '@react-navigation/native'

import { useAppTheme } from '../Themes'
import dark from '../Themes/dark'
import light from '../Themes/light'

import Stacks from './Stacks'

const AppNavigation: React.FC = () => {
  const appTheme = useAppTheme()

  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({ fade: true })}
      theme={
        appTheme.mode === 'dark'
          ? dark.theme.reactNavigation
          : light.theme.reactNavigation
      }>
      <Stacks />
    </NavigationContainer>
  )
}

export default AppNavigation