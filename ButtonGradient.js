import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient({navigation}) {
    return(
        <TouchableOpacity  style={styles.container} onPress={() => navigation.navigate("Tiendas")}>
            <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998']}
            style={styles.button}>
            <Text style={styles.text}>ENTRAR</Text>
      </LinearGradient>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:0,
        alignItems: 'center',
        width: 200,
        marginTop: 40
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius:25,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
