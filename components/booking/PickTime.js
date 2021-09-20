import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default (PickTime = ({ navigattion }) => {
	const [ date, setDate ] = React.useState('');
	const timeRange = [
		{
			time1: '10.00 am',
			time2: '1.00 pm'
		},
		{
			time1: '10.00 am',
			time2: '1.00 pm'
		},
		{
			time1: '10.00 am',
			time2: '1.00 pm'
		}
	];
	useEffect(() => {}, [ date ]);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Pick Time</Text>
			{timeRange.map((time) => {
				return (
					<View style={styles.dayTime}>
						<Text style={styles.dayTime1}>{time.time1}</Text>
						<Text style={styles.dayTime2}>{time.time2}</Text>
					</View>
				);
			})}
			<View style={styles.nextButton}>
				{/* <Text>{startdate}</Text> */}
				<TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('Store')}>
					{/* <Icon name="facebook" size={35} color="orange"/> */}
					<Text style={styles.next}>Next</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'green',
		top: 10,
		left: 20
		// fontFamily:"fangsong"
	},
	calendar: {
		marginTop: 20
	},
	iconBtn: {
		width: 100,
		backgroundColor: 'green',
		alignItems: 'center'
	},
	nextButton: {
		marginTop: '70%',
		left: '60%'
	},
	next: {
		color: 'white',
		width: 50,
		fontSize: 20,
		height: 40,
		borderRadius: 20
	},
	dayTime: {
		flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop:40
	},
    dayTime1:{
        marginTop:10,
        marginLeft:50,
        backgroundColor:"green",
        width:100,
        height:30,
        textAlign:"center"
    },
    dayTime2:{
        marginTop:10,
        marginLeft:100,
        backgroundColor:"green",
        width:100,
        height:30,
        textAlign:"center"
    }
});
