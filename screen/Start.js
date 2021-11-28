import React, { useEffect } from 'react';
import { Animated, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from "react-native-expo-image-cache";
import { BlurView } from 'expo-blur';
import Logo from './component/Svgatlas'
import SvgAtlas from './component/Logosvg';

import {
  View, Text, Button, Colors,Typography
} from 'react-native-ui-lib';
const { width, height } = Dimensions.get("window");





function App({ navigation }) {

  const preview = { uri: "https://mlgbzz6iaqdd.i.optimole.com/XzaT3g-ka1kldGy/w:auto/h:auto/q:74/https://djcleanto.com.br/wp-content/uploads/2014/01/black-background-hd-images.jpg" };
  const uri = 'https://i.ibb.co/PxNhLHP/atlas.png';
  
  
  const discord = require('../assets/images/discord.png')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BlurView intensity={90}>

          <Image style={{
            height: '100%', width: '100%', resizeMode: 'cover', 
          }} {...{ preview, uri }} />
        </BlurView>

      </View>

      <View style={styles.circle} >
        <View flex-1>

          <View flex-1 style={{ alignSelf: 'center', alignItems: 'center', marginTop: 40 }}>
            <SvgAtlas />

          </View>
          <View marginB-15><Text style={{ textAlign: 'center' }} text60 color={'#fff'}>GAIN YOUR COMPETITIVE EDGE</Text></View>
          <View padding-5 marginB-30><Text text70 style={{ textAlign: 'center' }} color={'#fff'}>Formulate your strategy, make your claims, overcome your opponents.</Text></View>

          <View width={'70%'} style={{ alignSelf: 'center' }} marginB-150>
            <Button onPress={() => { navigation.navigate('Wallet') }} size={'large'} color={'#18171f'} borderRadius={7} backgroundColor={'#32feff'} label={'CONNECT WALLET'}></Button>
            <Button iconSource={discord} style={{ marginTop: 15 }} iconStyle={{ width: 20, height: 20 }}
              size={'large'} color={'#18171f'} borderRadius={7} backgroundColor={'#ffbe4d'} label={'DISCORD CHAT'}></Button>
          </View>
        </View>
      </View>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 0,
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
});