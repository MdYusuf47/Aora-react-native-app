import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <>
        <Text>Header 33.30</Text>
        <Slot/>
        <Text>Footer</Text>
    </>
  )
}

export default RootLayout

