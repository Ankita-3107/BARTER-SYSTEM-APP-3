import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen';
import RequestScreen from '../screens/RequestScreen';


export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: DonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon1.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    }
  },
  BookRequest: {
    screen: RequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon2.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }
  }
});
