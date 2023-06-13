import { View, Text,TouchableOpacity,Image,} from 'react-native'
import React,{useState} from 'react'
import styles from './style'

const SilentModeCard = ({item}) => {
    const [img,setImg]= useState(true)

    const clickHandler=()=>{
        setImg(!img)
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.drawer1}>
                    <View>
                        <Text style={[styles.blackText,styles.boldText,styles.text14]}>{item.name}</Text>
                    </View>
                    <View >
                        <TouchableOpacity onPress={clickHandler}>
                            <Image 
                            source={img?require('../../images/switchOn.png'):require('../../images/switchOff.png')}
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
                        <Text style={[styles.greyText,styles.text14,styles.boldText]}>{item.startTime}</Text>
                    </View >
                    <View style={[styles.endTime2,styles.box]}>
                    <Text style={[styles.greyText,styles.text14,styles.boldText]}>{item.endTime}</Text>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

export default SilentModeCard