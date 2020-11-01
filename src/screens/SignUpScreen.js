import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View } from 'react-native';
import { Card,Input, Button } from 'react-native-elements';
import { Ionicons,MaterialIcons,Feather  } from '@expo/vector-icons';
import {storeDataJSON} from './../functions/AsyncStorageFunctions';
import * as Animatable from 'react-native-animatable';

const SignupScreen =(props)=> {
    let [name,setName]=useState("");
    let [studentID,setStudentID]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [isInvalidEmail,setInvalidEmail]=useState(true);

    const validateEmail=(email)=>{
        var re = /\S+@\S+\.\S+/;
        if(re.test(email)==true)
            setInvalidEmail(false)
        else 
            setInvalidEmail(true)
    }

    return(
        <View style={styles.container}>
            <StatusBar
            hidden={true}
            backgroundColor="blue"
            barStyle="light-content"/>
            <ImageBackground
            style={styles.image}
            source={require('./../../assets/coast-rocks-blue-green-sea-nature-small.jpg')}>
            <Text style={styles.text}>UP !</Text>
            <Animatable.View animation="fadeInUpBig" delay={2}>
                         <Card containerStyle={styles.card}>
                <Card.Title style={{fontSize:20, color:"white"}}>Sign Up</Card.Title>
                <Card.Divider />
                <Input 
                leftIcon={<Ionicons name="ios-person" size={24} color="white" />}
                placeholder="Username" 
                color="white"
                onChangeText={function (input) {
                    setName(input);
                }}
                />
                <Input
                keyboardType = 'numeric' 
                color="white"
                leftIcon={<Ionicons name="md-school" size={24} color="white" />}
                placeholder="StudentID" onChangeText={function (input) {
                    setStudentID(input);
                }}/>
                <Input
                leftIcon={<MaterialIcons name="mail-outline" size={24} color="white"/>}
                placeholder="E-mail Address"
                color="white"
                errorStyle={{ color: 'red' }}
                onChangeText={function (input) {
                    setEmail(input);
                    validateEmail(input)
                }}
                errorMessage={isInvalidEmail?"Invalid Email Address":""}
                />
                <Input 
                containerStyle={{paddingBottom:20}}
                leftIcon={<MaterialIcons name="vpn-key" size={24} color="white"/>}
                placeholder="Password" 
                color="white"
                secureTextEntry={true} onChangeText={function (input) {
                    setPassword(input);
                }}
                errorMessage={password.length<4?"Password have to be of 4 characters":""}
                />
                <Button
                icon={<Feather name="user" size={25} color="white" />}
                titleStyle={{paddingLeft:10}}
                title="Sign up!"
                type="solid"
                onPress={
                    function () {
                        if(name.length>0 && isInvalidEmail==false && studentID.length>0 && password.length>=4)
                        {
                            let user={
                            name:name,
                            email:email,
                            id:studentID,
                            password:password,
                            }
                            storeDataJSON(email,user);
                            alert("Account Created")
                            props.navigation.push("Log In");
                        }else alert("Invalid Input")
                        
                    }
                }
                />
                <Button
                type="clear"
                title="Already have an account"
                onPress={function () {
                    props.navigation.push("Log In");
                }}
                />
            </Card>
            </Animatable.View>
            </ImageBackground>  
        </View>
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

export default SignupScreen;