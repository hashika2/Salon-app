import React, { useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default PickTime = ({ navigattion }) => {
	const [ date, setDate ] = React.useState('');
	const startdate = date.toString();
	const dateArray = [ '2021-09-23', '2021-09-24', '2021-09-27' ];

	useEffect(() => {}, [ date ]);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Pick Time</Text>
			<View style={styles.calendar}>
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
};

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
		borderRadius:20
	}
});
