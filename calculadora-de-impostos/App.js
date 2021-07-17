import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinheiro: 0,
      parcelas: 0,
      juros: 0,
      valor: 0,
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular = () => {
    const resultado =
      (this.state.dinheiro + (this.state.juros * 100) / this.state.dinheiro) /
      this.state.parcelas;

    this.setState({
      valor: resultado,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textoHeader}>Calculadora de Parcelas</Text>

          <Image
            source={require('./assets/porquinho.png')}
            style={styles.imageHeader}
          />
        </View>

        <View style={styles.body}>
          <TextInput
            style={styles.valor}
            keyboardType="numeric"
            label="VALOR"
            onChangeText={(valor) => {
              this.setState({ dinheiro: valor.replace(',', '.') });
            }}
          />

          <TextInput
            style={styles.valor}
            keyboardType="numeric"
            label="QUANTIDADE DE PARCELAS"
            onChangeText={(valor) => {
              this.setState({ parcelas: valor });
            }}
          />

          <TextInput
            style={styles.valor}
            keyboardType="numeric"
            label="JUROS AO MÊS (EX.: 1%)"
            onChangeText={(valor) => {
              this.setState({ juros: valor });
            }}
          />

          <TouchableOpacity style={styles.botao} onPress={this.calcular}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}> CALCULAR </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.painel}>
            <Text style={styles.textoPainel}>
              {' '}
              PARCELAS DE: {this.state.valor.toFixed(2)}{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0069EA',
  },

  header: {
    margin: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textoHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
    marginLeft: 8,
  },

  imageHeader: {
    width: 55,
    height: 90,
    marginLeft: -70,
  },

  body: {
    alignItems: 'center',
  },

  valor: {
    backgroundColor: '#FFF',
    height: 50,
    width: 300,
    margin: 20,
    marginTop: 2,
  },

  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#00FEA5',
    borderRadius: 25,
    backgroundColor: '#FFF',
  },

  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00FEA5',
  },

  painel: {
    alignSelf: 'center',
    borderRadius: 30,
    width: 250,
    height: 150,
    marginVertical: 25,
    backgroundColor: '#00FEA5',
    alignItems: 'center',
  },

  textoPainel: {
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default App;
