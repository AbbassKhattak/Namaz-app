import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import SilentMode from './assets/screens/silent Mode/silentMode'
import ReminderScreen from './assets/screens/reminderSettings/reminderScreen';

const App = () => {
  return (
    <View>
    {/* <SilentMode /> */}
    <ReminderScreen />
    </View>
  )
}

export default App