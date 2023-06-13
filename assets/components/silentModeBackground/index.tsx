import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Entypo';
const Index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.drawer1}>
                <TouchableOpacity>
                <View style={styles.backButton}>
                    <Icon name="chevron-thin-left" size={24} color="#000" />
                </View>
                </TouchableOpacity>
                <View style={styles.silentMode}>
                    <Text style={[styles.blackText, styles.text16,styles.boldText]}>Silent Mode</Text>
                </View>
            </View>
            <View style={styles.drawer2}>
                <Text style={[styles.blackText, styles.text16,styles.boldText]}>Prayer Silent Modes</Text>
            </View>
            <View style={styles.drawer2}>
                <Text style={[styles.greyText, styles.text10]}>Set the time to Auto Turn on Silent Mode During Prayer</Text>
            </View>

        </View >
    )
}

export default Index