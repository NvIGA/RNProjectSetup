import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Text, View} from 'react-native'
import s from './styles'

export default ({handlePressNavigate}) => {
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={handlePressNavigate}>
        <Text>Go to second</Text>
      </TouchableOpacity>
    </View>
  )
}
