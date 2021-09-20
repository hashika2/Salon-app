import React from "react";
import {View,Text,TouchableOpacity,StatusBar, SafeAreaView, StyleSheet, TextInput,Image,ImageBackground, ScrollView, AsyncStorage} from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { t } from 'react-native-tailwindcss';
import getStyleData from '../../service/StyleData';

export default Styling = ({navigation, route}) => {
    const {name,avatar} = route.params;
    const users = getStyleData();
    return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.coverImage}
        source={{
          uri: avatar,
        }}>
        <View style={styles.textView}>
          <Text style={styles.imageText}>{name}</Text>
          <Text style={styles.subimageText}>15 styling Staff</Text>
          <View style={styles.starIconView}>
            <Icon name="star"style={styles.IconView} size={25} color={25>10?"green":"red"}/>
            <Icon name="star"style={styles.IconView} size={25} color="green"/>
            <Icon name="star"style={styles.IconView} size={25} color="green"/>
            <Icon name="star" size={25} color="white"/>
            <Icon name="star" size={25} color="white"/>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.styleinList}>
        <ScrollView>
        {
            users.map((u, i) => {
                return (
                    <TouchableOpacity key={i} onPress={() => navigation.navigate('DateSelect')}>
                        <Card key={i} >
                            {/* <Card.Divider/> */}
                                <ListItem key={i} style={styles.cardContainer}>
                                    <View key={i} style={styles.user}>
                                        <Image
                                            style={styles.styleImage}
                                            resizeMode="cover"
                                            source={{ uri: u.avatar }}
                                        />
                                        <View style={styles.columnText}>
                                            <Text style={styles.name1}>{u.name}</Text>
                                            <Text style={styles.name2}>Starting ${u.price}</Text>
                                            <Text style={[t.bgRed400]}>{u.min} min</Text>
                                        </View>
                                    </View>
                                </ListItem>
                        </Card>
                    </TouchableOpacity>
                );
            })
        }
        </ScrollView>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  homeTitle:{
    fontSize: 25,
    fontWeight: "bold",
    color:"green",
    // fontFamily:"fangsong"
  },
  coverImage: {
    width: '100%',
    height: "70%",
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 70,
    left: 0,
    right: 160,
    bottom: 0,
  },
  imageText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  subimageText:{
    fontSize:15,
    color:"white",
    right:40
  },
  starIconView:{
    flexDirection: 'row',
    right:30
  },
  IconView:{
      color:"white"
  },
  cardContainer:{
      backgroundColor:"#ffff",
      width:300,
      height:100,
  },
  styleinList:{
    bottom:130
  },
  styleImage:{
    width: 80,
    height: 80,
    marginRight: 20
  },
  user:{
      flexDirection: 'row',
  },
});