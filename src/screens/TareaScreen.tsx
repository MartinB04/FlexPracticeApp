import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzul}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#37d47e",
        justifyContent:"center",
        flexDirection:'column'

    },
    cajaMorada: {
        width:100,
        height:100,
        borderColor: "white",
        borderWidth: 10,
        backgroundColor: "purple",
        position: 'absolute',
        right: 0,
        top: 0,
    },
    cajaNaranja: {
        width:100,
        height:100,
        borderColor: "white",
        borderWidth: 10,
        backgroundColor: "orange",
        alignSelf: 'center'
    },
    cajaAzul: {
        width:100,
        height:100,
        borderColor: "white",
        borderWidth: 10,
        backgroundColor: "blue",
        position: 'absolute',
        bottom:0,
        
    },
})