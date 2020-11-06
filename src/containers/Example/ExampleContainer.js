import React from 'react'
import Example from './Example'
import {useNavigation} from '@react-navigation/native'
// import { useDispatch } from 'react-redux'

export default () => {
  const {navigate} = useNavigation()

  //hook for dispatch some action
  // const dispatch = useDispatch()

  const handlePressNavigate = () => {
    navigate('Example2', {example: 'test'})
  }

  return (
    <Example handlePressNavigate={handlePressNavigate} />
  )
}
