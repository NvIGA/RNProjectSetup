import {StyleSheet} from 'react-native'

export default (insets) =>
  StyleSheet.create({
    container: {
      paddingTop: insets.top,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
    },
  })
