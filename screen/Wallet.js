import React from 'react';
import { View, StyleSheet, Text ,ScrollView} from 'react-native';
import { Image } from "react-native-expo-image-cache";
import { Button } from 'react-native-ui-lib';

// import { Container } from './styles';

const preview = { uri: "https://mlgbzz6iaqdd.i.optimole.com/XzaT3g-ka1kldGy/w:auto/h:auto/q:74/https://djcleanto.com.br/wp-content/uploads/2014/01/black-background-hd-images.jpg" };
const uri = 'https://cdn.dribbble.com/users/2643208/screenshots/8212153/media/a451385c0dec6e6d3e849def639807e1.gif';

const phanton = require('../assets/icon/phanton.png')
const sol = require('../assets/icon/sol.png')
const solana = require('../assets/icon/solana.png')

const screen = ({navigation}) => {
  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image style={{
          height: '40%', width: '100%'
        }} {...{ preview, uri }} />

        <Text style={styles.text} text60 >CONNECT SUPPORTED WALLET</Text>
        
        <Button onPress={() => navigation.navigate('ConnectWallet')} iconStyle={{ width: 30, height: 30 }} 
        outline={true} outlineColor={'#fff'} iconSource={phanton} borderRadius={4} style={{ width: '90%', alignSelf: 'center', marginBottom: 10, }} label={'PHANTOM'}></Button>
        
        <Button onPress={() => navigation.navigate('ConnectWallet')} iconStyle={{ width: 30, height: 30 }} 
        outline={true} outlineColor={'#fff'} iconSource={sol} borderRadius={4} style={{ width: '90%', alignSelf: 'center', marginBottom: 10, }} label={'SOLFLARE'}></Button>
        
        <Button onPress={() => navigation.navigate('ConnectWallet')} iconStyle={{ width: 30, height: 30 }} 
        outline={true} outlineColor={'#fff'} iconSource={solana} borderRadius={4} style={{ width: '90%', alignSelf: 'center', marginBottom: 10, }} label={'SOLLET.IO'}></Button>
                <Text style={styles.text} text60 >OR</Text>
                <Button onPress={() => navigation.navigate('Welcome')}  
        outline={true} outlineColor={'#fff'}  borderRadius={4} style={{ width: '90%', alignSelf: 'center', marginBottom: 10, }} label={'CONNECTED WALLET ADDRESS'}></Button>
        </View>
    </View>

    






  );
}

export default screen;

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#2b2b2b'
  },

  header: {
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 10,
    left: 0,
  },
  circle: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,

  },

  button: {
    width: '90%',
  },

  text: {
    color: "#fff",
    alignSelf: 'center',
    marginBottom:30,
    marginTop:30


  }




});