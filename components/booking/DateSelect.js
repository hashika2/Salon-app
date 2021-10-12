import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default (DateSelect = ({ navigation }) => {
	const [ selectDate, setDate ] = React.useState('');
	const onDateChange = (date) => {
		setDate(date);
	};
	const desableDates = ['2021-09-23T06:56:36.267Z','2021-09-24T06:56:36.267Z','2021-09-03T06:56:36.267Z']
	useEffect(() => {}, [ selectDate ]);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Select Date</Text>
			<View style={styles.calendar}>
				<CalendarPicker
					 todayTextStyle={{fontWeight: 'bold'}}
					 todayBackgroundColor={'transparent'}
					//  minDate={today}
					 disabledDates= {desableDates}
					 disabledDatesTextStyle={{backgroundColor:"orange", color:"black",borderRadius:15, width:30,height:25,textAlign:"center"}}
					 onDateChange = {date => onDateChange(date)}
					//  selectedStartDate='2021-10-01T00:00:00.00Z'
					 minDate= '2021-10-01T00:00:00.00Z'
					//  maxDate= '2021-10-31T00:00:00.00Z'
				/>
				<View style={{flexDirection: 'row',paddingTop:40, marginLeft:30}}>
				<Icon name="circle" size={25} color="orange"/>
				<Text> Already Booked days</Text>
				</View>
			</View>
			<View style={styles.nextButton}>
				{/* <Text>{startdate}</Text> */}
				<TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('PickTime',selectDate)}>
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
		flex: 2,
		marginTop: 20
	},
	iconBtn: {
		width: 100,
		backgroundColor: 'green',
		alignItems: 'center',
		borderRadius: 25,
		padding:5,
		height:40
	},
	nextButton: {
		marginTop: '70%',
		left: '60%',
		flex: 3,
		textAlign:"center"
	},
	next: {
		color: 'white',
		width: 50,
		fontSize: 20,
		height: 40,
		borderRadius: 20
	}
});
