import React, { useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StatusBar,
	SafeAreaView,
	StyleSheet,
	TextInput,
	Image,
	ImageBackground,
	ScrollView,
	AsyncStorage
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';

export default (DateSelect = ({ navigattion }) => {
	const [ date, setDate ] = React.useState('');
	const onDateChange = (date) => {
		console.log(date.dateString, '******');
		setDate(date.dateString);
	};
	const startdate = date.toString();
	const dateArray = [ '2021-09-23', '2021-09-24', '2021-09-27' ];

	useEffect(() => {}, [ date ]);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Select Date</Text>
			<View style={styles.calendar}>
				<CalendarPicker  />
				<Calendar
					markingType={'custom'}
					markedDates={{
						'2021-09-25': {
							customStyles: {
								container: {
									backgroundColor: 'orange'
								},
								text: {
									color: 'black',
									fontWeight: 'bold'
								}
							}
						},
						date: {
							customStyles: {
								container: {
									backgroundColor: 'white',
									elevation: 2
								},
								text: {
									color: 'blue'
								}
							}
						}
					}}
					onDayPress={(day) => onDateChange(day)}
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
		fontSize: 20
	}
});
