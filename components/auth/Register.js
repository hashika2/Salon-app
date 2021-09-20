import React from "react";
import {View,Text,TouchableOpacity,StatusBar, SafeAreaView, StyleSheet, TextInput,Image, Button } from "react-native";

export default Register = ({navigation}) => {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [username, onChangeUsername] = React.useState(null);
  
    return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Register</Text>
       <Image style={styles.image} source = {require("../../assets/logo.jpg")}/>
          <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Username"
        // keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        keyboardType="numeric"
      />
    </SafeAreaView>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} color="#841584" >Register</Text>
      </TouchableOpacity>
      <Text style={styles.accountText}>You already have an account <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.signIn}>Sign In</Text>
    </TouchableOpacity></Text>
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
    paddingTop:20
  },
  image:{
    width: 200,
    height: 200,
    // marginBottom: 40,
    // marginTop: 100,
    // marginLeft:20,
    // marginRight: 20
  },
  input: {
    height: 40,
    width:240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  loginBtn: {
    width: "50%",
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
    
  },
  homeTitle:{
    fontSize: 25,
    fontWeight: "bold",
    color:"green",
    // fontFamily:"fangsong"
  },
  accountText:{
      paddingTop:20
  },
  signIn:{
      color:"green"
  }
});