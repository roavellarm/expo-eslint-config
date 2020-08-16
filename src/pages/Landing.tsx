import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import styles from './styles'

const Landing: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Landing
