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
	ScrollView
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import {getStoreData} from '../../service/StoreData';

export default (Store = ({ navigation }) => {
	const [ location, onChangeLocation ] = React.useState(null);
	const [inputName, setInputName] = React.useState(null);
	const [stores, setStore] = React.useState([]);

	useEffect(()=>{
		setStore(getStoreData(location));
	},[location])
	return stores.length>0?(
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={onChangeLocation}
				value={location}
				placeholder="Search store,area ..."
				leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
			/>
			<View>
				<ScrollView>
					{stores.map((u, i) => {
						return (
							<TouchableOpacity key={i} onPress={() => navigation.navigate('Styling', u)}>
								<Card key={i}>
									{/* <Card.Divider/> */}
									<ListItem key={i} style={styles.cardContainer}>
										<View key={i} style={styles.user}>
											<Image style={styles.image} resizeMode="cover" source={{ uri: u.avatar }} />
											<View style={styles.columnText}>
												<Text style={styles.name1}>{u.name}</Text>
												<Text style={styles.name2}>{u.work}</Text>
												<Text style={styles.name3}>Staring ${u.price}</Text>
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
	):<Text style={styles.loading}>Loading ....</Text>;
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
		color: 'green'
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
		borderWidth: 0,
		padding: 10,
		backgroundColor:"grey"
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
	},
	loading:{
		textAlign:"center",
		justifyContent: 'center',
		fontSize:20,
		fontWeight:"bold"
	}
});
