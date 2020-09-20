import * as React from 'react';
import SignUpLoginScreen from './screens/SignUpLoginScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    )
  }
}

const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen: {screen: SignUpLoginScreen},
  BottomTab: {screen: AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator);