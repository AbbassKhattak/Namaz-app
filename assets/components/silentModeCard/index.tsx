import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './style'

const SilentModeCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.drawer1}>
                    <View>
                        <Text style={[styles.blackText,styles.boldText,styles.text14]}>Fajr</Text>
                    </View>
                    <View >
                        <TouchableOpacity>
                            <Image 
                            source={require('../../images/switchOn.png')}
                            style={styles.switch}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.drawer2}>
                    <View>
                        <Text style={[styles.greyText,styles.text14]}>Start Time</Text>
                    </View>
                    <View style={styles.endTime1} >
                    <Text style={[styles.greyText,styles.text14]}>End Time</Text>
                    </View>
                </View>
                <View style={styles.drawer3}>
                    <View style={styles.box}>
                        <Text style={[styles.greyText,styles.text14,styles.boldText]}>04:28</Text>
                    </View >
                    <View style={[styles.endTime2,styles.box]}>
                    <Text style={[styles.greyText,styles.text14,styles.boldText]}>04:45</Text>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

export default SilentModeCard