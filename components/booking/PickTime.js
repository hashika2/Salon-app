import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TimeRange } from '../../util/content';

export default (PickTime = ({ navigation, route }) => {
	const [ dayTime, setTime ] = React.useState('');
	const [ color, setColor ] = React.useState('grey');
	const [ colors, setColors ] = React.useState({});
	const [ selectColor, setSelectColor ] = React.useState('green');
	const { color1, color2, color3, color4,color5,color6 } = colors;

	const onPressColorChange = () => {
		// console.log(number)
		setColor('orange');
	};
	useEffect(() => {}, [ color ]);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Pick Time</Text>
			{/* {timeRange.map((time,key) => {
				return ( */}
			<View style={styles.dayTime}>
				<Button
					onPress={() => setColors({ color1: 'green', color2: 'grey', color3: 'grey', color4: 'grey' })}
					title={TimeRange.dayTime.time1}
					color={color1 ? color1 : color}
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime1}
				/>
				<Button
					onPress={() => setColors({ color2: 'green', color1: 'grey', color3: 'grey', color4: 'grey' })}
					title={TimeRange.dayTime.time2}
					color={color2 ? color2 : color}
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime2}
				/>
			</View>
			<View style={styles.dayTime}>
				<Button
					onPress={() => setColors({ color3: 'green', color1: 'grey', color2: 'grey', color4: 'grey' })}
					title={TimeRange.dayTime.time3}
					color={color3 ? color3 : color}
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime1}
				/>
				<Button
					// onPress={onPressLearnMore}
					title={TimeRange.dayTime.time4}
					color="orange"
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime2}
				/>
			</View>
			<View style={styles.dayTime}>
				<Button
					onPress={() => setColors({ color5: 'green', color1: 'grey', color2: 'grey',color4: 'grey', color4: 'grey' })}
					title={TimeRange.dayTime.time5}
					color={color5 ? color5 : color}
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime1}
				/>
				<Button
					// onPress={onPressLearnMore}
					title={TimeRange.dayTime.time6}
					color="orange"
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime2}
				/>
			</View>
			<View style={{ flexDirection: 'row', paddingTop: 40, marginLeft: 70 }}>
				<Icon name="circle" size={25} color="orange" />
				<Text> Already Booked times</Text>
			</View>
			{/* );
			})} */}
			<View style={styles.nextButton}>
				{/* <Text>{startdate}</Text> */}
				<TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('BookList')}>
					{/* <Icon name="facebook" size={35} color="orange"/> */}
					<Text style={styles.next}>Done</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
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
		width: 150,
		backgroundColor: 'green',
		alignItems: 'center',
		borderRadius: 25,
		padding:5,
		height:40
	},
	nextButton: {
		flex: 3,
		marginTop: '50%',
		left: '30%',
		right: "10%"
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
		justifyContent: 'space-around',
		marginTop: 40
	},
	dayTime1: {
		marginTop: 10,
		marginLeft: 50,
		backgroundColor: 'green',
		width: 100,
		height: 30,
		textAlign: 'center'
	},
	dayTime2: {
		marginTop: 10,
		marginLeft: 100,
		backgroundColor: 'green',
		width: 100,
		height: 30,
		textAlign: 'center'
	}
});
