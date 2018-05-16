import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import Meist from '../screens/Meist';
//import Pesulad from '../screens/Pesulad';


export const Tabs = createBottomTabNavigator({
    Home : {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarPosition: 'bottom',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-map-outline" type="ionicon" size={28} color={tintColor} />,

        },


    },
    Meist : {
        screen: Meist,
        navigationOptions: {
            tabBarLabel: 'Meist',
            tabBarPosition: 'bottom',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />,

        },

    },
    /*Pesulad : {
        screen: Pesulad,
        navigationOptions: {
            tabBarLabel: 'Pesulad',
            tabBarPosition: 'bottom',
            tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
    },*/
});
