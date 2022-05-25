import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../pages/preload/preload'
import Home from '../pages/home'
import SavePage from '../pages/savePage'
const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SavePage" component={SavePage} />
        </Stack.Navigator>
    )
}