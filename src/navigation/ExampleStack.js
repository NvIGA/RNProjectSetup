import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ExampleContainer from '../containers/Example/ExampleContainer'
import ExampleContainer2 from '../containers/Example2/ExampleContainer2'

export default () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={'Example'}>
      <Stack.Screen name="Example" component={ExampleContainer} />
      <Stack.Screen name="Example2" component={ExampleContainer2} />
    </Stack.Navigator>
  )
}
