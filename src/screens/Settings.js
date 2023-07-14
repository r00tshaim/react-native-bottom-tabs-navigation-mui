import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Settings = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Settings Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SettingDetails')}>
        <Text>
          Goto Settings Details
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({})