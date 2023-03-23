import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
export default function Tiendas({ navigation}){
  const data = [
    { label: '1440 MB Nuevo Ideal', value: '1' },
    { label: '2432 SC Durango', value: '2' },
    { label: '2544 BA Primo de Verdad', value: '3' },
    { label: '2661 BA Durango Norte', value: '4' },
    { label: '3014 SC Durango El Eden', value: '5' },
    { label: '3071 SC Francisco Villa', value: '6' },
    { label: '3403 MB Paladio', value: '7' },
    { label: '3533 SC Punta Guadiana', value: '9' },
    { label: '3561 BA Durango', value: '10' },
    { label: '4572 MB El Salto', value: '11' },
    { label: '6236 SM Durango', value: '12' },
    { label: '6300 SM El Eden', value: '13' },
  ];
  
  return(
    <View style={styles.container}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="SELECCIONAR TIENDA"
            searchPlaceholder="BUSCAR..."
          
            renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
        />
        <TouchableOpacity  style={styles.containert} onPress={() => navigation.navigate("Servicios")}>
            <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998']}
            style={styles.buttont}>
            <Text style={styles.textt}>SELECCIONAR</Text>
      </LinearGradient>
        </TouchableOpacity>
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
  dropdown: {
    padding: 10,
    paddingStart: 20,
    width: '85%',
    height: 60,
    backgroundColor: 'white',
    marginTop: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    borderRadius: 12,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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