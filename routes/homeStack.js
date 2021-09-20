import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../components/home/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const screens = {
    Home: {
        screen: Home
    },
    Login:{
        screen: Login
    },
    Register:{
        screen: Register
    }
};

const homeStack = createStackNavigator(screens);
export default createAppContainer(homeStack);