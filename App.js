import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Start from './screen/Start'
import Welcome from './screen/Welcome'
import Wallet from './screen/Wallet'
import ImportWallt from './screen/ImportWallet'

import ConnectWallet from './screen/ConnectWallet'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './screen/Home'
import TopBar from './screen/component/Header'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

function App() {
  const [importa, setImporta] = useState('')
  const [create, setCreate] = useState('')

  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem('@CREATE')

      if (userAge !== null) {
        setCreate(userAge)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }


  const readImport = async () => {
    try {
      const userAge = await AsyncStorage.getItem('@IMPORT')

      if (userAge !== null) {
        setImporta(importa)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }




  useEffect(() => {
    readData();
    readImport();




  }, [])

  if (importa.length > 0 || create.length > 0) {

    return (

      <NavigationContainer theme={MyTheme} >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: TopBar }}
          />


          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
          <Stack.Screen name="ImportWallet" component={ImportWallt} />



        </Stack.Navigator>
      </NavigationContainer>



    );
  } else {

    return (

      <NavigationContainer theme={MyTheme} >
        <Stack.Navigator>
        

          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
          <Stack.Screen name="ImportWallet" component={ImportWallt} />

        <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: TopBar }}
          /></Stack.Navigator>
      </NavigationContainer>



    );


  }


}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
