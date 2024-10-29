import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs initialRouteName="index" screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen name="index" options={{
        tabBarIcon: ({ color }) => <Image source={require('../../assets/images/icon.png')} style={styles.img} />
      }} />

    </Tabs>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 24,
    height: 24,
  }
})