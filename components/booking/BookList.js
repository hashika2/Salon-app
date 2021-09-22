import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StatusBar,
	SafeAreaView,
	StyleSheet,
	TextInput,
	Image,
	ScrollView
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import {getBookedData} from '../../service/StoreData';

export default BookList = ({ navigation }) => {
	const [ location, onChangeLocation ] = React.useState(null);
	const lists = getBookedData();
	return (
		<View style={styles.container}>
			<View>
				<ScrollView>
					{lists.map((list, i) => {
						return (
							<TouchableOpacity key={i} onPress={() => navigation.navigate('Styling', list)}>
								<Card key={i}>
									{/* <Card.Divider/> */}
									<ListItem key={i} style={styles.cardContainer}>
										<View key={i} style={styles.user}>
											<View style={styles.columnText}>
												<Text style={styles.name1}>{list.name}</Text>
												<Text style={styles.name2}>{list.date}</Text>
												<Text style={{color:list.color}}>{list.validity}</Text>
												{/* <Text style={styles.name3}>Staring ${list.price}</Text> */}
											</View>
										</View>
									</ListItem>
								</Card>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>
		</View>
	);
};

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
		height: 100
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
	columnText: {},
	name1: {
		marginTop: 10,
		color: 'black',
        fontWeight:"bold"
	},
	name2: {
		marginTop: 10,
		fontSize: 12
	},
	name3: {
		marginTop: 5,
		color: 'red'
	},
	input: {
		height: 40,
		width: 240,
		marginTop: 60,
		borderWidth: 1,
		padding: 10
	},
	forgot_button: {
		marginLeft: 10
	},
	loginBtn: {
		width: '50%',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		backgroundColor: 'green',
		color: 'white'
	},
	loginText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
		// fontFamily:"fangsong"
	},
	homeTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'green'
		// fontFamily:"fangsong"
	},
	accountText: {
		paddingTop: 20
	},
	signUp: {
		color: 'green'
	}
});