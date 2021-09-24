import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	ImageBackground,
	ScrollView,
} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import { t } from 'react-native-tailwindcss';
import getStyleData from '../../service/StyleData';

export default Appoinment = ({ navigation, route }) => {
	const { name, avatar,date,price } = route.params;
	const users = getStyleData();
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
			<View>
				<Text style={styles.title}>Styling</Text>
			</View>
			<View style={styles.styleinList}>
							<TouchableOpacity  onPress={() => navigation.navigate('DateSelect')}>
								<Card>
									{/* <Card.Divider/> */}
									<ListItem  style={styles.cardContainer}>
										<View  style={styles.user}>
											<Image
												style={styles.styleImage}
												resizeMode="cover"
												source={{ uri: avatar }}
											/>
											<View style={styles.columnText}>
												<Text style={styles.name1}>{name}</Text>
												<Text style={styles.name2}>Starting ${price}</Text>
												<Text style={[ t.bgRed400 ]}>{date} min</Text>
											</View>
										</View>
									</ListItem>
								</Card>
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
		top: -150,
		fontSize: 25,
		fontWeight: 'bold',
		color: 'green',
		textAlign: 'center'
		// fontFamily:"fangsong"
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
		backgroundColor: '#ffff',
		width: 300,
		height: 100
	},
	styleinList: {
		bottom: 140
	},
	styleImage: {
		width: 80,
		height: 80,
		marginRight: 20
	},
	user: {
		flexDirection: 'row'
	}
});
