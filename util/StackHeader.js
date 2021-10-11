import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Appbar} from 'react-native-paper';

export default StackHeader =({scene,navigation}) => {
    console.log(scene)
    // const {options} = scene.description;
    // const title = options.headerTitle;   
    const _goBack = () => console.log('Went back');
    return(
        <Appbar.Header style={styles.bottom}>
        <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title={'title'}/>
            <Appbar.Action icon="magnify" />
        </Appbar.Header>
    )
}   

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
})