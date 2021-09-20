import React from 'react';
import {View,Text,TouchableOpacity,StatusBar, SafeAreaView, StyleSheet, TextInput,Image,ImageBackground, ScrollView, AsyncStorage} from "react-native";
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default DateSelect = ({navigattion}) => {
    const [date,setDate] = React.useState('');
    const onDateChange = (date) => {
        setDate(date)
    }
    const startdate = date.toString();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Select Date</Text>
            <View style={styles.calendar}>
            <CalendarPicker
            onDateChange={d=>onDateChange(d)}
            />
            </View>
            <View style={styles.nextButton}>
                {/* <Text>{startdate}</Text> */}
                <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('Store')}>
                    {/* <Icon name="facebook" size={35} color="orange"/> */}
                    <Text style={styles.next}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  title:{
    fontSize: 25,
    fontWeight: "bold",
    color:"green",
    top:10,
    left:20
    // fontFamily:"fangsong"
  },
  calendar:{
      marginTop:20
  },
  iconBtn:{
      width:100,
      backgroundColor:"green",
      alignItems:"center"
  },
  nextButton:{
      marginTop:"70%",
      left:"60%"
  },
  next:{
      color:"white",
      width:50,
      fontSize:20,
  }
});