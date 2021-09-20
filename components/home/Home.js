import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Book Your Own Stylist</Text>
      <Image style={styles.image} source = {require("../../assets/home.jpg")}/>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText} color="#841584" >Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeTitle:{
    fontSize: 25,
    fontWeight: "bold",
    color:"green",
    // fontFamily:"fangsong"
  },
   image :{
    width: 250,
    height: 400,
    marginBottom: 40,
    marginTop: 100,
    marginLeft:20,
    marginRight: 20
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "green",
    color:"white"
  },
  loginText:{
    fontSize: 20,
    fontWeight: "bold",
    color:"white",
    // fontFamily:"fangsong"    
  }
});
