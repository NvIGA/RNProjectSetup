import * as React from 'react'

export const isReadyRef = React.createRef()

export const navigationRef = React.createRef()

export function getNavigator() {
  if (isReadyRef.current && navigationRef.current) {
    return navigationRef.current
  }
}
