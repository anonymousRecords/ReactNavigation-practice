import React from 'react';
import { 
  Text, 
  useColorScheme,
  View,
} from 'react-native';
import AuthNavigator from './src/navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
}

export default App;