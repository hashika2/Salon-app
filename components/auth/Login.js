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
	Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default Login = ({ navigation }) => {
	const [ text, onChangeText ] = React.useState(null);
	const [ number, onChangeNumber ] = React.useState(null);

	return (
		<View style={styles.container}>
			<Text style={styles.homeTitle}>Login</Text>
			<Image style={styles.image} source={require('../../assets/logo.jpg')} />
			<SafeAreaView>
				<View style={styles.emailContainer}>
					<Icon name="user" size={25} color="#000" />
					<TextInput
						style={styles.input}
						onChangeText={onChangeText}
						value={text}
						placeholder="email"
						leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
					/>
				</View>
				<View style={styles.emailContainer}>
					<Icon name="user" size={25} color="#000" />
					<TextInput
						style={styles.input}
						onChangeText={onChangeNumber}
						value={number}
						placeholder="Password"
						keyboardType="visible-password"
					/>
				</View>
				<TouchableOpacity>
					<Text style={styles.forgot_button}>Forgot Password?</Text>
				</TouchableOpacity>
			</SafeAreaView>
			<StatusBar style="auto" />
			<TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Store')}>
				<Text style={styles.loginText} color="#841584">
					Login
				</Text>
			</TouchableOpacity>
			<Text style={styles.accountText}>
				Don't have an account{' '}
				<TouchableOpacity onPress={() => navigation.navigate('Register')}>
					<Text style={styles.signUp}>Sign Up</Text>
				</TouchableOpacity>
			</Text>
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
	homeTitle: {
		padding: 50
	},
	image: {
		width: 200,
		height: 200
		// marginBottom: 40,
		// marginTop: 100,
		// marginLeft:20,
		// marginRight: 20
	},
	input: {
		height: 40,
		width: 240,
		margin: 12,
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
