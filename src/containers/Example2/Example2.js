import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Text, View} from 'react-native'
import styles from './styles'

export default ({insets, handlePressNavigate}) => {
  const s = styles(insets)

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={handlePressNavigate}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}
