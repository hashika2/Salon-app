import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import { t } from 'react-native-tailwindcss';
import getStyleData from '../../service/StyleData';

export default (Appoinment = ({ navigation, route }) => {
	const { name, avatar, date, address, price } = route.params;
	// const users = getStyleData();
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.coverImage}
				source={{
					uri: avatar
				}}
			>
				<View style={styles.textView}>
					<Text style={styles.imageText}>{name}</Text>
					<Text style={styles.subimageText}>15 styling Staff</Text>
					<View style={styles.starIconView}>
						<Icon name="star" style={styles.IconView} size={25} color={25 > 10 ? 'green' : 'red'} />
						<Icon name="star" style={styles.IconView} size={25} color="green" />
						<Icon name="star" style={styles.IconView} size={25} color="green" />
						<Icon name="star" size={25} color="white" />
						<Icon name="star" size={25} color="white" />
					</View>
				</View>
			</ImageBackground>
			<View style={styles.styleinList}>
				<Card style={styles.cardContainer}>
					{/* <ListItem style={styles.cardContainer}> */}
					<View style={styles.user}>
						<View style={styles.columnText}>
							<Icon name="home" style={styles.IconView} size={25} color="green" />
							<Text style={styles.name1}>{address}</Text>
						</View>
						<View style={styles.columnText}>
							<Icon name="star" style={styles.IconView} size={25} color="green" />
							<Text style={styles.name2}>Starting ${price}</Text>
						</View>
						<View style={styles.columnText}>
							<Icon name="star" style={styles.IconView} size={25} color="green" />
							<Text>{date} min</Text>
						</View>
						<View>
							<Text style={{ fontSize: 15, fontWeight: '700' }}>Service</Text>
							<View style={styles.serviceText}>
								<Text>Hair Styling</Text>
								<Text>${price}</Text>
							</View>
							<View style={styles.serviceText}>
								<Text>Tatal Price</Text>
								<Text>${price}</Text>
							</View>
						</View>
					</View>
					{/* </ListItem> */}
				</Card>
				<View>
					<TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Store')}>
						<Text style={styles.loginText} color="#841584">
							HOME
						</Text>
					</TouchableOpacity>
				</View>
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
		top: -150,
		fontSize: 25,
		fontWeight: 'bold',
		color: 'green',
		textAlign: 'center'
		// fontFamily:"fangsong"
	},
	user: {
		backgroundColor: 'grey'
	},
	coverImage: {
		width: '100%',
		height: '70%'
	},
	textView: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: 70,
		left: 0,
		right: 160,
		bottom: 0
	},
	imageText: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold'
	},
	subimageText: {
		fontSize: 15,
		color: 'white',
		right: 40
	},
	starIconView: {
		flexDirection: 'row',
		right: 30
	},
	IconView: {
		color: 'white'
	},
	cardContainer: {
		width: 300,
		height: 300
	},
	styleinList: {
		bottom: 140,
		width: '100%'
	},
	styleImage: {
		width: 80,
		height: 80,
		marginRight: 20
	},
	columnText: {
		flexDirection: 'row',
		margin: 5
	},
	serviceText: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	loginBtn: {
		maxWidth: '40%',
		minWidth: '40%',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		marginLeft: 115,
		marginRight: 30,
		backgroundColor: 'green',
		color: 'white'
	},
	loginText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
		// fontFamily:"fangsong"
	}
});
