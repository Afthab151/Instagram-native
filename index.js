/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './App';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';


const App = () => {
    useEffect(() => {
      SplashScreen.hide();
    }, []);
  
    return <AppNavigator />;
  };

AppRegistry.registerComponent(appName, () => App);
