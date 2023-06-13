import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'


const TimeRemainingCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
          <View style={[styles.slug1,styles.box]}>
            <Text style={[styles.blackText,styles.textten,styles.boldText]}>{item.name}</Text>
          </View>
          <View style={styles.slug2}>
            <Text style={[styles.greyText,styles.textten]}>Remind me Before</Text>
          </View>
          <View style={styles.slug3}>
            <Text style={[styles.blackText,styles.textten]}>{item.Time}</Text>
          </View>
          <View style={styles.slug4}>
            <Text style={[styles.greyText,styles.textten]}>Minutes</Text>
          </View>
      </View>
    </View>
  )
}

export default TimeRemainingCard