import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function Servicios({navigation}){
    return(
        <View style={styles.container}>
                <View style={styles.container}>
                <TouchableOpacity  style={styles.containert} onPress={() => navigation.navigate("Tiendas")}>
                <Image source={require('../assets/02.png')}
                style={{width: 150, height:150}}
                />
                <Text style={styles.textt}>AIRE</Text>
        </TouchableOpacity>
                </View>
                <Text style={styles.texttt}>ELIGE UNA OPCION</Text>
                <View style={styles.container}>
        <TouchableOpacity  style={styles.containert} onPress={() => navigation.navigate("Tiendas")}>
                <Image source={require('../assets/refri.jpg')}
                style={{width: 150, height:150}}
                />
                <Text style={styles.textt}>REFRIGERACION</Text>
        </TouchableOpacity>
                </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f1f1f1',
      flex: 1,  
      alignItems: 'center',
      justifyContent: 'center',
    },
    containert: {
        flex:0,
        alignItems: 'center',
        width: 200,
        marginTop: -10
    },
    textt: {
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold'
    },
    texttt: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'
    },
    buttont: {
        width: '80%',
        height: 50,
        borderRadius:25,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });