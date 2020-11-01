import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View } from 'react-native';
import { Card,Input, Button } from 'react-native-elements';
import { AntDesign,MaterialIcons  } from '@expo/vector-icons';
import {AuthContext} from './../providers/AuthProvider';
import {getDataJSON} from './../functions/AsyncStorageFunctions';
import * as Animatable from 'react-native-animatable';

const LoginScreen =(props)=> {
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    return(
        <AuthContext.Consumer>
            {(auth)=>
            (
            <View style={styles.container} >
                <StatusBar
                hidden={true}
                backgroundColor="blue"
                barStyle="light-content"/>
                <ImageBackground
                style={styles.image}
                source={require('./../../assets/coast-rocks-blue-green-sea-nature-small.jpg')}>
                <Text style={styles.text}>Welcome to UP !</Text>
                <Animatable.View animation="fadeInUpBig" delay={2}>
                    <Card containerStyle={styles.card} >
                    <Card.Title style={{fontSize:20, color:"white"}}>Log In</Card.Title>
                    <Card.Divider />
                    <Input
                    leftIcon={<MaterialIcons name="mail-outline" size={24} color="white"/>}
                    placeholder="E-mail Address"
                    color="white"
                    onChangeText={function (input) {
                    setEmail(input);
                }}/>
                    <Input 
                    leftIcon={<MaterialIcons name="vpn-key" size={24} color="white"/>}
                    placeholder="Password" 
                    color="white"
                    secureTextEntry={true} 
                    onChangeText={function (input) {
                    setPassword(input);
                }}/>
                    <Button
                    icon={<AntDesign name="login" size={24} color="#FFFFFF" />}
                    titleStyle={{paddingLeft:10}}
                    title="Log In!"
                    type="solid"
                    onPress={async ()=>{
                        if(email.length!=0 && password.length!=0)
                        {
                            try {
                                let user= await getDataJSON(email);
                            if(user.password==password)
                            {
                                auth.setisLogged(true);
                                auth.setcurrentUser(user);
                            }
                            else
                                alert("Login credentials Invalid"); 
                            } catch (error) {
                                alert("This user is not available. Sign in ");
                            }
                        }else
                            alert("Please Enter Login Credentials"); 
                    }}
                    />
                    <Button
                    type="clear"
                    title="Join as a new member"
                    onPress={function () {
                        props.navigation.push("Sign Up");
                    }}
                    />
                </Card>
                </Animatable.View>
                
                </ImageBackground>
            </View>)
            }
        </AuthContext.Consumer>
        );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        
    },
    image:{
        flex:1,
        justifyContent: "center",
    },
    text:{
        textAlignVertical: "center",
        textAlign: "center",
        color:"#FFFFFF",
        fontSize:30,
        paddingBottom:10,
    },
    card:{
        backgroundColor: "#1e1f26",
        fontFamily:"san-serif",
        borderRadius:10
    }
    
});

export default LoginScreen;