import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { getBookedData } from '../../service/StoreData';

export default (BookList = ({ navigation }) => {
	const [ lists, setList ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const res = getBookedData();

	// useEffect(
	// 	() => {
	// 		if (res) {
	// 			setList(res);
	// 			setLoading(true);
	// 		}
	// 		console.log("***", loading)
	// 	},
	// 	[ lists ]
	// );

	return (
		<View style={styles.container}>
			{/* {loading ? (
				<Text>Loading ....</Text>
			) : ( */}
				<View>
					<ScrollView>
						{res.map((list, i) => {
							return (
								<TouchableOpacity key={i}>
									<Card key={i}>
										{/* <Card.Divider/> */}
										<ListItem key={i} style={styles.cardContainer}>
											<View key={i} style={styles.user}>
												<View style={styles.columnText}>
													<Text style={styles.name1}>{list.name}</Text>
													<Text style={styles.name2}>{list.date}</Text>
													<Text style={{ color: list.color }}>{list.validity}</Text>
												</View>
											</View>
										</ListItem>
										<Text style={styles.name3}>${list.price}</Text>
									</Card>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
				</View>
			{/* )} */}
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	emailContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	cardContainer: {
		width: 320,
		height: 70
	},
	user: {
		flexDirection: 'row'
	},
	homeTitle: {
		padding: 50
	},
	image: {
		width: 80,
		height: 80,
		// paddingBottom: 20,
		// marginTop: 100,
		// marginLeft:20,
		marginRight: 20
	},
	columnText: {
		bottom: 15
	},
	name1: {
		marginTop: 10,
		color: 'black',
		fontWeight: 'bold'
	},
	name2: {
		marginTop: 10,
		fontSize: 12
	},
	name3: {
		marginTop: 5,
		color: 'white',
		textAlign: 'center',
		left: 300,
		bottom: 90,
		width: 35,
		backgroundColor: 'green'
	},
	forgot_button: {
		marginLeft: 10
	},
	homeTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'green'
		// fontFamily:"fangsong"
	}
});
