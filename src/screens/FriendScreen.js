import React from 'react';
import { Input} from 'react-native-elements';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Entypo} from '@expo/vector-icons';

const FriendScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <StatusBar style="light"/>
                <Header
                    containerStyle={{
                    backgroundColor: '#404040',
                    justifyContent: 'space-around',}}
                    leftComponent={<Ionicons name="md-menu" size={25} color="white" onPress={()=>{
                        navigation.openDrawer();
                    }}/>}
                    centerComponent={{ text: 'Friend List', style: {fontSize:20, color: 'white' } }}
                    rightComponent={<Ionicons name="md-lock" size={25} color="white" 
                    onPress={()=>{
                        auth.setisLogged(false);
                        auth.setcurrentUser({});
                    }}/>}
                    />
      </View>
    );
};

export default FriendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  textStyle: {
    fontWeight:"bold",
    alignSelf: "center",
    justifyContent:"center",
    marginTop: 10
  }
});
