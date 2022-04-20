import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

export default function GlobalButton({text, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{color:'white', fontWeight:'bold'}}>{text}</Text>
    
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
    button:{
        backgroundColor:'#FC6078',
        height:50,
        width:150,
        alignSelf:'center',
        marginTop:10,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    }
})