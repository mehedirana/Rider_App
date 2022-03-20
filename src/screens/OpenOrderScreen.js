import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import OpenOrderHeader from '../components/header/OpenOrderHeader';


const OpenOrderScreen =()=> {
  return (
    <View style={styles.conatainer}>
      <OpenOrderHeader/>
    </View>
  )
}

export default OpenOrderScreen;

const  styles = StyleSheet.create({
    conatainer:{
        flex:1,
        backgroundColor:'#E2E2E2'
        
    }
})