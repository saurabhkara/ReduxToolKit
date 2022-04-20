import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function GlobalTextInput({text, placeholder, isSecure=false}) {
  return (
    <View>
        <Text style={styles.text}> {text}<Text style={{color:'red'}}>*</Text></Text>
        <TextInput 
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={isSecure}

        />
    </View>
  )
}

const styles= StyleSheet.create({
    input:{
        borderColor:'grey',
        borderWidth:1,
        // width:'100%',
        height:50,
        borderRadius:10,
        padding:10,
        margin:10,
        marginBottom:10,

    },
    text:{
        marginHorizontal:10,
        

    }
})