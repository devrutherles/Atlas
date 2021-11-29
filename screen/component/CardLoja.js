import React, { useState } from "react";
import {
    ScrollView,
    Image,
    StyleSheet,
    SafeAreaView,

} from "react-native";
import WebViewModalProvider, { WebViewModal } from "react-native-webview-modal";


import { useNavigation } from "@react-navigation/native";

import {
    View,
    Button,
    Card,
} from "react-native-ui-lib";


const nave1 = require("../../assets/images/1.jpeg");
const nave2 = require("../../assets/images/2.jpeg");
const nave3 = require("../../assets/images/3.jpeg");
const nave4 = require("../../assets/images/4.jpeg");
const nave5 = require("../../assets/images/5.jpeg");
const nave6 = require("../../assets/images/6.jpeg");


function CardCentral() {
    const [visible, setVisible] = useState(true);

    const navigation = useNavigation();
    return (



        
        <View >


        
        








        <View center  >

       



            <View >
                <ScrollView horizontal={true}>
                    <View
                        
                        row
                        flex
                        center
                        style={{
                            
                            alignSelf: "center",
                            padding: 5,
                        }}
                    >



                        <Card
                            width={'50%'}
                            height={300}
                            enableShadow={false}
                            padding-5
                            marginR-10
                            backgroundColor={"#18171f"}
                        >
                            <Card.Section
                                backgroundColor={"#18171f"}
                                padding-5
                                height={35}
                                content={[
                                    {
                                        text: "Fimbul ECOS Greenader",
                                        text80: true,
                                        white: true,
                                    },
                                ]}
                                contentStyle={{ alignItems: "center" }}
                            />

                            <Image
                                style={{
                                    width: "90%",
                                    height: "50%",
                                    borderRadius: 4,
                                    alignSelf: "center",
                                    marginBottom: 10,
                                }}
                                source={nave1}
                            ></Image>

                            <Card.Section
                                backgroundColor={"#18171f"}
                                contentStyle={{ alignItems: "center" }}
                                content={[{ text: "PARITY", text80: true, white: true }]}
                            />

                            <Button
                                borderRadius={4}
                                size={"xSmall"}
                                label={"EPIC"}
                                borderRadius={20}
                                outline={true}
                                labelStyle={{ fontSize: 12 }}
                                style={{
                                    width: 15,
                                    alignSelf: "center",
                                    marginTop: 10,
                                    marginBottom: 15,
                                }}
                            ></Button>

                            <Button
                                borderRadius={4}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    padding: 10,
                                    marginTop: 10,
                                }}
                                size={"small"}
                                label={"TRADE"}
                            ></Button>
                        </Card>






                        <Card
                            width={'50%'}
                            height={300}
                            enableShadow={false}
                            padding-5
                            marginR-10
                            backgroundColor={"#18171f"}
                        >
                            <Card.Section
                                backgroundColor={"#18171f"}
                                padding-5
                                height={35}
                                content={[
                                    {
                                        text: "Fimbul ECOS Greenader",
                                        text80: true,
                                        white: true,
                                    },
                                ]}
                                contentStyle={{ alignItems: "center" }}
                            />

                            <Image
                                style={{
                                    width: "90%",
                                    height: "50%",
                                    borderRadius: 4,
                                    alignSelf: "center",
                                    marginBottom: 10,
                                }}
                                source={nave2}
                            ></Image>

                            <Card.Section
                                backgroundColor={"#18171f"}
                                contentStyle={{ alignItems: "center" }}
                                content={[{ text: "PARITY", text80: true, white: true }]}
                            />

                            <Button
                                borderRadius={4}
                                size={"xSmall"}
                                label={"EPIC"}
                                borderRadius={20}
                                outline={true}
                                labelStyle={{ fontSize: 12 }}
                                style={{
                                    width: 15,
                                    alignSelf: "center",
                                    marginTop: 10,
                                    marginBottom: 15,
                                }}
                            ></Button>

                            <Button
                                borderRadius={4}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    padding: 10,
                                    marginTop: 10,
                                }}
                                size={"small"}
                                label={"TRADE"}
                            ></Button>
                        </Card>

                    </View>

           </ScrollView>







           <ScrollView horizontal={true}>
                    <View
                        
                        row
                        flex
                        center
                        style={{
                            
                            alignSelf: "center",
                            padding: 5,
                        }}
                    >



                        <Card
                            width={'50%'}
                            height={300}
                            enableShadow={false}
                            padding-5
                            marginR-10
                            backgroundColor={"#18171f"}
                        >
                            <Card.Section
                                backgroundColor={"#18171f"}
                                padding-5
                                height={35}
                                content={[
                                    {
                                        text: "Fimbul ECOS Greenader",
                                        text80: true,
                                        white: true,
                                    },
                                ]}
                                contentStyle={{ alignItems: "center" }}
                            />

                            <Image
                                style={{
                                    width: "90%",
                                    height: "50%",
                                    borderRadius: 4,
                                    alignSelf: "center",
                                    marginBottom: 10,
                                }}
                                source={nave3}
                            ></Image>

                            <Card.Section
                                backgroundColor={"#18171f"}
                                contentStyle={{ alignItems: "center" }}
                                content={[{ text: "PARITY", text80: true, white: true }]}
                            />

                            <Button
                                borderRadius={4}
                                size={"xSmall"}
                                label={"EPIC"}
                                borderRadius={20}
                                outline={true}
                                labelStyle={{ fontSize: 12 }}
                                style={{
                                    width: 15,
                                    alignSelf: "center",
                                    marginTop: 10,
                                    marginBottom: 15,
                                }}
                            ></Button>

                            <Button
                                borderRadius={4}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    padding: 10,
                                    marginTop: 10,
                                }}
                                size={"small"}
                                label={"TRADE"}
                            ></Button>
                        </Card>






                        <Card
                            width={'50%'}
                            height={300}
                            enableShadow={false}
                            padding-5
                            marginR-10
                            backgroundColor={"#18171f"}
                        >
                            <Card.Section
                                backgroundColor={"#18171f"}
                                padding-5
                                height={35}
                                content={[
                                    {
                                        text: "Fimbul ECOS Greenader",
                                        text80: true,
                                        white: true,
                                    },
                                ]}
                                contentStyle={{ alignItems: "center" }}
                            />

                            <Image
                                style={{
                                    width: "90%",
                                    height: "50%",
                                    borderRadius: 4,
                                    alignSelf: "center",
                                    marginBottom: 10,
                                }}
                                source={nave4}
                            ></Image>

                            <Card.Section
                                backgroundColor={"#18171f"}
                                contentStyle={{ alignItems: "center" }}
                                content={[{ text: "PARITY", text80: true, white: true }]}
                            />

                            <Button
                                borderRadius={4}
                                size={"xSmall"}
                                label={"EPIC"}
                                borderRadius={20}
                                outline={true}
                                labelStyle={{ fontSize: 12 }}
                                style={{
                                    width: 15,
                                    alignSelf: "center",
                                    marginTop: 10,
                                    marginBottom: 15,
                                }}
                            ></Button>

                            <Button
                                borderRadius={4}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    padding: 10,
                                    marginTop: 10,
                                }}
                                size={"small"}
                                label={"TRADE"}
                            ></Button>
                        </Card>

                    </View>

           </ScrollView>



           
           <ScrollView horizontal={true}>
                    <View 
                        
                        row
                        flex
                        center
                        style={{
                            
                            alignSelf: "center",
                            padding: 5,
                        }}
                    >



                        <Card
                            width={'50%'}
                            height={300}
                            enableShadow={false}
                            padding-5
                            marginR-10
                            backgroundColor={"#18171f"}
                        >
                            <Card.Section
                                backgroundColor={"#18171f"}
                                padding-5
                                height={35}
                                content={[
                                    {
                                        text: "Fimbul ECOS Greenader",
                                        text80: true,
                                        white: true,
                                    },
                                ]}
                                contentStyle={{ alignItems: "center" }}
                            />

                            <Image
                                style={{
                                    width: "90%",
                                    height: "50%",
                                    borderRadius: 4,
                                    alignSelf: "center",
                                    marginBottom: 10,
                                }}
                                source={nave5}
                            ></Image>

                            <Card.Section
                                backgroundColor={"#18171f"}
                                contentStyle={{ alignItems: "center" }}
                                content={[{ text: "PARITY", text80: true, white: true }]}
                            />

                            <Button
                                borderRadius={4}
                                size={"xSmall"}
                                label={"EPIC"}
                                borderRadius={20}
                                outline={true}
                                labelStyle={{ fontSize: 12 }}
                                style={{
                                    width: 15,
                                    alignSelf: "center",
                                    marginTop: 10,
                                    marginBottom: 15,
                                }}
                            ></Button>

                            <Button
                                borderRadius={4}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    padding: 10,
                                    marginTop: 10,
                                }}
                                size={"small"}
                                label={"TRADE"}
                            ></Button>
                        </Card>






                        <Card
                            width={'50%'}
                            height={300}
                            enableShadow={false}
                            padding-5
                            marginR-10
                            backgroundColor={"#18171f"}
                        >
                            <Card.Section
                                backgroundColor={"#18171f"}
                                padding-5
                                height={35}
                                content={[
                                    {
                                        text: "Fimbul ECOS Greenader",
                                        text80: true,
                                        white: true,
                                    },
                                ]}
                                contentStyle={{ alignItems: "center" }}
                            />

                            <Image
                                style={{
                                    width: "90%",
                                    height: "50%",
                                    borderRadius: 4,
                                    alignSelf: "center",
                                    marginBottom: 10,
                                }}
                                source={nave6}
                            ></Image>

                            <Card.Section
                                backgroundColor={"#18171f"}
                                contentStyle={{ alignItems: "center" }}
                                content={[{ text: "PARITY", text80: true, white: true }]}
                            />

                            <Button
                                borderRadius={4}
                                size={"xSmall"}
                                label={"EPIC"}
                                borderRadius={20}
                                outline={true}
                                labelStyle={{ fontSize: 12 }}
                                style={{
                                    width: 15,
                                    alignSelf: "center",
                                    marginTop: 10,
                                    marginBottom: 15,
                                }}
                            ></Button>

                            <Button
                                borderRadius={4}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    padding: 10,
                                    marginTop: 10,
                                }}
                                size={"small"}
                                label={"TRADE"}
                            ></Button>
                        </Card>

                    </View>

           </ScrollView>
          
          
          
            </View>











        </View>




        </View>


    );
}

export default CardCentral;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 170,
        height: 60,
    },
    logo: {
        width: 66,
        height: 58,
    },
    termos: {
        padding: 10,
    },

    rlogo: {
        width: 50,
        height: 50,
        marginLeft: 40,
        marginTop: 15,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ECF0F1",
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: "center",
        marginBottom: 8,
    },

    Card: {
        marginTop: 50,
    },
});
