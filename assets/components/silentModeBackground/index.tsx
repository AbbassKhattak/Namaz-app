import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Entypo';
const Index = ({header,title,description}) => {
    return (
        <View style={styles.container}>
            <View style={styles.drawer1}>
                <TouchableOpacity>
                <View style={styles.backButton}>
                    <Icon name="chevron-thin-left" size={24} color="#000" />
                </View>
                </TouchableOpacity>
                <View style={styles.silentMode}>
                    <Text style={[styles.blackText, styles.text14,styles.boldText]}>{header}</Text>
                </View>
            </View>
            <View style={styles.drawer2}>
                <Text style={[styles.blackText, styles.text16,styles.boldText]}>{title}</Text>
            </View>
            <View style={styles.drawer2}>
                <Text style={[styles.greyText, styles.text10]}>{description}</Text>
            </View>

        </View >
    )
}

export default Index