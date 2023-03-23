import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ButtonGradient from '../ButtonGradient';
export default function Login({ navigation}) {
  return (
    
    <View style={styles.container}>
      <Image source={require('../assets/3g.png')}        
      style={{justifyContent:'space-between', alignItems: 'stretch'}}
      />
      <Text style={styles.titulo}>SISTEMA UNIFICADO DE INFORMACION</Text>
      <Text style={styles.subtitulo}>Iniciar sesion</Text>
      <TextInput 
      placeholder='Usuario'
      style={styles.textos}
      />      
      <TextInput 
      placeholder='Contraseña'
      style={styles.textos}
      secureTextEntry={true}
      />
      <TouchableOpacity  style={styles.containert} onPress={() => navigation.navigate("Tiendas")}>
            <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998']}
            style={styles.buttont}>
            <Text style={styles.textt}>ENTRAR</Text>
      </LinearGradient>
        </TouchableOpacity>

      
      
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer:{
    backgroundColor: '#f1f1f1',
    flex: 1,    
  },

  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerimage:{
    width: '80%',
    justifyContent:'flex-start',
    alignItems: 'center'
  },
  titulo: {
    
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
 
  subtitulo: {
    fontSize: 22,
    color :'gray',
  },
  textos:{
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 20,
    width: '85%',
    height: 60,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor:'#fff',
  },
  containert: {
    flex:0,
    alignItems: 'center',
    width: 200,
    marginTop: 40
},
textt: {
    fontSize: 14,
    color: '#fff',
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