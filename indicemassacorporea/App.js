import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import fbsdevPNG from './assets/fm.png';
import indPNG from './assets/indice.png';

// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  // valores globais do app
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#bdc3c7',
  };

  calcularIMC = () => {
    const resultado = 
      this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5) {
      this.setState({
        legenda: 'Magreza',
        cor: '#e74c3c'
      });
    } else if (resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Normal',
        cor: '#2ecc71'
      });
    } else if (resultado >= 25 && resultado < 30) {
     this.setState({
        legenda: 'Sobrepeso',
        cor: '#f1c40f'
      }); 
    } else if (resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade',
        cor: '#e67e22'
      }); 
    } else if (resultado >= 40) {
      this.setState({
        legenda: 'Obesidade Grave',
        cor: '#e74c3c'
      }); 
    }
  }

  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>CALCULO DE IMC</Text>
        
        <View>

        <View> 
          <View style={styles.containerIND}>
              <Image source={indPNG} style={{ width: 320, height:90 }} />
          </View>
        
        </View>
          <TextInput 
            style={styles.peso}
            keyboardType = 'numeric'
            label="Peso"
            onChangeText={valor => {
              this.setState({peso: valor.replace(',', '.')});
            }}
          />
          <TextInput
            style={styles.altura}
            keyboardType = 'numeric'
            label="Altura"
            onChangeText={(valor) => {
              this.setState({altura: valor.replace(',', '.')});
            }}
          />
          <Button mode="contained" onPress={this.calcularIMC}>
            Calcular
          </Button>

          <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
              <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>

        </View>
        </View>
        <View style={styles.container}>
        <Image source={fbsdevPNG} style={{ width: 360, height:78 }} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  app: {
    padding: 10,
    backgroundColor: '#7DB1FF'
  },
  painel: {
    alignSelf: 'center',
    borderRadius: 23,
    width: 300,
    marginVertical: 25,
    padding: 8,
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  peso: {
    marginVertical: 10,
  },
  altura: {
    marginVertical: 10,
  },

container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 155,
    marginHorizontal: 10,
  },

  containerIND: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
    
  },
});
