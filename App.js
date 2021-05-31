import React, { useState } from "react"
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity }
 from "react-native"


export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");


  function calcularImc() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    '  '

    if (imc < 18.5) {
      alert("Você está magro! \nIMC: " + imc.toFixed(2));
    }
    else if (imc >= 18.5 && imc < 24.9) {
      alert("Você está normal! \nIMC: " + imc.toFixed(2));
    }

    else if (imc >= 25 && imc < 29.9) {
      alert("Você está com sobre peso! \nIMC: " +imc.toFixed(2));
    }
    else if (imc >= 30 && imc < 39.9) {
      alert("Você está com obesidade! \nIMC: " +imc.toFixed(2));
    }
    else if (imc > 40) {
      alert("Você está com obesidade grave!\nIMC: "+ imc.toFixed(2));
    }

  }
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(255,156,204,0.8)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      >

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.meu-imc.com/dist/img/app/logo.png',
        }}
      />
        <TextInput
          style={styles.imput}
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
          placeholder="Peso (Kg)"
          placeholderTextColor="#ffff"
          keyboardType="numeric"

        />

        <TextInput
          style={styles.imput}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          placeholder="Altura (cm)"
          placeholderTextColor="#ffff"
          keyboardType="numeric"

        />

        <TouchableOpacity style={styles.button}
          onPress={calcularImc}>

          <Text style={styles.buttonText}>CALCULAR</Text>


        </TouchableOpacity>



      </LinearGradient>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: '#33ccff',

  },
  
  imput: {
    backgroundColor: 'transparent',
    borderColor: '#121212',
    color: '#FFFF',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 16,
    marginRight:16,
    marginBottom:10,
    padding: 10,

  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    margin: 15,
    fontSize: 20

  },
  buttonText: {
    fontSize: 20,
    color: '#ffff',
  },
  tinyLogo: {
  
    justifyContent: "center",
    alignItems:"center",
    marginTop:100,
    marginBottom:50,
    marginLeft:50,
    width: 320,
    height: 90,

  },
  

});