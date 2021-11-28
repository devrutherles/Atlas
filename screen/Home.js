import React, { useState } from 'react';
import {
  Animated,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar

} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { BorderlessButton } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import ListCripto from '../screen/component/ListCripto'
import CardCentral from '../screen/component/Card'
import ActionBar from '../screen/component/ActionBar'
import SvgAtlas from './component/Logosvg';



import {
  View,
  Text,
  Button,
  Colors,
  Typography,
  Card,
  KeyboardAwareFlatList,
  Avatar,
  Chip,
  TabBar
} from 'react-native-ui-lib';
const copy = require('../assets/icon/copy.png');
const send = require('../assets/icon/send.png')
const atlaspng = require('../assets/icon/atlaspng.png')
const grafico = require('../assets/icon/grafico.png')


const exchange = require('../assets/icon/exchange.png')
const card = require('../assets/icon/card.png')
const ButtonSpace = 20;

function Home() {
  state = {};
  toggle = false;
  animatedValue = new Animated.Value(0);

  animate = () => {
    this.toggle = !this.toggle;
    Animated.timing(this.animatedValue, {
      toValue: Number(this.toggle),
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  const copyToClipboard = () => {
    Clipboard.setString('ronin:e61bdb6ce91e91fefe19a7db315bd1887ddf50b9');
    alert('key copied successfully');
};



  function renderDivider() {

    return <View height={2} bg-grey60 />;
  }


  return (
    <ScrollView>
    <View >
    
        <View >
          <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: 10 }}>
            <Image style={{ width: 60, height: 60 }} source={atlaspng}></Image></View>


          <ActionBar></ActionBar>

          <CardCentral />
          <View marginT-10>
            <Text text60 marginB-20 marginL-10>TRANSFERS</Text>
          </View>
          <Image style={{ width: 200, height: 200, alignSelf: 'center' }} source={grafico}></Image>
          <Text style={{ color: 'gray', alignSelf: 'center', marginTop: 20 }}>YOU HAVE NOT MADE DEPOSITS YET</Text>
          <Button onPress={copyToClipboard} borderRadius={7} style={{ width: '80%', alignSelf: 'center', marginTop: 20, marginBottom:20 }} label={'DEPOSIT'}></Button>
        </View >



    </View>
    </ScrollView>

  );
}


export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  tinyLogo: {
    width: 170,
    height: 60
  },
  logo: {
    width: 66,
    height: 58
  },
  termos: {
    padding: 10
  },

  rlogo: {
    width: 50,
    height: 50,
    marginLeft: 40,
    marginTop: 15

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});
