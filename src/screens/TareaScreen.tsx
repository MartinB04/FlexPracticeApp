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

    },
    cajaMorada: {
        width:100,
        height:100,
        borderColor: "white",
        borderWidth: 10,
        backgroundColor: "purple",
    },
    cajaNaranja: {
        width:100,
        height:100,
        borderColor: "white",
        borderWidth: 10,
        backgroundColor: "orange",
    },
    cajaAzul: {
        width:100,
        height:100,
        borderColor: "white",
        borderWidth: 10,
        backgroundColor: "blue",
    },
})