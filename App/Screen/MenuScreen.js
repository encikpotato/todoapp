import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const MenuScreen = () => {
  return (
    <View>
      <Text style={styles.title}>TODO LIST</Text>
      <View style={styles.container}>
        <Text style={styles.itemText}>Wash Car</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.itemText}>Buy Food</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.itemText}>Meet Kayshav</Text>
      </View>
      <Image style={styles.button} source={require('../Assets/plus.png')}/>
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '700',
    },
    itemText: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    container: {
        borderColor: '#000',
        borderWidth: 1, 
        borderRadius: 5,
        width: 300,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
    },
    button: {
        width: 50,
        height: 50,
    }
})