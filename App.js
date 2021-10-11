import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import Navigator from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Store from './components/store/Store';
import StackHeader from './util/StackHeader';
import Styling from './components/store/Styling';
import DateSelect from './components/booking/DateSelect';
import PickTime from './components/booking/PickTime';
import BookList from './components/booking/BookList';
import Appoinment from './components/booking/Appoinment';
import ActionBarImage from './util/ActionBarImage';

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				headerMode="screen"
				// screenOptions={{
				//   header:({scene,navigation})=>(
				//     <StackHeader scene={scene} navigation={navigation}/>
				//   )
				// }}
			>
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
				<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
				<Stack.Screen
					name="Store"
					component={Store}
					style={styles.appbar}
					options={{
						title: 'Store',
						headerStyle: { backgroundColor: 'green' },
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						headerRight:()=> <ActionBarImage/>
					}}
				/>
				<Stack.Screen name="Styling" component={Styling} options={{ headerShown: false }} />
				<Stack.Screen
					name="DateSelect"
					component={DateSelect}
					options={{
						title: 'Confirm Booking',
						headerStyle: { backgroundColor: 'green' },
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						headerRight:()=> <ActionBarImage/>
					}}
				/>
				<Stack.Screen
					name="PickTime"
					component={PickTime}
					options={{
						title: 'Confirm Booking',
						headerStyle: { backgroundColor: 'green' },
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						headerRight:()=> <ActionBarImage/>
					}}
				/>
				<Stack.Screen
					name="BookList"
					component={BookList}
					options={{
						title: 'Your Appoinment',
						headerStyle: { backgroundColor: 'green' },
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						headerRight:()=> <ActionBarImage/>
					}}
				/>
				<Stack.Screen name="Appoinment" component={Appoinment} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	appbar: {
		backgroundColor: 'green'
	},
	homeTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'green'
		// fontFamily:"fangsong"
	},
	image: {
		width: 250,
		height: 400,
		marginBottom: 40,
		marginTop: 100,
		marginLeft: 20,
		marginRight: 20
	},
	loginBtn: {
		width: '80%',
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
	}
});
