import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { AuthContext } from '../providers/AuthProvider';

const LogoutScreen = ({navigation}) => {
    return (
        <AuthContext.Consumer>
            {(auth)=>
            (
      <View style={styles.container}>
        <Text>Confirmation Screen</Text>
        <Text style= {styles.textStyle}>Hey you can visit again...</Text>
        <Button
            color = "green"
            title="Go home"
            onPress={() => navigation.navigate("Home")}
        />
        <Text style= {styles.textStyle}>Are you sure you want to log out?</Text>
        <Button
            color = "red"
            title="Log Out"
            onPress={()=>{
                auth.setisLogged(false);
                auth.setcurrentUser({});
            }}
        />
      </View>
        )}
      </AuthContext.Consumer>
    );
};

export default LogoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  textStyle: {
    fontWeight:"bold",
    fontStyle: "italic",
    padding: 20,
  }
});
