import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Index from '../../components/silentModeBackground'
import SilentModeCard from '../../components/silentModeCard'

const SilentMode = () => {
  const data = [
    { id: 1, name: 'Fajr', startTime: '1', endTime:'10' },
    { id: 2, name: 'Zuhr', startTime: '2', endTime:'20' },
    { id: 3, name: 'Asar', startTime: '3', endTime:'30' },
    { id: 4, name: 'Maghrib', startTime: '4', endTime:'40' },
    { id: 5, name: 'Isha', startTime: '5', endTime:'50' },

  ];
  return (
    <View style={styles.container}>
      <View>
      <Index header={'Silent Mode'} title={'Prayer Silent Mode'} description={'Set the Alarm to get Reminder before Prayer'}/>
      </View>
      <ScrollView>
      {data.map(item => (
        <SilentModeCard key={item.id} item={item} />
      ))}
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
container:{
  // flex:1,
  backgroundColor:'#EBEBEB',
  height:'100%',
    width:'100%',

}

})

export default SilentMode