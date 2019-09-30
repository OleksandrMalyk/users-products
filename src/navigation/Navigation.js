import {createAppContainer} from 'react-navigation';

import Users from '../components/Users';
import Products from '../components/Products';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {UserDetails} from '../components/UserDetails';
import {ProductDetails} from '../components/ProductDetails';
import Register from '../components/Register';


const TabNavigation = createMaterialTopTabNavigator({
    Register: {screen: Register},
    Users: {screen: Users},
    Products: {screen: Products},
});

const MainNavigator = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigation,
            navigationOptions: {
                title: 'Home',
            },
        },
        UserDetails: {
            screen: UserDetails,
            navigationOptions: {
                title: 'User Details',
            },
        },
        ProductDetails: {
            screen: ProductDetails,
            navigationOptions: {
                title: 'Product Details',
            },
        },
    });

const Navigation = createAppContainer(MainNavigator);

export default Navigation;