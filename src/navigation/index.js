import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {navigationRef, isReadyRef} from './RootNavigator'
import ExampleStack from './ExampleStack'

export default () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true
      }}>
      <SafeAreaProvider>
        <ExampleStack />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
