import React, {useEffect} from 'react'
import Example2 from './Example2'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {
  useNavigation,
  useRoute,
} from '@react-navigation/native'

export default () => {
  const insets = useSafeAreaInsets()
  const {goBack} = useNavigation()
  const {params} = useRoute()

  const handlePressNavigate = () => {
    goBack()
  }

  useEffect(() => {
    console.log(params)
  }, [])

  return (
    <Example2
      insets={insets}
      handlePressNavigate={handlePressNavigate}
    />
  )
}
