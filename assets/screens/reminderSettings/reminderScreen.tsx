import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Index from '../../components/silentModeBackground'
import TimeRemainingCard from '../../components/timeRemaining/timeRemainingCard'

const ReminderScreen = () => {
    const data = [
        { id: 1, name: 'Fajr', Time:'10' },
        { id: 2, name: 'Zuhr', Time:'20' },
        { id: 3, name: 'Asar', Time:'30' },
        { id: 4, name: 'Maghrib', Time:'40' },
        { id: 5, name: 'Isha', Time:'50' },]
    return (
        <View style={styles.container}>
            <View >
                <Index header={'Reminder Setting'} title={'Reminder Setting'} description={'Set the Alarm to get Reminder before Prayer'} />
            </View>
            <View >

            {data.map(item => (
        <TimeRemainingCard key={item.id} item={item} />
      ))}
                
            </View>

        </View>
    )
}

export default ReminderScreen

const styles = StyleSheet.create({
    container: {
        // flex:1,
        backgroundColor: '#EBEBEB',
        height: '100%',
        width: '100%',

    }
})