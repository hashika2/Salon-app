import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Setting from './components/setting/Setting';
import Profile from './components/user/Profile';

const Drawer = createDrawerNavigator();
export default (Drawer = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Store">
				<Drawer.Screen name="Setting" component={Setting} />
				<Drawer.Screen name="Profile" component={Profile} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
});
