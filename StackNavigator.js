import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'
import useAuth from './hooks/useAuth'
const Stack=createStackNavigator()
const StackNavigator = () => {
    const {user} =useAuth()
  return (
   <Stack.Navigator>
   {user?(
    <>
   <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} />
    </>
    
   ):(
     <Stack.Screen name="Login" component={LoginScreen} />
   )}
   
   
   </Stack.Navigator>
  )
}

export default StackNavigator