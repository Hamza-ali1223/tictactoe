import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import uservspc from './Screens/uservspc'
import uservsuser from './Screens/uservsuser'

const App = () => {

  const Stack= createNativeStackNavigator();

  return (
        <NavigationContainer>
         <Stack.Navigator
          screenOptions={{headerShown:false}}>
           <Stack.Screen name='Home' component={Home} 
           ></Stack.Screen>
           <Stack.Screen name='VsPC' component={uservspc}></Stack.Screen> 
           <Stack.Screen name='VsUser' component={uservsuser}></Stack.Screen> 
          </Stack.Navigator> 
        </NavigationContainer>
  )
}

export default App