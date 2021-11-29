import React, { useState } from 'react';
import {
  Animated,
  ScrollView,
  Image,
  StyleSheet,
 
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import CardCentral from '../screen/component/Card'
import ActionBar from '../screen/component/ActionBar'



import {
  View,
  Text,
  Button,
 
} from 'react-native-ui-lib';
const atlaspng = require('../assets/icon/atlaspng.png')
const grafico = require('../assets/icon/grafico.png')


function Home({navigation}) {
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

  function copyToClipboardRonin  ()  {
    Clipboard.setString('2vHjvtts24GshVWCe7gzGxXGFDfQK9EtXnBLKkT7Qaim');
    alert('key copied successfully');
};

function copyToClipboardSolflare () {
  Clipboard.setString('HSHTabqLvweVDPEJzrAaLFmQwWV646Aj6sy4fCxJ5SNT');
  alert('key copied successfully');
};



const phanton = require('../assets/icon/phanton.png')
const sol = require('../assets/icon/sol.png')
const solana = require('../assets/icon/solana.png')


  return (
    <ScrollView>
    <View >
    
        <View >
          <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: 10 }}>
            <Image style={{ width: 60, height: 60 }} source={atlaspng}></Image></View>


          <ActionBar></ActionBar>

          <CardCentral />
          <View marginT-10>

<View >
         <Text style={{alignSelf:'center',marginBottom:20}} text90 >TRANSFER TO SUPPORTED WALLETS</Text>
        
        <Button onPress={ copyToClipboardRonin} iconStyle={{ width: 30, height: 30 }} 
        outline={true} outlineColor={'#222129'} iconSource={phanton} borderRadius={4} style={{ width: '90%', alignSelf: 'center', marginBottom: 10, }} label={'PHANTOM'}></Button>
        
        <Button onPress={ copyToClipboardSolflare} iconStyle={{ width: 30, height: 30 }} 
        outline={true} outlineColor={'#222129'} iconSource={sol} borderRadius={4} style={{ width: '90%', alignSelf: 'center', marginBottom: 10, }} label={'SOLFLARE'}></Button>
        
        <Button onPress={copyToClipboardSolflare} iconStyle={{ width: 30, height: 30 }} 
        outline={true} outlineColor={'#222129'} iconSource={solana} borderRadius={4} style={{ width: '90%', alignSelf: 'center', marginBottom: 10, }} label={'SOLLET.IO'}></Button>


</View>

            <Text text60  marginL-10 style={{marginTop:15}}>TRANSFERS</Text>
          </View>
          <Image style={{ width: 200, height: 200, alignSelf: 'center' , marginTop:20 }} source={grafico}></Image>
          <Text style={{ color: 'gray', alignSelf: 'center', marginTop: 20 }}>YOU HAVE NOT MADE DEPOSITS YET</Text>
          <Button onPress={copyToClipboardSolflare} borderRadius={7} style={{ width: '80%', alignSelf: 'center', marginTop: 20, marginBottom:20 }} label={'DEPOSIT'}></Button>
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
